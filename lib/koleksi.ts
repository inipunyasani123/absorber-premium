/* ============================================================================
   Etalase konsep "Premium". Empat produk, masing-masing diperlakukan seperti
   satu barang di butik: foto besar, satu kalimat, rincian garis rambut.
   Kalimatnya pendek dan tenang; angka hanya yang ada di brief.
   ========================================================================== */

export type Barang = {
  slug: string
  no: string
  nama: string
  image: string
  kelas: string
  kalimat: string
  uraian: string
  rincian: [string, string][]
  pakai: string[]
}

export const KOLEKSI: Barang[] = [
  {
    slug: 'ethyleneabsorber',
    no: '01',
    nama: 'EthyleneAbsorber',
    image: '/images/etalase/etalase-sachet.webp',
    kelas: 'Etilen',
    kalimat: 'Menahan pesan pematangan, agar buah tiba seperti saat dipetik.',
    uraian:
      'Sachet kecil berisi kalium permanganat yang menyerap gas etilen dari udara di sekitar buah. Isinya berubah dari ungu menjadi cokelat saat tugasnya selesai — tidak ada yang perlu ditebak.',
    rincian: [
      ['Cakupan', '1 sachet untuk 1–2 m³'],
      ['Masa efektif', '30 hari; hingga 45 hari pada kondisi ideal'],
      ['Indikator', 'Ungu ke cokelat'],
      ['Masa simpan', '2 tahun, kemasan belum dibuka'],
      ['Keamanan pangan', 'BPOM RI NA18191100273 · FDA · EU · JHOSPA'],
    ],
    pakai: ['Hitung dari volume ruang, bukan berat.', 'Buka tepat sebelum dipasang.', 'Tutup kemasan serapat mungkin.'],
  },
  {
    slug: 'container-dry-ii',
    no: '02',
    nama: 'Container Dry® II',
    image: '/images/etalase/etalase-container.webp',
    kelas: 'Kelembapan',
    kalimat: 'Kontainer tetap kering, kardus tetap tegak.',
    uraian:
      'Desiccant gantung untuk kontainer 20 dan 40 kaki. Menyerap uap air sebelum mengembun di dinding saat suhu berubah di tengah pelayaran.',
    rincian: [
      ['Bentuk', 'Strip gantung'],
      ['Untuk', 'Kontainer 20 ft & 40 ft'],
      ['Sertifikat', 'EcoTain®'],
      ['Jumlah', 'Ditetapkan per rute, secara tertulis'],
    ],
    pakai: ['Gantung merata di dinding samping.', 'Jangan tertekan muatan.', 'Pasangkan dengan EthyleneAbsorber untuk buah.'],
  },
  {
    slug: 'desi-pak',
    no: '03',
    nama: 'Desi Pak®',
    image: '/images/etalase/etalase-desipak.webp',
    kelas: 'Kelembapan',
    kalimat: 'Tanah liat alami, untuk kemasan yang lebih kecil.',
    uraian:
      'Kantong desiccant berbahan tanah liat yang bisa diselipkan di kardus ritel maupun di antara lapisan palet. Menjaga kelembapan di tingkat kemasan.',
    rincian: [
      ['Bahan', 'Tanah liat alami'],
      ['Bentuk', 'Kantong, beberapa ukuran'],
      ['Untuk', 'Kemasan ritel & palet'],
      ['Sertifikat', 'EcoTain®'],
    ],
    pakai: ['Pilih ukuran sesuai volume kemasan.', 'Letakkan sebelum kemasan ditutup.', 'Untuk palet, selipkan di antara lapisan.'],
  },
  {
    slug: 'silica-gel',
    no: '04',
    nama: 'Silica Gel',
    image: '/images/etalase/etalase-silika.webp',
    kelas: 'Kelembapan',
    kalimat: 'Untuk barang yang tidak boleh lembap sedikit pun.',
    uraian:
      'Butiran silica gel mutu industri dalam kantong kecil, untuk komponen, peralatan, dokumen, dan barang jadi di ruang tertutup yang sempit.',
    rincian: [
      ['Bahan', 'Silikon dioksida'],
      ['Bentuk', 'Butiran dalam kantong'],
      ['Mutu', 'Industri'],
      ['Untuk', 'Komponen, peralatan, arsip'],
    ],
    pakai: ['Letakkan di dalam kemasan tertutup.', 'Jangan dibuka dari kantongnya.', 'Bukan untuk dikonsumsi.'],
  },
]

export const barangBySlug = (slug: string) => KOLEKSI.find((b) => b.slug === slug)
