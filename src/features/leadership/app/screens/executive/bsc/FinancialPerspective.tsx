import React, { useState, useEffect } from 'react';
import {
    TrendingUp,
    DollarSign,
    PieChart as PieChartIcon,
    ArrowUpRight,
    ArrowDownRight,
    TrendingDown,
    Target,
    Calculator,
    Info
} from 'lucide-react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    Cell
} from 'recharts';

const FINANCIAL_DATA = [
    { month: 'Jan', revenue: 1.2, cost: 0.8, profit: 0.4 },
    { month: 'Feb', revenue: 1.5, cost: 0.9, profit: 0.6 },
    { month: 'Mar', revenue: 1.3, cost: 0.85, profit: 0.45 },
    { month: 'Apr', revenue: 1.8, cost: 1.0, profit: 0.8 },
    { month: 'May', revenue: 2.2, cost: 1.1, profit: 1.1 },
    { month: 'Jun', revenue: 2.1, cost: 1.2, profit: 0.9 },
    { month: 'Jul', revenue: 3.2, cost: 1.4, profit: 1.8 },
];

const PROJECT_ROI = [
    { name: 'E-commerce App', roi: 165, revenue: 1200, cost: 450 },
    { name: 'Fintech Web', roi: 142, revenue: 850, cost: 350 },
    { name: 'Internal ERP', roi: -20, revenue: 0, cost: 200 },
    { name: 'Marketing Site', roi: 85, revenue: 300, cost: 160 },
];

export default function FinancialPerspective() {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-500 text-sm">Monthly Revenue</span>
                        <div className="p-1.5 bg-green-50 rounded-lg text-green-600">
                            <TrendingUp className="w-4 h-4" />
                        </div>
                    </div>
                    <div className="text-2xl font-bold text-[#0B1C2D]">3.2B VND</div>
                    <div className="text-xs text-green-500 mt-2 flex items-center gap-1">
                        <ArrowUpRight className="w-3 h-3" /> +15% from last month
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-500 text-sm">Operating Cost</span>
                        <div className="p-1.5 bg-red-50 rounded-lg text-red-600">
                            <TrendingDown className="w-4 h-4" />
                        </div>
                    </div>
                    <div className="text-2xl font-bold text-[#0B1C2D]">1.4B VND</div>
                    <div className="text-xs text-red-500 mt-2 flex items-center gap-1">
                        <ArrowUpRight className="w-3 h-3" /> +8% from last month
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-500 text-sm">Profit Margin</span>
                        <div className="p-1.5 bg-blue-50 rounded-lg text-blue-600">
                            <PieChartIcon className="w-4 h-4" />
                        </div>
                    </div>
                    <div className="text-2xl font-bold text-[#0B1C2D]">56%</div>
                    <div className="text-xs text-blue-500 mt-2 flex items-center gap-1">
                        On track for Q3 goals
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-500 text-sm">ROI Target</span>
                        <div className="p-1.5 bg-orange-50 rounded-lg text-orange-600">
                            <Target className="w-4 h-4" />
                        </div>
                    </div>
                    <div className="text-2xl font-bold text-[#0B1C2D]">150%</div>
                    <div className="text-xs text-slate-500 mt-2">
                        Strategic benchmark
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                    <h3 className="font-bold text-[#0B1C2D] mb-8">Revenue vs Operating Cost</h3>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={FINANCIAL_DATA}>
                                <defs>
                                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3AE7E1" stopOpacity={0.1} />
                                        <stop offset="95%" stopColor="#3AE7E1" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#EF4444" stopOpacity={0.1} />
                                        <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="month" tick={{ fill: '#64748B', fontSize: 12 }} axisLine={false} tickLine={false} />
                                <YAxis tick={{ fill: '#64748B', fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}B`} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                                    itemStyle={{ fontWeight: 'bold' }}
                                />
                                <Area type="monotone" dataKey="revenue" name="Revenue" stroke="#3AE7E1" fillOpacity={1} fill="url(#colorRev)" strokeWidth={3} />
                                <Area type="monotone" dataKey="cost" name="Cost" stroke="#EF4444" fillOpacity={1} fill="url(#colorCost)" strokeWidth={2} strokeDasharray="5 5" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                    <h3 className="font-bold text-[#0B1C2D] mb-8">Project ROI Analysis</h3>
                    <div className="space-y-6">
                        {PROJECT_ROI.map((project, i) => (
                            <div key={i} className="group cursor-default">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-medium text-sm text-[#0B1C2D]">{project.name}</span>
                                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${project.roi > 100 ? 'bg-green-100 text-green-600' : project.roi > 0 ? 'bg-blue-100 text-blue-600' : 'bg-red-100 text-red-600'}`}>
                                        {project.roi > 0 ? `+${project.roi}%` : `${project.roi}%`}
                                    </span>
                                </div>
                                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full transition-all duration-1000 ${project.roi > 100 ? 'bg-green-500' : project.roi > 0 ? 'bg-blue-500' : 'bg-red-500'}`}
                                        style={{ width: `${Math.min(100, Math.max(10, Math.abs(project.roi)))}%` }}
                                    />
                                </div>
                                <div className="flex justify-between mt-1 text-[10px] text-slate-400 font-medium">
                                    <span>Cost: {project.cost}M</span>
                                    <span>Rev: {project.revenue}M</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="flex gap-2 items-start">
                            <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                            <p className="text-xs text-slate-500 leading-relaxed">
                                <span className="font-bold text-blue-600">AI Suggestion:</span> Internal ERP project has no direct revenue. Strategic value is in improving <b>Process Efficiency</b> by 25%.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
