export default async function EngineeringNotebookEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main>
      <h1>Engineering Notebook Entry</h1>
      <p>
        Architecture placeholder for an engineering notebook entry route. Route
        slug: {slug}.
      </p>
    </main>
  );
}
