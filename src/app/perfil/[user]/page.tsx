import photosGet from '@/actions/photos-get';
import Feed from '@/components/feed/feed';
import { error } from 'console';

export default async function PerfilUserPage({
  params,
}: {
  params: { user: string };
}) {
  const { data } = await photosGet({ user: params.user });

  if (!data) return null;

  const tranformObj = {
    data: data,
    ok: true,
    error: '',
  };
  return (
    <section className="container mainSection">
      <h1 className="title">Usuario: {params.user}</h1>
      <Feed photos={tranformObj} user={params.user} />
    </section>
  );
}
