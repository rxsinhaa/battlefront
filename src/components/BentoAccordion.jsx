'use client';

import { useState } from 'react';
import Image from 'next/image';

const ITEMS = [
  {
    id: 'neural-compute',
    title: 'Neural Compute Engine',
    description: 'Execute multi-modal data streams synchronously.',
    icon: '/cube-16-solid.svg',
  },
  {
    id: 'vector-pipelines',
    title: 'Autonomous Vector Pipelines',
    description: 'Zero-ETL operations built for scale.',
    icon: '/arrow-path.svg',
  },
  {
    id: 'telemetry-orchestration',
    title: 'Telemetry Orchestration',
    description: 'Real-time edge analytics at sub-millisecond latencies.',
    icon: '/chart-pie.svg',
  }
];

export function BentoAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="features" className="w-full py-24 px-4 bg-oceanic-noir border-t border-nocturnal-expedition">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-mono text-arctic-powder mb-4">
            System Operations
          </h2>
          <p className="text-mystic-mint text-base md:text-lg max-w-2xl mx-auto">
            High-performance architecture optimized for decentralized machine learning and edge telemetry.
          </p>
        </div>

        {/* CSS Keyframes for Telemetry Sweep */}
        <style>{`
          @keyframes radar-sweep {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-radar-sweep {
            transform-origin: 100px 50px;
            animation: radar-sweep 5s linear infinite;
          }
        `}</style>

        {/* Desktop View: Bento Grid (lg: viewports) */}
        <div className="hidden lg:grid grid-cols-3 gap-6 auto-rows-fr">
          {/* Card 1: Neural Compute Engine (Col span 2) */}
          <article
            id="desktop-bento-card-0"
            onMouseEnter={() => setActiveIndex(0)}
            className={`p-8 rounded-2xl border transition-all duration-200 ease-out flex flex-col justify-between h-[360px] cursor-pointer ${
              activeIndex === 0
                ? 'bg-nocturnal-expedition border-forsythia shadow-lg shadow-forsythia/10 scale-[1.01]'
                : 'bg-neutral-900/50 border-nocturnal-expedition/30 hover:border-nocturnal-expedition/80'
            }`}
          >
            <div className="flex justify-between items-start">
              <div className="p-3 bg-neutral-900/40 rounded-xl border border-nocturnal-expedition/30">
                <Image src={ITEMS[0].icon} alt="" width={24} height={24} className="text-forsythia" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-mystic-mint/40">Core 01</span>
            </div>

            <div className="my-6 flex-grow flex items-center justify-center">
              <svg className="w-full max-w-[240px] h-32 text-arctic-powder/15" viewBox="0 0 200 100" fill="none">
                <line x1="40" y1="50" x2="100" y2="20" stroke="currentColor" strokeWidth="1" strokeDasharray={activeIndex === 0 ? "none" : "3 3"} className="transition-all duration-300" />
                <line x1="40" y1="50" x2="100" y2="80" stroke="currentColor" strokeWidth="1" />
                <line x1="100" y1="20" x2="160" y2="50" stroke="currentColor" strokeWidth="1" />
                <line x1="100" y1="80" x2="160" y2="50" stroke="currentColor" strokeWidth="1" />
                <line x1="100" y1="20" x2="100" y2="80" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                <circle cx="40" cy="50" r="6" className={`fill-oceanic-noir stroke-current transition-colors duration-200 ${activeIndex === 0 ? 'text-forsythia animate-pulse' : 'text-mystic-mint/40'}`} strokeWidth="2" />
                <circle cx="100" cy="20" r="6" className={`fill-oceanic-noir stroke-current transition-colors duration-200 ${activeIndex === 0 ? 'text-deep-saffron' : 'text-mystic-mint/40'}`} strokeWidth="2" />
                <circle cx="100" cy="80" r="6" className={`fill-oceanic-noir stroke-current transition-colors duration-200 ${activeIndex === 0 ? 'text-deep-saffron' : 'text-mystic-mint/40'}`} strokeWidth="2" />
                <circle cx="160" cy="50" r="6" className={`fill-oceanic-noir stroke-current transition-colors duration-200 ${activeIndex === 0 ? 'text-forsythia animate-pulse' : 'text-mystic-mint/40'}`} strokeWidth="2" />
              </svg>
            </div>

            <div>
              <h3 className="text-2xl font-mono font-bold text-arctic-powder mb-2">{ITEMS[0].title}</h3>
              <p className="text-mystic-mint text-sm">{ITEMS[0].description}</p>
            </div>
          </article>

          {/* Card 2: Autonomous Vector Pipelines (Col span 1) */}
          <article
            id="desktop-bento-card-1"
            onMouseEnter={() => setActiveIndex(1)}
            className={`p-8 rounded-2xl border transition-all duration-200 ease-out flex flex-col justify-between h-[360px] cursor-pointer ${
              activeIndex === 1
                ? 'bg-nocturnal-expedition border-forsythia shadow-lg shadow-forsythia/10 scale-[1.01]'
                : 'bg-neutral-900/50 border-nocturnal-expedition/30 hover:border-nocturnal-expedition/80'
            }`}
          >
            <div className="flex justify-between items-start">
              <div className="p-3 bg-neutral-900/40 rounded-xl border border-nocturnal-expedition/30">
                <Image src={ITEMS[1].icon} alt="" width={24} height={24} />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-mystic-mint/40">Core 02</span>
            </div>

            <div className="my-6 flex-grow flex items-center justify-center">
              <svg className="w-full max-w-[160px] h-32 text-arctic-powder/15" viewBox="0 0 200 100" fill="none">
                <path d="M20,50 L70,50 C90,50 110,20 130,20 L180,20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M70,50 C90,50 110,80 130,80 L180,80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                {activeIndex === 1 ? (
                  <>
                    <circle r="5" className="fill-forsythia">
                      <animateMotion dur="2.5s" repeatCount="indefinite" path="M20,50 L70,50 C90,50 110,20 130,20 L180,20" />
                    </circle>
                    <circle r="5" className="fill-deep-saffron">
                      <animateMotion dur="3.5s" repeatCount="indefinite" path="M70,50 C90,50 110,80 130,80 L180,80" />
                    </circle>
                  </>
                ) : (
                  <>
                    <circle cx="90" cy="35" r="4" className="fill-mystic-mint/30" />
                    <circle cx="120" cy="80" r="4" className="fill-mystic-mint/30" />
                  </>
                )}
              </svg>
            </div>

            <div>
              <h3 className="text-2xl font-mono font-bold text-arctic-powder mb-2">{ITEMS[1].title}</h3>
              <p className="text-mystic-mint text-sm">{ITEMS[1].description}</p>
            </div>
          </article>

          {/* Card 3: Telemetry Orchestration (Col span 3) */}
          <article
            id="desktop-bento-card-2"
            onMouseEnter={() => setActiveIndex(2)}
            className={`p-8 rounded-2xl border transition-all duration-200 ease-out flex flex-col lg:flex-row items-center justify-between gap-8 col-span-3 cursor-pointer ${
              activeIndex === 2
                ? 'bg-nocturnal-expedition border-forsythia shadow-lg shadow-forsythia/10 scale-[1.005]'
                : 'bg-neutral-900/50 border-nocturnal-expedition/30 hover:border-nocturnal-expedition/80'
            }`}
          >
            <div className="flex flex-col justify-between h-full max-w-xl py-2">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-neutral-900/40 rounded-xl border border-nocturnal-expedition/30">
                  <Image src={ITEMS[2].icon} alt="" width={24} height={24} />
                </div>
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-mystic-mint/40 block mb-2">Core 03</span>
                <h3 className="text-2xl font-mono font-bold text-arctic-powder mb-2">{ITEMS[2].title}</h3>
                <p className="text-mystic-mint text-sm">{ITEMS[2].description}</p>
              </div>
            </div>

            <div className="flex-grow flex items-center justify-center max-w-xs">
              <svg className="w-full h-36 text-arctic-powder/15" viewBox="0 0 200 100" fill="none">
                <circle cx="100" cy="50" r="40" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="100" cy="50" r="25" stroke="currentColor" strokeWidth="1" />
                <circle cx="100" cy="50" r="10" stroke="currentColor" strokeWidth="1" />
                <line x1="100" y1="10" x2="100" y2="90" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="60" y1="50" x2="140" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                <line
                  x1="100"
                  y1="50"
                  x2="135"
                  y2="30"
                  stroke={activeIndex === 2 ? '#FFC801' : 'currentColor'}
                  strokeWidth="2"
                  className={activeIndex === 2 ? 'animate-radar-sweep' : ''}
                />
              </svg>
            </div>
          </article>
        </div>

        {/* Mobile View: Fluid Accordion (below lg: viewports) */}
        <div className="block lg:hidden space-y-4">
          {ITEMS.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <article
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen
                    ? 'bg-nocturnal-expedition border-forsythia shadow-lg shadow-forsythia/5'
                    : 'bg-neutral-900/50 border-nocturnal-expedition/30'
                }`}
              >
                {/* Header Accordion Button */}
                <button
                  id={`accordion-trigger-${index}`}
                  onClick={() => setActiveIndex(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-6 cursor-pointer text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg border transition-colors duration-200 ${
                      isOpen 
                        ? 'bg-neutral-900/40 border-forsythia/30' 
                        : 'bg-neutral-900/60 border-nocturnal-expedition/20'
                    }`}>
                      <Image src={item.icon} alt="" width={20} height={20} />
                    </div>
                    <span className="font-mono font-bold text-lg text-arctic-powder">
                      {item.title}
                    </span>
                  </div>
                  <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <Image src="/chevron-down.svg" alt="" width={18} height={18} />
                  </div>
                </button>

                {/* Content Area with smooth height transition */}
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-1">
                      <p className="text-mystic-mint text-sm mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      
                      {/* Responsive Mini Visualizer */}
                      <div className="w-full h-24 bg-neutral-950/40 border border-nocturnal-expedition/20 rounded-xl flex items-center justify-center">
                        {index === 0 && (
                          <svg className="w-full max-w-[160px] h-16 text-arctic-powder/15" viewBox="0 0 200 100" fill="none">
                            <line x1="40" y1="50" x2="100" y2="20" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                            <line x1="40" y1="50" x2="100" y2="80" stroke="currentColor" strokeWidth="1" />
                            <line x1="100" y1="20" x2="160" y2="50" stroke="currentColor" strokeWidth="1" />
                            <line x1="100" y1="80" x2="160" y2="50" stroke="currentColor" strokeWidth="1" />
                            <circle cx="40" cy="50" r="5" className="fill-oceanic-noir stroke-forsythia text-forsythia" strokeWidth="1.5" />
                            <circle cx="100" cy="20" r="5" className="fill-oceanic-noir stroke-deep-saffron text-deep-saffron" strokeWidth="1.5" />
                            <circle cx="100" cy="80" r="5" className="fill-oceanic-noir stroke-deep-saffron text-deep-saffron" strokeWidth="1.5" />
                            <circle cx="160" cy="50" r="5" className="fill-oceanic-noir stroke-forsythia text-forsythia" strokeWidth="1.5" />
                          </svg>
                        )}
                        {index === 1 && (
                          <svg className="w-full max-w-[120px] h-16 text-arctic-powder/15" viewBox="0 0 200 100" fill="none">
                            <path d="M20,50 L70,50 C90,50 110,20 130,20 L180,20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M70,50 C90,50 110,80 130,80 L180,80" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <circle cx="90" cy="35" r="4" className="fill-forsythia" />
                            <circle cx="120" cy="80" r="4" className="fill-deep-saffron" />
                          </svg>
                        )}
                        {index === 2 && (
                          <svg className="w-full max-w-[120px] h-16 text-arctic-powder/15" viewBox="0 0 200 100" fill="none">
                            <circle cx="100" cy="50" r="30" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                            <circle cx="100" cy="50" r="15" stroke="currentColor" strokeWidth="1" />
                            <line x1="100" y1="20" x2="100" y2="80" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                            <line x1="70" y1="50" x2="130" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                            <line x1="100" y1="50" x2="125" y2="35" stroke="#FFC801" strokeWidth="1.5" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
