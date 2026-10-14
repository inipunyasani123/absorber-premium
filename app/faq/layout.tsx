// /faq adalah client component, jadi metadatanya dipasang di layout ini.
export const metadata = {
  title: 'Tanya Jawab',
  description: 'Pertanyaan yang paling sering diajukan tentang EthyleneAbsorber: cara pakai, masa efektif, keamanan pangan, dan pengiriman.',
  alternates: { canonical: 'https://absorber-premium.pintuweb.id/faq' },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
