import { useState, useRef, useEffect } from 'react';
import { Send, StopCircle, Paperclip, Mic, Sparkles, User, Bot, Menu } from 'lucide-react';

export const ChatInterface = ({ initialPrompt, onToggleSidebar }) => {
 const [messages, setMessages] = useState([]);
 const [inputValue, setInputValue] = useState('');
 const [isTyping, setIsTyping] = useState(false);
 const messagesEndRef = useRef(null);

 // Simulated conversation flow for "Stock Master CRM"
 const conversationSteps = [
 {
 trigger: "initial",
 response: "I can help you build a CRM for Stock Master. To get started, I need to understand a few key details:\n\n1. **User Roles**: Who will be using this CRM? (e.g., Admins, Sales Reps, Managers)\n2. **Core Features**: Besides stock tracking, do you need lead management, reporting, or invoicing?\n3. **Integrations**: Do you need to connect with any existing tools or APIs?"
 },
 {
 trigger: "reply_1",
 response: "Got it. A dashboard with real-time charts and user management sounds great.\n\nFor the **Real-time Charts**, what specific metrics are most important? (e.g., Daily Sales, Inventory Levels, Customer Acquisition Cost)"
 },
 {
 trigger: "reply_2",
 response: "Understood. I'll include Daily Sales and Inventory Levels in the dashboard.\n\nI'm drafting a plan for the **Stock Master CRM**. It will include:\n- **Authentication**: Secure login for Admins and Sales Reps.\n- **Dashboard**: Real-time visualization of sales and stock.\n- **Inventory Management**: CRUD operations for stock items.\n\nShall I proceed with generating the codebase?"
 },
 {
 trigger: "reply_3",
 response: "Great! I'm starting the build process now. You'll see the project structure appearing in the workspace shortly."
 }
 ];

 const [stepIndex, setStepIndex] = useState(0);

 const scrollToBottom = () => {
 messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
 };

 useEffect(() => {
 scrollToBottom();
 }, [messages, isTyping]);

 useEffect(() => {
 if (initialPrompt && messages.length === 0) {
 addMessage('user', initialPrompt);
 simulateResponse(0);
 }
 }, [initialPrompt]);

 const addMessage = (role, content) => {
 const newMessage = {
 id: Date.now().toString(),
 role,
 content,
 timestamp: new Date(),
 };
 setMessages((prev) => [...prev, newMessage]);
 };

 const simulateResponse = (index) => {
 setIsTyping(true);
 setTimeout(() => {
 const step = conversationSteps[index];
 if (step) {
 addMessage('assistant', step.response);
 setStepIndex(index + 1);
 } else {
 // Fallback for generic chat
 addMessage('assistant', "I've noted that. Is there anything else you'd like to add?");
 }
 setIsTyping(false);
 }, 1500 + Math.random() * 1000); // Random delay between 1.5s and 2.5s
 };

 const handleSend = () => {
 if (!inputValue.trim()) return;

 addMessage('user', inputValue);
 setInputValue('');

 // Trigger next step in simulation
 simulateResponse(stepIndex);
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
 Claude 3.5 Sonnet
 </div>
 </div>
 </div>
 </div>

 {/* Messages Area */}
 <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
 {messages.map((msg) => (
 <div
 key={msg.id}
 className={`flex gap-4 max-w-[90%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
 >
 <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-black text-white ' : 'bg-gradient-to-br from-purple-500 to-blue-500 text-white'
 }`}>
 {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
 </div>

 <div className={`flex flex-col gap-1 ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
 <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${msg.role === 'user'
 ? 'bg-black text-white rounded-tr-none'
 : 'bg-white border border-zinc-200 text-zinc-800 rounded-tl-none shadow-sm '
 }`}>
 {msg.content}
 </div>
 <span className="text-[10px] text-zinc-400 px-1">
 {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
 </span>
 </div>
 </div>
 ))}

 {isTyping && (
 <div className="flex gap-4 max-w-[90%]">
 <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white flex items-center justify-center flex-shrink-0">
 <Bot size={16} />
 </div>
 <div className="bg-white border border-zinc-200 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1">
 <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
 <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
 <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce" />
 </div>
 </div>
 )}
 <div ref={messagesEndRef} />
 </div>

 {/* Input Area */}
 <div className="p-4 bg-white/50 border-t border-zinc-200 backdrop-blur-sm">
 <div className="relative bg-zinc-50 border border-zinc-200 rounded-xl overflow-hidden focus-within:border-zinc-300 transition-colors">
 <textarea
 value={inputValue}
 onChange={(e) => setInputValue(e.target.value)}
 onKeyDown={(e) => {
 if (e.key === 'Enter' && !e.shiftKey) {
 e.preventDefault();
 handleSend();
 }
 }}
 placeholder="Describe your idea..."
 className="w-full bg-transparent text-sm text-zinc-900 placeholder-zinc-400 p-3 min-h-[50px] max-h-[200px] resize-none outline-none custom-scrollbar"
 />

 <div className="flex items-center justify-between px-2 pb-2">
 <div className="flex items-center gap-1">
 <button className="p-2 text-zinc-400 hover:text-zinc-600 hover:bg-black/5 rounded-lg transition-colors">
 <Paperclip size={16} />
 </button>
 <button className="p-2 text-zinc-400 hover:text-zinc-600 hover:bg-black/5 rounded-lg transition-colors">
 <Mic size={16} />
 </button>
 </div>

 <button
 onClick={handleSend}
 disabled={!inputValue.trim() || isTyping}
 className={`p-2 rounded-lg transition-all ${inputValue.trim() && !isTyping
 ? 'bg-black text-white hover:opacity-90 '
 : 'bg-black/5 text-zinc-400 cursor-not-allowed'
 }`}
 >
 {isTyping ? <StopCircle size={16} /> : <Send size={16} />}
 </button>
 </div>
 </div>
 <div className="text-center mt-2">
 <p className="text-[10px] text-zinc-400 ">
 AI can make mistakes. Please review generated code.
 </p>
 </div>
 </div>
 </div>
 );
};
