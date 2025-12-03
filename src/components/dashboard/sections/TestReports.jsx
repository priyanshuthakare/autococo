import React from 'react';
import { CheckCircle2, XCircle, AlertTriangle, ChevronDown, ChevronRight, Terminal } from 'lucide-react';

const testSummary = {
    total: 45,
    passed: 42,
    failed: 2,
    skipped: 1,
    duration: '4.5s',
};

const testCases = [
    { id: 1, name: 'User Authentication Flow', status: 'passed', duration: '1.2s', error: null },
    { id: 2, name: 'Dashboard Data Loading', status: 'passed', duration: '0.8s', error: null },
    { id: 3, name: 'Inventory Item Creation', status: 'failed', duration: '0.5s', error: 'AssertionError: Expected status 201, got 500' },
    { id: 4, name: 'Report Generation', status: 'passed', duration: '1.5s', error: null },
    { id: 5, name: 'Settings Update', status: 'failed', duration: '0.3s', error: 'TimeoutError: Database connection timed out' },
    { id: 6, name: 'Notification Service', status: 'skipped', duration: '-', error: null },
];

export const TestReports = () => {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-zinc-900">Testing & Validation Reports</h2>
                <div className="text-sm text-zinc-500">
                    Last run: Today at 10:15 AM
                </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
                    <div className="text-sm text-zinc-500 mb-1">Total Tests</div>
                    <div className="text-2xl font-bold text-zinc-900">{testSummary.total}</div>
                </div>
                <div className="bg-green-50 p-4 rounded-xl border border-green-100 shadow-sm">
                    <div className="text-sm text-green-600 mb-1">Passed</div>
                    <div className="text-2xl font-bold text-green-700">{testSummary.passed}</div>
                </div>
                <div className="bg-red-50 p-4 rounded-xl border border-red-100 shadow-sm">
                    <div className="text-sm text-red-600 mb-1">Failed</div>
                    <div className="text-2xl font-bold text-red-700">{testSummary.failed}</div>
                </div>
                <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 shadow-sm">
                    <div className="text-sm text-amber-600 mb-1">Skipped</div>
                    <div className="text-2xl font-bold text-amber-700">{testSummary.skipped}</div>
                </div>
            </div>

            {/* Detailed Report */}
            <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-zinc-200 bg-zinc-50/50">
                    <h3 className="text-lg font-semibold text-zinc-800">Detailed Test Results</h3>
                </div>
                <div className="divide-y divide-zinc-100">
                    {testCases.map((test) => (
                        <div key={test.id} className="p-4 hover:bg-zinc-50 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="mt-1">
                                    {test.status === 'passed' && <CheckCircle2 className="text-green-500" size={20} />}
                                    {test.status === 'failed' && <XCircle className="text-red-500" size={20} />}
                                    {test.status === 'skipped' && <AlertTriangle className="text-amber-500" size={20} />}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                        <h4 className="font-medium text-zinc-900">{test.name}</h4>
                                        <span className="text-xs text-zinc-500 font-mono">{test.duration}</span>
                                    </div>
                                    {test.error && (
                                        <div className="mt-2 bg-red-50 border border-red-100 rounded-lg p-3 text-sm text-red-700 font-mono flex items-start gap-2">
                                            <Terminal size={14} className="mt-0.5 shrink-0" />
                                            {test.error}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
