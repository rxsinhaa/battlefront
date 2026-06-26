'use client';

const LOGOS = [
  {
    name: 'AWS',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3a9 9 0 0 1 9 9v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-1a9 9 0 0 1 9-9z" />
        <path d="M8 15c2 2 6 2 8 0" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: 'Meta',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 16c-3 0-5-2-5-4s2-4 5-4c2 0 3 1.5 4 2 1-.5 2-2 4-2 3 0 5 2 5 4s-2 4-5 4c-2 0-3-1.5-4-2-1 .5-2 2-4 2z" />
      </svg>
    )
  },
  {
    name: 'Microsoft',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <rect x="3" y="3" width="8" height="8" />
        <rect x="13" y="3" width="8" height="8" />
        <rect x="3" y="13" width="8" height="8" />
        <rect x="13" y="13" width="8" height="8" />
      </svg>
    )
  },
  {
    name: 'Google Cloud',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    )
  },
  {
    name: 'IBM',
    icon: (
      <svg className="w-6 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="3" y1="6" x2="21" y2="6" strokeWidth="2" />
        <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
        <line x1="3" y1="14" x2="21" y2="14" strokeWidth="2" />
        <line x1="3" y1="18" x2="21" y2="18" strokeWidth="2" />
      </svg>
    )
  },
  {
    name: 'ORACLE',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="12" cy="12" r="8" />
      </svg>
    )
  },
  {
    name: 'Databricks',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3l8 4.5v9L12 21L4 16.5v-9z" />
        <path d="M12 12l8-4.5" />
        <path d="M12 12v9" />
        <path d="M12 12L4 7.5" />
      </svg>
    )
  },
  {
    name: 'Snowflake',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
      </svg>
    )
  }
];

export function LogoStrip() {
  // Duplicate for seamless infinite marquee loop
  const marqueeItems = [...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <section className="w-full py-8 bg-oceanic-noir border-y border-nocturnal-expedition/10 overflow-hidden select-none">
      
      {/* Dynamic Keyframe for Marquee */}
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee-scroll {
          display: flex;
          width: max-content;
          animation: marquee-scroll 25s linear infinite;
        }
      `}</style>

      <div className="relative w-full max-w-6xl mx-auto px-4 flex items-center">
        {/* Soft edge masking for smooth fade */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-oceanic-noir to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-oceanic-noir to-transparent z-10 pointer-events-none" />

        <div className="w-full overflow-hidden">
          <div className="animate-marquee-scroll gap-12 lg:gap-20">
            {marqueeItems.map((logo, idx) => (
              <div
                key={`${logo.name}-${idx}`}
                className="flex items-center gap-2.5 text-nocturnal-expedition hover:text-mystic-mint/60 transition-colors duration-200"
                style={{ color: '#114C5A' }} // Using the exact requested color code #114C5A (Nocturnal Expedition)
              >
                {logo.icon}
                <span className="font-mono text-sm font-bold tracking-wider whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
