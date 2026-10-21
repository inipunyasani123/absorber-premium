// Render etalase empat produk PT Dickson Synergy untuk konsep Premium ("Etalase"): kemasan digambar ulang sebagai
// foto studio sederhana di atas latar bone — tanpa merek lain, label memakai Figtree. Keluaran HTML 1200x1200.
// Pemakaian: node scripts/ilustrasi/etalase-produk.mjs <folder> <folder-font>   (render tiap HTML ke WebP 1200x1200)
import { writeFileSync, mkdirSync } from 'node:fs'
import path from 'node:path'

const INK = '#16191c', SAGE = '#4a6b57', BONE = '#f4f2ee', K = '#6d4c9f'
const F = "'Figtree', sans-serif"
const t = (x, y, s, isi, o = {}) => `<text x="${x}" y="${y}" text-anchor="${o.a || 'middle'}" style="font-family:${F};font-size:${s}px;font-weight:${o.w || 500};letter-spacing:${o.ls ?? 0}em" fill="${o.c || INK}" ${o.op ? `opacity="${o.op}"` : ''}>${isi}</text>`
const gerigi = (x0, x1, y, h, step = 10) => { let d = `M${x0} ${y}`; for (let x = x0; x < x1; x += step) d += ` L${x + step / 2} ${y + h} L${x + step} ${y}`; return d }
const acak = (x0, y0, w, h, n, seed = 1) => { const o = []; let s = seed; const r = () => ((s = (s * 9301 + 49297) % 233280) / 233280); for (let i = 0; i < n; i++) o.push([x0 + r() * w, y0 + r() * h]); return o }

const defs = `<defs>
  <linearGradient id="dinding" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f7f5f1"/><stop offset="1" stop-color="#eeebe5"/></linearGradient>
  <linearGradient id="lantai" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e6e2da"/><stop offset="1" stop-color="#dcd7cd"/></linearGradient>
  <linearGradient id="kantong" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e9e7e3"/><stop offset="0.18" stop-color="#fbfaf8"/><stop offset="0.55" stop-color="#ffffff"/><stop offset="0.85" stop-color="#f1efeb"/><stop offset="1" stop-color="#dedbd5"/></linearGradient>
  <linearGradient id="kantongV" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity="0"/><stop offset="0.8" stop-color="#000" stop-opacity="0.03"/><stop offset="1" stop-color="#000" stop-opacity="0.08"/></linearGradient>
  <radialGradient id="manik" cx="0.35" cy="0.35" r="0.7"><stop offset="0" stop-color="#a08ac9"/><stop offset="1" stop-color="${K}"/></radialGradient>
  <radialGradient id="bening" cx="0.3" cy="0.3" r="0.75"><stop offset="0" stop-color="#ffffff"/><stop offset="0.7" stop-color="#e3ebee"/><stop offset="1" stop-color="#c9d6db"/></radialGradient>
  <filter id="b30" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="30"/></filter>
  <filter id="b10" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="10"/></filter>
  <filter id="b3" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3"/></filter>
  <filter id="serat"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3"/><feColorMatrix values="0 0 0 0 0.5  0 0 0 0 0.5  0 0 0 0 0.5  0 0 0 0.9 -0.2"/></filter>
</defs>`
const studio = `<rect width="1200" height="1200" fill="url(#dinding)"/><rect y="860" width="1200" height="340" fill="url(#lantai)"/>
  <rect y="852" width="1200" height="16" fill="#000" opacity="0.03"/><rect width="1200" height="1200" filter="url(#serat)" opacity="0.035"/>`
