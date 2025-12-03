import React, { useState } from 'react';
import { Folder, FileCode, FileJson, ChevronRight, ChevronDown, Download, Copy, Check } from 'lucide-react';

const fileSystem = [
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
                ]
            },
            { id: 'App.tsx', name: 'App.tsx', type: 'file', language: 'typescript' },
            { id: 'main.tsx', name: 'main.tsx', type: 'file', language: 'typescript' },
        ]
    },
    { id: 'package.json', name: 'package.json', type: 'file', language: 'json' },
    { id: 'README.md', name: 'README.md', type: 'file', language: 'markdown' },
];

const mockCode = `import React from 'react';

export const Header = () => {
    return (
        <header className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <span className="text-xl font-bold text-gray-900">App Logo</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};`;

export const CodeViewer = () => {
    const [activeFile, setActiveFile] = useState('Header.tsx');
    const [expandedFolders, setExpandedFolders] = useState({ 'src': true, 'components': true });
    const [copied, setCopied] = useState(false);

    const toggleFolder = (id) => {
        setExpandedFolders(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(mockCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const renderTree = (nodes, depth = 0) => {
        return nodes.map(node => (
            <div key={node.id}>
                <div
                    className={`flex items-center gap-1.5 py-1.5 px-2 cursor-pointer transition-colors text-sm rounded-md
                        ${node.id === activeFile ? 'bg-blue-50 text-blue-600' : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'}
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
                        <FileCode size={14} className="text-zinc-500" />
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
        <div className="h-[calc(100vh-140px)] flex flex-col">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-zinc-900">Generated Code</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors shadow-sm text-sm font-medium">
                    <Download size={16} />
                    Download ZIP
                </button>
            </div>

            <div className="flex-1 bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden flex">
                {/* File Explorer */}
                <div className="w-64 bg-zinc-50 border-r border-zinc-200 flex flex-col">
                    <div className="p-4 border-b border-zinc-200 bg-zinc-50">
                        <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Explorer</div>
                    </div>
                    <div className="flex-1 overflow-y-auto py-2 px-2 custom-scrollbar">
                        {renderTree(fileSystem)}
                    </div>
                </div>

                {/* Code Editor */}
                <div className="flex-1 flex flex-col min-w-0 bg-white">
                    <div className="h-10 border-b border-zinc-200 flex items-center justify-between px-4 bg-white">
                        <div className="flex items-center gap-2 text-sm text-zinc-600">
                            <FileCode size={14} className="text-blue-500" />
                            <span className="font-medium">{activeFile}</span>
                        </div>
                        <button
                            onClick={handleCopy}
                            className="p-1.5 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 rounded-md transition-colors"
                            title="Copy code"
                        >
                            {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                        </button>
                    </div>
                    <div className="flex-1 overflow-auto p-4 font-mono text-sm bg-[#fafafa]">
                        <pre className="text-zinc-800 leading-relaxed">
                            <code>{mockCode}</code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
};
