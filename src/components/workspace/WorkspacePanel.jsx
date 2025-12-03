import { useState } from 'react';
import { Eye, Code, Smartphone, Monitor, RefreshCw, ExternalLink, Plug, ChevronRight, ChevronDown, File, Folder, FileJson, FileCode, Search } from 'lucide-react';
import { AutocopilotAvatarGroup } from '../autocopilot/AutocopilotAvatarGroup';

// Mock File System Data
const initialFileSystem = [
    {
        id: 'shadcn-ui',
        name: 'shadcn-ui',
        type: 'folder',
        children: [
            {
                id: 'src',
                name: 'src',
                type: 'folder',
                children: [
                    {
                        id: 'components',
                        name: 'components',
                        type: 'folder',
                        children: [
                            { id: 'Header.tsx', name: 'Header.tsx', type: 'file', language: 'typescript' },
                            { id: 'Sidebar.tsx', name: 'Sidebar.tsx', type: 'file', language: 'typescript' },
                            { id: 'AgentSelector.tsx', name: 'AgentSelector.tsx', type: 'file', language: 'typescript' },
                        ]
                    },
                    {
                        id: 'pages',
                        name: 'pages',
                        type: 'folder',
                        children: [
                            { id: 'Index.tsx', name: 'Index.tsx', type: 'file', language: 'typescript' },
                            { id: 'NotFound.tsx', name: 'NotFound.tsx', type: 'file', language: 'typescript' },
                        ]
                    },
                    { id: 'App.tsx', name: 'App.tsx', type: 'file', language: 'typescript' },
                    { id: 'main.tsx', name: 'main.tsx', type: 'file', language: 'typescript' },
                    { id: 'index.css', name: 'index.css', type: 'file', language: 'css' },
                ]
            },
            { id: 'package.json', name: 'package.json', type: 'file', language: 'json' },
            { id: 'README.md', name: 'README.md', type: 'file', language: 'markdown' },
            { id: 'vite.config.ts', name: 'vite.config.ts', type: 'file', language: 'typescript' },
        ]
    }
];

const mockFileContent = {
    'Index.tsx': `import {useState} from 'react';
    import Header from '@/components/Header';
    import Sidebar from '@/components/Sidebar';
    import AgentSelector from '@/components/AgentSelector';
    import ChatInterface from '@/components/ChatInterface';
    import CodePreview from '@/components/CodePreview';
    import {agents as initialAgents, sampleMessages, sampleFiles} from '@/lib/mockData';
    import {Message, Agent} from '@/types';

    export default function Index() {
  const [agents, setAgents] = useState<Agent[]>(initialAgents);
    const [activeAgentId, setActiveAgentId] = useState(agents[0].id);
    const [messages, setMessages] = useState<Message[]>(sampleMessages);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
        id: \`m-\${Date.now()}\`,
    agentId: 'user-001',
    content,
    timestamp: new Date(),
    type: 'text',
    };

    setMessages([...messages, newMessage]);

    // Simulate agent response
    setTimeout(() => {
      const activeAgent = agents.find((a) => a.id === activeAgentId);
    if (activeAgent) {
        const responseMessage: Message = {
        id: \`m-\${Date.now()}-response\`,
    agentId: activeAgent.id,
    content: \`I understand you want to: "\${content}". Let me help you with that!\`,
    timestamp: new Date(),
    type: 'text',
        };
        setMessages((prev) => [...prev, responseMessage]);
      }
    }, 1000);
  };

    return (
    <div className="flex h-screen bg-background overflow-hidden">
        <Sidebar
            collapsed={isSidebarCollapsed}
            setCollapsed={setIsSidebarCollapsed}
        />
        <div className="flex-1 flex flex-col min-w-0">
            <Header />
            <main className="flex-1 flex overflow-hidden">
                <div className="flex-1 flex flex-col min-w-0 border-r border-border">
                    <AgentSelector
                        agents={agents}
                        activeAgentId={activeAgentId}
                        onSelectAgent={setActiveAgentId}
                    />
                    <ChatInterface
                        messages={messages}
                        onSendMessage={handleSendMessage}
                        activeAgentId={activeAgentId}
                    />
                </div>
                <CodePreview files={sampleFiles} />
            </main>
        </div>
    </div>
    );
}`,
    'App.tsx': `import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
    import Index from './pages/Index';
    import NotFound from './pages/NotFound';

    function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
    );
}

    export default App;`
};

