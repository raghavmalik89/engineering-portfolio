import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  className = "",
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  const baseClasses =
    "inline-flex min-h-12 items-center justify-center rounded-lg px-5 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4";
  const variantClasses =
    variant === "primary"
      ? "border border-accent-copper bg-accent-copper text-background hover:bg-accent-beige focus-visible:bg-accent-beige"
      : "border border-border-subtle text-foreground hover:border-accent-copper hover:text-accent-beige focus-visible:border-accent-copper";

  return (
    <Link className={`${baseClasses} ${variantClasses} ${className}`} {...props} />
  );
}
