import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const MgxHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-md transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-12">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-black to-zinc-600 flex items-center justify-center">
                            <span className="text-white font-bold text-lg">A</span>
                        </div>
                        <span className="text-zinc-900 font-semibold text-xl tracking-tight">AutoCopilot</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link to="#" className="text-black text-sm font-medium hover:text-black transition-colors">Product</Link>
                        <Link to="#" className="text-black text-sm font-medium hover:text-black transition-colors">Solutions</Link>
                        <Link to="#" className="text-black text-sm font-medium hover:text-black transition-colors">Research</Link>
                        <Link to="#" className="text-black text-sm font-medium hover:text-black transition-colors">Docs</Link>
                        <Link to="#" className="text-black text-sm font-medium hover:text-black transition-colors">Pricing</Link>
                    </nav>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link to="/login" className="text-black text-sm font-medium hover:text-black transition-colors">
                            Sign in
                        </Link>
                        <Link
                            to="/signup"
                            className="text-black text-sm font-medium bg-black text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
                        >
                            Sign up
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-zinc-600 hover:text-black p-2"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-b border-zinc-200 transition-colors duration-300">
                    <div className="px-4 pt-2 pb-4 space-y-1">
                        <Link to="#" className="block px-3 py-2 text-base font-medium text-zinc-600 hover:text-black hover:bg-black/5 rounded-md">Product</Link>
                        <Link to="#" className="block px-3 py-2 text-base font-medium text-zinc-600 hover:text-black hover:bg-black/5 rounded-md">Solutions</Link>
                        <Link to="#" className="block px-3 py-2 text-base font-medium text-zinc-600 hover:text-black hover:bg-black/5 rounded-md">Research</Link>
                        <Link to="#" className="block px-3 py-2 text-base font-medium text-zinc-600 hover:text-black hover:bg-black/5 rounded-md">Docs</Link>
                        <Link to="#" className="block px-3 py-2 text-base font-medium text-zinc-600 hover:text-black hover:bg-black/5 rounded-md">Pricing</Link>
                        <div className="pt-4 flex flex-col gap-2">
                            <Link to="/login" className="block px-3 py-2 text-base font-medium text-zinc-600 hover:text-black hover:bg-black/5 rounded-md">Sign in</Link>
                            <Link to="/signup" className="block px-3 py-2 text-base font-medium text-center bg-black text-white rounded-md">Sign up</Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};
