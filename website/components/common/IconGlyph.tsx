type IconGlyphProps = {
  name: "antenna" | "check" | "chip" | "diagram" | "field" | "signal";
};

const iconClasses = "h-8 w-8 stroke-accent-copper";

export function IconGlyph({ name }: IconGlyphProps) {
  if (name === "antenna") {
    return (
      <svg
        aria-hidden="true"
        className={iconClasses}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        viewBox="0 0 32 32"
      >
        <path d="M16 18v8" />
        <path d="M11 26h10" />
        <path d="M16 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        <path d="M10.5 17.5a8 8 0 0 1 0-11" />
        <path d="M21.5 6.5a8 8 0 0 1 0 11" />
        <path d="M7 21a13 13 0 0 1 0-18" />
        <path d="M25 3a13 13 0 0 1 0 18" />
      </svg>
    );
  }

  if (name === "chip") {
    return (
      <svg
        aria-hidden="true"
        className={iconClasses}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        viewBox="0 0 32 32"
      >
        <rect height="16" rx="2" width="16" x="8" y="8" />
        <rect height="8" width="8" x="12" y="12" />
        <path d="M4 12h4M4 20h4M24 12h4M24 20h4M12 4v4M20 4v4M12 24v4M20 24v4" />
      </svg>
    );
  }

  if (name === "diagram") {
    return (
      <svg
        aria-hidden="true"
        className={iconClasses}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        viewBox="0 0 32 32"
      >
        <rect height="7" rx="1.5" width="9" x="3" y="5" />
        <rect height="7" rx="1.5" width="9" x="20" y="5" />
        <rect height="7" rx="1.5" width="9" x="11.5" y="20" />
        <path d="M12 8.5h8M16 12v8" />
      </svg>
    );
  }

  if (name === "field") {
    return (
      <svg
        aria-hidden="true"
        className={iconClasses}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        viewBox="0 0 32 32"
      >
        <path d="M5 23h22" />
        <path d="m7 23 5-12 5 12" />
        <path d="m15 23 4-9 6 9" />
        <path d="M21 8h4" />
        <path d="M23 6v4" />
      </svg>
    );
  }

  if (name === "check") {
    return (
      <svg
        aria-hidden="true"
        className={iconClasses}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        viewBox="0 0 32 32"
      >
        <circle cx="16" cy="16" r="11" />
        <path d="m10.5 16 3.5 3.5L22 12" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className={iconClasses}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
      viewBox="0 0 32 32"
    >
      <path d="M4 20c4-8 8-8 12 0s8 8 12 0" />
      <path d="M4 12c4 8 8 8 12 0s8-8 12 0" />
      <path d="M16 4v24" />
    </svg>
  );
}
