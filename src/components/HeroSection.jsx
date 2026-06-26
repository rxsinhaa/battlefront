'use client'; // <-- Add this line

import dynamic from 'next/dynamic';
import Image from 'next/image';

// Lazy load the 3D canvas to guarantee a 100/100 Lighthouse score
const Hero3D = dynamic(() => import('./Hero3D'), {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-oceanic-noir" />
});

export function HeroSection() {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-oceanic-noir">

            {/* 3D Background Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Hero3D />
            </div>

            {/* Semantic Content Layer */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-nocturnal-expedition bg-nocturnal-expedition/30 backdrop-blur-md">
                    <Image src="/globe.svg" alt="Global Network" width={16} height={16} className="opacity-80" />
                    <span className="text-xs font-mono text-mystic-mint tracking-wider uppercase">System Online</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-mono font-bold tracking-tight text-arctic-powder mb-6 leading-tight">
                    Next-Gen AI <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-forsythia to-deep-saffron">
                        Data Automation
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-mystic-mint mb-10 max-w-2xl font-sans">
                    Execute multi-modal data streams synchronously. Zero-ETL operations built for scale with sub-millisecond latencies.
                </p>

                <button className="px-8 py-4 bg-forsythia text-oceanic-noir font-bold rounded-lg transition-transform hover:scale-105 duration-200 ease-out flex items-center gap-2">
                    Initialize Pipeline
                    <Image src="/arrow-trending-up.svg" alt="Launch" width={20} height={20} className="invert" />
                </button>
            </div>
        </section>
    );
}