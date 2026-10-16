import Hero from '@/components/Hero'
import Standards from '@/components/Standards'
import Method from '@/components/Method'
import Penerapan from '@/components/Penerapan'

/* Alur etalase: pernyataan → tiga standar mutu → cara kerja & kepatuhan →
   tiga skenario penerapan, tanya jawab, dan ajakan. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Standards />
      <Method />
      <Penerapan />
    </>
  )
}
