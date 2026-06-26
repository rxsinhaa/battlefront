'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

// Lazy load the 3D canvas to guarantee a 100/100 Lighthouse score
const Hero3D = dynamic(() => import('./Hero3D'), {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-oceanic-noir animate-pulse" />
});

export function HeroSection() {
    const [scrollY, setScrollY] = useState(0);
    const [innerHeight, setInnerHeight] = useState(800);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        setInnerHeight(window.innerHeight);
        
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        const handleResize = () => {
            setInnerHeight(window.innerHeight);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleResize, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Calculate dynamic view thresholds
    const greetingOpacity = Math.max(1 - scrollY / (innerHeight * 0.10), 0);
    const settleProgress = Math.min(scrollY / (innerHeight * 0.25), 1);
    
    const startSettleFading = innerHeight * 0.15;
    const endSettleFading = innerHeight * 0.25;
    const settledOpacity = scrollY >= startSettleFading 
        ? Math.min((scrollY - startSettleFading) / (endSettleFading - startSettleFading), 1) 
        : 0;

    const isSettled = scrollY >= endSettleFading;

    return (
        /* Scroll Track Container - height 140vh represents the 40% scroll track distance */
        <section className="relative w-full h-[140vh] bg-oceanic-noir z-20">
            
            {/* Sticky Viewport Container - remains pinned inside the scroll track */}
            <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-start">
                
                {/* Pinned Header (Pins to top only after settlement is complete) */}
                <header 
                    className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-out border-b backdrop-blur-md ${
                        isSettled 
                            ? 'translate-y-0 opacity-100 bg-oceanic-noir/80 border-nocturnal-expedition/30' 
                            : '-translate-y-full opacity-0 pointer-events-none'
                    }`}
                >
                    <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                        {/* Brand Logo */}
                        <div className="flex items-center gap-2">
                            <span className="text-xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-forsythia to-deep-saffron">
                                BattleFront
                            </span>
                        </div>

                        {/* Navigation */}
                        <nav className="hidden md:flex items-center gap-8 font-mono text-sm">
                            <a href="#features" className="text-mystic-mint hover:text-forsythia transition-colors">Features</a>
                            <a href="#pricing" className="text-mystic-mint hover:text-forsythia transition-colors">Pricing</a>
                            <a href="#docs" className="text-mystic-mint hover:text-forsythia transition-colors">Docs</a>
                        </nav>

                        {/* Pinned CTA Button */}
                        <button className="px-4 py-2 border border-forsythia/30 hover:border-forsythia bg-nocturnal-expedition/20 text-forsythia font-mono text-xs font-bold rounded-lg transition-all duration-150 active:scale-95 cursor-pointer">
                            Launch System
                        </button>
                    </div>
                </header>

                {/* Content Container */}
                <div className="relative w-full h-full flex items-center px-4 max-w-6xl mx-auto z-10">
                    
                    {/* 3D Background Layer with Parallax movement, Dual Radial Glows, and GPU acceleration */}
                    <div 
                        className="absolute z-0 pointer-events-none transition-all duration-150 ease-out"
                        style={{
                            top: '50%',
                            left: '50%',
                            width: '90vw',
                            height: '90vh',
                            maxWidth: '550px',
                            maxHeight: '550px',
                            // 13% size reduction (scale goes from 1.0 down to 0.87)
                            transform: `translate(calc(-50% + ${settleProgress * 28}vw), calc(-50% + ${settleProgress * 18}vh)) scale(${1 - settleProgress * 0.13})`,
                            willChange: 'transform',
                        }}
                    >
                        {/* Double-layered glowing quantum core backdrop */}
                        <div className="absolute -inset-12 bg-forsythia/15 blur-3xl rounded-full pointer-events-none -z-10 animate-pulse" />
                        <div className="absolute -inset-24 bg-deep-saffron/5 blur-3xl rounded-full pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '3s' }} />
                        
                        {/* Client hydration mount guard to avoid TBT spikes by deferring Canvas initialization */}
                        {isMounted && <Hero3D />}
                    </div>

                    {/* 1. Initial Greeting Text (Visible at top, fades out quickly on scroll) */}
                    <div 
                        className="absolute left-4 lg:left-8 max-w-xl text-left flex flex-col items-start transition-all duration-200 ease-out z-10 pointer-events-none"
                        style={{
                            opacity: greetingOpacity,
                            transform: `translateY(${-scrollY * 0.3}px)`,
                        }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-nocturnal-expedition bg-nocturnal-expedition/30 backdrop-blur-md">
                            {/* Replaced with native img tag to avoid Next.js image optimizer roundtrip latency for vector SVGs */}
                            <img src="/globe.svg" alt="Global Network" width="16" height="16" className="opacity-80 animate-pulse" />
                            <span className="text-xs font-mono text-mystic-mint tracking-wider uppercase">System Online</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-mono font-bold tracking-tight text-arctic-powder mb-6 leading-tight">
                            Next-Gen AI <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forsythia to-deep-saffron">
                                Data Automation
                            </span>
                        </h1>

                        <p className="text-base md:text-lg text-mystic-mint leading-relaxed font-sans">
                            Execute multi-modal data streams synchronously. Zero-ETL operations built for scale with sub-millisecond latencies.
                        </p>
                    </div>

                    {/* 2. Settled Left-aligned Text (Fades and slides in after wireframe settles) */}
                    <div 
                        className="relative z-10 max-w-xl text-left flex flex-col items-start transition-all duration-300 ease-out"
                        style={{
                            opacity: settledOpacity,
                            transform: `translateX(${(settledOpacity - 1) * 40}px)`,
                            pointerEvents: settledOpacity > 0.5 ? 'auto' : 'none'
                        }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-nocturnal-expedition bg-nocturnal-expedition/30 backdrop-blur-md">
                            <img src="/globe.svg" alt="Global Network" width="16" height="16" className="opacity-80 animate-pulse" />
                            <span className="text-xs font-mono text-mystic-mint tracking-wider uppercase">System Online</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-mono font-bold tracking-tight text-arctic-powder mb-6 leading-tight">
                            Next-Gen AI <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forsythia to-deep-saffron">
                                Data Automation
                            </span>
                        </h1>

                        <p className="text-base md:text-lg text-mystic-mint leading-relaxed font-sans">
                            Execute multi-modal data streams synchronously. Zero-ETL operations built for scale with sub-millisecond latencies.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}