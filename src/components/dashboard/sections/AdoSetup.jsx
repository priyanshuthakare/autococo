import React, { useState } from 'react';
import { Play, Upload, CheckCircle, AlertCircle } from 'lucide-react';

export const AdoSetup = () => {
    const [formData, setFormData] = useState({
        orgUrl: '',
        projectName: '',
        repoId: '',
        patToken: ''
    });

    const [stories, setStories] = useState([
        { id: '101', title: 'User Authentication', description: 'Implement login/signup with JWT', tags: ['Backend', 'Auth'], priority: 'High', status: 'Pending' },
        { id: '102', title: 'Dashboard UI', description: 'Create main dashboard layout', tags: ['Frontend', 'UI'], priority: 'Medium', status: 'Pending' },
        { id: '103', title: 'API Integration', description: 'Connect frontend to backend APIs', tags: ['Integration'], priority: 'High', status: 'Pending' },
    ]);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-zinc-900">ADO Project Setup</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm font-medium">
                    <Play size={16} />
                    Start Pipeline
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Configuration Form */}
                <div className="lg:col-span-1 bg-white p-6 rounded-xl border border-zinc-200 shadow-sm h-fit">
                    <h3 className="text-lg font-semibold mb-4 text-zinc-800">Configuration</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-zinc-700 mb-1">ADO Organization URL</label>
                            <input
                                type="text"
                                name="orgUrl"
                                value={formData.orgUrl}
                                onChange={handleInputChange}
                                placeholder="https://dev.azure.com/myorg"
                                className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-zinc-700 mb-1">Project Name</label>
                            <input
                                type="text"
                                name="projectName"
                                value={formData.projectName}
                                onChange={handleInputChange}
                                placeholder="MyProject"
                                className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-zinc-700 mb-1">Repository ID</label>
                            <input
                                type="text"
                                name="repoId"
                                value={formData.repoId}
                                onChange={handleInputChange}
                                placeholder="Repo GUID"
                                className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-zinc-700 mb-1">PAT Token</label>
                            <input
                                type="password"
                                name="patToken"
                                value={formData.patToken}
                                onChange={handleInputChange}
                                placeholder="••••••••••••••••"
                                className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div className="pt-2">
                            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-zinc-300 rounded-lg hover:bg-zinc-50 transition-colors text-zinc-700 font-medium">
                                <Upload size={16} />
                                Upload JSON/CSV
                            </button>
                        </div>
                    </div>
                </div>

                {/* Stories Table */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-zinc-200 bg-zinc-50/50">
                        <h3 className="text-lg font-semibold text-zinc-800">Parsed User Stories</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-zinc-50 text-zinc-500 font-medium">
                                <tr>
                                    <th className="px-6 py-3">ID</th>
                                    <th className="px-6 py-3">Title</th>
                                    <th className="px-6 py-3">Tags</th>
                                    <th className="px-6 py-3">Priority</th>
                                    <th className="px-6 py-3">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-200">
                                {stories.map((story) => (
                                    <tr key={story.id} className="hover:bg-zinc-50 transition-colors">
                                        <td className="px-6 py-4 font-mono text-zinc-500">#{story.id}</td>
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-zinc-900">{story.title}</div>
                                            <div className="text-zinc-500 text-xs truncate max-w-xs">{story.description}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-wrap gap-1">
                                                {story.tags.map(tag => (
                                                    <span key={tag} className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-xs border border-blue-100">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${story.priority === 'High' ? 'bg-red-50 text-red-600 border-red-100' :
                                                story.priority === 'Medium' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                                                    'bg-green-50 text-green-600 border-green-100'
                                                }`}>
                                                {story.priority}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-1.5 text-zinc-500">
                                                <AlertCircle size={14} />
                                                {story.status}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};
