import React from 'react';
import { LayoutDashboard, Settings, Activity, GitBranch, Code, FileText, Terminal, Database } from 'lucide-react';

export const DashboardSidebar = ({ activeSection, onNavigate }) => {
    const navItems = [
        { id: 'overview', label: 'Overview', icon: LayoutDashboard },
        { id: 'ado-setup', label: 'ADO Project Setup', icon: Database },
        { id: 'agent-activity', label: 'Agent Activity', icon: Activity },
        { id: 'build-timeline', label: 'Build Timeline', icon: GitBranch },
        { id: 'code-viewer', label: 'Generated Code', icon: Code },
        { id: 'test-reports', label: 'Test Reports', icon: FileText },
        { id: 'logs', label: 'Logs & Events', icon: Terminal },
        { id: 'settings', label: 'Settings', icon: Settings },
    ];

    return (
        <div className="w-64 bg-zinc-900 h-screen fixed left-0 top-0 text-white flex flex-col border-r border-zinc-800">
            <div className="h-14 flex items-center px-6 border-b border-zinc-800">
                <img src="/astronaut.png" alt="Logo" className="w-8 h-8 object-contain mr-2" />
                <span className="font-bold text-lg tracking-tight">AutoCopilot</span>
            </div>

            <nav className="flex-1 py-6 px-3 space-y-1">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => onNavigate(item.id)}
                            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive
                                ? 'bg-blue-600 text-white'
                                : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                                }`}
                        >
                            <Icon size={18} />
                            {item.label}
                        </button>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-zinc-800">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-xs font-bold">
                        U
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-medium">User</span>
                        <span className="text-xs text-zinc-500">Admin</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
