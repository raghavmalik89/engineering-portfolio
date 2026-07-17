import { storyLabelClassName } from "@/components/stories/storyTypography";
import type { StoryLifecycle } from "@/types/story";

type StoryDeliveryLifecycleProps = {
  lifecycle: StoryLifecycle;
};

export function StoryDeliveryLifecycle({
  lifecycle,
}: StoryDeliveryLifecycleProps) {
  const stageCount = lifecycle.stages.length;
  const nodeWidth = 144;
  const nodeGap = 14;
  const startX = 24;
  const nodeY = 94;
  const nodeHeight = 172;
  const connectorY = nodeY + 46;
  const width = startX * 2 + stageCount * nodeWidth + (stageCount - 1) * nodeGap;
  const height = 310;
  const wrapText = (text: string, maxLength: number) => {
    const words = text.split(" ");
    const lines: string[] = [];
    let current = "";

    words.forEach((word) => {
      const next = current ? `${current} ${word}` : word;
      if (next.length > maxLength && current) {
        lines.push(current);
        current = word;
      } else {
        current = next;
      }
    });

    if (current) {
      lines.push(current);
    }

    return lines;
  };

  return (
    <section className="mx-auto w-full max-w-[1120px] rounded-lg border border-border-subtle/70 bg-surface/55 p-5 sm:p-6">
      <p className={storyLabelClassName}>{lifecycle.eyebrow}</p>
      <h2 className="mt-3 text-2xl leading-tight font-semibold text-foreground">
        {lifecycle.title}
      </h2>
      <p className="readable-copy mt-3 max-w-[720px]">
        {lifecycle.description}
      </p>

      <svg
        className="mt-7 hidden h-auto w-full lg:block"
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-labelledby="iba-lifecycle-title iba-lifecycle-description"
      >
        <title id="iba-lifecycle-title">{lifecycle.title}</title>
        <desc id="iba-lifecycle-description">
          {lifecycle.stages
            .map(
              (stage, index) =>
                `${index + 1}. ${stage.label}: ${stage.detail}`,
            )
            .join("; ")}
        </desc>
        <line
          x1={startX + nodeWidth / 2}
          y1={connectorY}
          x2={width - startX - nodeWidth / 2}
          y2={connectorY}
          stroke="var(--accent-copper)"
          strokeOpacity="0.58"
          strokeWidth="2.75"
        />
        {lifecycle.stages.map((stage, index) => {
          const x = startX + index * (nodeWidth + nodeGap);
          const isFinal = index === lifecycle.stages.length - 1;
          const titleLines = wrapText(stage.label, 11);
          const detailLines = wrapText(stage.detail, 14);
          const detailStartY = nodeY + 96 + Math.max(titleLines.length - 1, 0) * 18;

          return (
            <g key={stage.label}>
              <rect
                x={x}
                y={nodeY}
                width={nodeWidth}
                height={nodeHeight}
                rx="8"
                fill={isFinal ? "var(--surface-elevated)" : "var(--surface)"}
                stroke="var(--accent-copper)"
                strokeOpacity={isFinal ? "0.9" : "0.58"}
                strokeWidth={isFinal ? "2.35" : "1.65"}
              />
              <circle
                cx={x + 25}
                cy={nodeY + 25}
                r="15"
                fill="var(--background)"
                stroke="var(--accent-copper)"
                strokeOpacity="0.82"
                strokeWidth="1.75"
              />
              <text
                x={x + 25}
                y={nodeY + 30}
                textAnchor="middle"
                fontFamily="Courier New, Courier, monospace"
                fontSize="11"
                fill="var(--accent-copper)"
                fontWeight="700"
              >
                {String(index + 1).padStart(2, "0")}
              </text>
              <text
                x={x + 16}
                y={nodeY + 66}
                fontFamily="Arial, Helvetica, sans-serif"
                fontSize="16"
                fill="var(--foreground)"
                fontWeight="700"
              >
                {titleLines.map((line, lineIndex) => (
                  <tspan key={line} x={x + 16} dy={lineIndex === 0 ? 0 : 18}>
                    {line}
                  </tspan>
                ))}
              </text>
              <text
                x={x + 16}
                y={detailStartY}
                fontFamily="Arial, Helvetica, sans-serif"
                fontSize="13.5"
                fill="var(--text-secondary)"
              >
                {detailLines.map((line, lineIndex) => (
                  <tspan key={line} x={x + 16} dy={lineIndex === 0 ? 0 : 16}>
                    {line}
                  </tspan>
                ))}
              </text>
            </g>
          );
        })}
      </svg>

      <ol className="mt-6 grid gap-3 lg:hidden">
        {lifecycle.stages.map((stage, index) => (
          <li
            key={stage.label}
            className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 rounded-lg border border-border-subtle/70 bg-background/20 p-3"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent-copper/70 font-mono text-xs font-semibold text-accent-copper">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>
              <span className="block text-sm font-semibold text-foreground">
                {stage.label}
              </span>
              <span className="mt-1 block text-sm leading-6 text-text-secondary">
                {stage.detail}
              </span>
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
