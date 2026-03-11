import React from 'react';
import {
    ArrowRight,
    ArrowDown,
    TrendingUp,
    Users2,
    Settings2,
    GraduationCap,
    Sparkles,
    Zap
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function StrategyMap() {
    const perspectives = [
        {
            id: 'financial',
            title: 'Tài chính (Financial)',
            icon: TrendingUp,
            color: 'bg-blue-600',
            objectives: ['Doanh thu 12B', 'ROI > 150%', 'Tối ưu Chi phí']
        },
        {
            id: 'customer',
            title: 'Khách hàng (Customer)',
            icon: Users2,
            color: 'bg-[#3AE7E1]',
            text: 'text-[#0B1C2D]',
            objectives: ['90% Hài lòng', 'Giảm Churn', 'Top Marketing']
        },
        {
            id: 'process',
            title: 'Quy trình nội bộ (Process)',
            icon: Settings2,
            color: 'bg-purple-600',
            objectives: ['Audit Workflow', 'Tự động hóa', 'QA 100%']
        },
        {
            id: 'learning',
            title: 'Học hỏi & Phát triển (Learning)',
            icon: GraduationCap,
            color: 'bg-orange-500',
            objectives: ['Văn hóa AI', 'Đào tạo Senior', 'Retention > 95%']
        },
    ];

    return (
        <div className="space-y-12 py-8 animate-in fade-in duration-700">
            <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold text-[#0B1C2D]">Bản đồ Chiến lược Doanh nghiệp</h2>
                <p className="text-slate-500">Mối quan hệ nhân quả giữa các mục tiêu BSC</p>
            </div>

            <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
                {perspectives.map((p, i) => (
                    <React.Fragment key={p.id}>
                        <motion.div
                            className={`w-full max-w-2xl p-6 rounded-2xl shadow-lg border border-white/10 ${p.color} ${p.text || 'text-white'} relative overflow-hidden`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <p.icon className="w-16 h-16" />
                            </div>

                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-white/20 rounded-lg">
                                    <p.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold">{p.title}</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                {p.objectives.map((obj, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-md px-3 py-2 rounded-xl text-xs font-bold border border-white/20 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                        {obj}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {i < perspectives.length - 1 && (
                            <motion.div
                                className="flex flex-col items-center gap-1"
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 + 0.2 }}
                            >
                                <div className="w-1 h-8 bg-slate-200 rounded-full" />
                                <ArrowDown className="w-5 h-5 text-slate-300" />
                            </motion.div>
                        )}
                    </React.Fragment>
                ))}
            </div>

            <div className="bg-[#0B1C2D] p-8 rounded-3xl text-white max-w-4xl mx-auto mt-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5">
                    <Zap className="w-32 h-32" />
                </div>
                <div className="flex gap-6 items-center">
                    <div className="p-4 bg-[#3AE7E1]/20 rounded-2xl">
                        <Sparkles className="w-10 h-10 text-[#3AE7E1]" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-[#3AE7E1] mb-2">AI Strategic Advice</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Hệ thống nhận thấy mục tiêu <b>"Audit Workflow"</b> đang bị trễ. Điều này sẽ trực tiếp ảnh hưởng đến chỉ số <b>"90% Hài lòng"</b> ở tầng Khách hàng trong quý tới. CEO nên ưu tiên xử lý điểm nghẽn này ngay.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
