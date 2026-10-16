import Link from 'next/link';
import { SectionHead } from '@/components/ui';

const steps = [
  { no: '01', title: 'Ditempatkan', desc: 'Sachet masuk ke dalam kemasan, peti, atau kontainer bersama komoditas.' },
  { no: '02', title: 'Diserap', desc: 'Media berpori menarik molekul etilen dari udara di sekelilingnya.' },
  { no: '03', title: 'Dioksidasi', desc: 'Kalium permanganat mengubah etilen menjadi karbon dioksida dan air.' },
  { no: '04', title: 'Ditahan', desc: 'Reaksi berjalan searah — gas yang terserap tidak kembali ke udara.' },
];

const marks = [
  ['BPOM RI', 'NA18191100273'],
  ['FDA', '21 CFR 175.300'],
  ['Uni Eropa', 'EU No 10/2011'],
  ['JHOSPA', 'Jepang'],
];

export default function Method() {
  return (
    <section id="cara-kerja" className="relative overflow-hidden bg-ink text-bone">
      <div aria-hidden="true" className="hairlines-dark absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-28">
        <SectionHead
          no="02"
          tag="Cara Kerja"
          tone="dark"
          title="Satu reaksi kimia, empat langkah, tanpa bagian bergerak"
          lead="Bukan pengawet dan tidak menempel pada buah. Yang dikerjakannya hanya membersihkan udara di dalam kemasan."
          className="mb-10 md:mb-16"
        />

        <ol className="grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-10 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.no} className="border-t border-bone/25 pt-6">
              <span aria-hidden="true" className="numeral block text-bone">
                {s.no}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-bone">{s.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-bone/75">{s.desc}</p>
            </li>
          ))}
        </ol>

        {/* Register sertifikasi */}
        <div className="mt-12 border-t border-bone/25 pt-10 md:mt-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-sm">
              <p className="tag mb-3 text-sage-soft">Kepatuhan</p>
              <h3 className="text-xl leading-snug font-semibold text-bone">
                Diperiksa empat otoritas keamanan pangan
              </h3>
            </div>

            <dl className="grid flex-1 grid-cols-2 gap-x-10 gap-y-7 lg:max-w-2xl lg:grid-cols-4">
              {marks.map(([k, v]) => (
                <div key={k}>
                  <dt className="text-sm font-semibold text-bone">{k}</dt>
                  <dd className="tag mt-2 text-bone/75">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <Link
            href="/faq"
            className="mt-10 inline-block text-sm font-semibold text-sage-soft underline-offset-8 hover:underline"
          >
            Pertanyaan teknis selengkapnya →
          </Link>
        </div>
      </div>
    </section>
  );
}
