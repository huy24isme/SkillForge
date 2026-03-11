import { useMemo, useState } from 'react';
import {
    TrendingUp,
    Users,
    PieChart as PieChartIcon,
    ArrowUpRight,
    TrendingDown,
    Info,
    ChevronDown,
    ChevronUp,
    Layers,
    Workflow,
    GraduationCap,
    Sparkles
} from 'lucide-react';
import {
    AreaChart,
    Area,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
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

type ProjectPortfolio = {
    name: string;
    revenue: number;
    cost: number;
    client: string;
    deliveryEfficiency: number;
    teamProductivity: number;
    teamAllocation: { team: string; value: number }[];
    costBreakdown: { name: string; value: number }[];
    revenueBreakdown: { name: string; value: number }[];
    roiTrend: { month: string; value: number }[];
};

const PROJECT_PORTFOLIO: ProjectPortfolio[] = [
    {
        name: 'E-commerce App',
        revenue: 1200,
        cost: 480,
        client: 'Global Retail Inc',
        deliveryEfficiency: 88,
        teamProductivity: 91,
        teamAllocation: [
            { team: 'Engineering', value: 45 },
            { team: 'Product', value: 20 },
            { team: 'QA', value: 15 },
            { team: 'Ops', value: 20 },
        ],
        costBreakdown: [
            { name: 'Engineering', value: 260 },
            { name: 'Infrastructure', value: 120 },
            { name: 'Operations', value: 100 },
        ],
        revenueBreakdown: [
            { name: 'Online Sales', value: 840 },
            { name: 'Marketplace', value: 210 },
            { name: 'Ads/Media', value: 150 },
        ],
        roiTrend: [
            { month: 'Feb', value: 118 },
            { month: 'Mar', value: 124 },
            { month: 'Apr', value: 133 },
            { month: 'May', value: 141 },
            { month: 'Jun', value: 147 },
            { month: 'Jul', value: 150 },
        ],
    },
    {
        name: 'Fintech Web',
        revenue: 520,
        cost: 250,
        client: 'Financier Bank',
        deliveryEfficiency: 81,
        teamProductivity: 84,
        teamAllocation: [
            { team: 'Engineering', value: 50 },
            { team: 'Compliance', value: 20 },
            { team: 'QA', value: 15 },
            { team: 'Support', value: 15 },
        ],
        costBreakdown: [
            { name: 'Engineering', value: 140 },
            { name: 'Security', value: 70 },
            { name: 'Operations', value: 40 },
        ],
        revenueBreakdown: [
            { name: 'Licensing', value: 260 },
            { name: 'Transaction Fee', value: 190 },
            { name: 'Support Plan', value: 70 },
        ],
        roiTrend: [
            { month: 'Feb', value: 90 },
            { month: 'Mar', value: 95 },
            { month: 'Apr', value: 98 },
            { month: 'May', value: 103 },
            { month: 'Jun', value: 107 },
            { month: 'Jul', value: 108 },
        ],
    },
    {
        name: 'AI Support Platform',
        revenue: 330,
        cost: 140,
        client: 'TechCorp Solutions',
        deliveryEfficiency: 85,
        teamProductivity: 89,
        teamAllocation: [
            { team: 'AI Engineering', value: 40 },
            { team: 'Data Ops', value: 25 },
            { team: 'Product', value: 20 },
            { team: 'Support', value: 15 },
        ],
        costBreakdown: [
            { name: 'AI Engineering', value: 70 },
            { name: 'Cloud GPU', value: 45 },
            { name: 'Operations', value: 25 },
        ],
        revenueBreakdown: [
            { name: 'Subscription', value: 170 },
            { name: 'Enterprise Pack', value: 120 },
            { name: 'Professional Service', value: 40 },
        ],
        roiTrend: [
            { month: 'Feb', value: 92 },
            { month: 'Mar', value: 108 },
            { month: 'Apr', value: 114 },
            { month: 'May', value: 123 },
            { month: 'Jun', value: 131 },
            { month: 'Jul', value: 136 },
        ],
    },
    {
        name: 'Logistics Portal',
        revenue: 180,
        cost: 120,
        client: 'Logistics Pro',
        deliveryEfficiency: 75,
        teamProductivity: 78,
        teamAllocation: [
            { team: 'Engineering', value: 52 },
            { team: 'QA', value: 18 },
            { team: 'PM', value: 15 },
            { team: 'Ops', value: 15 },
        ],
        costBreakdown: [
            { name: 'Engineering', value: 70 },
            { name: 'Infrastructure', value: 30 },
            { name: 'Operations', value: 20 },
        ],
        revenueBreakdown: [
            { name: 'Contract', value: 130 },
            { name: 'Maintenance', value: 50 },
        ],
        roiTrend: [
            { month: 'Feb', value: 26 },
            { month: 'Mar', value: 31 },
            { month: 'Apr', value: 38 },
            { month: 'May', value: 42 },
            { month: 'Jun', value: 47 },
            { month: 'Jul', value: 50 },
        ],
    },
    {
        name: 'Internal ERP',
        revenue: 70,
        cost: 110,
        client: 'Internal Transformation',
        deliveryEfficiency: 68,
        teamProductivity: 72,
        teamAllocation: [
            { team: 'Engineering', value: 55 },
            { team: 'Data', value: 20 },
            { team: 'QA', value: 15 },
            { team: 'Change Mgmt', value: 10 },
        ],
        costBreakdown: [
            { name: 'Engineering', value: 65 },
            { name: 'Data Migration', value: 30 },
            { name: 'Training', value: 15 },
        ],
        revenueBreakdown: [
            { name: 'Process Savings', value: 50 },
            { name: 'Shared Services', value: 20 },
        ],
        roiTrend: [
            { month: 'Feb', value: -62 },
            { month: 'Mar', value: -55 },
            { month: 'Apr', value: -50 },
            { month: 'May', value: -44 },
            { month: 'Jun', value: -39 },
            { month: 'Jul', value: -36 },
        ],
    },
    {
        name: 'Marketing Site',
        revenue: 50,
        cost: 35,
        client: 'EcoPower Ltd',
        deliveryEfficiency: 86,
        teamProductivity: 87,
        teamAllocation: [
            { team: 'Design', value: 40 },
            { team: 'Engineering', value: 35 },
            { team: 'Growth', value: 25 },
        ],
        costBreakdown: [
            { name: 'Design', value: 15 },
            { name: 'Engineering', value: 12 },
            { name: 'Growth Campaigns', value: 8 },
        ],
        revenueBreakdown: [
            { name: 'Lead Generation', value: 38 },
            { name: 'Cross-sell', value: 12 },
        ],
        roiTrend: [
            { month: 'Feb', value: 25 },
            { month: 'Mar', value: 28 },
            { month: 'Apr', value: 31 },
            { month: 'May', value: 35 },
            { month: 'Jun', value: 38 },
            { month: 'Jul', value: 43 },
        ],
    },
    {
        name: 'Data Lake Initiative',
        revenue: 0,
        cost: 25,
        client: 'Internal Analytics',
        deliveryEfficiency: 60,
        teamProductivity: 69,
        teamAllocation: [
            { team: 'Data Engineering', value: 50 },
            { team: 'Architecture', value: 30 },
            { team: 'Governance', value: 20 },
        ],
        costBreakdown: [
            { name: 'Infrastructure', value: 12 },
            { name: 'Data Engineering', value: 9 },
            { name: 'Governance', value: 4 },
        ],
        revenueBreakdown: [
            { name: 'No direct revenue', value: 0 },
        ],
        roiTrend: [
            { month: 'Feb', value: -100 },
            { month: 'Mar', value: -100 },
            { month: 'Apr', value: -100 },
            { month: 'May', value: -100 },
            { month: 'Jun', value: -100 },
            { month: 'Jul', value: -100 },
        ],
    },
];

const TOP_COLORS = ['#10B981', '#2563EB', '#7C3AED'];

const formatMoney = (value: number) => {
    if (value >= 1000) {
        return `${(value / 1000).toFixed(2)}B`;
    }
    return `${value}M`;
};

const calcRoi = (revenue: number, cost: number) => {
    if (cost === 0) {
        return 0;
    }
    return ((revenue - cost) / cost) * 100;
};

export default function FinancialPerspective() {
    const [showOtherDetails, setShowOtherDetails] = useState(false);
    const [selectedProject, setSelectedProject] = useState<ProjectPortfolio | null>(null);

    const portfolio = useMemo(() => {
        const totalRevenue = PROJECT_PORTFOLIO.reduce((sum, project) => sum + project.revenue, 0);
        const totalCost = PROJECT_PORTFOLIO.reduce((sum, project) => sum + project.cost, 0);
        const portfolioRoi = calcRoi(totalRevenue, totalCost);

        const ranked = [...PROJECT_PORTFOLIO].sort((a, b) => b.revenue - a.revenue);
        const topProjects = ranked.slice(0, 3).map((project, index) => ({
            ...project,
            color: TOP_COLORS[index],
            revenueShare: totalRevenue === 0 ? 0 : (project.revenue / totalRevenue) * 100,
            roi: calcRoi(project.revenue, project.cost),
        }));

        const otherProjects = ranked.slice(3).map((project) => ({
            ...project,
            roi: calcRoi(project.revenue, project.cost),
            revenueShare: totalRevenue === 0 ? 0 : (project.revenue / totalRevenue) * 100,
        }));
        const allProjects = ranked.map((project) => ({
            ...project,
            roi: calcRoi(project.revenue, project.cost),
            revenueShare: totalRevenue === 0 ? 0 : (project.revenue / totalRevenue) * 100,
        }));
        const otherRevenue = otherProjects.reduce((sum, project) => sum + project.revenue, 0);

        const highestRoi = [...PROJECT_PORTFOLIO]
            .map((project) => ({ ...project, roi: calcRoi(project.revenue, project.cost) }))
            .sort((a, b) => b.roi - a.roi)[0];

        const marginDestroyer = [...PROJECT_PORTFOLIO]
            .map((project) => ({ ...project, margin: project.revenue - project.cost }))
            .sort((a, b) => a.margin - b.margin)[0];

        const topRevenueProject = ranked[0];
        const concentrationRisk = totalRevenue === 0 ? 0 : (topRevenueProject.revenue / totalRevenue) * 100;

        const clientRevenue = PROJECT_PORTFOLIO.filter(
            (project) => !project.client.toLowerCase().includes('internal')
        ).reduce((sum, project) => sum + project.revenue, 0);
        const avgDeliveryEfficiency =
            PROJECT_PORTFOLIO.reduce((sum, project) => sum + project.deliveryEfficiency, 0) / PROJECT_PORTFOLIO.length;
        const avgTeamProductivity =
            PROJECT_PORTFOLIO.reduce((sum, project) => sum + project.teamProductivity, 0) / PROJECT_PORTFOLIO.length;

        return {
            totalRevenue,
            totalCost,
            portfolioRoi,
            topProjects,
            allProjects,
            otherProjects,
            otherRevenue,
            topRevenueProject,
            highestRoi,
            marginDestroyer,
            concentrationRisk,
            clientRevenue,
            avgDeliveryEfficiency,
            avgTeamProductivity,
        };
    }, []);

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
                    <div className="text-2xl font-bold text-[#0B1C2D]">{formatMoney(FINANCIAL_DATA[FINANCIAL_DATA.length - 1].revenue * 1000)} VND</div>
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
                    <div className="text-2xl font-bold text-[#0B1C2D]">{formatMoney(FINANCIAL_DATA[FINANCIAL_DATA.length - 1].cost * 1000)} VND</div>
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
                    <div className="text-2xl font-bold text-[#0B1C2D]">{Math.round(((portfolio.totalRevenue - portfolio.totalCost) / portfolio.totalRevenue) * 100)}%</div>
                    <div className="text-xs text-blue-500 mt-2 flex items-center gap-1">
                        On track for Q3 goals
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-500 text-sm">Portfolio ROI</span>
                        <div className="p-1.5 bg-orange-50 rounded-lg text-orange-600">
                            <TrendingUp className="w-4 h-4" />
                        </div>
                    </div>
                    <div className="text-2xl font-bold text-[#0B1C2D]">{portfolio.portfolioRoi > 0 ? '+' : ''}{Math.round(portfolio.portfolioRoi)}%</div>
                    <div className="text-xs text-slate-500 mt-2">
                        Portfolio-level benchmark
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="order-2 lg:col-span-3 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
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

                <div className="order-1 lg:col-span-3 bg-white p-10 rounded-2xl shadow-md border-2 border-[#3AE7E1]/30">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-[#0B1C2D] text-xl">CEO Portfolio Intelligence</h3>
                        <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600">Financial Perspective</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                        <div className="p-3 rounded-xl border border-slate-100 bg-slate-50">
                            <div className="text-[11px] uppercase tracking-wider text-slate-500">Total Revenue</div>
                            <div className="text-xl font-bold text-[#0B1C2D]">{formatMoney(portfolio.totalRevenue)}</div>
                        </div>
                        <div className="p-3 rounded-xl border border-slate-100 bg-slate-50">
                            <div className="text-[11px] uppercase tracking-wider text-slate-500">Total Cost</div>
                            <div className="text-xl font-bold text-[#0B1C2D]">{formatMoney(portfolio.totalCost)}</div>
                        </div>
                        <div className="p-3 rounded-xl border border-slate-100 bg-slate-50">
                            <div className="text-[11px] uppercase tracking-wider text-slate-500">Portfolio ROI</div>
                            <div className={`text-xl font-bold ${portfolio.portfolioRoi >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                                {portfolio.portfolioRoi >= 0 ? '+' : ''}{Math.round(portfolio.portfolioRoi)}%
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                            <span>Portfolio Revenue Mix (Top 3 + Other Projects)</span>
                            <span>Total Revenue: {formatMoney(portfolio.totalRevenue)}</span>
                        </div>
                        <div className="w-full h-10 rounded-xl overflow-hidden border border-slate-200 flex bg-slate-100 relative z-0">
                            {portfolio.topProjects.map((project) => (
                                <button
                                    key={project.name}
                                    onClick={() => setSelectedProject(project)}
                                    className="h-full relative z-10 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400"
                                    style={{ width: `${project.revenueShare}%`, backgroundColor: project.color }}
                                    title={`${project.name} - ${project.revenueShare.toFixed(1)}% of total revenue`}
                                >
                                    <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/10 transition-opacity" />
                                </button>
                            ))}
                            <button
                                onClick={() => setShowOtherDetails((prev) => !prev)}
                                className="h-full relative z-10 bg-slate-200 hover:bg-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400"
                                style={{ width: `${Math.max(0, 100 - portfolio.topProjects.reduce((sum, p) => sum + p.revenueShare, 0))}%` }}
                                title={`Other Projects - ${(portfolio.otherRevenue / portfolio.totalRevenue * 100).toFixed(1)}% of total revenue`}
                            />
                        </div>
                    </div>

                    <div className="space-y-2 text-xs mb-5">
                        {portfolio.topProjects.map((project) => (
                            <button
                                key={project.name}
                                onClick={() => setSelectedProject(project)}
                                className="w-full p-2 rounded-lg border border-slate-100 bg-slate-50 hover:bg-slate-100 flex items-center justify-between"
                            >
                                <span className="flex items-center gap-2 text-[#0B1C2D] font-medium">
                                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: project.color }} />
                                    {project.name}
                                </span>
                                <span className="text-slate-600">{project.revenueShare.toFixed(1)}% rev share</span>
                            </button>
                        ))}
                        <button
                            onClick={() => setShowOtherDetails((prev) => !prev)}
                            className="w-full p-2 rounded-lg border border-slate-100 bg-white hover:bg-slate-50 flex items-center justify-between"
                        >
                            <span className="flex items-center gap-2 text-[#0B1C2D] font-medium">
                                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                                Details (All Projects)
                            </span>
                            <span className="text-slate-600 flex items-center gap-1">
                                {portfolio.allProjects.length} projects | {portfolio.totalRevenue === 0 ? '0.0' : ((portfolio.otherRevenue / portfolio.totalRevenue) * 100).toFixed(1)}% in Other
                                {showOtherDetails ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                            </span>
                        </button>
                    </div>

                    {showOtherDetails && (
                        <div className="mb-5 p-3 rounded-xl border border-slate-200 bg-slate-50 overflow-x-auto">
                            <div className="text-xs font-semibold text-slate-600 mb-2">Details: Full Portfolio Breakdown</div>
                            <table className="w-full text-xs">
                                <thead>
                                    <tr className="text-slate-500 border-b border-slate-200">
                                        <th className="text-left py-2">Project Name</th>
                                        <th className="text-right py-2">Cost</th>
                                        <th className="text-right py-2">Revenue</th>
                                        <th className="text-right py-2">ROI %</th>
                                        <th className="text-right py-2">Portfolio Contribution</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {portfolio.allProjects.map((project) => (
                                        <tr key={project.name} className="border-b last:border-b-0 border-slate-100 text-slate-700">
                                            <td className="py-2">{project.name}</td>
                                            <td className="py-2 text-right">{formatMoney(project.cost)}</td>
                                            <td className="py-2 text-right">{formatMoney(project.revenue)}</td>
                                            <td className={`py-2 text-right font-semibold ${project.roi >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                                                {project.roi >= 0 ? '+' : ''}{Math.round(project.roi)}%
                                            </td>
                                            <td className="py-2 text-right">{project.revenueShare.toFixed(1)}%</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="flex gap-2 items-start">
                            <Sparkles className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                            <div className="text-xs text-slate-600 leading-relaxed space-y-1">
                                <p><span className="font-bold text-blue-600">AI Strategic Insight:</span> {portfolio.topRevenueProject.name} generates the most revenue at {portfolio.concentrationRisk.toFixed(1)}% of the portfolio.</p>
                                <p>Highest ROI project: <b>{portfolio.highestRoi.name}</b> ({Math.round(portfolio.highestRoi.roi)}%).</p>
                                <p>Margin destroyer: <b>{portfolio.marginDestroyer.name}</b> with {formatMoney(portfolio.marginDestroyer.revenue - portfolio.marginDestroyer.cost)} operating gap.</p>
                                <p>Revenue concentration risk: Top project contributes {portfolio.concentrationRisk.toFixed(1)}%. Diversification initiatives should be considered if concentration remains above 50%.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-[#0B1C2D] mb-4 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#3AE7E1]" />
                    Balanced Scorecard Alignment
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 text-sm">
                    <div className="p-4 rounded-xl border border-emerald-100 bg-emerald-50/50">
                        <div className="font-semibold text-emerald-700 mb-1">Financial Perspective</div>
                        <div className="text-slate-700">Revenue {formatMoney(portfolio.totalRevenue)}, Cost {formatMoney(portfolio.totalCost)}, ROI {Math.round(portfolio.portfolioRoi)}%.</div>
                    </div>
                    <div className="p-4 rounded-xl border border-blue-100 bg-blue-50/50">
                        <div className="font-semibold text-blue-700 mb-1 flex items-center gap-1"><Users className="w-4 h-4" />Customer Perspective</div>
                        <div className="text-slate-700">Client-driven revenue: {formatMoney(portfolio.clientRevenue)} ({((portfolio.clientRevenue / portfolio.totalRevenue) * 100).toFixed(1)}%).</div>
                    </div>
                    <div className="p-4 rounded-xl border border-violet-100 bg-violet-50/50">
                        <div className="font-semibold text-violet-700 mb-1 flex items-center gap-1"><Workflow className="w-4 h-4" />Internal Process Perspective</div>
                        <div className="text-slate-700">Average delivery efficiency across projects: {portfolio.avgDeliveryEfficiency.toFixed(1)}%.</div>
                    </div>
                    <div className="p-4 rounded-xl border border-orange-100 bg-orange-50/50">
                        <div className="font-semibold text-orange-700 mb-1 flex items-center gap-1"><GraduationCap className="w-4 h-4" />Learning & Growth Perspective</div>
                        <div className="text-slate-700">Average team productivity index: {portfolio.avgTeamProductivity.toFixed(1)}%.</div>
                    </div>
                </div>
            </div>

            {selectedProject && (
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="flex items-start justify-between gap-3 mb-5">
                        <div>
                            <h3 className="font-bold text-[#0B1C2D] text-lg">Project Analytics Drill-down: {selectedProject.name}</h3>
                            <p className="text-xs text-slate-500 mt-1">ROI trend, cost/revenue structure, delivery performance, and team allocation for strategic review.</p>
                        </div>
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="text-xs px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50"
                        >
                            Close
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="p-4 rounded-xl border border-slate-100 bg-slate-50">
                            <div className="text-sm font-semibold text-[#0B1C2D] mb-3">ROI Trend Over Time</div>
                            <div className="h-48">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={selectedProject.roiTrend}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                        <XAxis dataKey="month" tick={{ fill: '#64748B', fontSize: 11 }} axisLine={false} tickLine={false} />
                                        <YAxis tick={{ fill: '#64748B', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
                                        <Tooltip formatter={(v: number | string) => `${v}%`} />
                                        <Line type="monotone" dataKey="value" stroke="#0EA5E9" strokeWidth={2.5} dot={{ r: 3 }} name="ROI" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div className="p-4 rounded-xl border border-slate-100 bg-slate-50">
                            <div className="text-sm font-semibold text-[#0B1C2D] mb-3">Performance Snapshot</div>
                            <div className="grid grid-cols-2 gap-3 text-xs">
                                <div className="p-3 rounded-lg bg-white border border-slate-100">
                                    <div className="text-slate-500">Revenue</div>
                                    <div className="font-bold text-[#0B1C2D] text-lg">{formatMoney(selectedProject.revenue)}</div>
                                </div>
                                <div className="p-3 rounded-lg bg-white border border-slate-100">
                                    <div className="text-slate-500">Cost</div>
                                    <div className="font-bold text-[#0B1C2D] text-lg">{formatMoney(selectedProject.cost)}</div>
                                </div>
                                <div className="p-3 rounded-lg bg-white border border-slate-100">
                                    <div className="text-slate-500">Delivery Performance</div>
                                    <div className="font-bold text-emerald-600 text-lg">{selectedProject.deliveryEfficiency}%</div>
                                </div>
                                <div className="p-3 rounded-lg bg-white border border-slate-100">
                                    <div className="text-slate-500">Team Productivity</div>
                                    <div className="font-bold text-blue-600 text-lg">{selectedProject.teamProductivity}%</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6 text-xs">
                        <div className="p-4 rounded-xl border border-slate-100">
                            <div className="font-semibold text-[#0B1C2D] mb-2">Cost Breakdown</div>
                            <div className="space-y-2">
                                {selectedProject.costBreakdown.map((item) => (
                                    <div key={item.name} className="flex justify-between">
                                        <span className="text-slate-600">{item.name}</span>
                                        <span className="font-semibold text-slate-800">{formatMoney(item.value)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-4 rounded-xl border border-slate-100">
                            <div className="font-semibold text-[#0B1C2D] mb-2">Revenue Breakdown</div>
                            <div className="space-y-2">
                                {selectedProject.revenueBreakdown.map((item) => (
                                    <div key={item.name} className="flex justify-between">
                                        <span className="text-slate-600">{item.name}</span>
                                        <span className="font-semibold text-slate-800">{formatMoney(item.value)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-4 rounded-xl border border-slate-100">
                            <div className="font-semibold text-[#0B1C2D] mb-2">Team Allocation</div>
                            <div className="space-y-2">
                                {selectedProject.teamAllocation.map((item) => (
                                    <div key={item.team}>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-slate-600">{item.team}</span>
                                            <span className="font-semibold text-slate-800">{item.value}%</span>
                                        </div>
                                        <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                                            <div className="h-full bg-[#3AE7E1]" style={{ width: `${item.value}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-slate-500 mt-0.5" />
                    <div>
                        <h3 className="font-semibold text-[#0B1C2D] mb-1">Scalability Ready</h3>
                        <p className="text-sm text-slate-600 mb-3">The portfolio module is structured for future strategic capabilities without redesigning the information architecture.</p>
                        <div className="flex flex-wrap gap-2 text-xs">
                            <span className="px-2.5 py-1 rounded-full border border-slate-200 bg-slate-50">Time filtering (Quarter / Year)</span>
                            <span className="px-2.5 py-1 rounded-full border border-slate-200 bg-slate-50">ROI forecasting</span>
                            <span className="px-2.5 py-1 rounded-full border border-slate-200 bg-slate-50">Scenario simulation</span>
                            <span className="px-2.5 py-1 rounded-full border border-slate-200 bg-slate-50">Strategic project tagging</span>
                            <span className="px-2.5 py-1 rounded-full border border-slate-200 bg-slate-50">Client vs Internal comparison</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
