import LegalEtalase from '@/components/LegalEtalase';
import { DIPERBARUI, PRIVASI } from '@/lib/legal';

export const metadata = {
  title: 'Kebijakan Privasi',
  description: 'Data apa yang diminta saat Anda meminta sample EthyleneAbsorber, untuk apa dipakai, dan berapa lama disimpan.',
  alternates: { canonical: 'https://absorber-premium.pintuweb.id/privacy' },
};

export default function PrivacyPage() {
  return <LegalEtalase judul="Kebijakan Privasi" updated={DIPERBARUI} intro={PRIVASI.intro} bagian={PRIVASI.bagian} />;
}
