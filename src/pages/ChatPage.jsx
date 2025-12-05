import { useState } from 'react';
import { ChatInterface } from '../components/chat/ChatInterface';
import { ChatSidebar } from '../components/chat/ChatSidebar';
import { WorkspacePanel } from '../components/workspace/WorkspacePanel';
import { useLocation } from 'react-router-dom';

export const ChatPage = () => {
    const location = useLocation();
    console.log("ChatPage mounted", location);
    const initialPrompt = location.state?.initialPrompt;
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-zinc-50 overflow-hidden relative transition-colors duration-300">
            {/* Overlay Sidebar */}
            <div
                className={`absolute top-0 left-0 bottom-0 z-[110] transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <ChatSidebar />
            </div>

            {/* Backdrop for mobile/overlay feel */}
            {isSidebarOpen && (
                <div
                    className="absolute inset-0 bg-black/50 z-[100] backdrop-blur-sm transition-opacity"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Main Content Area */}
            <div className="flex-1 flex overflow-hidden">
                {/* Chat Panel - Resized to 488px width */}
                <div className="w-[488px] h-full flex flex-col border-r border-zinc-200 flex-shrink-0 bg-white transition-colors duration-300">
                    <ChatInterface
                        initialPrompt={initialPrompt}
                        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
                    />
                </div>

                {/* Workspace Panel - Takes remaining space */}
                <div className="flex-1 h-full flex flex-col bg-zinc-100 min-w-0 transition-colors duration-300">
                    <WorkspacePanel />
                </div>
            </div>
        </div>
    );
};
