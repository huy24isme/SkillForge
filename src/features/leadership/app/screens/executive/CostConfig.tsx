import React, { useState, useEffect } from 'react';
import {
    Calculator,
    TrendingUp,
    DollarSign,
    Briefcase,
    ArrowRight,
    HelpCircle,
    RefreshCcw,
    Target
} from 'lucide-react';

export default function CostConfig() {
    const [capEx, setCapEx] = useState(500); // Fixed investment (M VND)
    const [fixedOpEx, setFixedOpEx] = useState(250); // Monthly salary, rent (M VND)
    const [variableRate, setVariableRate] = useState(0.2); // 20% of revenue goes to variable costs
    const [targetPaybackMonths, setTargetPaybackMonths] = useState(12);
    const [expectedClients, setExpectedClients] = useState(10);

    // Calculations
    const calculateResults = () => {
        // Break-even revenue per month to cover fixed OpEx + variable costs
        // Rev = OpEx + 0.2*Rev => Rev(1-0.2) = OpEx => Rev = OpEx / 0.8
        const monthlyOpExBreakEven = fixedOpEx / (1 - variableRate);

        // Total needed to pay back CapEx over N months
        const monthlyPaybackAmount = capEx / targetPaybackMonths;

        // Total target revenue per month
        const totalTargetMonthlyRevenue = monthlyOpExBreakEven + monthlyPaybackAmount;

        // Target price per client
        const targetPricePerClient = totalTargetMonthlyRevenue / expectedClients;

        return {
            monthlyOpExBreakEven,
            totalTargetMonthlyRevenue,
            targetPricePerClient
        };
    };

    const results = calculateResults();

    return (
        <div className="max-w-5xl mx-auto animate-in fade-in duration-500">
            <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg">
                    <Calculator className="w-6 h-6" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-[#0B1C2D]">Strategic Pricing & Break-even Calculator</h1>
                    <p className="text-slate-500">Based on Mentor's Formula: CapEx + OpEx (Fixed + Variable) → Target Revenue</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left: Configuration */}
                <div className="space-y-6">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6">
                        <h3 className="font-bold text-[#0B1C2D] flex items-center gap-2 mb-4">
                            <Briefcase className="w-5 h-5 text-blue-500" />
                            Investment & Operating Costs
                        </h3>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 flex justify-between">
                                <span>CapEx (Chi phí đầu tư ban đầu)</span>
                                <span className="text-blue-600 font-bold">{capEx}M VND</span>
                            </label>
                            <input
                                type="range" min="100" max="2000" step="50"
                                value={capEx}
                                onChange={(e) => setCapEx(Number(e.target.value))}
                                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 flex justify-between">
                                <span>Monthly Fixed OpEx (Lương cố định + Thuê)</span>
                                <span className="text-blue-600 font-bold">{fixedOpEx}M VND</span>
                            </label>
                            <input
                                type="range" min="50" max="1000" step="10"
                                value={fixedOpEx}
                                onChange={(e) => setFixedOpEx(Number(e.target.value))}
                                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 flex justify-between">
                                <span>Variable Cost Rate (Biến phí %)</span>
                                <span className="text-blue-600 font-bold">{Math.round(variableRate * 100)}%</span>
                            </label>
                            <input
                                type="range" min="0" max="0.5" step="0.05"
                                value={variableRate}
                                onChange={(e) => setVariableRate(Number(e.target.value))}
                                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            />
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6">
                        <h3 className="font-bold text-[#0B1C2D] flex items-center gap-2 mb-4">
                            <Target className="w-5 h-5 text-orange-500" />
                            Return on Investment Goals
                        </h3>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Payback Months</label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        value={targetPaybackMonths}
                                        onChange={(e) => setTargetPaybackMonths(Number(e.target.value))}
                                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-bold"
                                    />
                                    <span className="absolute right-3 top-3 text-slate-400 text-sm">Months</span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Planned Clients</label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        value={expectedClients}
                                        onChange={(e) => setExpectedClients(Number(e.target.value))}
                                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-bold"
                                    />
                                    <span className="absolute right-3 top-3 text-slate-400 text-sm">Clients</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Results */}
                <div className="space-y-6">
                    <div className="bg-gradient-to-br from-[#0B1C2D] to-[#1E3A5F] p-8 rounded-2xl shadow-xl text-white relative overflow-hidden h-full flex flex-col justify-between">
                        <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />

                        <div className="relative z-10">
                            <div className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-2">Target Pricing Model</div>
                            <h4 className="text-3xl font-bold mb-8">Break-even Analysis</h4>

                            <div className="space-y-8">
                                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                                    <div className="text-slate-400 flex items-center gap-2">
                                        Monthly Break-even Revenue <HelpCircle className="w-3 h-3" />
                                    </div>
                                    <div className="text-xl font-bold">{results.monthlyOpExBreakEven.toFixed(1)}M VND</div>
                                </div>

                                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                                    <div className="text-slate-400 flex items-center gap-2">
                                        Strategic Target Revenue <HelpCircle className="w-3 h-3" />
                                    </div>
                                    <div className="text-xl font-bold text-[#3AE7E1]">{results.totalTargetMonthlyRevenue.toFixed(1)}M VND</div>
                                </div>

                                <div className="grid grid-cols-1 gap-4 mt-8">
                                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                        <div className="text-slate-300 text-sm mb-1 uppercase tracking-wider font-medium">Recommended Price / Client</div>
                                        <div className="text-4xl font-black text-[#3AE7E1]">{results.targetPricePerClient.toFixed(1)}M <span className="text-lg font-normal text-slate-300">VND/Mo</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 relative z-10 p-4 bg-[#3AE7E1]/5 rounded-xl border border-[#3AE7E1]/20">
                            <p className="text-sm text-slate-300 italic">
                                "Tổng 3 phí lại → Nhân 2 hoặc 3 tùy nhu cầu → Doanh thu kỳ vọng → Chia theo tháng thu hồi vốn."
                            </p>
                            <p className="text-[10px] text-[#3AE7E1] mt-2 font-bold uppercase">— Mentor Philosophy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
