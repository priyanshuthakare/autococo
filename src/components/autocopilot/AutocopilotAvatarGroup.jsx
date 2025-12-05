import React from 'react';
import { Plus } from 'lucide-react';

export const AutocopilotAvatarGroup = ({ showAddButton = true }) => {
    const avatars = [
        { src: '/agent1.png', label: 'Comet' },
        { src: '/agent2.png', label: 'Nova' },
        { src: '/agent3.png', label: 'Cosmo' },
        { src: '/agent4.png', label: 'Stella' },
    ];

    return (
        <div className={`flex items-center px-1.5 bg-white border border-zinc-200 rounded-full shadow-sm ${showAddButton ? 'w-fit' : 'w-fit pr-3'} h-[50px] overflow-hidden`}>
            <div className="flex -space-x-3 items-center">
                {avatars.map((avatar, index) => (
                    <div
                        key={index}
                        className="relative w-10 h-10 rounded-full border-[3px] border-white bg-zinc-100 flex items-center justify-center overflow-hidden shrink-0"
                        title={avatar.label}
                    >
                        <img src={avatar.src} alt={avatar.label} className="w-full h-full object-cover" />
                    </div>
                ))}

                {/* Add Button */}
                {showAddButton && (
                    <button className="relative w-10 h-10 rounded-full border-[3px] border-white bg-zinc-50 flex items-center justify-center shrink-0 hover:bg-zinc-100 transition-colors group">
                        <div className="absolute inset-0 rounded-full border border-dashed border-zinc-300 group-hover:border-zinc-400" />
                        <Plus size={16} className="text-zinc-400 group-hover:text-zinc-600 z-10" />
                    </button>
                )}
            </div>
        </div>
    );
};
