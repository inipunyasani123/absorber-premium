import type { MetadataRoute } from "next";
import { KOLEKSI } from "@/lib/koleksi";
import { CERITA } from "@/lib/catatan";

const BASE = "https://absorber-premium.pintuweb.id";

const routes: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/koleksi", priority: 0.9 },
  ...KOLEKSI.map((b) => ({ path: `/koleksi/${b.slug}`, priority: 0.8 })),
  { path: "/catatan", priority: 0.7 },
  ...CERITA.map((c) => ({ path: `/catatan/${c.slug}`, priority: 0.6 })),
  { path: "/faq", priority: 0.8 },
  { path: "/kontak", priority: 0.8 },
  { path: "/privacy", priority: 0.3 },
  { path: "/terms", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((r) => ({ url: `${BASE}${r.path}`, lastModified, changeFrequency: "monthly", priority: r.priority }));
}
