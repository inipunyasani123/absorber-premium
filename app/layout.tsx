import "./globals.css"
import { Figtree } from "next/font/google"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

/* Figtree memikul seluruh teks. Tiga font Google lain yang dulu diimpor di
   globals (Inter/Manrope/Poppins) dibuang: memberatkan dan Manrope adalah
   font khas varian crave-amber. */
const display = Figtree({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const __jsonld = {"@context":"https://schema.org","@type":"CreativeWork","name":"EthyleneAbsorber — Konsep Premium","description":"Landing page produk ethylene absorber","url":"https://absorber-premium.pintuweb.id"};

export const metadata = {
  metadataBase: new URL("https://absorber-premium.pintuweb.id"),
  title: {
    default: "EthyleneAbsorber — Konsep Premium | Dickson Synergy",
    template: "%s — PT Dickson Synergy",
  },
  description: "Landing page EthyleneAbsorber konsep \"Premium\": bersih dan meyakinkan, menonjolkan kualitas dan kealamian produk.",
  applicationName: "EthyleneAbsorber",
  keywords: ["ethylene absorber", "kesegaran buah", "landing page premium", "desain web"],
  authors: [{ name: "EthyleneAbsorber" }],
  creator: "EthyleneAbsorber",
  publisher: "EthyleneAbsorber",
  alternates: { canonical: "https://absorber-premium.pintuweb.id" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://absorber-premium.pintuweb.id",
    siteName: "EthyleneAbsorber",
    title: "EthyleneAbsorber — Konsep Premium | Dickson Synergy",
    description: "Landing page EthyleneAbsorber konsep \"Premium\": bersih dan meyakinkan, menonjolkan kualitas dan kealamian produk.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "EthyleneAbsorber — Konsep Premium | Dickson Synergy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EthyleneAbsorber — Konsep Premium | Dickson Synergy",
    description: "Landing page EthyleneAbsorber konsep \"Premium\": bersih dan meyakinkan, menonjolkan kualitas dan kealamian produk.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
}

export const viewport = {
  themeColor: "#16191c",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${display.variable} antialiased bg-bone text-ink-soft selection:bg-sage selection:text-bone overflow-x-hidden max-w-[100vw]`}>
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-bone"
        >
          Lompat ke konten utama
        </a>
        <Navbar />
        <main id="konten">{children}</main>
        <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  )
}
