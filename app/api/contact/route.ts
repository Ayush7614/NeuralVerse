import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

  if (!formId) {
    return NextResponse.json(
      { error: "Contact form is not configured yet." },
      { status: 503 },
    );
  }

  let body: { name?: string; email?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  const res = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      message,
      _replyto: email,
      _subject: `NeuralVerse contact from ${name}`,
    }),
  });

  if (!res.ok) {
    const data = (await res.json().catch(() => null)) as { error?: string } | null;
    return NextResponse.json(
      { error: data?.error ?? "Failed to send message. Please try again." },
      { status: res.status },
    );
  }

  return NextResponse.json({ ok: true });
}
