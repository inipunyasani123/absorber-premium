import LegalEtalase from '@/components/LegalEtalase';
import { DIPERBARUI, PRIVASI } from '@/lib/legal';
import { meta } from '@/lib/seo';

export const metadata = meta({
  title: 'Kebijakan Privasi',
  description:
    'Data apa yang diminta saat Anda meminta sample EthyleneAbsorber, untuk apa dipakai, dan berapa lama disimpan.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return <LegalEtalase judul="Kebijakan Privasi" updated={DIPERBARUI} intro={PRIVASI.intro} bagian={PRIVASI.bagian} />;
}
