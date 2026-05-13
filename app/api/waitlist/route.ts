import { NextResponse } from "next/server";
import { list, put } from "@vercel/blob";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ok(body: Record<string, unknown>, status = 200) {
  return NextResponse.json({ ok: true, ...body }, { status });
}
function bad(status: number, message: string, code = "bad_request") {
  return NextResponse.json({ ok: false, error: code, message }, { status });
}

function sanitizeForKey(email: string): string {
  return email.replace(/[^a-zA-Z0-9._-]/g, "_").toLowerCase();
}

export async function POST(req: Request) {
  let body: { email?: string };
  try {
    body = (await req.json()) as { email?: string };
  } catch {
    return bad(400, "Send a JSON body with { email }.");
  }

  const raw = (body.email ?? "").trim();
  if (!raw) return bad(400, "Email is required.", "missing_email");
  if (!EMAIL_RE.test(raw)) return bad(400, "That email doesn't look right.", "invalid_email");
  if (raw.length > 254) return bad(400, "Email is too long.", "invalid_email");

  const email = raw.toLowerCase();
  const prefix = `waitlist/${sanitizeForKey(email)}__`;

  // If Blob isn't configured (local dev without a Blob store), accept the signup
  // but skip storage so the form still works for screenshots / demos.
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return ok({ stored: false, duplicate: false, note: "Blob not configured; signup not persisted." });
  }

  try {
    const existing = await list({ prefix, limit: 1 });
    if (existing.blobs.length > 0) {
      return ok({ stored: true, duplicate: true });
    }
    const ts = new Date().toISOString();
    await put(
      `${prefix}${ts.replace(/[:.]/g, "-")}.json`,
      JSON.stringify({ email, ts, ua: req.headers.get("user-agent") ?? null }),
      {
        access: "public",
        contentType: "application/json",
        addRandomSuffix: false,
      },
    );
    return ok({ stored: true, duplicate: false });
  } catch (err) {
    console.error("[waitlist] storage error:", err instanceof Error ? err.message : "unknown");
    return bad(502, "Couldn't save your signup. Try again in a minute.", "storage_failed");
  }
}
