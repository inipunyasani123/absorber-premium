import Image from 'next/image';
import Link from 'next/link';
import EtalaseHead from '@/components/EtalaseHead';
import { CERITA } from '@/lib/catatan';
import { meta } from '@/lib/seo';

export const metadata = meta({
  title: 'Catatan Penerapan',
  description:
    'Tiga skenario penerapan EthyleneAbsorber — toko buah, distributor antarkota, dan dapur kafe: keadaan umum, apa yang diubah, apa yang bisa diharapkan.',
  path: '/catatan',
});

export default function CatatanIndex() {
  return (
    <>
      <EtalaseHead
        no="—"
        tag="Catatan Penerapan"
        title="Tiga tempat buah menunggu."
        lead="Toko buah, bak truk, dan lemari dapur. Bukan ulasan pelanggan — melainkan di mana sachet dipasang, apa yang diubah, dan apa yang bisa diharapkan."
      />
      <ol className="bg-bone">
        {CERITA.map((c) => (
          <li key={c.slug} className="group relative border-b border-ink/12">
            <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-14 md:py-16">
              <div className="relative aspect-[16/9] overflow-hidden bg-bone-2 md:aspect-[4/3]">
                <Image src={c.image} alt="" fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="tag text-sage">Catatan {c.no} · {c.tempat}</p>
                <h2 className="mt-4 text-[1.75rem] leading-[1.1] font-semibold text-ink md:text-[2.4rem]">
                  <Link href={`/catatan/${c.slug}`} className="after:absolute after:inset-0">{c.judul}</Link>
                </h2>
                <p className="mt-4 leading-relaxed text-ink-soft">{c.ringkas}</p>
                <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-ink/15 pt-5">
                  {c.angka.map(([k, v]) => (
                    <div key={k}>
                      <dt className="tag text-ink-soft">{k}</dt>
                      <dd className="mt-1.5 text-sm font-semibold text-ink">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <p className="tag mx-auto max-w-6xl px-6 py-8 leading-[1.7] text-ink-soft">Skenario ilustrasi untuk purwarupa desain; angka mengikuti brief dan lembar tanya jawab.</p>
    </>
  );
}
