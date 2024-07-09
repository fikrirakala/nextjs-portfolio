"use server";

import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  senderEmail: z.string().max(500).email(),
  message: z.string().max(5000),
});

export async function sendEmail(prevState: any, formData: FormData) {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  const validation = schema.safeParse({
    senderEmail: senderEmail,
    message: message,
  });

  if (!validation.success) {
    return { errors: validation.error.flatten().fieldErrors };
  }

  resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: "fikrirakala@gmail.com",
    subject: "Hello World",
    html: `<p>${message}</p>`,
  });
}
