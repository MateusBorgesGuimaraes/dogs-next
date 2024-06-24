export default async function FotoIdPage({
  params,
}: {
  params: { id: number };
}) {
  return (
    <main>
      <h1>foto id: {params.id}</h1>
    </main>
  );
}
