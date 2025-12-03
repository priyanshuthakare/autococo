import React, { useState } from 'react';
import { Search, Filter, Download, AlertCircle, Info, CheckCircle, AlertTriangle } from 'lucide-react';

const logs = [
    { id: 1, timestamp: '2023-10-27 10:15:30', level: 'INFO', agent: 'System', message: 'Build process completed successfully.' },
    { id: 2, timestamp: '2023-10-27 10:15:28', level: 'INFO', agent: 'Stella', message: 'All tests passed. Generating report.' },
    { id: 3, timestamp: '2023-10-27 10:15:15', level: 'WARN', agent: 'Comet', message: 'Deprecated API usage detected in module auth.ts' },
    { id: 4, timestamp: '2023-10-27 10:14:55', level: 'INFO', agent: 'Comet', message: 'Backend compilation finished in 2.3s' },
    { id: 5, timestamp: '2023-10-27 10:12:30', level: 'ERROR', agent: 'System', message: 'Connection timeout to ADO API (retry 1/3)' },
    { id: 6, timestamp: '2023-10-27 10:10:05', level: 'INFO', agent: 'Nova', message: 'UI components rendered.' },
    { id: 7, timestamp: '2023-10-27 10:05:00', level: 'INFO', agent: 'Cosmo', message: 'User stories parsing complete.' },
];

export const LogsEvents = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterLevel, setFilterLevel] = useState('ALL');

    const filteredLogs = logs.filter(log => {
        const matchesSearch = log.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
            log.agent.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesLevel = filterLevel === 'ALL' || log.level === filterLevel;
        return matchesSearch && matchesLevel;
    });

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-zinc-900">Logs & Events</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 rounded-lg hover:bg-zinc-50 transition-colors shadow-sm text-sm font-medium text-zinc-700">
                    <Download size={16} />
                    Export Logs
                </button>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
                <div className="relative flex-1 max-w-md">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                    <input
                        type="text"
                        placeholder="Search logs..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                </div>
                <div className="flex items-center gap-2 border-l border-zinc-200 pl-4">
                    <Filter size={16} className="text-zinc-400" />
                    <select
                        value={filterLevel}
                        onChange={(e) => setFilterLevel(e.target.value)}
                        className="border-none bg-transparent focus:ring-0 text-sm font-medium text-zinc-700 cursor-pointer"
                    >
                        <option value="ALL">All Levels</option>
                        <option value="INFO">Info</option>
                        <option value="WARN">Warning</option>
                        <option value="ERROR">Error</option>
                    </select>
                </div>
            </div>

            {/* Logs Table */}
            <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm font-mono">
                        <thead className="bg-zinc-50 text-zinc-500 font-medium font-sans">
                            <tr>
                                <th className="px-6 py-3 w-48">Timestamp</th>
                                <th className="px-6 py-3 w-24">Level</th>
                                <th className="px-6 py-3 w-32">Agent</th>
                                <th className="px-6 py-3">Message</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-200">
                            {filteredLogs.map((log) => (
                                <tr key={log.id} className="hover:bg-zinc-50 transition-colors">
                                    <td className="px-6 py-3 text-zinc-500 whitespace-nowrap">{log.timestamp}</td>
                                    <td className="px-6 py-3">
                                        <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-bold ${log.level === 'INFO' ? 'bg-blue-50 text-blue-600' :
                                                log.level === 'WARN' ? 'bg-amber-50 text-amber-600' :
                                                    'bg-red-50 text-red-600'
                                            }`}>
                                            {log.level === 'INFO' && <Info size={12} />}
                                            {log.level === 'WARN' && <AlertTriangle size={12} />}
                                            {log.level === 'ERROR' && <AlertCircle size={12} />}
                                            {log.level}
                                        </span>
                                    </td>
                                    <td className="px-6 py-3 font-semibold text-zinc-700">{log.agent}</td>
                                    <td className="px-6 py-3 text-zinc-800">{log.message}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {filteredLogs.length === 0 && (
                    <div className="p-8 text-center text-zinc-500">
                        No logs found matching your criteria.
                    </div>
                )}
            </div>
        </div>
    );
};
