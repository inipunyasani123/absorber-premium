import Image from 'next/image';
import Link from 'next/link';
import EtalaseHead from '@/components/EtalaseHead';
import { KOLEKSI } from '@/lib/koleksi';

export const metadata = {
  title: 'Etalase',
  description:
    'Empat produk PT Dickson Synergy dalam satu etalase: EthyleneAbsorber, Container Dry® II, Desi Pak®, dan Silica Gel.',
  alternates: { canonical: 'https://absorber-premium.pintuweb.id/koleksi' },
};

export default function EtalasePage() {
  return (
    <>
      <EtalaseHead
        no="—"
        tag="Etalase"
        title="Empat barang. Masing-masing satu tugas."
        lead="Etilen dan kelembapan adalah dua masalah yang berbeda. Kami tidak menjual satu produk untuk keduanya."
      />

      <ol className="border-b border-ink/12 bg-bone">
        {KOLEKSI.map((b, i) => (
          <li key={b.slug} className="group relative border-t border-ink/12 first:border-t-0">
            <div className={`mx-auto grid max-w-6xl items-center gap-8 px-6 py-12 md:grid-cols-2 md:gap-16 md:py-16 ${i % 2 ? 'md:[&>*:first-child]:order-2' : ''}`}>
              <div className="relative aspect-[4/3] overflow-hidden bg-bone-2">
                <Image src={b.image} alt={b.nama} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              </div>
              <div>
                <p className="flex items-baseline gap-5">
                  <span aria-hidden="true" className="text-5xl font-bold tracking-[-0.05em] text-transparent [-webkit-text-stroke:1px_#16191c]">{b.no}</span>
                  <span className="tag text-sage">{b.kelas}</span>
                </p>
                <h2 className="mt-5 text-[2rem] leading-[1.08] font-semibold text-ink md:text-[2.6rem]">
                  <Link href={`/koleksi/${b.slug}`} className="after:absolute after:inset-0">{b.nama}</Link>
                </h2>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-soft">{b.kalimat}</p>
                <p className="tag mt-8 inline-block border-b border-ink pb-1 text-ink">Lihat barang</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}
