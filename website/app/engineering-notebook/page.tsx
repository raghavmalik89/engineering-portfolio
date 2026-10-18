import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function EngineeringNotebookPage() {
  return (
    <main>
      <h1>Engineering Notebook</h1>
      <p>
        Architecture placeholder for public technical notes and build log
        entries.
      </p>
    </main>
  );
}
