import { Github, Twitter } from 'lucide-react';

export const AutocopilotFooter = () => {
    return (
        <footer className="border-t border-zinc-200 bg-zinc-50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h4 className="text-zinc-900 font-semibold mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-zinc-600 ">
                            <li><a href="#" className="hover:text-zinc-900 transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-zinc-900 transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-zinc-900 transition-colors">Changelog</a></li>
                            <li><a href="#" className="hover:text-zinc-900 transition-colors">Docs</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-zinc-900 font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm text-zinc-600 ">
                            <li><a href="#" className="hover:text-zinc-900 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-zinc-900 transition-colors">Community</a></li>
                            <li><a href="#" className="hover:text-zinc-900 transition-colors">Support</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-zinc-900 font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-zinc-600 ">
                            <li><a href="#" className="hover:text-zinc-900 transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-zinc-900 transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-zinc-900 transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-zinc-900 font-semibold mb-4">Connect</h4>
                        <div className="flex gap-4">
                            <a href="#" className="text-zinc-600 hover:text-zinc-900 transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-zinc-600 hover:text-zinc-900 transition-colors">
                                <Github size={20} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-zinc-200 text-center text-sm text-zinc-600 ">
                    © 2025 Autocopilot. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
