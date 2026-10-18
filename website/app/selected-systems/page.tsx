import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function SelectedSystemsPage() {
  return (
    <main>
      <h1>Selected Systems</h1>
      <p>
        Architecture placeholder for the case study index and system portfolio.
      </p>
    </main>
  );
}
