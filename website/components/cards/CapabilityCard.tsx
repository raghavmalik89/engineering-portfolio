import { IconGlyph } from "@/components/common/IconGlyph";

type CapabilityCardProps = {
  title: string;
  description: string;
  icon: "antenna" | "check" | "chip" | "diagram" | "field" | "signal";
};

export function CapabilityCard({
  title,
  description,
  icon,
}: CapabilityCardProps) {
  return (
    <article className="rounded-lg border border-border-subtle/70 bg-surface/70 p-6">
      <IconGlyph name={icon} />
      <h3 className="mt-6 text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-4 leading-7 text-text-secondary">{description}</p>
    </article>
  );
}
