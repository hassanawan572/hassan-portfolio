import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center text-xs text-muted">
      © {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind CSS.
    </footer>
  );
}
