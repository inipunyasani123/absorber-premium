import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CERITA, ceritaBySlug } from '@/lib/catatan';
import { meta, SITE } from '@/lib/seo';

export function generateStaticParams() {
  return CERITA.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = ceritaBySlug(slug);
  if (!c) return {};
  return meta({ title: c.judul, description: c.ringkas, path: `/catatan/${c.slug}`, type: 'article' });
}

export default async function CeritaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = ceritaBySlug(slug);
  if (!c) notFound();
  const i = CERITA.findIndex((x) => x.slug === c.slug);
  const berikut = CERITA[(i + 1) % CERITA.length];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: c.judul,
    description: c.ringkas,
    image: `${SITE}${c.image}`,
    author: { '@type': 'Organization', name: 'PT Dickson Synergy' },
    mainEntityOfPage: `${SITE}/catatan/${c.slug}`,
  };

  return (
    <article className="bg-bone">
      <header className="pt-28 sm:pt-32">
        <div className="mx-auto max-w-6xl px-6">
          <nav aria-label="Remah roti" className="tag text-ink-soft">
            <Link href="/catatan" className="hover:text-ink">Catatan Penerapan</Link> <span aria-hidden="true">/</span> {c.no}
          </nav>
          <h1 className="mt-8 max-w-4xl text-[2.5rem] leading-[1.03] font-semibold tracking-[-0.04em] text-ink sm:text-5xl lg:text-[3.8rem]">{c.judul}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{c.ringkas}</p>
        </div>
        <div className="relative mx-auto mt-12 aspect-[21/9] max-w-6xl overflow-hidden bg-bone-2">
          <Image src={c.image} alt="" fill priority sizes="(min-width: 1152px) 1152px, 100vw" className="object-cover" />
        </div>
        <div className="mx-auto max-w-6xl px-6">
          <dl className="grid border-b border-ink/15 sm:grid-cols-3">
            {c.angka.map(([k, v]) => (
              <div key={k} className="border-t border-ink/15 py-5 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0">
                <dt className="tag text-ink-soft">{k}</dt>
                <dd className="mt-2 text-xl font-semibold text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-12 md:py-20">
        <aside className="md:sticky md:top-28 md:self-start">
          <p className="tag text-ink-soft">Tempat</p>
          <p className="mt-2 font-semibold text-ink">{c.tempat}</p>
          <p className="tag mt-6 leading-[1.6] text-ink-soft">Skenario ilustrasi — bukan cerita pelanggan</p>
        </aside>

        <div className="max-w-2xl">
          {c.isi.map((b, k) =>
            'h' in b ? (
              <h2 key={k} className="mt-12 text-2xl font-semibold text-ink first:mt-0">{b.h}</h2>
            ) : 'inti' in b ? (
              <p key={k} className="my-10 border-l-2 border-sage pl-6 text-[1.45rem] leading-snug font-semibold tracking-tight text-ink md:my-12 md:text-[1.9rem]">
                {b.inti}
              </p>
            ) : (
              <p key={k} className="mt-5 text-[1.075rem] leading-[1.85] text-ink-soft first:mt-0">{b.p}</p>
            ),
          )}

          <Link href={`/catatan/${berikut.slug}`} className="group mt-16 block border-t border-ink pt-8">
            <span className="tag block text-ink-soft">Catatan berikutnya · {berikut.no}</span>
            <span className="mt-3 block text-2xl font-semibold text-ink group-hover:text-sage">{berikut.judul}</span>
          </Link>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </article>
  );
}
