/* ============================================================================
   "Catatan Penerapan" — tiga skenario konsep Premium, ditulis seperti artikel
   majalah: keadaan yang umum, apa yang diubah, dan apa yang bisa diharapkan.
   Ini skenario, bukan cerita pelanggan: tanpa nama orang, nama usaha, potret,
   atau kutipan. Angka hanya dari brief/FAQ (1 sachet untuk 1–2 m³, 24–48 jam,
   hari ke-3 → ke-7, 30 hari masa efektif, pelayaran laut 3–4 minggu).
   ========================================================================== */

export type Cerita = {
  slug: string
  no: string
  judul: string
  ringkas: string
  tempat: string
  image: string
  angka: [string, string][]
  isi: ({ p: string } | { h: string } | { inti: string })[]
}

export const CERITA: Cerita[] = [
  {
    slug: 'rak-yang-tidak-perlu-disortir-sore',
    no: '01',
    judul: 'Rak yang tidak perlu disortir sore hari',
    ringkas: 'Skenario toko buah: sachet dipasang di peti gudang belakang, tempat stok menunggu sebelum dipajang.',
    tempat: 'Toko buah · gudang belakang',
    image: '/images/l2.webp',
    angka: [['Dipasang di', 'peti gudang belakang'], ['Dosis', '1 sachet / 1–2 m³'], ['Diperiksa', 'warna indikator']],
    isi: [
      { p: 'Di banyak toko buah, sortir sore adalah rutinitas: pisang yang mulai berbintik dipisahkan, mangga yang melunak dipotong harganya, sisanya dibuang. Sebagian besar kerusakan itu tidak bermula di rak pajang, melainkan di gudang belakang — ruang tertutup tempat stok menunggu beberapa hari sebelum dipajang.' },
      { h: 'Yang diubah' },
      { p: 'Sachet tidak dipasang di rak pajang yang terbuka, melainkan di peti-peti gudang. Di sanalah etilen menumpuk paling banyak, karena ruangnya tertutup dan penuh buah klimakterik seperti pisang dan mangga. Jumlahnya dihitung dari volume ruang: satu sachet untuk 1–2 m³.' },
      { inti: 'Pasang sachet di tempat buah menunggu, bukan di tempat buah dipajang.' },
      { h: 'Yang bisa diharapkan' },
      { p: 'Perbedaan mulai tampak dalam 24–48 jam pertama. Buah yang biasanya menunjukkan tanda pembusukan pada hari ketiga umumnya masih layak hingga hari ketujuh atau lebih, bergantung pada jenis dan kondisinya. Warna indikator memberi tahu kapan sachet perlu diganti: ungu masih bekerja, cokelat berarti jenuh.' },
    ],
  },
  {
    slug: 'pengiriman-luar-kota-tanpa-taruhan',
    no: '02',
    judul: 'Pengiriman luar kota yang tidak lagi jadi taruhan',
    ringkas: 'Skenario distributor antarkota: dosis dihitung dari volume bak truk, warna indikator dicatat di gudang tujuan.',
    tempat: 'Distributor · bak truk',
    image: '/images/buahsegar2.webp',
    angka: [['Dasar dosis', 'volume bak, bukan berat'], ['Dosis', '1 sachet / 1–2 m³'], ['Diperiksa di', 'gudang tujuan']],
    isi: [
      { p: 'Bagi distributor antarkota, susut perjalanan sering dicatat sebagai biaya tetap: setiap truk berangkat dengan perkiraan bahwa sebagian muatan akan tiba terlalu matang untuk dijual dengan harga penuh.' },
      { h: 'Yang diubah' },
      { p: 'Perhitungan dosis dimulai dari volume bak truk, bukan berat muatan. Sachet diletakkan di sela peti — tidak di dasar tumpukan — dan kemasan luarnya dibuka tepat sebelum pemuatan, karena reaksinya dimulai begitu terpapar udara.' },
      { inti: 'Volume ruang, bukan berat muatan, yang menentukan jumlah sachet.' },
      { h: 'Yang bisa diharapkan' },
      { p: 'Di gudang tujuan, warna indikator dicatat untuk setiap pengiriman. Catatan itu menjadi dasar dosis rute berikutnya: bila sachet sudah cokelat merata saat tiba, dosisnya perlu dinaikkan. Untuk ekspor laut 3–4 minggu pun, pelayaran selesai sebelum batas 30 hari masa efektif sachet.' },
    ],
  },
  {
    slug: 'mutu-yang-sama-setiap-pagi',
    no: '03',
    judul: 'Mutu yang sama setiap pagi',
    ringkas: 'Skenario dapur kafe: buah disimpan di lemari tertutup bersama sachet, penghasil etilen dipisah dari yang peka.',
    tempat: 'Dapur kafe · lemari buah',
    image: '/images/l3.webp',
    angka: [['Disimpan di', 'lemari buah tertutup'], ['Dipisah', 'penghasil vs peka etilen'], ['Tujuan', 'kematangan seragam']],
    isi: [
      { p: 'Bagi dapur, masalahnya sering bukan buah yang busuk, melainkan buah yang tidak seragam. Mangga yang terlalu matang membuat jus terlalu manis; yang belum matang membuatnya asam — dan pelanggan tetap langsung merasakan bedanya.' },
      { h: 'Yang diubah' },
      { p: 'Buah disimpan di lemari tertutup dengan sachet di rak paling atas. Pisang dan mangga — penghasil etilen — dipisahkan dari stroberi dan jeruk, yang lebih dipengaruhi suhu dan kelembapan daripada etilen.' },
      { inti: 'Pisahkan penghasil etilen dari yang peka; sachet menjaga udara di antaranya.' },
      { h: 'Yang bisa diharapkan' },
      { p: 'Sachet tidak mengubah rasa, aroma, maupun tekstur — uji organoleptik tidak menemukan perbedaannya. Yang melambat adalah pematangan, sehingga buah yang dibeli di awal pekan tidak menyusul matang bersamaan dan resep tidak perlu disesuaikan setiap pagi.' },
    ],
  },
]

export const ceritaBySlug = (slug: string) => CERITA.find((c) => c.slug === slug)