const bayang = (cx, cy, rx, ry) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx * 1.3}" ry="${ry * 1.8}" fill="#5c564c" opacity="0.18" filter="url(#b30)"/><ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry * 0.5}" fill="#3f3a33" opacity="0.28" filter="url(#b10)"/>`
const kantongDepan = (x, y, w, h, isi) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="url(#kantong)"/><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="url(#kantongV)"/>
  <path d="${gerigi(x, x + w, y + 26, -10, 10)}" fill="none" stroke="#cfcac2" stroke-width="2"/><path d="${gerigi(x, x + w, y + h - 26, 10, 10)}" fill="none" stroke="#cfcac2" stroke-width="2"/>
  <rect x="${x + 22}" y="${y + 40}" width="10" height="${h - 80}" fill="#fff" opacity="0.6" filter="url(#b3)"/>${isi}`

const P = {
  // EthyleneAbsorber: sachet putih, pita sage, jendela indikator ungu
  sachet: () => bayang(600, 905, 210, 26) + kantongDepan(420, 330, 360, 560, `
    ${t(600, 470, 40, `<tspan font-weight="700">Ethylene</tspan><tspan fill="${SAGE}">Absorber</tspan>`, { ls: -0.02 })}
    ${t(600, 506, 15, 'PENYERAP ETILEN', { ls: 0.22, op: 0.7 })}
    <line x1="470" y1="540" x2="730" y2="540" stroke="${INK}" stroke-opacity="0.15"/>
    <circle cx="600" cy="650" r="62" fill="#fff" stroke="${INK}" stroke-opacity="0.18" stroke-width="2"/><circle cx="600" cy="650" r="48" fill="${K}" opacity="0.9"/>
    ${acak(566, 616, 68, 68, 16, 7).filter(([a, b]) => (a - 600) ** 2 + (b - 650) ** 2 < 1500).map(([a, b]) => `<circle cx="${a.toFixed(1)}" cy="${b.toFixed(1)}" r="7" fill="url(#manik)"/>`).join('')}
    ${t(600, 752, 14, 'INDIKATOR WARNA', { ls: 0.18, w: 600, op: 0.75 })}
    <rect x="490" y="772" width="220" height="10" rx="5" fill="${SAGE}" opacity="0.85"/>
    ${t(600, 830, 15, '1 sachet · 1–2 m³', { op: 0.7 })}`),
  // Container Dry II: strip gantung tinggi, pengait arang
  container: () => bayang(600, 1000, 150, 22) + `<path d="M600 150 C 566 150 562 196 600 196 L600 236" fill="none" stroke="${INK}" stroke-width="8" stroke-linecap="round"/>
    <path d="M600 150 C 636 150 640 176 620 188" fill="none" stroke="${INK}" stroke-width="8" stroke-linecap="round"/>` + kantongDepan(495, 232, 210, 760, `
    <circle cx="600" cy="252" r="8" fill="#dcd7cf"/>
    ${t(600, 330, 30, 'Container', { w: 700, ls: -0.02 })}${t(600, 366, 30, 'Dry® II', { w: 700, c: SAGE, ls: -0.02 })}
    ${t(600, 396, 12, 'DESICCANT GANTUNG', { ls: 0.2, op: 0.7 })}
    ${[0, 1, 2, 3].map((i) => `<rect x="515" y="${430 + i * 132}" width="170" height="114" rx="4" fill="none" stroke="${INK}" stroke-opacity="0.1" stroke-width="2"/>`).join('')}
    ${acak(525, 572, 150, 92, 22, 5).map(([a, b]) => `<circle cx="${a.toFixed(1)}" cy="${b.toFixed(1)}" r="7" fill="url(#bening)" opacity="0.9"/>`).join('')}`),
  // Desi Pak: kantong bantal lebar
  desipak: () => bayang(600, 905, 260, 28) + `<path d="M360 380 Q600 356 840 380 Q866 630 840 880 Q600 904 360 880 Q334 630 360 380 Z" fill="url(#kantong)"/>
    <path d="M360 380 Q600 356 840 380 Q866 630 840 880 Q600 904 360 880 Q334 630 360 380 Z" fill="url(#kantongV)"/>
    <path d="M374 400 Q600 380 826 400" fill="none" stroke="#cfcac2" stroke-width="2" stroke-dasharray="3 6"/><path d="M374 860 Q600 880 826 860" fill="none" stroke="#cfcac2" stroke-width="2" stroke-dasharray="3 6"/>
    ${t(600, 566, 62, 'Desi Pak<tspan font-size="30" dy="-26">®</tspan>', { w: 700, ls: -0.02 })}
    ${t(600, 610, 15, 'DESICCANT · TANAH LIAT ALAMI', { ls: 0.2, op: 0.7 })}
    <rect x="520" y="650" width="160" height="10" rx="5" fill="${SAGE}" opacity="0.85"/>`,
  // Silica Gel: tiga kantong kecil + butiran
  silika: () => bayang(600, 905, 280, 26) + [[360, 470, -10], [640, 450, 8], [500, 500, -1]].map(([x, y, r]) => `<g transform="rotate(${r} ${x + 110} ${y + 160})">${kantongDepan(x, y, 220, 320, `
      ${t(x + 110, y + 98, 26, 'Silica Gel', { w: 700, ls: -0.01 })}${t(x + 110, y + 122, 11, 'DESICCANT · SiO₂', { ls: 0.18, op: 0.7 })}
      <rect x="${x + 36}" y="${y + 146}" width="148" height="96" rx="4" fill="url(#bening)" opacity="0.9"/>
      ${acak(x + 46, y + 156, 128, 76, 16, x).map(([a, b]) => `<circle cx="${a.toFixed(1)}" cy="${b.toFixed(1)}" r="7" fill="#fff" stroke="#c9d6db"/>`).join('')}
      ${t(x + 110, y + 280, 11, 'JANGAN DIMAKAN', { ls: 0.18, w: 700, c: SAGE })}`)}</g>`).join('') +
    acak(430, 880, 340, 40, 12, 9).map(([a, b]) => `<circle cx="${a.toFixed(1)}" cy="${b.toFixed(1)}" r="9" fill="url(#bening)"/>`).join(''),
}

const html = (isi, fontdir) => `<!doctype html><html><head><meta charset="utf-8"><link rel="stylesheet" href="file://${fontdir}/fonts.css"><style>html,body{margin:0}svg{display:block}</style></head><body>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200" viewBox="0 0 1200 1200">${defs}${studio}${isi}</svg></body></html>`

if (process.argv[1] && process.argv[1].endsWith('etalase-produk.mjs')) {
  const [, , out = './out', fontdir] = process.argv
  mkdirSync(out, { recursive: true })
  const batch = []
  for (const [n, f] of Object.entries(P)) {
    const fh = path.resolve(out, n + '.html')
    writeFileSync(fh, html(f(), path.resolve(fontdir)))
    batch.push({ in: fh, out: path.resolve(out, 'etalase-' + n + '.webp'), w: 1200, h: 1200, quality: 84, wait: 500 })
  }
  writeFileSync(path.join(out, 'batch.json'), JSON.stringify(batch, null, 1))
  console.log(batch.length, 'gambar')
}
