import type { ReactNode } from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { EngineeringAtmosphere } from "@/components/visual/EngineeringAtmosphere";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_16%,rgba(200,179,138,0.035),transparent_20%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_46%,rgba(1,5,12,0.34)_100%)]" />

        <EngineeringAtmosphere />
      </div>

      <SiteHeader />
      <div className="relative z-10">{children}</div>
    </main>
  );
}
