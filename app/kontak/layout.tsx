// /kontak adalah client component, jadi metadatanya dipasang di layout ini.
export const metadata = {
  title: 'Minta Sample',
  description: 'Sebutkan muatannya, kami hitung dosisnya dan kirim sample EthyleneAbsorber ke fasilitas Anda.',
  alternates: { canonical: 'https://absorber-premium.pintuweb.id/kontak' },
};

export default function KontakLayout({ children }: { children: React.ReactNode }) {
  return children;
}
