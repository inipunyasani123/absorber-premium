import React from 'react';

/* ============================================================================
   Primitif "Etalase".
   Setiap bagian dibuka dengan angka besar beroutline dan label kapital
   renggang — struktur yang sama seperti label pada rak butik.
   ========================================================================== */

type Tone = 'light' | 'dark';

export function SectionHead({
  no,
  tag,
  title,
  lead,
  tone = 'light',
  action,
  className = '',
}: {
  no: string;
  tag: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  tone?: Tone;
  action?: React.ReactNode;
  className?: string;
}) {
  const titleColor = tone === 'dark' ? 'text-bone' : 'text-ink';
  const leadColor = tone === 'dark' ? 'text-bone/75' : 'text-ink-soft';
  const tagColor = tone === 'dark' ? 'text-sage-soft' : 'text-sage';

  return (
    <div className={`grid gap-8 md:grid-cols-[auto_minmax(0,1fr)] md:gap-12 ${className}`}>
      <span aria-hidden="true" className={`numeral ${tone === 'dark' ? 'text-bone' : 'text-ink'}`}>
        {no}
      </span>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className={`tag mb-4 ${tagColor}`}>{tag}</p>
          <h2
            className={`text-[2rem] leading-[1.1] font-semibold md:text-[2.5rem] lg:text-[2.9rem] ${titleColor}`}
          >
            {title}
          </h2>
          {lead && <p className={`mt-5 leading-relaxed ${leadColor}`}>{lead}</p>}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
    </div>
  );
}

/** Angka dengan keterangan — dipakai pada pita data. */
export function Stat({
  value,
  label,
  tone = 'light',
}: {
  value: string;
  label: string;
  tone?: Tone;
}) {
  return (
    <div>
      <div
        className={`text-[1.4rem] leading-none font-semibold tracking-tight sm:text-[1.9rem] ${
          tone === 'dark' ? 'text-bone' : 'text-ink'
        }`}
      >
        {value}
      </div>
      <div className={`tag mt-3 leading-[1.5] ${tone === 'dark' ? 'text-bone/75' : 'text-ink-soft'}`}>
        {label}
      </div>
    </div>
  );
}
