import Image from 'next/image';
import Link from 'next/link';
import { SectionHead } from '@/components/ui';
import { CERITA } from '@/lib/catatan';

const faqs = [
  ['Berapa sachet untuk satu ruang?', 'Satu sachet untuk 1–2 m³, dengan kemasan tertutup rapat.'],
  ['Berapa lama masa efektifnya?', '30 hari sejak dibuka, hingga 45 hari pada kondisi ideal.'],
  ['Apakah aman untuk pangan?', 'Ya — terdaftar BPOM RI NA18191100273 dan memenuhi FDA, EU, serta JHOSPA.'],
];

export default function Penerapan() {
  return (
    <>
      {/* Tiga skenario penerapan — dulu kutipan bernama; kini tempat & cara pasang,
          karena nama, usaha, dan kutipan itu tidak ada di brief. */}
      <section id="penerapan" className="relative overflow-hidden bg-bone py-16 md:py-28">
        <div aria-hidden="true" className="hairlines absolute inset-0" />

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <SectionHead
            no="03"
            tag="Catatan Penerapan"
            title="Tiga tempat buah menunggu"
            action={
              <Link href="/catatan" className="tag inline-block border-b border-ink pb-1 text-ink hover:text-sage">
                Baca tiga catatan lengkap
              </Link>
            }
            className="mb-10 md:mb-16"
          />

          <ol className="grid gap-px bg-ink/12 md:grid-cols-3">
            {CERITA.map((c) => (
              <li key={c.slug} className="group relative flex bg-bone md:flex-col">
                <div className="relative w-28 shrink-0 overflow-hidden bg-bone-2 md:aspect-[4/3] md:w-full">
                  <Image src={c.image} alt="" fill sizes="(min-width: 768px) 30vw, 112px" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
                <div className="flex flex-1 flex-col p-5 md:p-8">
                  <p className="tag text-sage">{c.no} · {c.tempat}</p>
                  <h3 className="mt-2.5 text-lg leading-snug font-semibold text-ink md:mt-3 md:text-xl">
                    <Link href={`/catatan/${c.slug}`} className="after:absolute after:inset-0">{c.judul}</Link>
                  </h3>
                  <p className="mt-2.5 hidden text-sm leading-relaxed text-ink-soft md:block">{c.ringkas}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Tanya jawab ringkas + penutup */}
      <section id="tanya" className="relative overflow-hidden bg-bone-2 py-16 md:py-28">
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
            <div>
              <p className="tag mb-4 text-sage">Pertanyaan Umum</p>
              <h2 className="text-[1.9rem] leading-[1.12] font-semibold text-ink md:text-[2.4rem]">
                Tiga yang paling sering ditanyakan
              </h2>
              <Link
                href="/faq"
                className="mt-8 inline-block text-sm font-semibold text-sage underline-offset-8 hover:underline"
              >
                Lihat semuanya →
              </Link>
            </div>

            <dl className="border-t border-ink/15">
              {faqs.map(([q, a]) => (
                <div key={q} className="border-b border-ink/15 py-6">
                  <dt className="text-base font-semibold text-ink">{q}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-ink-soft">{a}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-14 flex flex-col items-start gap-8 border-t border-ink/15 pt-10 md:mt-20 md:pt-14 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-xl text-[1.9rem] leading-[1.1] font-semibold text-ink md:text-[2.6rem]">
              Coba pada satu peti sebelum memutuskan.
            </h2>
            <Link
              href="/kontak"
              className="inline-flex shrink-0 items-center justify-center bg-ink px-9 py-4 text-sm font-semibold text-bone transition-colors duration-300 hover:bg-sage-deep"
            >
              Minta Sample Gratis
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
