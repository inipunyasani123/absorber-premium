import LegalEtalase from '@/components/LegalEtalase';
import { DIPERBARUI, KETENTUAN } from '@/lib/legal';

export const metadata = {
  title: 'Syarat & Ketentuan',
  description: 'Ketentuan sample, perhitungan dosis, pemesanan, dan klaim mutu produk PT Dickson Synergy.',
  alternates: { canonical: 'https://absorber-premium.pintuweb.id/terms' },
};

export default function TermsPage() {
  return <LegalEtalase judul="Syarat & Ketentuan" updated={DIPERBARUI} intro={KETENTUAN.intro} bagian={KETENTUAN.bagian} />;
}
