import React from 'react';
import { Save, Bell, Shield, User } from 'lucide-react';

export const Settings = () => {
    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-bold text-zinc-900">Settings</h2>

            <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-zinc-200">
                    <h3 className="text-lg font-semibold text-zinc-800 flex items-center gap-2">
                        <User size={20} className="text-zinc-400" />
                        Profile Settings
                    </h3>
                </div>
                <div className="p-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-zinc-700 mb-1">Full Name</label>
                            <input type="text" defaultValue="User Admin" className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-zinc-700 mb-1">Email Address</label>
                            <input type="email" defaultValue="admin@autocopilot.dev" className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-zinc-200">
                    <h3 className="text-lg font-semibold text-zinc-800 flex items-center gap-2">
                        <Bell size={20} className="text-zinc-400" />
                        Notifications
                    </h3>
                </div>
                <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="font-medium text-zinc-900">Build Completion</div>
                            <div className="text-sm text-zinc-500">Notify me when a build cycle finishes</div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="font-medium text-zinc-900">Agent Alerts</div>
                            <div className="text-sm text-zinc-500">Notify me when an agent is blocked</div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-zinc-200">
                    <h3 className="text-lg font-semibold text-zinc-800 flex items-center gap-2">
                        <Shield size={20} className="text-zinc-400" />
                        Security
                    </h3>
                </div>
                <div className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-1">API Key</label>
                        <div className="flex gap-2">
                            <input type="password" value="sk-........................" readOnly className="flex-1 px-3 py-2 border border-zinc-300 rounded-lg bg-zinc-50 text-zinc-500 font-mono" />
                            <button className="px-4 py-2 border border-zinc-300 rounded-lg hover:bg-zinc-50 transition-colors text-zinc-700 font-medium">Regenerate</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-end pt-4">
                <button className="flex items-center gap-2 px-6 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors shadow-sm font-medium">
                    <Save size={18} />
                    Save Changes
                </button>
            </div>
        </div>
    );
};
