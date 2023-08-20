import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "@/helpers/functions/mailService";

const email = "michael@fitscale.net";
const subject = "Custom Service Request";

async function readStream(stream: ReadableStream<Uint8Array>) {
  let result = "";
  const reader = stream.getReader();

  while (true) {
    const { done, value } = await reader.read();

    if (done) {
      break;
    }

    result += new TextDecoder().decode(value);
  }

  return result;
}

export async function POST(req: NextRequest) {
  try {
    if (!req.body) {
      throw new Error("No body in request");
    }

    const body = await readStream(req.body);
    const { message } = JSON.parse(body);

    await sendMail(subject, email, message);
    return NextResponse.json("Success");
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "An unexpected error occurred";
    return NextResponse.json({ error: { message } });
  }
}
