export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }

  // TODO: wire this up to a real email service (e.g. Nodemailer + Gmail app
  // password, Resend, SendGrid, etc). For now this just logs the submission
  // server-side so the form works end-to-end during local development.
  console.log("New contact form submission:", { name, email, message });

  return res.status(200).json({ ok: true });
}
