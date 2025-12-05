import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

// --- HELPER COMPONENTS (ICONS) ---

const GoogleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-2.641-.21-5.236-.611-7.743z" />
        <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
        <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
        <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.022 35.026 44 30.038 44 24c0-2.641-.21-5.236-.611-7.743z" />
    </svg>
);

// --- SUB-COMPONENTS ---

const GlassInputWrapper = ({ children }) => (
    <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 backdrop-blur-sm transition-colors focus-within:border-purple-400/70 focus-within:bg-purple-50/30">
        {children}
    </div>
);

const TestimonialCard = ({ testimonial, delay }) => (
    <div className={`animate-testimonial ${delay} flex items-start gap-3 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/20 p-5 w-64 shadow-lg`}>
        <img src={testimonial.avatarSrc} className="h-10 w-10 object-cover rounded-2xl" alt="avatar" />
        <div className="text-sm leading-snug">
            <p className="flex items-center gap-1 font-medium text-white">{testimonial.name}</p>
            <p className="text-white/70">{testimonial.handle}</p>
            <p className="mt-1 text-white/90">{testimonial.text}</p>
        </div>
    </div>
);

// --- MAIN COMPONENT ---

export const SignInPage = ({
    title = <span className="font-light text-zinc-900 tracking-tighter">Welcome Back</span>,
    description = "Access your account and continue your journey with us",
    heroImageSrc = "https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=2160&q=80",
    testimonials = [],
    onSignIn,
    onGoogleSignIn,
    onResetPassword,
    onCreateAccount,
}) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex flex-col md:flex-row font-sans w-full bg-zinc-50">
            {/* Left column: sign-in form */}
            <section className="flex-1 flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    <div className="flex flex-col gap-6">
                        <h1 className="animate-element animate-delay-100 text-4xl md:text-5xl font-semibold leading-tight">{title}</h1>
                        <p className="animate-element animate-delay-200 text-zinc-500">{description}</p>

                        <form className="space-y-5" onSubmit={onSignIn}>
                            <div className="animate-element animate-delay-300">
                                <label className="text-sm font-medium text-zinc-500 mb-2 block">Email Address</label>
                                <GlassInputWrapper>
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="w-full bg-transparent text-sm p-4 rounded-2xl focus:outline-none text-zinc-900 placeholder-zinc-400"
                                    />
                                </GlassInputWrapper>
                            </div>

                            <div className="animate-element animate-delay-400">
                                <label className="text-sm font-medium text-zinc-500 mb-2 block">Password</label>
                                <GlassInputWrapper>
                                    <div className="relative">
                                        <input
                                            name="password"
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="Enter your password"
                                            className="w-full bg-transparent text-sm p-4 pr-12 rounded-2xl focus:outline-none text-zinc-900 placeholder-zinc-400"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute inset-y-0 right-3 flex items-center"
                                        >
                                            {showPassword
                                                ? <EyeOff className="w-5 h-5 text-zinc-400 hover:text-zinc-600 transition-colors" />
                                                : <Eye className="w-5 h-5 text-zinc-400 hover:text-zinc-600 transition-colors" />
                                            }
                                        </button>
                                    </div>
                                </GlassInputWrapper>
                            </div>

                            <div className="animate-element animate-delay-500 flex items-center justify-between text-sm">
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input type="checkbox" name="rememberMe" className="custom-checkbox" />
                                    <span className="text-zinc-600">Keep me signed in</span>
                                </label>
                                <button
                                    type="button"
                                    onClick={onResetPassword}
                                    className="hover:underline text-purple-500 transition-colors"
                                >
                                    Reset password
                                </button>
                            </div>

                            <button
                                type="submit"
                                className="animate-element animate-delay-600 w-full rounded-2xl bg-zinc-900 py-4 font-medium text-white hover:bg-zinc-800 transition-colors"
                            >
                                Sign In
                            </button>
                        </form>

                        <div className="animate-element animate-delay-700 relative flex items-center justify-center">
                            <span className="w-full border-t border-zinc-200"></span>
                            <span className="px-4 text-sm text-zinc-400 bg-zinc-50 absolute">Or continue with</span>
                        </div>

                        <button
                            onClick={onGoogleSignIn}
                            className="animate-element animate-delay-800 w-full flex items-center justify-center gap-3 border border-zinc-200 rounded-2xl py-4 hover:bg-zinc-100 transition-colors text-zinc-700"
                        >
                            <GoogleIcon />
                            Continue with Google
                        </button>

                        <p className="animate-element animate-delay-900 text-center text-sm text-zinc-500">
                            New to our platform?{' '}
                            <button
                                onClick={onCreateAccount}
                                className="text-purple-500 hover:underline transition-colors"
                            >
                                Create Account
                            </button>
                        </p>
                    </div>
                </div>
            </section>

            {/* Right column: agents image */}
            <section className="hidden md:flex flex-1 relative p-4 items-center justify-center bg-gradient-to-br from-purple-50 via-zinc-50 to-blue-50">
                <div className="animate-slide-right animate-delay-300 relative">
                    <img
                        src="/agents_group.png"
                        alt="AI Agents"
                        className="max-w-md w-full h-auto object-contain drop-shadow-2xl"
                    />
                </div>
            </section>
        </div>
    );
};

export default SignInPage;
