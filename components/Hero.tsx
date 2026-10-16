import Image from 'next/image';
import Link from 'next/link';
import { Stat } from '@/components/ui';

const stats = [
  { value: '1–2 m³', label: 'Cakupan per sachet' },
  { value: '30 hari', label: 'Masa efektif' },
  { value: '2–3×', label: 'Umur simpan' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bone pt-28 pb-12 md:pt-36 md:pb-20">
      <div aria-hidden="true" className="hairlines absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <p className="tag mb-8 text-sage">EthyleneAbsorber · Dickson Synergy</p>

        <h1 className="max-w-4xl text-[2.6rem] leading-[0.98] font-semibold tracking-[-0.04em] text-ink sm:text-6xl lg:text-[5rem]">
          Mutu yang tidak
          <br />
          menurun di jalan.
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
          <p className="max-w-md leading-relaxed text-ink-soft">
            Sachet penyerap etilen untuk buah dan sayur yang harus menempuh jarak sebelum sampai ke
            tangan pembeli. Sederhana bentuknya, terukur kerjanya, dan sudah diperiksa empat
            otoritas keamanan pangan.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center bg-ink px-8 py-4 text-sm font-semibold text-bone transition-colors duration-300 hover:bg-sage-deep"
            >
              Minta Sample
            </Link>
            <Link
              href="/#standar"
              className="inline-flex items-center justify-center border border-ink/20 px-8 py-4 text-sm font-semibold text-ink transition-colors duration-300 hover:border-ink/50"
            >
              Lihat Standarnya
            </Link>
          </div>
        </div>
      </div>

      {/* Gambar selebar bidang — dipotong 4:3 agar tanda air di sudut bawah tidak ikut */}
      <div className="relative z-10 mt-10 px-6 md:mt-14">
        <div className="mx-auto max-w-6xl">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-bone-2 sm:aspect-[16/9]">
            <Image
              src="/images/etalase-sachet.webp"
              alt="Sachet EthyleneAbsorber di antara anggur, blueberry, dan buah persik"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Pita data */}
      <div className="relative z-10 mx-auto mt-8 max-w-6xl px-6 md:mt-12">
        <dl className="grid grid-cols-3 gap-4 border-t border-ink/15 pt-7 sm:gap-8 sm:pt-8">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <Stat value={s.value} label={s.label} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
