export default async function PerfilUserPage({
  params,
}: {
  params: { user: string };
}) {
  return (
    <main>
      <h1>Usuario: {params.user}</h1>
    </main>
  );
}
