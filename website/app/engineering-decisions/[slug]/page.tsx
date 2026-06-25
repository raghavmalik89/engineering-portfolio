export default async function EngineeringDecisionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main>
      <h1>Engineering Decision Detail</h1>
      <p>
        Architecture placeholder for an engineering decision detail route. Route
        slug: {slug}.
      </p>
    </main>
  );
}
