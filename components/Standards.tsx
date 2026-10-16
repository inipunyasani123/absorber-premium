import Image from 'next/image';
import { SectionHead } from '@/components/ui';

/* Bagian penanda varian ini: mutu dijelaskan lewat tiga bidang foto besar
   berselang-seling, bukan lewat tabel atau grafik. */
const standards = [
  {
    no: '01',
    tag: 'Sebelum berangkat',
    title: 'Dosis dihitung dari volume, bukan dari berat',
    desc: 'Satu sachet merawat ruang 1–2 m³. Untuk kontainer 20 ft maupun 40 ft, jumlahnya disesuaikan dengan kepadatan susunan peti dan jenis komoditas — dihitung tertulis sebelum pengiriman pertama.',
    image: '/images/sachet-buah.webp',
    facts: [
      ['Cakupan', '1–2 m³'],
      ['Ruang', 'Harus tertutup rapat'],
    ],
  },
  {
    no: '02',
    tag: 'Selama perjalanan',
    title: 'Tiga puluh hari kerja, tanpa perlu ditengok',
    desc: 'Masa efektif 30 hari sejak dibuka, dan hingga 45 hari pada kondisi penyimpanan ideal. Pelayaran ekspor yang menempuh 3–4 minggu selesai sebelum batas itu tercapai.',
    image: '/images/buahsegar1.webp',
    facts: [
      ['Masa efektif', '30 hari'],
      ['Kondisi ideal', '45 hari'],
    ],
  },
  {
    no: '03',
    tag: 'Sampai di rak',
    title: 'Rasa, aroma, dan tekstur tidak tersentuh',
    desc: 'Sachet bekerja pada udara di sekelilingnya, bukan pada buahnya. Uji organoleptik tidak menemukan perbedaan rasa maupun tekstur antara komoditas yang diberi perlakuan dan yang tidak.',
    image: '/images/buahsegar2.webp',
    facts: [
      ['Kontak dengan pangan', 'Tidak ada'],
      ['Hasil terlihat', '24–48 jam'],
    ],
  },
];

export default function Standards() {
  return (
    <section id="standar" className="relative overflow-hidden bg-bone py-14 md:py-28">
      <div aria-hidden="true" className="hairlines absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionHead
          no="01"
          tag="Standar"
          title="Tiga titik yang menentukan sampai atau tidaknya sebuah kiriman"
          lead="Kerusakan jarang terjadi sekaligus. Ia menumpuk sedikit demi sedikit di tiga titik ini — dan di ketiganya pula sachet bekerja."
          className="mb-12 md:mb-20"
        />

        <div className="space-y-14 md:space-y-28">
          {standards.map((s, i) => (
            <article
              key={s.no}
              className={`grid items-center gap-7 md:gap-10 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? 'lg:[&>figure]:order-2' : ''
              }`}
            >
              <figure className="relative aspect-[16/10] w-full overflow-hidden bg-bone-2 sm:aspect-[4/3]">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </figure>

              <div>
                <div className="mb-4 flex items-baseline gap-5 md:mb-6">
                  <span aria-hidden="true" className="numeral text-ink">
                    {s.no}
                  </span>
                  <span className="tag text-sage">{s.tag}</span>
                </div>

                <h3 className="text-[1.6rem] leading-[1.16] font-semibold text-ink md:text-[1.9rem]">
                  {s.title}
                </h3>
                <p className="mt-4 leading-relaxed text-ink-soft">{s.desc}</p>

                <dl className="mt-6 grid grid-cols-2 gap-6 border-t border-ink/15 pt-5 md:mt-8 md:pt-6">
                  {s.facts.map(([k, v]) => (
                    <div key={k}>
                      <dt className="tag text-ink-soft">{k}</dt>
                      <dd className="mt-2 text-base font-semibold text-ink">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
