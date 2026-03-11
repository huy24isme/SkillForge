import React from 'react';
import {
    Users2,
    Smile,
    Frown,
    MessageCircle,
    Target,
    TrendingUp,
    Clock,
    ShieldCheck,
    Search,
    ArrowUpRight
} from 'lucide-react';

const CUSTOMERS = [
    { id: 1, name: 'TechCorp Solutions', status: 'Healthy', nps: 9, projects: 3, delay: 0 },
    { id: 2, name: 'Global Retail Inc', status: 'At Risk', nps: 6, projects: 2, delay: 5 },
    { id: 3, name: 'Financier Bank', status: 'Healthy', nps: 8, projects: 5, delay: 1 },
    { id: 4, name: 'EcoPower Ltd', status: 'Healthy', nps: 9, projects: 1, delay: 0 },
    { id: 5, name: 'Logistics Pro', status: 'Warning', nps: 7, projects: 2, delay: 3 },
];

export default function CustomerPerspective() {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            {/* Search & Filter Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search customers or projects..."
                        className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-[#3AE7E1] outline-none transition-all text-sm"
                    />
                </div>
                <div className="flex gap-2">
                    <select className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#3AE7E1]">
                        <option>All Status</option>
                        <option>Healthy</option>
                        <option>At Risk</option>
                    </select>
                    <button className="bg-[#0B1C2D] text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-[#1E3A5F] transition-colors">
                        Export Report
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Customer List */}
                <div className="lg:col-span-2 space-y-4">
                    <h3 className="font-bold text-[#0B1C2D] flex items-center gap-2 px-2">
                        <Users2 className="w-5 h-5 text-[#3AE7E1]" />
                        Active Customer Portfolio
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                        {CUSTOMERS.map((customer) => (
                            <div key={customer.id} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group cursor-pointer">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${customer.status === 'Healthy' ? 'bg-green-50 text-green-600' :
                                        customer.status === 'At Risk' ? 'bg-red-50 text-red-600' :
                                            'bg-orange-50 text-orange-600'
                                    }`}>
                                    {customer.name.charAt(0)}
                                </div>
                                <div className="flex-1">
                                    <div className="font-bold text-[#0B1C2D]">{customer.name}</div>
                                    <div className="text-xs text-slate-500">{customer.projects} Active Projects</div>
                                </div>
                                <div className="text-center px-4">
                                    <div className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">NPS</div>
                                    <div className={`font-bold ${customer.nps >= 8 ? 'text-green-600' : 'text-orange-500'}`}>{customer.nps}/10</div>
                                </div>
                                <div className="text-center px-4 border-l border-slate-100">
                                    <div className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Status</div>
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${customer.status === 'Healthy' ? 'bg-green-100 text-green-600' :
                                            customer.status === 'At Risk' ? 'bg-red-100 text-red-600' :
                                                'bg-orange-100 text-orange-600'
                                        }`}>
                                        {customer.status}
                                    </span>
                                </div>
                                <div className="p-2 text-slate-300 group-hover:text-[#3AE7E1] transition-colors">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Impact Widgets */}
                <div className="space-y-6">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <h3 className="font-bold text-[#0B1C2D] mb-6 flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-blue-600" />
                            Service Level Metrics
                        </h3>
                        <div className="space-y-6">
                            <div className="relative pt-1">
                                <div className="flex mb-2 items-center justify-between">
                                    <div>
                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                                            Overall Satisfaction
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs font-semibold inline-block text-blue-600">
                                            84%
                                        </span>
                                    </div>
                                </div>
                                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-100">
                                    <div style={{ width: "84%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
                                </div>
                            </div>

                            <div className="relative pt-1">
                                <div className="flex mb-2 items-center justify-between">
                                    <div>
                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                                            On-time Delivery
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs font-semibold inline-block text-green-600">
                                            78%
                                        </span>
                                    </div>
                                </div>
                                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-100">
                                    <div style={{ width: "78%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-4 bg-[#0B1C2D] rounded-xl text-white">
                            <div className="flex gap-3">
                                <Smile className="w-6 h-6 text-[#3AE7E1]" />
                                <div>
                                    <div className="text-xs font-bold uppercase tracking-wider text-[#3AE7E1]">Executive Insight</div>
                                    <p className="text-sm mt-1 leading-relaxed text-slate-300">
                                        High NPS (8.4) correlates directly with PM rotation in Tech team.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
                        <h3 className="font-bold text-red-900 mb-4 flex items-center gap-2">
                            <Frown className="w-5 h-5" />
                            Critical Attention
                        </h3>
                        <p className="text-sm text-red-700 mb-4">
                            <b>Global Retail Inc</b> is currently at risk due to a 5-day delay in "Rebranding Phase 2".
                        </p>
                        <button className="w-full bg-red-600 text-white py-3 rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-200">
                            Schedule CEO Review
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
