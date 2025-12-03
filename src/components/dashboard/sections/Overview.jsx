import React from 'react';
import { Activity, GitBranch, CheckCircle2, AlertTriangle } from 'lucide-react';

export const Overview = () => {
    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-bold text-zinc-900">Project Overview</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                            <Activity size={24} />
                        </div>
                        <div>
                            <div className="text-sm text-zinc-500">Active Agents</div>
                            <div className="text-2xl font-bold text-zinc-900">4</div>
                        </div>
                    </div>
                    <div className="text-sm text-zinc-600">
                        All agents are currently online and responsive.
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-purple-50 rounded-lg text-purple-600">
                            <GitBranch size={24} />
                        </div>
                        <div>
                            <div className="text-sm text-zinc-500">Build Status</div>
                            <div className="text-2xl font-bold text-zinc-900">In Progress</div>
                        </div>
                    </div>
                    <div className="text-sm text-zinc-600">
                        Current stage: Backend Generation (65%)
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-green-50 rounded-lg text-green-600">
                            <CheckCircle2 size={24} />
                        </div>
                        <div>
                            <div className="text-sm text-zinc-500">Tests Passed</div>
                            <div className="text-2xl font-bold text-zinc-900">42/45</div>
                        </div>
                    </div>
                    <div className="text-sm text-zinc-600">
                        3 tests failed, 1 skipped in last run.
                    </div>
                </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Welcome to AutoCopilot Dashboard</h3>
                <p className="text-blue-700">
                    Select a section from the sidebar to monitor your project's progress, configure ADO settings, or view generated artifacts.
                </p>
            </div>
        </div>
    );
};
