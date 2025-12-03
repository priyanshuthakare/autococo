import { ArrowUpRight } from 'lucide-react';

const showcases = [
    {
        title: "Artisan Coffee Roastery",
        category: "E-commerce",
        image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800",
        description: "A premium coffee shop website with subscription management."
    },
    {
        title: "Rhythm Game Concept",
        category: "Entertainment",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
        description: "Interactive music rhythm game with visualizer."
    },
    {
        title: "DevOps Dashboard",
        category: "SaaS",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        description: "Real-time monitoring dashboard for cloud infrastructure."
    },
    {
        title: "AI Chat Interface",
        category: "Productivity",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        description: "Modern chat UI with streaming responses and code highlighting."
    }
];

export const AutocopilotShowcase = () => {
    return (
        <section className="py-24 px-4 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                            Use cases by the AutoCopilot team
                        </h2>
                        <p className="text-zinc-400 max-w-xl">
                            Explore what's possible with AI-driven development. From simple landing pages to complex web applications.
                        </p>
                    </div>
                    <button className="hidden md:flex items-center gap-2 text-zinc-400 hover:text-black transition-colors">
                        View all examples <ArrowUpRight size={16} />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {showcases.map((item, index) => (
                    <div
                        key={index}
                        className="group relative rounded-2xl overflow-hidden border border-white/10 bg-surface hover:border-white/20 transition-all duration-300"
                    >
                        <div className="aspect-video overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-medium text-blue-400 px-2 py-1 rounded-full bg-blue-400/10 border border-blue-400/20">
                                    {item.category}
                                </span>
                                <ArrowUpRight className="text-zinc-500 group-hover:text-black transition-colors" size={20} />
                            </div>
                            <h3 className="text-xl font-semibold text-black mb-2">{item.title}</h3>
                            <p className="text-zinc-400 text-sm">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
