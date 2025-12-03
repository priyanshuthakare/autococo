import React from 'react';
import { Plus } from 'lucide-react';

export const MgxAvatarGroup = ({ showAddButton = true }) => {
    const avatars = [
        { color: 'bg-amber-400', label: '' }, // Yellow
        { color: 'bg-blue-400', label: '' },  // Blue
        { color: 'bg-purple-400', label: '' }, // Purple
        { color: 'bg-green-400', label: '' }, // Green
    ];

    return (
        <div className={`flex items-center px-1.5 bg-white border border-zinc-200 rounded-full shadow-sm ${showAddButton ? 'w-fit' : 'w-fit pr-3'} h-[50px] overflow-hidden`}>
            <div className="flex -space-x-3 items-center">
                {avatars.map((avatar, index) => (
                    <div
                        key={index}
                        className={`relative w-10 h-10 rounded-full border-[3px] border-white ${avatar.color} flex items-center justify-center overflow-hidden shrink-0`}
                        title={`User ${index + 1}`}
                    >
                        {/* Placeholder for avatar image */}
                        {/* <img src="..." alt="" className="w-full h-full object-cover" /> */}
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
