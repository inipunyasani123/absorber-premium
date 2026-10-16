import { meta } from '@/lib/seo';

// /faq adalah client component, jadi metadatanya dipasang di layout ini.
export const metadata = meta({
  title: 'Tanya Jawab',
  description:
    'Pertanyaan yang paling sering diajukan tentang EthyleneAbsorber: cara pakai, masa efektif, keamanan pangan, dan pengiriman.',
  path: '/faq',
});

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
