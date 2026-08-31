import { useState } from "react";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20 border-t border-border">
      <h2 className="text-sm font-semibold tracking-[0.15em] text-accent">CONTACT</h2>
      <p className="mt-6 max-w-lg text-muted">
        Have a project in mind or just wanna discuss a problem ? Send a message, or reach me directly at{" "}
        <a href={`mailto:${profile.email}`} className="text-accent2">
          {profile.email}
        </a>
        .
      </p>

      <form onSubmit={handleSubmit} className="mt-8 max-w-lg flex flex-col gap-4">
        <input
          name="name"
          required
          placeholder="Your name"
          className="rounded-lg bg-panel border border-border px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-accent outline-none"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Your email"
          className="rounded-lg bg-panel border border-border px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-accent outline-none"
        />
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Your message"
          className="rounded-lg bg-panel border border-border px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-accent outline-none"
        />
        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide bg-accent text-white hover:bg-accent2 transition-colors disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "sent" && <span className="text-sm text-accent2">Message sent — thanks!</span>}
          {status === "error" && (
            <span className="text-sm text-muted">
              Couldn&apos;t send — email {profile.email} directly for now.
            </span>
          )}
        </div>
      </form>
    </section>
  );
}
