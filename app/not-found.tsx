import Link from 'next/link';
import EtalaseHead from '@/components/EtalaseHead';

export const metadata = {
  title: { absolute: 'Halaman tidak ditemukan — PT Dickson Synergy' },
  robots: { index: false, follow: true },
};

/* 404 bergaya etalase: vitrin yang dicari sedang kosong. */
export default function NotFound() {
  return (
    <>
      <EtalaseHead
        no="404"
        tag="Halaman tidak ditemukan"
        title="Vitrin ini sedang kosong."
        lead="Alamatnya mungkin salah ketik, atau barangnya sudah dipindah ke bagian lain etalase."
      />
      <section className="bg-bone py-12 md:py-16">
        <ul className="mx-auto grid max-w-6xl gap-px bg-ink/12 px-0 sm:grid-cols-3">
          {[
            ['Etalase', '/koleksi'],
            ['Catatan Penerapan', '/catatan'],
            ['Minta Sample', '/kontak'],
          ].map(([label, href]) => (
            <li key={href} className="bg-bone">
              <Link href={href} className="block px-6 py-6 font-semibold text-ink transition-colors hover:text-sage">
                {label} →
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
