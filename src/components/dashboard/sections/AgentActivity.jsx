import React from 'react';
import { Clock, CheckCircle2, AlertCircle, Loader2, Terminal, MessageSquare } from 'lucide-react';

const agents = [
    { name: 'Comet', role: 'Engineer', status: 'Running', task: 'Generating backend API modules', progress: 65 },
    { name: 'Nova', role: 'Designer', status: 'Done', task: 'Completed UI wireframes', progress: 100 },
    { name: 'Cosmo', role: 'Data Analyst', status: 'Idle', task: 'Waiting for data ingestion', progress: 0 },
    { name: 'Stella', role: 'QA Engineer', status: 'Blocked', task: 'Waiting for backend build', progress: 0 },
];

const timelineEvents = [
    { id: 1, agent: 'Cosmo', message: 'Parsed user story #102: Dashboard UI', time: '10:00 AM' },
    { id: 2, agent: 'Nova', message: 'Generated initial architecture layout', time: '10:05 AM' },
    { id: 3, agent: 'Comet', message: 'Started backend module generation', time: '10:10 AM' },
    { id: 4, agent: 'Comet', message: 'Completed database schema migration', time: '10:15 AM' },
];

const liveLogs = [
    { id: 1, type: 'info', agent: 'System', message: 'Coordinator started new build cycle', time: '10:00:01' },
    { id: 2, type: 'success', agent: 'Cosmo', message: 'Successfully parsed 3 user stories', time: '10:00:45' },
    { id: 3, type: 'info', agent: 'Nova', message: 'Analyzing design requirements...', time: '10:02:10' },
    { id: 4, type: 'warning', agent: 'Stella', message: 'Test environment latency detected', time: '10:12:30' },
];

export const AgentActivity = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-zinc-900">Agent Activity Dashboard</h2>

            {/* Agent Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {agents.map((agent) => (
                    <div key={agent.name} className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 font-bold">
                                    {agent.name[0]}
                                </div>
                                <div>
                                    <div className="font-semibold text-zinc-900">{agent.name}</div>
                                    <div className="text-xs text-zinc-500">{agent.role}</div>
                                </div>
                            </div>
                            <div className={`px-2 py-1 rounded-full text-xs font-medium border ${agent.status === 'Running' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                                agent.status === 'Done' ? 'bg-green-50 text-green-600 border-green-100' :
                                    agent.status === 'Blocked' ? 'bg-red-50 text-red-600 border-red-100' :
                                        'bg-zinc-50 text-zinc-600 border-zinc-100'
                                }`}>
                                {agent.status}
                            </div>
                        </div>
                        <div className="space-y-1">
                            <div className="flex justify-between text-xs text-zinc-500">
                                <span>Current Task</span>
                                <span>{agent.progress}%</span>
                            </div>
                            <div className="w-full bg-zinc-100 rounded-full h-1.5 overflow-hidden">
                                <div
                                    className={`h-full rounded-full transition-all duration-500 ${agent.status === 'Blocked' ? 'bg-red-500' : 'bg-blue-500'}`}
                                    style={{ width: `${agent.progress}%` }}
                                />
                            </div>
                            <div className="text-xs text-zinc-600 truncate" title={agent.task}>
                                {agent.task}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[500px]">
                {/* Collaboration Timeline */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-zinc-200 shadow-sm flex flex-col overflow-hidden">
                    <div className="p-4 border-b border-zinc-200 bg-zinc-50/50 flex items-center gap-2">
                        <MessageSquare size={18} className="text-zinc-500" />
                        <h3 className="font-semibold text-zinc-800">Collaboration Timeline</h3>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
                        {timelineEvents.map((event) => (
                            <div key={event.id} className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-xs font-bold text-zinc-600 border border-zinc-200 z-10">
                                        {event.agent[0]}
                                    </div>
                                    <div className="w-px h-full bg-zinc-200 -mt-2 -mb-6" />
                                </div>
                                <div className="pb-6">
                                    <div className="text-xs text-zinc-400 mb-1">{event.time}</div>
                                    <div className="bg-zinc-50 border border-zinc-100 p-3 rounded-lg rounded-tl-none text-sm text-zinc-700 shadow-sm">
                                        <span className="font-semibold text-zinc-900 mr-1">{event.agent}:</span>
                                        {event.message}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Live Event Feed */}
                <div className="lg:col-span-1 bg-zinc-900 rounded-xl border border-zinc-800 shadow-sm flex flex-col overflow-hidden">
                    <div className="p-4 border-b border-zinc-800 bg-zinc-900 flex items-center gap-2">
                        <Terminal size={18} className="text-zinc-400" />
                        <h3 className="font-semibold text-zinc-100">Live Event Feed</h3>
                    </div>
                    <div className="flex-1 overflow-y-auto p-0 font-mono text-xs custom-scrollbar">
                        {liveLogs.map((log) => (
                            <div key={log.id} className="p-3 border-b border-zinc-800 hover:bg-white/5 transition-colors group">
                                <div className="flex items-center justify-between mb-1 opacity-60 group-hover:opacity-100 transition-opacity">
                                    <span className={`uppercase font-bold ${log.type === 'error' ? 'text-red-400' :
                                        log.type === 'warning' ? 'text-amber-400' :
                                            log.type === 'success' ? 'text-green-400' :
                                                'text-blue-400'
                                        }`}>{log.type}</span>
                                    <span className="text-zinc-500">{log.time}</span>
                                </div>
                                <div className="text-zinc-300">
                                    <span className="text-zinc-500 mr-2">[{log.agent}]</span>
                                    {log.message}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
