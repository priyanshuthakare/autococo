import React from 'react';
import { CheckCircle2, Circle, Clock, ArrowRight } from 'lucide-react';

const buildStages = [
    { id: 1, name: 'Story Ingestion', agent: 'Cosmo', status: 'completed', start: '10:00', end: '10:02', duration: '2m' },
    { id: 2, name: 'Requirement Parsing', agent: 'Cosmo', status: 'completed', start: '10:02', end: '10:05', duration: '3m' },
    { id: 3, name: 'Architecture Planning', agent: 'Nova', status: 'completed', start: '10:05', end: '10:15', duration: '10m' },
    { id: 4, name: 'Backend Generation', agent: 'Comet', status: 'in-progress', start: '10:15', end: '...', duration: 'Running' },
    { id: 5, name: 'Frontend Generation', agent: 'Comet', status: 'pending', start: '-', end: '-', duration: '-' },
    { id: 6, name: 'Test Generation', agent: 'Stella', status: 'pending', start: '-', end: '-', duration: '-' },
    { id: 7, name: 'Test Execution', agent: 'Stella', status: 'pending', start: '-', end: '-', duration: '-' },
    { id: 8, name: 'Validation & Packaging', agent: 'System', status: 'pending', start: '-', end: '-', duration: '-' },
];

export const BuildTimeline = () => {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-zinc-900">Build Timeline</h2>
                <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="text-zinc-600">Completed</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-zinc-600">In Progress</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-zinc-200" />
                        <span className="text-zinc-600">Pending</span>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
                <div className="p-6">
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-zinc-100" />

                        <div className="space-y-8">
                            {buildStages.map((stage, index) => (
                                <div key={stage.id} className="relative flex items-start gap-6 group">
                                    {/* Status Icon */}
                                    <div className={`relative z-10 w-16 h-16 rounded-full border-4 flex items-center justify-center bg-white transition-colors ${stage.status === 'completed' ? 'border-green-100 text-green-600' :
                                        stage.status === 'in-progress' ? 'border-blue-100 text-blue-600' :
                                            'border-zinc-100 text-zinc-300'
                                        }`}>
                                        {stage.status === 'completed' ? <CheckCircle2 size={24} /> :
                                            stage.status === 'in-progress' ? <Clock size={24} className="animate-spin-slow" /> :
                                                <Circle size={24} />
                                        }
                                    </div>

                                    {/* Content Card */}
                                    <div className={`flex-1 p-5 rounded-xl border transition-all ${stage.status === 'completed' ? 'bg-green-50/30 border-green-100' :
                                        stage.status === 'in-progress' ? 'bg-blue-50/30 border-blue-100 shadow-md' :
                                            'bg-white border-zinc-100 opacity-60'
                                        }`}>
                                        <div className="flex items-start justify-between mb-2">
                                            <div>
                                                <h3 className={`font-semibold text-lg ${stage.status === 'pending' ? 'text-zinc-500' : 'text-zinc-900'}`}>
                                                    {stage.name}
                                                </h3>
                                                <div className="flex items-center gap-2 text-sm text-zinc-500 mt-1">
                                                    <span className="font-medium text-zinc-700">{stage.agent}</span>
                                                    <span>•</span>
                                                    <span>{stage.duration}</span>
                                                </div>
                                            </div>
                                            {stage.status !== 'pending' && (
                                                <div className="text-right text-sm text-zinc-500 font-mono">
                                                    <div>Start: {stage.start}</div>
                                                    <div>End: {stage.end}</div>
                                                </div>
                                            )}
                                        </div>

                                        {stage.status === 'in-progress' && (
                                            <div className="mt-4 w-full bg-blue-100 rounded-full h-1.5 overflow-hidden">
                                                <div className="bg-blue-500 h-full rounded-full w-2/3 animate-pulse" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
