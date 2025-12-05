import React from 'react';

// Floating decorative element component
const FloatingElement = ({ className, delay = 0, size = 'md', color = 'purple' }) => {
    const sizeClasses = {
        sm: 'w-3 h-3',
        md: 'w-5 h-5',
        lg: 'w-8 h-8',
        xl: 'w-12 h-12'
    };

    const colorClasses = {
        purple: 'bg-gradient-to-br from-purple-400 to-purple-600',
        blue: 'bg-gradient-to-br from-blue-400 to-blue-600',
        pink: 'bg-gradient-to-br from-pink-400 to-rose-500',
        cyan: 'bg-gradient-to-br from-cyan-400 to-teal-500',
        orange: 'bg-gradient-to-br from-orange-400 to-amber-500'
    };

    return (
        <div
            className={`absolute ${sizeClasses[size]} ${colorClasses[color]} rounded-full opacity-60 blur-[1px] animate-float ${className}`}
            style={{
                animationDelay: `${delay}s`,
                animationDuration: `${3 + Math.random() * 2}s`
            }}
        />
    );
};

// Orbiting dot component
const OrbitingDot = ({ radius, duration, delay = 0, color = 'purple', size = 'sm' }) => {
    const sizeClasses = {
        xs: 'w-2 h-2',
        sm: 'w-3 h-3',
        md: 'w-4 h-4'
    };

    const colorClasses = {
        purple: 'bg-purple-500',
        blue: 'bg-blue-500',
        pink: 'bg-pink-500',
        cyan: 'bg-cyan-500'
    };

    return (
        <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
                animation: `orbit ${duration}s linear infinite`,
                animationDelay: `${delay}s`
            }}
        >
            <div
                className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full shadow-lg`}
                style={{ transform: `translateX(${radius}px)` }}
            />
        </div>
    );
};

// Animated line/ring component
const AnimatedRing = ({ size, delay = 0, opacity = 0.3 }) => {
    return (
        <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/30 animate-pulse-ring"
            style={{
                width: size,
                height: size,
                animationDelay: `${delay}s`,
                opacity
            }}
        />
    );
};

export function LiveRenderPanel() {
    return (
        <div className="h-full w-full bg-gradient-to-br from-zinc-100 via-zinc-50 to-white rounded-lg overflow-hidden relative">
            {/* Background subtle grid */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.15) 1px, transparent 0)`,
                    backgroundSize: '24px 24px'
                }}
            />

            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 animate-gradient-shift" />

            {/* Center container */}
            <div className="absolute inset-0 flex items-center justify-center">
                {/* Animated rings around the box */}
                <AnimatedRing size="340px" delay={0} opacity={0.2} />
                <AnimatedRing size="400px" delay={0.5} opacity={0.15} />
                <AnimatedRing size="460px" delay={1} opacity={0.1} />

                {/* Orbiting dots */}
                <OrbitingDot radius={180} duration={8} delay={0} color="purple" size="sm" />
                <OrbitingDot radius={180} duration={8} delay={2} color="blue" size="xs" />
                <OrbitingDot radius={180} duration={8} delay={4} color="pink" size="sm" />
                <OrbitingDot radius={180} duration={8} delay={6} color="cyan" size="xs" />

                <OrbitingDot radius={220} duration={12} delay={1} color="blue" size="md" />
                <OrbitingDot radius={220} duration={12} delay={4} color="purple" size="sm" />
                <OrbitingDot radius={220} duration={12} delay={7} color="pink" size="xs" />
                <OrbitingDot radius={220} duration={12} delay={10} color="cyan" size="sm" />

                {/* Main video box */}
                <div className="relative z-10 flex flex-col items-center">
                    {/* Glow effect behind the box */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-pink-500/30 rounded-3xl blur-2xl animate-pulse" />

                    {/* The box with video */}
                    <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 overflow-hidden"
                        style={{ width: '280px', height: '200px' }}
                    >
                        {/* Gradient border effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20 pointer-events-none" />

                        {/* Video container */}
                        <div className="relative w-full h-full flex items-center justify-center p-2">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover rounded-xl"
                            >
                                <source src="/preview_animation" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        {/* Shimmer effect overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer pointer-events-none" />
                    </div>

                    {/* Text below the box */}
                    <div className="mt-6 text-center relative z-10">
                        <p className="text-zinc-600 font-medium text-sm">Live preview will load here</p>
                        <p className="text-zinc-400 text-xs mt-1">Start building to see your app come to life</p>
                    </div>
                </div>
            </div>

            {/* CSS animations */}
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) scale(1); }
                    50% { transform: translateY(-15px) scale(1.1); }
                }
                
                @keyframes orbit {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                @keyframes pulse-ring {
                    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
                    50% { transform: translate(-50%, -50%) scale(1.05); opacity: 0.5; }
                }
                
                @keyframes gradient-shift {
                    0%, 100% { opacity: 0.5; }
                    50% { opacity: 1; }
                }
                
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                
                .animate-float {
                    animation: float ease-in-out infinite;
                }
                
                .animate-pulse-ring {
                    animation: pulse-ring 3s ease-in-out infinite;
                }
                
                .animate-gradient-shift {
                    animation: gradient-shift 5s ease-in-out infinite;
                }
                
                .animate-shimmer {
                    animation: shimmer 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}
