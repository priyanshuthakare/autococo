import { useState, useRef } from 'react';
import { ArrowRight, Sparkles, Paperclip, Mic } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { AutocopilotAvatarGroup } from './AutocopilotAvatarGroup';

export const AutocopilotHero = () => {
    const [inputValue, setInputValue] = useState('');
    const [isListening, setIsListening] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const navigate = useNavigate();
    const fileInputRef = useRef(null);

    const handleStart = () => {
        if (inputValue.trim()) {
            navigate('/chat', { state: { initialPrompt: inputValue, attachedFile: selectedFile } });
        }
    };

    const handleFileClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const toggleListening = () => {
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            alert('Speech recognition is not supported in this browser.');
            return;
        }

        if (isListening) {
            setIsListening(false);
            // In a real app, we would stop the recognition instance here
            return;
        }

        setIsListening(true);
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();

        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            setInputValue(prev => prev + (prev ? ' ' : '') + transcript);
            setIsListening(false);
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error', event.error);
            setIsListening(false);
        };

        recognition.onend = () => {
            setIsListening(false);
        };

        recognition.start();
    };

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden transition-colors duration-300">
            {/* Background Glow Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-hero-glow opacity-20 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 w-full max-w-4xl mx-auto text-center space-y-8">
                <div className="flex justify-center">
                    <AutocopilotAvatarGroup />
                </div>
                {/* Main Heading */}
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-8 transition-colors duration-300">
                    Build Your Ideas
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                        with Agents
                    </span>
                </h1>

                {/* Chat Interface */}
                <div className="w-full max-w-3xl mx-auto">
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-30 group-hover:opacity-50 transition duration-500 blur"></div>
                        <div className="relative bg-white border border-zinc-200 rounded-2xl p-4 shadow-2xl transition-colors duration-300">
                            <div className="flex flex-col gap-4">
                                <textarea
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && !e.shiftKey) {
                                            e.preventDefault();
                                            handleStart();
                                        }
                                    }}
                                    placeholder={isListening ? "Listening..." : "Describe your idea..."}
                                    className="w-full bg-transparent text-lg text-zinc-900 placeholder-zinc-400 resize-none outline-none min-h-[60px]"
                                />

                                {selectedFile && (
                                    <div className="flex items-center gap-2 text-sm text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg w-fit">
                                        <Paperclip size={14} />
                                        <span className="truncate max-w-[200px]">{selectedFile.name}</span>
                                        <button
                                            onClick={() => setSelectedFile(null)}
                                            className="ml-1 hover:text-blue-800"
                                        >
                                            ×
                                        </button>
                                    </div>
                                )}

                                <div className="flex items-center justify-between border-t border-zinc-100 pt-3">
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            onChange={handleFileChange}
                                            className="hidden"
                                        />
                                        <button
                                            onClick={handleFileClick}
                                            className="p-2 text-zinc-400 hover:text-zinc-600 hover:bg-black/5 rounded-lg transition-colors"
                                            title="Attach file"
                                        >
                                            <Paperclip size={20} />
                                        </button>
                                        <button
                                            onClick={toggleListening}
                                            className={`p-2 rounded-lg transition-colors ${isListening ? 'text-red-500 bg-red-50 animate-pulse' : 'text-zinc-400 hover:text-zinc-600 hover:bg-black/5'}`}
                                            title="Voice input"
                                        >
                                            <Mic size={20} />
                                        </button>
                                        <div className="h-4 w-px bg-zinc-200 mx-1" />
                                        <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-zinc-600 bg-black/5 hover:bg-black/10 rounded-full transition-colors">
                                            <Sparkles size={14} className="text-purple-500" />
                                            <span>Build With Team</span>
                                        </button>
                                    </div>

                                    <button
                                        onClick={handleStart}
                                        className={`p-2 rounded-lg transition-all duration-300 ${inputValue
                                            ? 'bg-black text-white hover:opacity-90'
                                            : 'bg-black/5 text-zinc-400 cursor-not-allowed'
                                            }`}
                                        disabled={!inputValue}
                                    >
                                        <ArrowRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions / Suggestions */}
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        {[
                            "Build a CRM for stock master",
                            "Create a landing page",
                            "Analyze this data",
                            "Design a dashboard"
                        ].map((suggestion, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    setInputValue(suggestion);
                                }}
                                className="px-4 py-2 text-sm text-zinc-600 bg-white/50 border border-zinc-200 rounded-full hover:bg-white hover:text-black hover:border-zinc-300 transition-all shadow-sm"
                            >
                                {suggestion}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-zinc-400">
                <div className="w-6 h-10 border-2 border-zinc-400 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-zinc-400 rounded-full animate-scroll" />
                </div>
            </div>
        </div >
    );
};
