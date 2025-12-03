import React from 'react';
import { DashboardSidebar } from './DashboardSidebar';

export const DashboardLayout = ({ children, activeSection, onNavigate }) => {
    return (
        <div className="min-h-screen bg-zinc-50">
            <DashboardSidebar activeSection={activeSection} onNavigate={onNavigate} />
            <main className="pl-64 min-h-screen transition-all duration-300">
                <div className="max-w-7xl mx-auto p-8">
                    {children}
                </div>
            </main>
        </div>
    );
};
