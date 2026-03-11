import React from 'react';
import {
    GraduationCap,
    TrendingUp,
    Users,
    Award,
    Brain,
    Zap,
    ArrowUpRight,
    BarChart3,
    Dna,
    BookOpen
} from 'lucide-react';

const TEAM_PERFORMANCE = [
    { team: 'Frontend', productivity: 1.4, skills: 85, satisfaction: 92 },
    { team: 'Backend', productivity: 1.1, skills: 78, satisfaction: 85 },
    { team: 'Mobile', productivity: 1.6, skills: 92, satisfaction: 88 },
    { team: 'Design', productivity: 0.9, skills: 80, satisfaction: 95 },
    { team: 'QA', productivity: 1.2, skills: 75, satisfaction: 90 },
];

export default function LearningGrowthPerspective() {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                    <div className="p-3 bg-orange-50 rounded-xl text-orange-600">
                        <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Avg Productivity</div>
                        <div className="text-2xl font-bold text-[#0B1C2D]">1.24x</div>
                        <div className="text-[10px] text-green-500 font-bold">+0.12 vs Q1</div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                    <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                        <Brain className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Skill Readiness</div>
                        <div className="text-2xl font-bold text-[#0B1C2D]">82%</div>
                        <div className="text-[10px] text-blue-500 font-bold">Target: 85%</div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                    <div className="p-3 bg-red-50 rounded-xl text-red-600">
                        <Users className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Retention Rate</div>
                        <div className="text-2xl font-bold text-[#0B1C2D]">94.5%</div>
                        <div className="text-[10px] text-green-500 font-bold">Excellent</div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Team Productivity Matrix */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                    <h3 className="font-bold text-[#0B1C2D] mb-6 flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-orange-600" />
                        Team Performance Matrix
                    </h3>
                    <div className="space-y-6">
                        {TEAM_PERFORMANCE.map((team, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-20 text-sm font-bold text-[#0B1C2D]">{team.team}</div>
                                <div className="flex-1 space-y-2">
                                    <div className="flex justify-between text-[10px] text-slate-400 uppercase font-bold">
                                        <span>Productivity Index</span>
                                        <span className="text-[#0B1C2D]">{team.productivity}x</span>
                                    </div>
                                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full ${team.productivity >= 1.2 ? 'bg-orange-500' : 'bg-slate-400'}`}
                                            style={{ width: `${(team.productivity / 2) * 100}%` }}
                                        />
                                    </div>
                                </div>
                                <div className="w-12 text-right text-xs font-bold text-slate-600">
                                    {team.skills}%
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Strategic Skill Gaps */}
                <div className="space-y-6">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <h3 className="font-bold text-[#0B1C2D] mb-6 flex items-center gap-2">
                            <Dna className="w-5 h-5 text-blue-600" />
                            Strategic Skill Gaps
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-red-50 rounded-xl border border-red-100">
                                <div className="text-xs font-bold text-red-600 uppercase mb-2">High Impact Gap</div>
                                <div className="text-lg font-bold text-[#0B1C2D]">AI Engineering</div>
                                <p className="text-[10px] text-slate-500 mt-1">Needed for Q4 roadmap: 4 senior roles</p>
                            </div>
                            <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                                <div className="text-xs font-bold text-orange-600 uppercase mb-2">Medium Gap</div>
                                <div className="text-lg font-bold text-[#0B1C2D]">Cloud Security</div>
                                <p className="text-[10px] text-slate-500 mt-1">Needed for Fintech project: 2 roles</p>
                            </div>
                        </div>

                        <div className="mt-8 border-t border-slate-100 pt-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm font-bold text-[#0B1C2D]">Training Pipeline</span>
                                <span className="text-xs text-blue-600 font-bold hover:underline cursor-pointer">View Roadmap</span>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                                    <BookOpen className="w-4 h-4 text-slate-400" />
                                    <div className="flex-1 text-xs text-slate-600">Advanced React Patterns — <span className="font-bold text-[#0B1C2D]">12 Enrolled</span></div>
                                    <div className="w-12 bg-white h-1.5 rounded-full overflow-hidden border border-slate-200">
                                        <div className="bg-blue-500 h-full w-[75%]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#0B1C2D] to-[#1E3A5F] p-6 rounded-2xl text-white">
                        <div className="flex gap-4 items-center">
                            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                                <Zap className="w-6 h-6 text-[#3AE7E1]" />
                            </div>
                            <div>
                                <div className="text-sm font-bold">1 Person = 10 People</div>
                                <p className="text-xs text-slate-400 mt-1">Our top performers are currently tracking at <span className="text-[#3AE7E1] font-bold">4.2x</span> the industry average.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
