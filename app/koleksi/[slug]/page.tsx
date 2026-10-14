import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { KOLEKSI, barangBySlug } from '@/lib/koleksi';

const SITE = 'https://absorber-premium.pintuweb.id';

export function generateStaticParams() {
  return KOLEKSI.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const b = barangBySlug(slug);
  if (!b) return {};
  return {
    title: b.nama,
    description: `${b.kalimat} ${b.uraian}`,
    alternates: { canonical: `${SITE}/koleksi/${b.slug}` },
    openGraph: { images: [{ url: b.image }] },
  };
}

export default async function BarangPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const b = barangBySlug(slug);
  if (!b) notFound();
  const lain = KOLEKSI.filter((x) => x.slug !== b.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: b.nama,
    description: b.uraian,
    image: `${SITE}${b.image}`,
    brand: { '@type': 'Brand', name: 'PT Dickson Synergy' },
  };

  return (
    <>
      <section className="relative bg-bone pt-28 pb-16 sm:pt-32 md:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <nav aria-label="Remah roti" className="tag mb-10 text-ink-soft">
            <Link href="/koleksi" className="hover:text-ink">Etalase</Link> <span aria-hidden="true">/</span> {b.no}
          </nav>
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-16">
            <div className="relative aspect-square overflow-hidden bg-bone-2">
              <Image src={b.image} alt={b.nama} fill priority sizes="(min-width: 768px) 55vw, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-col">
              <p className="tag text-sage">{b.kelas} · {b.no}</p>
              <h1 className="mt-5 text-[2.6rem] leading-[1.02] font-semibold tracking-[-0.04em] text-ink md:text-[3.4rem]">{b.nama}</h1>
              <p className="mt-6 text-xl leading-snug text-ink">{b.kalimat}</p>
              <p className="mt-5 leading-relaxed text-ink-soft">{b.uraian}</p>

              <dl className="mt-10 border-t border-ink">
                {b.rincian.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[8rem_minmax(0,1fr)] gap-4 border-b border-ink/15 py-3.5">
                    <dt className="tag pt-0.5 text-ink-soft">{k}</dt>
                    <dd className="text-sm text-ink">{v}</dd>
                  </div>
                ))}
              </dl>

              <Link href="/kontak" className="mt-10 inline-flex items-center justify-center bg-ink px-8 py-4 text-sm font-semibold tracking-wide text-bone transition-colors hover:bg-sage">
                Minta sample
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/12 bg-ink py-16 text-bone">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[minmax(0,0.6fr)_minmax(0,1.4fr)]">
          <h2 className="text-2xl font-semibold text-bone">Pemakaian</h2>
          <ol className="grid gap-px bg-bone/15 sm:grid-cols-3">
            {b.pakai.map((p, i) => (
              <li key={p} className="bg-ink p-6">
                <span aria-hidden="true" className="block text-4xl font-bold tracking-[-0.05em] text-transparent [-webkit-text-stroke:1px_#f4f2ee]">{i + 1}</span>
                <span className="mt-4 block leading-relaxed text-bone/85">{p}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-bone py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="tag text-ink-soft">Juga di etalase</p>
          <ul className="mt-6 grid gap-px border border-ink/12 bg-ink/12 sm:grid-cols-3">
            {lain.map((x) => (
              <li key={x.slug} className="bg-bone">
                <Link href={`/koleksi/${x.slug}`} className="group flex items-center gap-4 p-4 hover:bg-bone-2">
                  <span className="relative h-16 w-16 shrink-0 overflow-hidden bg-bone-2">
                    <Image src={x.image} alt="" fill sizes="64px" className="object-cover" />
                  </span>
                  <span>
                    <span className="tag block text-sage">{x.no}</span>
                    <span className="mt-1 block font-semibold text-ink">{x.nama}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
