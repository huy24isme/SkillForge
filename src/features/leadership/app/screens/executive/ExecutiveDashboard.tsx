import {
  TrendingUp,
  AlertTriangle,
  Users,
  Sparkles,
  ArrowRight,
  Plus,
  FileSearch,
  Wallet,
  Users2,
  Settings2,
  GraduationCap,
  ArrowUpRight,
  ArrowDownRight,
  Activity
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area
} from 'recharts';
import { Link } from 'react-router-dom';

const REVENUE_DATA = [
  { name: 'T1', value: 4000 },
  { name: 'T2', value: 3000 },
  { name: 'T3', value: 2000 },
  { name: 'T4', value: 2780 },
  { name: 'T5', value: 1890 },
  { name: 'T6', value: 2390 },
  { name: 'T7', value: 3490 },
];

export function ExecutiveDashboard() {
  return (
    <div className="space-y-6">
      {/* CEO Daily AI Briefing */}
      <div className="bg-gradient-to-br from-[#0B1C2D] via-[#1E3A5F] to-[#0B1C2D] rounded-2xl p-8 shadow-2xl text-white relative overflow-hidden border border-white/10">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Sparkles className="w-48 h-48" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-[#3AE7E1]/20 rounded-lg backdrop-blur-md border border-[#3AE7E1]/30">
              <Sparkles className="w-6 h-6 text-[#3AE7E1]" />
            </div>
            <div>
              <span className="font-bold uppercase tracking-[0.2em] text-xs text-[#3AE7E1]">Executive Summary</span>
              <h1 className="text-2xl font-bold">Good Morning, CEO</h1>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-400 text-sm">Revenue (MTD)</span>
                <ArrowUpRight className="w-4 h-4 text-green-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              <div className="text-2xl font-bold">3.2B VND</div>
              <div className="text-xs text-green-400 mt-1">+12.5% vs target</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-400 text-sm">Customer Risk</span>
                <AlertTriangle className="w-4 h-4 text-red-400 animate-pulse" />
              </div>
              <div className="text-2xl font-bold">3 Accounts</div>
              <div className="text-xs text-red-400 mt-1">High churn probability</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-400 text-sm">Process Efficiency</span>
                <Activity className="w-4 h-4 text-[#3AE7E1]" />
              </div>
              <div className="text-2xl font-bold">84%</div>
              <div className="text-xs text-slate-400 mt-1">-2% vs last week</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-400 text-sm">Talent Utilization</span>
                <Users className="w-4 h-4 text-blue-400" />
              </div>
              <div className="text-2xl font-bold">92%</div>
              <div className="text-xs text-blue-400 mt-1">Peak capacity reached</div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 inline-flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 flex-1">
              <div className="w-2 h-2 rounded-full bg-[#3AE7E1] animate-ping" />
              <p className="text-sm text-slate-300">
                <span className="text-white font-medium">Strategic Insight:</span> Project "Skyline" is delaying customer onboarding by 4 days, impacting Q3 cash flow projections.
              </p>
            </div>
            <Link
              to="/leadership/executive/strategy-map"
              className="px-6 py-4 bg-[#3AE7E1] text-[#0B1C2D] font-bold rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(58,231,225,0.4)] transition-all flex items-center gap-2 text-sm shrink-0"
            >
              <Sparkles className="w-4 h-4" />
              View Strategy Map
            </Link>
          </div>
        </div>
      </div>

      {/* Balanced Scorecard - 4 Perspectives Grid */}
      <h2 className="text-xl font-bold text-[#0B1C2D] flex items-center gap-2">
        <TrendingUp className="w-5 h-5 text-[#3AE7E1]" />
        Balanced Scorecard Perspectives
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 1. Financial Perspective */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group overflow-hidden relative">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
            <Wallet className="w-12 h-12 text-[#2563EB]" />
          </div>
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
              <Wallet className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#0B1C2D]">Financial (Tài chính)</h3>
          </div>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={REVENUE_DATA}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563EB" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#2563EB" fillOpacity={1} fill="url(#colorValue)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 flex items-center justify-between text-sm">
            <div className="text-slate-500">ROI Mục tiêu: <span className="text-[#0B1C2D] font-bold">150%</span></div>
            <Link to="/leadership/executive/financial" className="text-blue-600 font-medium hover:underline flex items-center gap-1">
              Chi tiết <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 2. Customer Perspective */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group overflow-hidden relative">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
            <Users2 className="w-12 h-12 text-[#3AE7E1]" />
          </div>
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-[#3AE7E1]/10 rounded-lg text-[#3AE7E1]">
              <Users2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#0B1C2D]">Customer (Khách hàng)</h3>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-500">Hài lòng khách hàng (NPS)</span>
                <span className="font-bold">8.2/10</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-[#3AE7E1] h-full" style={{ width: '82%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-500">Dự án đúng hạn</span>
                <span className="font-bold">78%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-orange-400 h-full" style={{ width: '78%' }} />
              </div>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between text-sm">
            <div className="text-slate-500">Khách hàng mới: <span className="text-[#0B1C2D] font-bold">+5</span></div>
            <Link to="/leadership/executive/customer" className="text-[#3AE7E1] font-medium hover:underline flex items-center gap-1">
              Chi tiết <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 3. Internal Process Perspective */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group overflow-hidden relative">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
            <Settings2 className="w-12 h-12 text-purple-600" />
          </div>
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
              <Settings2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#0B1C2D]">Internal Process (Quy trình)</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-xs text-slate-500 mb-1">Onboarding Time</div>
              <div className="text-xl font-bold text-red-500">12 Days</div>
              <div className="text-[10px] text-red-400">↑ Slow bottleneck</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-xs text-slate-500 mb-1">Dev Cycle</div>
              <div className="text-xl font-bold text-green-600">18 Days</div>
              <div className="text-[10px] text-green-400">↓ Efficient</div>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-between text-sm">
            <div className="text-slate-500">Quy trình Active: <span className="text-[#0B1C2D] font-bold">24</span></div>
            <Link to="/leadership/executive/process" className="text-purple-600 font-medium hover:underline flex items-center gap-1">
              Chi tiết <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 4. Learning & Growth Perspective */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group overflow-hidden relative">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
            <GraduationCap className="w-12 h-12 text-orange-600" />
          </div>
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#0B1C2D]">Learning & Growth (Học hỏi)</h3>
          </div>
          <div className="flex items-end gap-2 h-24 mb-4">
            {[40, 70, 45, 90, 65, 80].map((h, i) => (
              <div key={i} className="flex-1 bg-orange-100 rounded-t-lg relative group/bar">
                <div
                  className="absolute bottom-0 left-0 right-0 bg-orange-400 rounded-t-lg transition-all duration-1000"
                  style={{ height: `${h}%` }}
                />
              </div>
            ))}
          </div>
          <div className="text-sm text-slate-500 mb-4">Chỉ số năng suất trung bình: <span className="text-orange-600 font-bold">1.2x</span></div>
          <div className="flex items-center justify-between text-sm">
            <div className="text-slate-500">Top Performer: <span className="text-[#0B1C2D] font-bold">Nguyen Van A</span></div>
            <Link to="/leadership/executive/learning" className="text-orange-600 font-medium hover:underline flex items-center gap-1">
              Chi tiết <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Strategic Tools & Fast Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-[#0B1C2D] mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#3AE7E1]" />
            AI Strategic Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/leadership/executive/chatbot" className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-[#3AE7E1]/30 transition-all hover:bg-slate-100/50 group">
              <div className="p-3 bg-white w-fit rounded-lg shadow-sm mb-4">
                <MessageSquareShare className="w-6 h-6 text-[#3AE7E1]" />
              </div>
              <div className="font-bold text-[#0B1C2D] mb-1">Consult with BSC AI</div>
              <p className="text-sm text-slate-500">Ask strategic questions about your business performance.</p>
            </Link>
            <Link to="/leadership/executive/cost-config" className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-[#3AE7E1]/30 transition-all hover:bg-slate-100/50 group">
              <div className="p-3 bg-white w-fit rounded-lg shadow-sm mb-4">
                <Calculator className="w-6 h-6 text-blue-600" />
              </div>
              <div className="font-bold text-[#0B1C2D] mb-1">Break-even Calculator</div>
              <p className="text-sm text-slate-500">Configure your CapEx/OpEx and find the optimal pricing.</p>
            </Link>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-[#0B1C2D]">Fast Actions</h3>
            <span className="px-2 py-1 bg-red-100 text-red-600 text-[10px] font-bold rounded-full uppercase tracking-wider">3 Pending</span>
          </div>
          <div className="space-y-4">
            {[
              { label: 'Project ROI Review', sub: 'Project Alpha is below target' },
              { label: 'Resource Allocation', sub: 'Backend team at 110% capacity' },
              { label: 'Customer Retention', sub: 'Schedule meeting with Client X' },
            ].map((action, i) => (
              <button key={i} className="w-full text-left p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100 group">
                <div className="font-bold text-[#0B1C2D] text-sm group-hover:text-[#3AE7E1] transition-colors">{action.label}</div>
                <div className="text-xs text-slate-500 mt-1">{action.sub}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper icons for the dashboard
function MessageSquareShare({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M10 8l3 3-3 3" />
      <path d="M13 11H7" />
    </svg>
  );
}

function Calculator({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <line x1="8" x2="16" y1="6" y2="6" />
      <line x1="16" x2="16" y1="14" y2="18" />
      <path d="M16 10h.01" />
      <path d="M12 10h.01" />
      <path d="M8 10h.01" />
      <path d="M12 14h.01" />
      <path d="M8 14h.01" />
      <path d="M12 18h.01" />
      <path d="M8 18h.01" />
    </svg>
  );
}
