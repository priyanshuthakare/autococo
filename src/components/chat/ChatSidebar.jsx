import { MessageSquare, Settings, CreditCard, Palette, LogOut, Plus, MoreHorizontal } from 'lucide-react';

export const ChatSidebar = () => {
    const previousChats = [
        { id: '1', title: "Stock Master CRM", date: "Today" },
        { id: '2', title: "E-commerce Dashboard", date: "Yesterday" },
        { id: '3', title: "Portfolio Website", date: "2 days ago" },
        { id: '4', title: "Task Management App", date: "Last week" },
    ];

    return (
        <div className="w-[260px] h-full bg-black bg-zinc-50 border-r border-zinc-200 flex flex-col flex-shrink-0 transition-colors duration-300">
            {/* New Chat Button */}
            <div className="p-4">
                <button className="w-full flex items-center gap-2 px-3 py-2 bg-black text-white rounded-lg hover:opacity-90 transition-all font-medium text-sm shadow-sm">
                    <Plus size={16} />
                    New Chat
                </button>
            </div>

            {/* Previous Chats */}
            <div className="flex-1 overflow-y-auto px-2 custom-scrollbar">
                <div className="text-xs font-medium text-zinc-500 px-2 py-2">Recent</div>
                <div className="space-y-1">
                    {previousChats.map((chat) => (
                        <button
                            key={chat.id}
                            className="w-full flex items-center gap-2 px-2 py-2 text-zinc-600 hover:text-black hover:bg-black/5 rounded-lg transition-colors text-sm text-left group"
                        >
                            <MessageSquare size={14} className="flex-shrink-0" />
                            <span className="truncate">{chat.title}</span>
                            <MoreHorizontal size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                    ))}
                </div>
            </div>

            {/* Account Section */}
            <div className="p-2 border-t border-zinc-200 ">
                <div className="p-2 rounded-lg hover:bg-black/5 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-medium text-xs">
                            JD
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-zinc-900 truncate">John Doe</div>
                            <div className="text-xs text-zinc-500 truncate">Free Plan</div>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <button className="w-full flex items-center gap-2 px-2 py-1.5 text-zinc-600 hover:text-black hover:bg-black/5 rounded-md transition-colors text-xs">
                            <Settings size={14} />
                            Settings
                        </button>
                        <button className="w-full flex items-center gap-2 px-2 py-1.5 text-zinc-600 hover:text-black hover:bg-black/5 rounded-md transition-colors text-xs">
                            <CreditCard size={14} />
                            Billing & Subscriptions
                        </button>
                        <div className="h-px bg-zinc-200 my-1" />
                        <button className="w-full flex items-center gap-2 px-2 py-1.5 text-red-500 hover:text-red-600 hover:bg-red-500/10 rounded-md transition-colors text-xs">
                            <LogOut size={14} />
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
