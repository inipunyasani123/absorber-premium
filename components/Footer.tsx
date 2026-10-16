import Link from 'next/link'

const nav = [
  { label: 'Standar', href: '/#standar' },
  { label: 'Cara Kerja', href: '/#cara-kerja' },
  { label: 'Etalase', href: '/koleksi' },
  { label: 'Catatan Penerapan', href: '/catatan' },
  { label: 'Tanya Jawab', href: '/faq' },
  { label: 'Hubungi Kami', href: '/kontak' },
]

const legal = [
  { label: 'Kebijakan Privasi', href: '/privacy' },
  { label: 'Syarat & Ketentuan', href: '/terms' },
]

const standards = [
  ['BPOM RI', 'NA18191100273'],
  ['FDA', '21 CFR 175.300'],
  ['Uni Eropa', 'EU No 10/2011'],
  ['JHOSPA', 'Jepang'],
]

export default function Footer() {
  const tahun = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-ink text-bone/65">
      <div aria-hidden="true" className="hairlines-dark absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-10">
        <div className="grid gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-4">
          <div>
            <p className="text-[0.95rem] font-semibold tracking-tight text-bone">
              Ethylene<span className="text-sage-soft">Absorber</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-bone/75">
              Sachet penyerap etilen dan desiccant untuk rantai pasok komoditas segar. Dipasok oleh
              PT Dickson Synergy.
            </p>
          </div>

          <nav aria-label="Navigasi footer">
            <h2 className="tag mb-5 text-bone">Navigasi</h2>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:block sm:space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-sm transition-colors hover:text-sage-soft">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="tag mb-5 text-bone">Standar</h2>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-3.5 sm:block sm:space-y-3.5">
              {standards.map(([k, v]) => (
                <div key={k}>
                  <dt className="text-sm text-bone/75">{k}</dt>
                  <dd className="tag mt-1 text-bone/75">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h2 className="tag mb-5 text-bone">Permintaan</h2>
            <p className="max-w-xs text-sm leading-relaxed text-bone/75">
              Sample dan perhitungan dosis lewat satu formulir: komoditas, volume ruang, dan rute.
            </p>
            <Link
              href="/kontak"
              className="mt-6 inline-flex items-center justify-center border border-bone/40 px-5 py-3 text-sm font-semibold text-bone transition-colors hover:border-bone hover:bg-bone hover:text-ink"
            >
              Minta Sample
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-bone/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="tag text-bone/75">© {tahun} PT Dickson Synergy</p>
          <div className="flex gap-7">
            {legal.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm transition-colors hover:text-sage-soft">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
