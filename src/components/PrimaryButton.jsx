export default function PrimaryButton({ href, children, variant = "solid", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors";
  const styles =
    variant === "solid"
      ? `${base} bg-accent text-white hover:bg-accent2`
      : `${base} border border-border text-ink hover:border-accent`;

  return (
    <a href={href} className={styles} {...props}>
      {children}
    </a>
  );
}