const FileIcon = ({ name }) => {
    if (name.endsWith('.tsx') || name.endsWith('.ts')) return <FileCode size={14} className="text-blue-500" />;
    if (name.endsWith('.css')) return <FileCode size={14} className="text-sky-400" />;
    if (name.endsWith('.json')) return <FileJson size={14} className="text-yellow-500" />;
    return <File size={14} className="text-zinc-500" />;
};

export const WorkspacePanel = () => {
    const [activeTab, setActiveTab] = useState('preview');
    const [viewMode, setViewMode] = useState('desktop');
    const [showIntegrations, setShowIntegrations] = useState(false);
    const [expandedFolders, setExpandedFolders] = useState({ 'shadcn-ui': true, 'src': true, 'pages': true });
    const [activeFile, setActiveFile] = useState('Index.tsx');

    const toggleFolder = (id) => {
        setExpandedFolders(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const renderTree = (nodes, depth = 0) => {
        return nodes.map(node => (
            <div key={node.id}>
                <div
                    className={`flex items-center gap-1.5 py-1 px-2 cursor-pointer transition-colors text-sm
                        ${node.id === activeFile ? 'bg-blue-50 text-blue-600' : 'text-zinc-600 hover:text-black hover:bg-zinc-100'}
                    `}
                    style={{ paddingLeft: `${depth * 12 + 8}px` }}
                    onClick={() => {
                        if (node.type === 'folder') {
                            toggleFolder(node.id);
                        } else {
                            setActiveFile(node.id);
                        }
                    }}
                >
                    {node.type === 'folder' && (
                        <span className="text-zinc-400">
                            {expandedFolders[node.id] ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                        </span>
                    )}
                    {node.type === 'folder' ? (
                        <Folder size={14} className={`text-blue-400 ${expandedFolders[node.id] ? 'fill-blue-400/20' : ''}`} />
                    ) : (
                        <FileIcon name={node.name} />
                    )}
                    <span className="truncate">{node.name}</span>
                </div>
                {node.type === 'folder' && expandedFolders[node.id] && node.children && (
                    <div>{renderTree(node.children, depth + 1)}</div>
                )}
            </div>
        ));
    };

    return (
        <div className="flex flex-col h-full bg-zinc-50 border-l border-zinc-200 transition-colors duration-300">
            {/* Toolbar */}
            <div className="h-14 border-b border-zinc-200 flex items-center justify-between px-4 bg-white/50 backdrop-blur-md relative z-50">
                <div className="flex items-center gap-1 bg-black/5 p-1 rounded-lg border border-black/5 ">
                    <button
                        onClick={() => setActiveTab('preview')}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${activeTab === 'preview'
                            ? 'bg-white text-black shadow-sm'
                            : 'text-zinc-500 hover:text-black '
                            }`}
                    >
                        <Eye size={14} />
                        Preview
                    </button>
                    <button
                        onClick={() => setActiveTab('code')}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${activeTab === 'code'
                            ? 'bg-white text-black shadow-sm'
                            : 'text-zinc-500 hover:text-black '
                            }`}
                    >
                        <Code size={14} />
                        Code
                    </button>
                </div>

                <div className="flex items-center gap-2 relative">
                    <div className="mr-2 scale-75 origin-right">
                        <AutocopilotAvatarGroup showAddButton={false} />
                    </div>
                    <button
                        onClick={() => setShowIntegrations(!showIntegrations)}
                        className={`p-2 transition-colors ${showIntegrations ? 'text-black bg-black/5 rounded-md' : 'text-zinc-500 hover:text-black'}`}
                    >
                        <Plug size={16} />
                    </button>

                    {/* Integration Popup */}
                    {showIntegrations && (
                        <div className="absolute top-full right-0 mt-2 w-[284px] bg-black border border-zinc-200 rounded-xl shadow-xl z-50 overflow-hidden">
                            <div className="p-4">
                                <h3 className="text-sm font-semibold text-white mb-3">Integrations</h3>
                                <div className="h-px bg-zinc-100 mb-3" />
                                <div className="text-xs font-medium text-zinc-300 mb-3">Suggested</div>
                                <button className="w-full flex items-start gap-3 p-2 hover:bg-zinc-50 rounded-lg transition-colors text-left group">
                                    <div className="w-8 h-8 rounded-md bg-[#3ECF8E]/10 flex items-center justify-center flex-shrink-0">
                                        <img src="/supabase-icon.png" alt="Supabase" className="w-4 h-4 object-contain" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-white group-hover:text-black">Supabase</div>
                                        <div className="text-xs text-zinc-100">Add a database/edge functions</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    )}

                    {activeTab === 'preview' && (
                        <div className="flex items-center gap-1 bg-black/5 p-1 rounded-lg border border-black/5 mr-2">
                            <button
                                onClick={() => setViewMode('desktop')}
                                className={`p-1.5 rounded-md transition-all ${viewMode === 'desktop'
                                    ? 'bg-white text-black shadow-sm'
                                    : 'text-zinc-500 hover:text-black '
                                    }`}
                            >
                                <Monitor size={14} />
                            </button>
                            <button
                                onClick={() => setViewMode('mobile')}
                                className={`p-1.5 rounded-md transition-all ${viewMode === 'mobile'
                                    ? 'bg-white text-black shadow-sm'
                                    : 'text-zinc-500 hover:text-black '
                                    }`}
                            >
                                <Smartphone size={14} />
                            </button>
                        </div>
                    )}

                    <button className="p-2 text-zinc-500 hover:text-black transition-colors">
                        <RefreshCw size={16} />
                    </button>
                    <button className="p-2 text-zinc-500 hover:text-black transition-colors">
                        <ExternalLink size={16} />
                    </button>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-hidden bg-zinc-100 relative">
                {activeTab === 'preview' ? (
                    <div className="w-full h-full flex items-center justify-center p-8 overflow-y-auto custom-scrollbar">
                        <div
                            className={`bg-white transition-all duration-300 shadow-2xl overflow-hidden ${viewMode === 'mobile'
                                ? 'w-[375px] h-[812px] rounded-[3rem] border-8 border-zinc-800'
                                : 'w-full h-full rounded-xl border border-zinc-200 '
                                }`}
                        >
                            <iframe
                                src="about:blank" // Placeholder for actual preview
                                title="Preview"
                                className="w-full h-full bg-white"
                            />
                            {/* Overlay for mock demonstration since iframe is empty */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className={`text-center p-6 ${viewMode === 'mobile' ? 'text-black' : 'text-zinc-900 '}`}>
                                    <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Monitor className="text-blue-500 " size={32} />
                                    </div>
                                    <h3 className="text-lg font-medium mb-2">App Preview</h3>
                                    <p className="text-sm text-zinc-500 max-w-xs mx-auto">
                                        Your generated application will appear here.
                                        Interact with the chat to build something.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="w-full h-full flex items-center justify-center p-8 overflow-hidden">
                        <div className="w-full h-full bg-white rounded-xl border border-zinc-200 shadow-2xl overflow-hidden flex">
                            {/* File Explorer Sidebar */}
                            <div className="w-64 bg-zinc-50 border-r border-zinc-200 flex flex-col">
                                <div className="p-3 border-b border-zinc-200 bg-zinc-50">
                                    <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Explorer</div>
                                    <div className="text-sm font-medium text-zinc-900 truncate">shadcn-ui</div>
                                </div>
                                <div className="flex-1 overflow-y-auto py-2 custom-scrollbar">
                                    {renderTree(initialFileSystem)}
                                </div>
                            </div>

                            {/* Code Editor Area */}
                            <div className="flex-1 bg-white flex flex-col min-w-0">
                                {/* Breadcrumbs / File Tab */}
                                <div className="h-9 border-b border-zinc-100 flex items-center px-4 bg-white">
                                    <span className="text-xs text-zinc-500">shadcn-ui</span>
                                    <ChevronRight size={12} className="text-zinc-400 mx-1" />
                                    <span className="text-xs text-zinc-500">src</span>
                                    <ChevronRight size={12} className="text-zinc-400 mx-1" />
                                    <span className="text-xs text-zinc-500">pages</span>
                                    <ChevronRight size={12} className="text-zinc-400 mx-1" />
                                    <span className="text-xs font-medium text-zinc-900">{activeFile}</span>
                                </div>

                                {/* Editor Content */}
                                <div className="flex-1 overflow-auto custom-scrollbar relative font-mono text-sm">
                                    <div className="flex min-h-full">
                                        {/* Line Numbers */}
                                        <div className="w-12 bg-white border-r border-zinc-100 flex flex-col items-end py-4 pr-3 select-none text-zinc-300 text-xs leading-6">
                                            {(mockFileContent[activeFile] || '').split('\n').map((_, i) => (
                                                <div key={i}>{i + 1}</div>
                                            ))}
                                        </div>
                                        {/* Code Content */}
                                        <div className="flex-1 py-4 px-4">
                                            <pre className="text-zinc-800 leading-6 tab-4">
                                                <code>{mockFileContent[activeFile] || '// Select a file to view content'}</code>
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
