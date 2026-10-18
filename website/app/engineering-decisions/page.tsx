import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function EngineeringDecisionsPage() {
  return (
    <main>
      <h1>Engineering Decisions</h1>
      <p>
        Architecture placeholder for engineering decision and trade-off
        articles.
      </p>
    </main>
  );
}
