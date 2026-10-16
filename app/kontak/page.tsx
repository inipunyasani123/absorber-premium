'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'

/* Yang kembali setelah formulir dikirim. Telepon, surel, alamat, dan jam
   kerja yang dulu tertulis di sini karangan — kanal resmi klien belum ada. */
const kembali = [
  ['Perhitungan', 'Jumlah sachet tertulis', 'Dari volume ruang: 1 sachet untuk 1–2 m³.'],
  ['Sample', 'Untuk diuji di tempat Anda', 'Satu peti bersachet, satu peti pembanding.'],
  ['Lembar data', 'Spesifikasi & registrasi', 'BPOM RI NA18191100273 dan standar kontak pangan.'],
  ['Acuan', 'Kontainer 20 ft ± 33 m³', '40 ft ± 67 m³ · 40 ft HC ± 76 m³.'],
]

export default function KontakPage() {
  const [form, setForm] = useState({
    nama: '', perusahaan: '', surel: '', telepon: '', komoditas: '', volume: '', rute: '', catatan: '',
  })
  const [mengirim, setMengirim] = useState(false)
  const [selesai, setSelesai] = useState(false)

  const ubah = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const kirim = (e: React.FormEvent) => {
    e.preventDefault()
    setMengirim(true)
    // Purwarupa desain — pengiriman disimulasikan, tanpa backend.
    setTimeout(() => {
      setMengirim(false)
      setSelesai(true)
    }, 1100)
  }

  return (
    <div className="bg-bone">
      <header className="relative overflow-hidden bg-ink text-bone">
        <div aria-hidden="true" className="hairlines-dark absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-16 md:pt-40 md:pb-20">
          <p className="tag mb-6 text-sage-soft">Permintaan Sample</p>
          <h1 className="max-w-3xl text-[2.4rem] leading-[1.02] font-semibold tracking-[-0.04em] sm:text-5xl lg:text-[4rem]">
            Sebutkan muatannya, kami hitung dosisnya.
          </h1>
          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-bone/25 pt-8 lg:mt-14 lg:grid-cols-4">
            {kembali.map(([label, value, note]) => (
              <div key={label}>
                <dt className="tag text-bone/75">{label}</dt>
                <dd className="mt-2 text-sm font-semibold text-bone">{value}</dd>
                <dd className="mt-1.5 text-[0.8125rem] leading-relaxed text-bone/75">{note}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <section className="relative overflow-hidden py-16 md:py-24">
        <div aria-hidden="true" className="hairlines absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <AnimatePresence mode="wait">
            {selesai ? (
              <motion.div key="ok" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="border border-ink/15 bg-bone px-8 py-16 text-center">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center bg-ink text-bone">
                  <Check size={26} strokeWidth={2.5} />
                </div>
                <h2 className="text-xl font-semibold text-ink">Permintaan tercatat</h2>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-ink-soft">
                  Terima kasih. Halaman ini konsep desain untuk kontes, jadi formulir belum
                  tersambung dan data muatan Anda tidak terkirim.
                </p>
                <button
                  onClick={() => setSelesai(false)}
                  className="tag mt-8 border border-ink/25 px-5 py-3 text-ink transition-colors hover:border-ink/60"
                >
                  Isi permintaan lain
                </button>
              </motion.div>
            ) : (
              <motion.form key="f" onSubmit={kirim} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                <div className="grid gap-8 sm:grid-cols-2">
                  <Field label="Nama lengkap" name="nama" value={form.nama} onChange={ubah} required />
                  <Field label="Perusahaan" name="perusahaan" value={form.perusahaan} onChange={ubah} required />
                  <Field label="Surel" name="surel" type="email" value={form.surel} onChange={ubah} required />
                  <Field label="Telepon" name="telepon" type="tel" value={form.telepon} onChange={ubah} required />
                </div>

                <div className="border-t border-ink/15 pt-8">
                  <p className="tag mb-6 text-sage">Data muatan</p>
                  <div className="grid gap-8 sm:grid-cols-2">
                    <Field label="Komoditas" name="komoditas" value={form.komoditas} onChange={ubah} placeholder="Mis. manggis" required />
                    <Field label="Volume ruang (m³)" name="volume" type="number" min="1" value={form.volume} onChange={ubah} placeholder="Mis. 33" required />
                  </div>
                  <div className="mt-8">
                    <Field label="Rute pengiriman" name="rute" value={form.rute} onChange={ubah} placeholder="Mis. Surabaya → Yokohama" required />
                  </div>
                </div>

                <div className="border-t border-ink/15 pt-8">
                  <label htmlFor="catatan" className="tag mb-4 block text-ink-soft">
                    Catatan tambahan
                  </label>
                  <textarea
                    id="catatan"
                    name="catatan"
                    rows={4}
                    value={form.catatan}
                    onChange={ubah}
                    className="w-full resize-y border-b border-ink/25 bg-transparent pb-2 text-sm text-ink placeholder:text-ink-soft focus:border-sage focus:outline-none"
                    placeholder="Kendala yang pernah dialami atau target masa simpan Anda."
                  />
                </div>

                <button
                  type="submit"
                  disabled={mengirim}
                  className="w-full bg-ink py-4 text-sm font-semibold text-bone transition-colors hover:bg-sage-deep disabled:opacity-70"
                >
                  {mengirim ? 'Mengirim…' : 'Kirim Permintaan Sample'}
                </button>

                <p className="tag leading-[1.7] text-ink-soft">
                  Purwarupa desain — pengiriman formulir disimulasikan dan data tidak tersimpan.
                </p>
              </motion.form>
            )}
          </AnimatePresence>

          <p className="mt-12 border-t border-ink/15 pt-8 text-sm text-ink-soft">
            Sebagian besar pertanyaan sudah terjawab di{' '}
            <Link href="/faq" className="font-semibold text-sage underline-offset-4 hover:underline">
              halaman tanya jawab
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  )
}

function Field({
  label, name, value, onChange, type = 'text', required = false, placeholder, min,
}: {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  required?: boolean
  placeholder?: string
  min?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="tag mb-4 block text-ink-soft">
        {label}
        {required && <span className="ml-1 text-sage">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        min={min}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border-b border-ink/25 bg-transparent pb-2 text-sm text-ink placeholder:text-ink-soft focus:border-sage focus:outline-none"
      />
    </div>
  )
}
