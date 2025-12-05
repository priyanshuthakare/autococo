import { useState, useRef, useEffect } from 'react';
import { Send, StopCircle, Paperclip, Mic, Sparkles, Menu, Check, X } from 'lucide-react';

// Agent data with avatars and roles
const agents = [
    { id: 'comet', name: 'Comet', src: '/agent1.png', role: 'Team Leader', color: 'from-orange-400 to-pink-400' },
    { id: 'nova', name: 'Nova', src: '/agent2.png', role: 'Designer / Architect', color: 'from-purple-400 to-blue-400' },
    { id: 'cosmo', name: 'Cosmo', src: '/agent3.png', role: 'Data Analyst / Research', color: 'from-cyan-400 to-teal-400' },
    { id: 'stella', name: 'Stella', src: '/agent4.png', role: 'QA Tester', color: 'from-pink-400 to-rose-400' },
];

// Agent Card Component
const AgentCard = ({ agent, message, showPlan, onApprove, approved }) => {
    const [planItems, setPlanItems] = useState([
        { id: 1, text: 'Dashboard with key metrics (Total Leads, Conversion Rate, Recent Activities)', checked: true },
        { id: 2, text: 'Lead List View with filtering, sorting, and search capabilities', checked: true },
        { id: 3, text: 'Kanban Board for visualizing lead status pipeline', checked: true },
        { id: 4, text: 'Add/Edit Lead forms with fields for contact info, source, and notes', checked: true },
        { id: 5, text: 'Settings page for managing lead statuses and user profile (mock)', checked: true },
    ]);

    const togglePlanItem = (id) => {
        setPlanItems(prev => prev.map(item =>
            item.id === id ? { ...item, checked: !item.checked } : item
        ));
    };

    return (
        <div className="bg-white rounded-xl p-4 shadow-md border border-zinc-100">
            <div className="flex items-start gap-3">
                {/* Avatar */}
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${agent.color} flex items-center justify-center overflow-hidden flex-shrink-0 border-2 border-white shadow`}>
                    <img src={agent.src} alt={agent.name} className="w-full h-full object-cover" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    {/* Header */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                            <span className="font-semibold text-zinc-900">{agent.name}</span>
                            <span className="text-zinc-400 text-sm">|</span>
                            <span className="text-zinc-500 text-sm font-medium">{agent.role}</span>
                        </div>
                        <span className="text-zinc-400 text-xs">Working Process</span>
                    </div>

                    {/* Working Process */}
                    <div className="flex items-start gap-2 mb-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                        <p className="text-zinc-700 text-sm leading-relaxed">{message}</p>
                    </div>

                    {/* Overview Card */}
                    <div className="bg-purple-50 rounded-lg p-3 mb-3">
                        <p className="font-semibold text-purple-900 text-sm mb-1">Overview of features</p>
                        <span className="text-purple-600 text-xs font-semibold">• To Do</span>
                    </div>

                    {/* Plan Box */}
                    {showPlan && (
                        <div className="bg-gradient-to-b from-purple-50 to-purple-50/50 rounded-xl p-3 border border-purple-100/50">
                            {/* Plan Text */}
                            <div className="bg-purple-100/50 rounded-lg p-3 mb-3">
                                <p className="text-purple-900 text-sm">
                                    {approved
                                        ? `I'll proceed with this plan. ${agent.name} will coordinate with the team.`
                                        : "I'd like to proceed with this plan. Would you approve it? If you have suggestions, please feel free to share."}
                                </p>
                            </div>

                            {/* Checklist */}
                            <div className="bg-white rounded-lg border border-zinc-100 overflow-hidden mb-3">
                                <div className="px-3 py-2 border-b border-zinc-100">
                                    <span className="text-zinc-500 text-sm font-semibold">Plan</span>
                                </div>
                                {planItems.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className={`flex items-center justify-between px-3 py-2.5 ${index < planItems.length - 1 ? 'border-b border-zinc-50' : ''}`}
                                    >
                                        <span className="text-zinc-700 text-sm">{index + 1}. {item.text}</span>
                                        <button
                                            onClick={() => togglePlanItem(item.id)}
                                            className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${item.checked
                                                ? 'bg-purple-600 border-purple-600 text-white'
                                                : 'border-zinc-300 hover:border-purple-400'
                                                }`}
                                        >
                                            {item.checked && <Check size={12} strokeWidth={3} />}
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-2">
                                <button className="px-4 py-2 rounded-lg border border-zinc-200 bg-white text-zinc-700 text-sm font-semibold hover:bg-zinc-50 transition-colors">
                                    Edit Plans
                                </button>
                                <button
                                    onClick={onApprove}
                                    disabled={approved}
                                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${approved
                                        ? 'bg-emerald-500 text-white cursor-default'
                                        : 'bg-purple-600 text-white hover:bg-purple-700 shadow-sm'
                                        }`}
                                >
                                    {approved ? 'Approved ✓' : 'Approve'}
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// User Bubble Component
const UserBubble = ({ content, mentionedAgent, attachedFile }) => {
    return (
        <div className="bg-zinc-100 rounded-xl p-4 shadow-sm">
            {mentionedAgent && (
                <div className="inline-block bg-purple-100 text-purple-700 px-2 py-1 rounded-lg text-sm font-semibold mb-2">
                    @ {mentionedAgent.name}
                </div>
            )}
            {attachedFile && (
                <div className="flex items-center gap-2 text-sm text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg w-fit mb-2">
                    <Paperclip size={14} />
                    <span className="truncate max-w-[200px]">{attachedFile.name}</span>
                </div>
            )}
            <p className="text-zinc-800 text-sm leading-relaxed whitespace-pre-wrap">{content}</p>
        </div>
    );
};

// Simple Agent Response (for quick acknowledgments)
const SimpleAgentResponse = ({ agent, message }) => {
    return (
        <div className="bg-white rounded-xl p-4 shadow-sm border border-zinc-100">
            <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${agent.color} flex items-center justify-center overflow-hidden flex-shrink-0 shadow`}>
                    <img src={agent.src} alt={agent.name} className="w-full h-full object-cover" />
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-zinc-900">{agent.name}</span>
                        <span className="text-zinc-400 text-sm">|</span>
                        <span className="text-zinc-500 text-sm">{agent.role}</span>
                    </div>
                    <p className="text-zinc-700 text-sm mt-1">{message}</p>
                </div>
            </div>
        </div>
    );
};

export const ChatInterface = ({ initialPrompt, onToggleSidebar }) => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [approvedPlans, setApprovedPlans] = useState({});
    const [selectedFile, setSelectedFile] = useState(null);
    const [isListening, setIsListening] = useState(false);
    const messagesEndRef = useRef(null);
    const fileInputRef = useRef(null);
    const textareaRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    useEffect(() => {
        if (initialPrompt && messages.length === 0) {
            handleSendMessage(initialPrompt);
        }
    }, [initialPrompt]);

    // File handling
    const handleFileClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const removeFile = () => {
        setSelectedFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    // Voice command handling
    const toggleListening = () => {
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            alert('Speech recognition is not supported in this browser. Please use Chrome or Edge.');
            return;
        }

        if (isListening) {
            setIsListening(false);
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
            textareaRef.current?.focus();
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

    // Parse mentions from text
    const parseMentions = (text) => {
        const mentionRegex = /@([a-zA-Z]+)/g;
        const matches = [...text.matchAll(mentionRegex)];
        return matches.map(match => {
            const agentName = match[1].toLowerCase();
            return agents.find(a => a.id === agentName || a.name.toLowerCase() === agentName);
        }).filter(Boolean);
    };

    // Get primary mentioned agent
    const getPrimaryMention = (text) => {
        const mentions = parseMentions(text);
        return mentions.length > 0 ? mentions[0] : null;
    };

    const handleSendMessage = (text) => {
        const content = text || inputValue;
        if (!content.trim() && !selectedFile) return;

        const mentionedAgents = parseMentions(content);
        const primaryAgent = getPrimaryMention(content);

        // Add user message
        const userMessage = {
            id: Date.now().toString(),
            type: 'user',
            content: content,
            mentionedAgent: primaryAgent,
            attachedFile: selectedFile,
            timestamp: new Date(),
        };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setSelectedFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }

        // Simulate agent response
        if (mentionedAgents.length > 0) {
            setIsTyping(true);

            // Primary agent responds with a full card
            setTimeout(() => {
                const leadAgent = mentionedAgents[0];
                const agentResponse = {
                    id: (Date.now() + 1).toString(),
                    type: 'agent-card',
                    agent: leadAgent,
                    message: `I will draft a development plan based on your requirements, focusing on core features and functionality.`,
                    showPlan: true,
                    timestamp: new Date(),
                };
                setMessages(prev => [...prev, agentResponse]);
                setIsTyping(false);

                // Other mentioned agents acknowledge
                mentionedAgents.slice(1).forEach((agent, index) => {
                    setTimeout(() => {
                        const ackMessage = {
                            id: (Date.now() + 2 + index).toString(),
                            type: 'agent-simple',
                            agent: agent,
                            message: "Acknowledged: I'll coordinate and proceed with my part.",
                            timestamp: new Date(),
                        };
                        setMessages(prev => [...prev, ackMessage]);
                    }, 400 * (index + 1));
                });
            }, 1500);
        } else {
            // Default response when no agent is mentioned
            setIsTyping(true);
            setTimeout(() => {
                const defaultAgent = agents[0]; // Comet as default
                const agentResponse = {
                    id: (Date.now() + 1).toString(),
                    type: 'agent-simple',
                    agent: defaultAgent,
                    message: "I understand. Please mention a specific agent (e.g., @nova, @cosmo, @stella) to assign tasks or ask questions.",
                    timestamp: new Date(),
                };
                setMessages(prev => [...prev, agentResponse]);
                setIsTyping(false);
            }, 1000);
        }
    };

    const handleApprove = (messageId) => {
        setApprovedPlans(prev => ({ ...prev, [messageId]: true }));
    };

    const insertMention = (agentId) => {
        setInputValue(prev => (prev + ' @' + agentId + ' ').trim() + ' ');
        textareaRef.current?.focus();
    };

    const handleSend = () => {
        handleSendMessage();
    };

    return (
        <div className="flex flex-col h-full bg-white border-r border-zinc-200 transition-colors duration-300">
            {/* Header */}
            <div className="h-14 border-b border-zinc-200 flex items-center justify-between px-4 bg-white/50 backdrop-blur-md">
                <div className="flex items-center gap-3">
                    <button
                        onClick={onToggleSidebar}
                        className="p-2 -ml-2 text-zinc-500 hover:text-black hover:bg-black/5 rounded-lg transition-colors"
                    >
                        <Menu size={18} />
                    </button>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-zinc-900 ">New Project</span>
                        <span className="text-zinc-400 ">/</span>
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/5 border border-black/5 text-xs text-zinc-600 ">
                            <Sparkles size={12} className="text-purple-500 " />
                            Build With Team
                        </div>
                    </div>
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-zinc-50/50">
                {messages.map((msg) => {
                    if (msg.type === 'user') {
                        return (
                            <UserBubble
                                key={msg.id}
                                content={msg.content}
                                mentionedAgent={msg.mentionedAgent}
                                attachedFile={msg.attachedFile}
                            />
                        );
                    } else if (msg.type === 'agent-card') {
                        return (
                            <AgentCard
                                key={msg.id}
                                agent={msg.agent}
                                message={msg.message}
                                showPlan={msg.showPlan}
                                approved={approvedPlans[msg.id]}
                                onApprove={() => handleApprove(msg.id)}
                            />
                        );
                    } else if (msg.type === 'agent-simple') {
                        return (
                            <SimpleAgentResponse
                                key={msg.id}
                                agent={msg.agent}
                                message={msg.message}
                            />
                        );
                    }
                    return null;
                })}

                {isTyping && (
                    <div className="flex gap-3 items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 flex items-center justify-center overflow-hidden shadow">
                            <img src="/agent1.png" alt="Comet" className="w-full h-full object-cover" />
                        </div>
                        <div className="bg-white border border-zinc-200 px-4 py-3 rounded-2xl shadow-sm flex items-center gap-1.5">
                            <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                            <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                            <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" />
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-zinc-200">
                {/* Hidden file input */}
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                    accept="image/*,.pdf,.doc,.docx,.txt,.csv,.json"
                />

                <div className="relative bg-zinc-50 border border-zinc-200 rounded-xl overflow-hidden focus-within:border-zinc-300 focus-within:ring-2 focus-within:ring-purple-100 transition-all">
                    {/* Attached file preview */}
                    {selectedFile && (
                        <div className="px-3 pt-3">
                            <div className="flex items-center gap-2 text-sm text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg w-fit">
                                <Paperclip size={14} />
                                <span className="truncate max-w-[200px]">{selectedFile.name}</span>
                                <button
                                    onClick={removeFile}
                                    className="ml-1 hover:text-blue-800 p-0.5 hover:bg-blue-100 rounded"
                                >
                                    <X size={14} />
                                </button>
                            </div>
                        </div>
                    )}

                    <textarea
                        ref={textareaRef}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                handleSend();
                            }
                        }}
                        placeholder={isListening ? "🎤 Listening..." : "Describe your idea... Use @comet, @nova, @cosmo, @stella to assign tasks"}
                        className={`w-full bg-transparent text-sm text-zinc-900 placeholder-zinc-400 p-3 min-h-[60px] max-h-[200px] resize-none outline-none custom-scrollbar ${isListening ? 'placeholder-red-400' : ''}`}
                    />

                    <div className="flex items-center justify-between px-2 pb-2">
                        {/* Quick Mention Buttons */}
                        <div className="flex items-center gap-1">
                            {agents.map(agent => (
                                <button
                                    key={agent.id}
                                    onClick={() => insertMention(agent.id)}
                                    className="px-2.5 py-1.5 rounded-lg border border-zinc-200 bg-white text-zinc-600 text-xs font-semibold hover:bg-zinc-50 hover:border-zinc-300 transition-colors"
                                >
                                    @{agent.id}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-1">
                            <button
                                onClick={handleFileClick}
                                className="p-2 text-zinc-400 hover:text-zinc-600 hover:bg-black/5 rounded-lg transition-colors"
                                title="Attach file"
                            >
                                <Paperclip size={16} />
                            </button>
                            <button
                                onClick={toggleListening}
                                className={`p-2 rounded-lg transition-colors ${isListening
                                    ? 'text-red-500 bg-red-50 animate-pulse'
                                    : 'text-zinc-400 hover:text-zinc-600 hover:bg-black/5'}`}
                                title={isListening ? "Stop listening" : "Voice input"}
                            >
                                <Mic size={16} />
                            </button>
                            <button
                                onClick={handleSend}
                                disabled={(!inputValue.trim() && !selectedFile) || isTyping}
                                className={`px-3 py-2 rounded-lg font-semibold text-sm transition-all ${(inputValue.trim() || selectedFile) && !isTyping
                                    ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-sm'
                                    : 'bg-zinc-100 text-zinc-400 cursor-not-allowed'
                                    }`}
                            >
                                {isTyping ? <StopCircle size={16} /> : 'Send'}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-2">
                    <p className="text-[10px] text-zinc-400">
                        AI can make mistakes. Please review generated code.
                    </p>
                </div>
            </div>
        </div>
    );
};
