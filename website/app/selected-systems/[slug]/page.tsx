export default async function SelectedSystemDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main>
      <h1>Selected System Detail</h1>
      <p>
        Architecture placeholder for a selected system detail route. Route slug:
        {" "}{slug}.
      </p>
    </main>
  );
}
