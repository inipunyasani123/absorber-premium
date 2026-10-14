import Image from 'next/image';
import Link from 'next/link';
import EtalaseHead from '@/components/EtalaseHead';
import { CERITA } from '@/lib/catatan';

export const metadata = {
  title: 'Catatan Pemakai',
  description:
    'Tiga cerita dari toko buah, distributor antarkota, dan dapur kafe — keadaan sebelum, apa yang diubah, dan yang terlihat sesudah memakai EthyleneAbsorber.',
  alternates: { canonical: 'https://absorber-premium.pintuweb.id/catatan' },
};

export default function CatatanIndex() {
  return (
    <>
      <EtalaseHead
        no="—"
        tag="Catatan Pemakai"
        title="Dinilai dari yang tidak jadi terbuang."
        lead="Tiga pemakai, tiga jenis usaha. Bukan ulasan bintang lima — melainkan apa yang berubah dalam pekerjaan mereka sehari-hari."
      />
      <ol className="bg-bone">
        {CERITA.map((c) => (
          <li key={c.slug} className="group relative border-b border-ink/12">
            <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-14 md:py-16">
              <div className="relative aspect-[4/3] overflow-hidden bg-bone-2">
                <Image src={c.image} alt="" fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="tag text-sage">Catatan {c.no}</p>
                <h2 className="mt-4 text-[1.9rem] leading-[1.1] font-semibold text-ink md:text-[2.4rem]">
                  <Link href={`/catatan/${c.slug}`} className="after:absolute after:inset-0">{c.judul}</Link>
                </h2>
                <p className="mt-4 leading-relaxed text-ink-soft">{c.ringkas}</p>
                <div className="mt-8 flex items-center gap-4 border-t border-ink/15 pt-6">
                  <span className="relative h-12 w-12 shrink-0 overflow-hidden bg-bone-2">
                    <Image src={c.potret} alt="" fill sizes="48px" className="object-cover object-top" />
                  </span>
                  <span>
                    <span className="block font-semibold text-ink">{c.nama}</span>
                    <span className="block text-sm text-ink-soft">{c.peran}</span>
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <p className="tag mx-auto max-w-6xl px-6 py-8 text-ink-soft">Nama dan usaha adalah ilustrasi untuk keperluan purwarupa desain.</p>
    </>
  );
}
