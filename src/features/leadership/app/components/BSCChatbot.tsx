import React, { useState, useRef, useEffect } from 'react';
import {
    Send,
    Bot,
    User,
    Sparkles,
    TrendingUp,
    Target,
    Settings2,
    Wallet,
    ArrowRight
} from 'lucide-react';

interface Message {
    id: number;
    type: 'bot' | 'user';
    text: string;
    chips?: string[];
}

const INITIAL_MESSAGES: Message[] = [
    {
        id: 1,
        type: 'bot',
        text: "Chào CEO, tôi là BSC Assistant. Tôi đã sẵn sàng phân tích doanh nghiệp của bạn qua 4 góc nhìn chiến lược. Bạn muốn hỏi gì hôm nay?",
        chips: [
            "Dự án nào đang có ROI cao nhất?",
            "Quy trình nào đang làm chậm vận hành?",
            "Nhân sự nào đang vượt năng suất?",
            "Dự án nào đang rủi ro khách hàng?"
        ]
    }
];

export default function BSCChatbot() {
    const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef<null | HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSend = (text: string) => {
        if (!text.trim()) return;

        const userMsg: Message = { id: Date.now(), type: 'user', text };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');

        // AI Response Simulation
        setTimeout(() => {
            let botResponse = "Tôi đang phân tích dữ liệu BSC...";

            if (text.includes("ROI")) {
                botResponse = "Project Alpha đang dẫn đầu với ROI 165%. Trong khi đó, Project Beta đang tiêu tốn nhiều nguồn lực nhưng lợi nhuận chỉ đạt 11%. Cần xem lại hiệu suất Team Beta.";
            } else if (text.includes("chậm") || text.includes("quy trình")) {
                botResponse = "Quy trình 'Customer Onboarding' đang là điểm nghẽn lớn nhất với thời gian trung bình 12 ngày (Benchmark là 5 ngày). Điều này đang làm trễ dòng tiền từ các hợp đồng mới.";
            } else if (text.includes("nhân sự") || text.includes("năng suất")) {
                botResponse = "Nguyễn Văn A là top performer với năng suất gấp 3.4x trung bình team. Tuy nhiên, team Backend đang thiếu hụt kỹ năng DevOps, gây delay 2 dự án quan trọng.";
            }

            const botMsg: Message = { id: Date.now() + 1, type: 'bot', text: botResponse };
            setMessages(prev => [...prev, botMsg]);
        }, 1000);
    };

    return (
        <div className="max-w-4xl mx-auto h-[calc(100vh-12rem)] flex flex-col bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden animate-in fade-in duration-500">
            {/* Header */}
            <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#0B1C2D] rounded-lg text-[#3AE7E1]">
                        <Bot className="w-5 h-5" />
                    </div>
                    <div>
                        <div className="font-bold text-[#0B1C2D] text-sm flex items-center gap-2">
                            BSC Strategic Advisor
                            <span className="flex h-1.5 w-1.5 rounded-full bg-[#3AE7E1] animate-pulse" />
                        </div>
                        <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">AI Powered Strategy Engine</div>
                    </div>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`flex gap-3 max-w-[80%] ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.type === 'user' ? 'bg-[#3AE7E1] text-[#0B1C2D]' : 'bg-[#0B1C2D] text-white'
                                }`}>
                                {msg.type === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                            </div>
                            <div className="space-y-3">
                                <div className={`p-4 rounded-2xl text-sm leading-relaxed ${msg.type === 'user'
                                    ? 'bg-slate-100 text-[#0B1C2D] rounded-tr-none shadow-sm'
                                    : 'bg-white border border-slate-100 text-slate-700 rounded-tl-none shadow-sm'
                                    }`}>
                                    {msg.text}
                                </div>
                                {msg.chips && (
                                    <div className="flex flex-wrap gap-2">
                                        {msg.chips.map((chip, i) => (
                                            <button
                                                key={i}
                                                onClick={() => handleSend(chip)}
                                                className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-bold text-slate-600 hover:border-[#3AE7E1] hover:text-[#3AE7E1] transition-all"
                                            >
                                                {chip}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-100 bg-slate-50">
                <form
                    onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }}
                    className="relative"
                >
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Hỏi AI về chiến lược kinh doanh của bạn..."
                        className="w-full pl-4 pr-12 py-3 bg-white border border-slate-100 rounded-xl focus:ring-2 focus:ring-[#3AE7E1] outline-none transition-all text-sm shadow-inner"
                    />
                    <button
                        type="submit"
                        disabled={!inputValue.trim()}
                        className="absolute right-2 top-1.5 p-1.5 bg-[#0B1C2D] text-[#3AE7E1] rounded-lg disabled:opacity-30 transition-opacity"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </form>
                <div className="mt-3 flex items-center gap-4 px-1">
                    <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold uppercase">
                        <Wallet className="w-3 h-3" /> Financial
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold uppercase">
                        <Target className="w-3 h-3" /> Customer
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold uppercase">
                        <Settings2 className="w-3 h-3" /> Process
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold uppercase">
                        <Sparkles className="w-3 h-3" /> AI Predictions
                    </div>
                </div>
            </div>
        </div>
    );
}
