import { meta } from '@/lib/seo';

// /kontak adalah client component, jadi metadatanya dipasang di layout ini.
export const metadata = meta({
  title: 'Minta Sample',
  description:
    'Sebutkan muatannya — komoditas, volume ruang, dan rute — kami hitung dosisnya dan siapkan sample EthyleneAbsorber untuk diuji di tempat Anda.',
  path: '/kontak',
});

export default function KontakLayout({ children }: { children: React.ReactNode }) {
  return children;
}
