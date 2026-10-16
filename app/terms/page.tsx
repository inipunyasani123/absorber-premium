import LegalEtalase from '@/components/LegalEtalase';
import { DIPERBARUI, KETENTUAN } from '@/lib/legal';
import { meta } from '@/lib/seo';

export const metadata = meta({
  title: 'Syarat & Ketentuan',
  description:
    'Ketentuan permintaan sample, perhitungan dosis, pemesanan, dan klaim mutu produk EthyleneAbsorber dan desiccant PT Dickson Synergy.',
  path: '/terms',
});

export default function TermsPage() {
  return <LegalEtalase judul="Syarat & Ketentuan" updated={DIPERBARUI} intro={KETENTUAN.intro} bagian={KETENTUAN.bagian} />;
}
