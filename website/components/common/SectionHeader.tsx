type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-[740px] text-center"
          : "max-w-[740px]"
      }
    >
      <p className="font-mono text-xs tracking-[0.2em] text-accent-copper uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl leading-tight font-semibold text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-text-secondary sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
