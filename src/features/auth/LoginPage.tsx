import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '@/auth/AuthContext'
import { mockUsers, roleHomePath } from '@/auth/mockUsers'
import { motion, AnimatePresence } from 'motion/react'
import { Lock, User, ArrowRight, Sparkles, Shield, Zap } from 'lucide-react'
import logo from '@/assets/logo1.png'
import { FloatingContactButtons } from '@/components/FloatingContactButtons'

export function LoginPage() {
  const { login, isAuthenticated, user, logout } = useAuth()
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null)
  const [isDemoSectionVisible, setIsDemoSectionVisible] = useState(true)

  const demoAccounts = [
    { role: 'Employee', username: 'employee01', password: '123456', color: 'from-emerald-500 to-teal-500', icon: '👤' },
    { role: 'PM', username: 'pm01', password: '123456', color: 'from-blue-500 to-cyan-500', icon: '📊' },
    { role: 'Leadership', username: 'leader01', password: '123456', color: 'from-violet-500 to-purple-500', icon: '👑' }
  ]

  const handleQuickFill = (username: string, password: string, role: string) => {
    setSelectedDemo(role)
    setUsername(username)
    setPassword(password)
    setError('')
    
    // Hide demo section after ripple effect
    setTimeout(() => {
      setIsDemoSectionVisible(false)
    }, 800)
    
    // Reset selection after animation
    setTimeout(() => setSelectedDemo(null), 1000)
  }

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    setError('')

    // Simulate loading for smooth UX
    await new Promise(resolve => setTimeout(resolve, 800))

    const result = login({ username, password })
    if (!result.success) {
      setError(result.message || 'Đăng nhập thất bại')
      setIsLoading(false)
      return
    }

    const matched = mockUsers.find((account) => account.username === username)
    if (!matched) {
      setIsLoading(false)
      return
    }

    navigate(roleHomePath[matched.role], { replace: true })
  }

  return (
    <>
    <div className="min-h-screen bg-[#0B1C2D] text-white font-sans overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div 
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3AE7E1]/10 rounded-full blur-[120px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-[100px]"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(58, 231, 225, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(58, 231, 225, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />

        {/* Diagonal Lines */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`diag-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-[#3AE7E1]/20 to-transparent"
              style={{
                width: '200%',
                top: `${i * 8}%`,
                left: '-50%',
                transform: 'rotate(-12deg)',
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                x: [0, 50, 0],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* Geometric Decorative Lines */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-[#3AE7E1]/10 rounded-lg rotate-12" />
        <div className="absolute top-40 right-20 w-24 h-24 border border-[#2563EB]/10 rounded-full" />
        <div className="absolute bottom-32 left-1/4 w-20 h-20 border border-[#3AE7E1]/10 rotate-45" />
        <div className="absolute bottom-20 right-1/3 w-28 h-28 border border-[#2563EB]/10 rounded-lg -rotate-6" />

        {/* Animated Corner Accents */}
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-[#3AE7E1]/20 rounded-tl-3xl"
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-[#2563EB]/20 rounded-br-3xl"
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Circuit-like Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3AE7E1" stopOpacity="0" />
              <stop offset="50%" stopColor="#3AE7E1" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#3AE7E1" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Horizontal lines */}
          <motion.line
            x1="0" y1="20%" x2="100%" y2="20%"
            stroke="url(#lineGradient)" strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.line
            x1="0" y1="60%" x2="100%" y2="60%"
            stroke="url(#lineGradient)" strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          />
        </svg>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#3AE7E1]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <motion.img 
              src={logo} 
              alt="SkillForge Logo" 
              className="h-12 w-auto object-contain mix-blend-screen"
              whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
            />
          </Link>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/" 
              className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-slate-300 hover:text-[#3AE7E1] hover:border-[#3AE7E1]/50 transition-all"
            >
              <motion.span
                animate={{ x: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ←
              </motion.span>
              Quay lại trang chủ
            </Link>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Branding */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#3AE7E1] text-xs font-bold uppercase tracking-wider mb-8"
            >
              <Sparkles className="w-4 h-4" />
              Secure Enterprise Platform
            </motion.div>
            
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Chào mừng trở lại
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#3AE7E1] to-[#2563EB] mt-2">
                SkillForge
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-slate-400 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Đăng nhập để truy cập hệ thống quản lý dự án và nhân sự thông minh của bạn
            </motion.p>

            {/* Feature highlights */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {[
                { icon: Shield, text: 'Bảo mật cấp doanh nghiệp' },
                { icon: Zap, text: 'Dashboard real-time' },
                { icon: Sparkles, text: 'AI-powered insights' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  className="flex items-center gap-3 text-slate-300"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#3AE7E1]" />
                  </div>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Login Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3AE7E1]/20 to-[#2563EB]/20  rounded-lg blur-xl" />
              
              {/* Form Card */}
              <div className="relative bg-[#0F253A]/80 backdrop-blur-xl border border-white/10 rounded-lg p-8 md:p-10 shadow-2xl">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h2 className="text-3xl font-bold mb-2">Đăng nhập</h2>
                  <p className="text-slate-400 mb-8">Nhập thông tin để truy cập hệ thống</p>
                </motion.div>

                {isAuthenticated && user && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 rounded-xl bg-[#3AE7E1]/10 border border-[#3AE7E1]/30"
                  >
                    <p className="text-sm text-[#3AE7E1] mb-3 flex items-center gap-2">
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        ✓
                      </motion.span>
                      Đang đăng nhập: <strong>{user.username}</strong> ({user.role})
                    </p>
                    <div className="flex gap-2">
                      <motion.button
                        type="button"
                        onClick={() => navigate(roleHomePath[user.role], { replace: true })}
                        className="relative flex-1 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#3AE7E1] to-[#2563EB] text-white text-sm font-bold overflow-hidden group"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="relative flex items-center justify-center gap-2">
                          Vào Dashboard
                          <motion.div
                            animate={{ x: [0, 3, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          >
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </span>
                      </motion.button>
                      
                      <motion.button
                        type="button"
                        onClick={logout}
                        className="px-4 py-2.5 rounded-lg border border-white/20 text-sm hover:bg-white/10 hover:border-white/40 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Logout
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleLogin} className="space-y-5">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <label className="block text-sm font-medium text-slate-200 mb-2">
                      Username
                    </label>
                    <div className="relative group">
                      
                      {/* Animated border glow */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#3AE7E1]/0 via-[#3AE7E1]/20 to-[#2563EB]/0 opacity-0 group-focus-within:opacity-100 blur-sm transition-opacity duration-500" />
                      
                      <input
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        className="relative w-full pl-12 pr-4 py-4 bg-[#1a2942]/50 backdrop-blur-sm border border-slate-700/60 rounded-xl text-white text-[15px] placeholder:text-slate-500 hover:bg-[#1a2942]/70 hover:border-slate-600 focus:bg-[#1a2942]/80 focus:border-[#3AE7E1] focus:shadow-[0_0_0_3px_rgba(58,231,225,0.1)] transition-all duration-300 outline-none"
                        placeholder=" employee01"
                        required
                        autoComplete="username"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <label className="block text-sm font-medium text-slate-200 mb-2">
                      Password
                    </label>
                    <div className="relative group">
                      {/* Icon wrapper with better positioning */}
                      
                      {/* Animated border glow */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#3AE7E1]/0 via-[#3AE7E1]/20 to-[#2563EB]/0 opacity-0 group-focus-within:opacity-100 blur-sm transition-opacity duration-500" />
                      
                      <input
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="relative w-full pl-12 pr-4 py-4 bg-[#1a2942]/50 backdrop-blur-sm border border-slate-700/60 rounded-xl text-white text-[15px] placeholder:text-slate-500 hover:bg-[#1a2942]/70 hover:border-slate-600 focus:bg-[#1a2942]/80 focus:border-[#3AE7E1] focus:shadow-[0_0_0_3px_rgba(58,231,225,0.1)] transition-all duration-300 outline-none"
                        placeholder=" ••••••"
                        
                        type="password"
                        required
                        autoComplete="current-password"
                      />
                    </div>
                  </motion.div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        x: [0, -10, 10, -10, 10, 0]
                      }}
                      transition={{
                        x: { duration: 0.5 }
                      }}
                      className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 backdrop-blur-sm"
                    >
                      <p className="text-sm text-red-400 flex items-center gap-2">
                        <span className="text-lg">⚠️</span>
                        {error}
                      </p>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className="relative w-full py-4 bg-gradient-to-r from-[#3AE7E1] to-[#2563EB] text-white font-bold rounded-xl overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    {/* Animated gradient overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#2563EB] via-[#3AE7E1] to-[#2563EB]"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{ opacity: 0.3 }}
                    />
                    
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-white/20 blur-xl" />
                    </div>

                    {/* Button content */}
                    <span className="relative flex items-center justify-center gap-2">
                      {isLoading ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          <span>Đang xử lý...</span>
                        </>
                      ) : (
                        <>
                          <span>Đăng nhập</span>
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <ArrowRight className="w-5 h-5" />
                          </motion.div>
                        </>
                      )}
                    </span>
                  </motion.button>
                </form>

                {/* Button to show demo accounts again */}
                <AnimatePresence>
                  {!isDemoSectionVisible && (
                    <motion.button
                      type="button"
                      onClick={() => setIsDemoSectionVisible(true)}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        scale: 1,
                        transition: {
                          duration: 0.5,
                          ease: "easeOut",
                          delay: 0.3
                        }
                      }}
                      exit={{ 
                        opacity: 0, 
                        y: 20,
                        scale: 0.95,
                        transition: {
                          duration: 0.4,
                          ease: "easeIn"
                        }
                      }}
                      className="relative w-full mt-6 py-3 flex items-center justify-center gap-2 text-sm font-medium text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#3AE7E1]/50 rounded-xl transition-all group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Sparkles className="w-4 h-4 text-[#3AE7E1] group-hover:rotate-12 transition-transform" />
                      <span>Chọn tài khoản demo</span>
                      <motion.span
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.button>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {isDemoSectionVisible && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { 
                          duration: 0.6,
                          ease: "easeOut"
                        }
                      }}
                      exit={{ 
                        opacity: 0,
                        y: -20,
                        scale: 0.95,
                        transition: { 
                          duration: 0.5,
                          ease: "easeInOut"
                        }
                      }}
                      transition={{ delay: 1 }}
                      className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden"
                    >
                      <div className="flex items-center gap-2 mb-5">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#3AE7E1]/20 to-[#2563EB]/20">
                          <Sparkles className="w-4 h-4 text-[#3AE7E1]" />
                        </div>
                        <p className="text-sm font-semibold text-white">
                          Tài khoản demo
                        </p>
                      </div>
                      
                      <p className="text-xs text-slate-400 mb-4">
                        Click vào tài khoản bên dưới để tự động điền thông tin đăng nhập
                      </p>
                      
                      <div className="grid grid-cols-1 gap-3">
                        {demoAccounts.map((account, idx) => (
                          <motion.button
                            key={account.role}
                            type="button"
                            onClick={() => handleQuickFill(account.username, account.password, account.role)}
                            className={`relative w-full text-left py-3.5 px-4 rounded-xl bg-[#1a2942]/40 border border-slate-700/50 overflow-hidden group hover:bg-[#1a2942]/60 hover:border-[#3AE7E1]/50 transition-all duration-300 ${
                              selectedDemo === account.role ? 'border-[#3AE7E1] bg-[#3AE7E1]/10 shadow-[0_0_20px_rgba(58,231,225,0.15)]' : ''
                            }`}
                            whileHover={{ scale: 1.02, x: 3 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1 + idx * 0.08 }}
                          >
                            {/* Gradient overlay on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${account.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                            
                            {/* Ripple effect on click */}
                            {selectedDemo === account.role && (
                              <motion.div
                                className="absolute inset-0 bg-[#3AE7E1]/20"
                                initial={{ scale: 0, opacity: 1 }}
                                animate={{ scale: 2, opacity: 0 }}
                                transition={{ duration: 0.6 }}
                              />
                            )}

                            <div className="relative flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <motion.div 
                                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${account.color} flex items-center justify-center text-xl shadow-lg`}
                                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                                  transition={{ duration: 0.5 }}
                                >
                                  {account.icon}
                                </motion.div>
                                <div className="flex-1">
                                  <p className="text-sm font-semibold text-white mb-0.5">{account.role}</p>
                                  <div className="flex items-center gap-2">
                                    <code className="text-xs text-[#3AE7E1] font-mono">{account.username}</code>
                                    <span className="text-xs text-slate-500">•</span>
                                    <span className="text-xs text-slate-500">123456</span>
                                  </div>
                                </div>
                              </div>
                              
                              <motion.div
                                className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"
                                animate={selectedDemo === account.role ? { scale: [1, 1.2, 1] } : {}}
                              >
                                <ArrowRight className="w-4 h-4 text-[#3AE7E1]" />
                              </motion.div>
                            </div>
                          </motion.button>
                        ))}
                      </div>
                      
                      <motion.div 
                        className="mt-5 pt-4 border-t border-white/5 flex items-center justify-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4 }}
                      >
                        <div className="flex items-center justify-center w-5 h-5 rounded bg-[#3AE7E1]/10">
                          <span className="text-xs">💡</span>
                        </div>
                        <p className="text-xs text-slate-400">
                          Tất cả tài khoản đều dùng mật khẩu: <code className="px-2 py-0.5 rounded bg-[#3AE7E1]/10 text-[#3AE7E1] font-mono">123456</code>
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    <FloatingContactButtons />
    </>
  )
}
