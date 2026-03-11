import React from 'react';
import {
    Settings2,
    Activity,
    Clock,
    AlertCircle,
    CheckCircle2,
    Zap,
    ArrowRight,
    TrendingUp,
    Box,
    Layers
} from 'lucide-react';

const PROCESSES = [
    { id: 1, name: 'Customer Onboarding', duration: 12, target: 5, unit: 'days', status: 'Slow', impact: 'Financial' },
    { id: 2, name: 'Sprint Development', duration: 18, target: 14, unit: 'days', status: 'Normal', impact: 'Productivity' },
    { id: 3, name: 'Sales Conversion', duration: 40, target: 30, unit: 'days', status: 'Critical', impact: 'Revenue' },
    { id: 4, name: 'QA Bug Fix', duration: 4, target: 3, unit: 'days', status: 'Fast', impact: 'Quality' },
];

export default function InternalProcessPerspective() {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            {/* Bottleneck Detector Hero */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-purple-600 rounded-2xl text-white">
                        <Zap className="w-6 h-6" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-[#0B1C2D]">AI Bottleneck Detector</h2>
                        <p className="text-slate-500 text-sm">Identifying process inefficiencies that impact your bottom line.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="p-3 bg-white rounded-xl shadow-sm">
                            <Clock className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                            <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Avg Cycle Time</div>
                            <div className="text-2xl font-bold text-[#0B1C2D]">18.5 Days</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 border-l-4 border-l-red-500">
                        <div className="p-3 bg-white rounded-xl shadow-sm">
                            <AlertCircle className="w-6 h-6 text-red-500" />
                        </div>
                        <div>
                            <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Critical Blockers</div>
                            <div className="text-2xl font-bold text-[#0B1C2D]">2 Processes</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="p-3 bg-white rounded-xl shadow-sm">
                            <TrendingUp className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                            <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Optimization Trend</div>
                            <div className="text-2xl font-bold text-[#0B1C2D]">+4.2% YoY</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Process List */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                    <h3 className="font-bold text-[#0B1C2D] mb-6 flex items-center gap-2">
                        <Layers className="w-5 h-5 text-purple-600" />
                        Operational Workflows
                    </h3>
                    <div className="space-y-6">
                        {PROCESSES.map((proc) => (
                            <div key={proc.id} className="relative">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="flex items-center gap-3">
                                        <span className="font-bold text-[#0B1C2D]">{proc.name}</span>
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${proc.status === 'Critical' ? 'bg-red-100 text-red-600' :
                                                proc.status === 'Slow' ? 'bg-orange-100 text-orange-600' :
                                                    'bg-green-100 text-green-600'
                                            }`}>
                                            {proc.status}
                                        </span>
                                    </div>
                                    <div className="text-sm font-bold text-slate-600">
                                        {proc.duration} <span className="text-[10px] text-slate-400 font-normal uppercase">{proc.unit}</span>
                                    </div>
                                </div>
                                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden relative">
                                    <div
                                        className={`h-full transition-all duration-1000 ${proc.status === 'Critical' ? 'bg-red-500' :
                                                proc.status === 'Slow' ? 'bg-orange-400' :
                                                    'bg-green-500'
                                            }`}
                                        style={{ width: `${Math.min(100, (proc.duration / proc.target) * 50)}%` }}
                                    />
                                    {/* Target line */}
                                    <div
                                        className="absolute top-0 w-0.5 h-full bg-slate-400 border-r border-dotted border-white z-10"
                                        style={{ left: '50%' }}
                                    />
                                </div>
                                <div className="flex justify-between mt-1 text-[10px] text-slate-400 font-medium">
                                    <span>Current Performance</span>
                                    <span>Benchmark: {proc.target} {proc.unit}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Process Insights */}
                <div className="space-y-6">
                    <div className="bg-[#0B1C2D] p-8 rounded-2xl text-white shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Box className="w-32 h-32" />
                        </div>
                        <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-[#3AE7E1]">
                            <Zap className="w-5 h-5" />
                            AI Process Recommendations
                        </h3>
                        <div className="space-y-4">
                            <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex gap-4">
                                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center shrink-0">
                                    <AlertCircle className="w-5 h-5 text-orange-400" />
                                </div>
                                <div>
                                    <div className="font-bold text-sm">High Latency in Onboarding</div>
                                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                                        Customer onboarding is taking 12 days, which is 140% over target. This causes a delay in <b>Revenue Recognition</b> for enterprise clients.
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex gap-4">
                                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center shrink-0">
                                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                                </div>
                                <div>
                                    <div className="font-bold text-sm">Sprint Efficiency Improved</div>
                                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                                        New Agile workflow adoption in Team Beta decreased cycle time by 2.5 days. Recommend rollout to other teams.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <button className="w-full mt-6 py-3 bg-[#3AE7E1] text-[#0B1C2D] rounded-xl font-bold text-sm hover:shadow-[0_0_20px_rgba(58,231,225,0.4)] transition-all">
                            Launch Optimization Engine
                        </button>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Efficiency Index</span>
                            <span className="text-purple-600 font-bold">88.4%</span>
                        </div>
                        <div className="flex gap-1 h-3">
                            {[80, 75, 90, 85, 95, 88].map((h, i) => (
                                <div key={i} className="flex-1 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="bg-purple-500 h-full" style={{ height: `${h}%`, marginTop: `${100 - h}%` }} />
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 text-[10px] text-slate-400 text-center font-medium">Last 6 months operational trend</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
