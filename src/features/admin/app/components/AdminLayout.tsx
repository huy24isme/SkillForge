import { useEffect, type ReactNode } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Building2, Users2, UserCog, UserSquare2, BriefcaseBusiness, Bell, LogOut } from 'lucide-react';
import { useAuth } from '@/auth/AuthContext';
import logo1 from '@/assets/logo1.png';

const navigation = [
  { name: 'Company Settings', href: '/admin/company-settings', icon: Building2 },
  { name: 'Teams / Departments', href: '/admin/departments', icon: Users2 },
  { name: 'Employees', href: '/admin/employees', icon: UserSquare2 },
  { name: 'Users', href: '/admin/users', icon: UserCog },
  { name: 'Customers', href: '/admin/customers', icon: BriefcaseBusiness },
];

export function AdminLayout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const { logout } = useAuth();

  useEffect(() => {
    const hasOpenModal = Boolean(
      document.querySelector(
        '[data-slot="dialog-content"][data-state="open"], [data-slot="alert-dialog-content"][data-state="open"], [data-slot="sheet-content"][data-state="open"], [data-slot="drawer-content"][data-state="open"]'
      )
    );

    if (hasOpenModal) {
      return;
    }

    const staleOverlays = document.querySelectorAll(
      '[data-slot="dialog-overlay"], [data-slot="alert-dialog-overlay"], [data-slot="sheet-overlay"], [data-slot="drawer-overlay"]'
    );

    staleOverlays.forEach((overlay) => {
      const state = overlay.getAttribute('data-state');
      if (state !== 'open') {
        overlay.remove();
      }
    });

    document.body.style.pointerEvents = 'auto';
    document.body.style.overflow = '';
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50">
      <aside className="fixed left-0 top-0 bottom-0 w-64 bg-[#0B1C2D] text-white">
        <div className="p-6">
          <img src={logo1} alt="SkillForge" className="h-15 w-auto" />
          <p className="text-xs text-[#3AE7E1] mt-2 text-center">Admin</p>
        </div>

        <nav className="px-3 mt-1">
          {navigation.map((item) => {
            const isRootDashboard = location.pathname === '/admin' && item.href === '/admin/company-settings';
            const isActive = location.pathname === item.href || isRootDashboard;

            return (
              <NavLink
                key={item.name}
                to={item.href}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                  ${isActive
                    ? 'bg-[#3AE7E1] text-[#0B1C2D] shadow-[0_0_15px_rgba(58,231,225,0.3)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? 'text-[#0B1C2D]' : ''}`} />
                {item.name}
              </NavLink>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/5 border border-white/5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3AE7E1] to-[#2563EB] flex items-center justify-center text-[#0B1C2D] font-bold text-xs">
              ADM
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">System Admin</p>
              <p className="text-slate-400 text-xs truncate">Administrator</p>
            </div>
          </div>
        </div>
      </aside>

      <div className="ml-64 min-h-screen">
        <header className="flex items-center justify-between p-8 pb-0">
          <div>
            <h1 className="text-2xl font-bold text-[#0B1C2D]">
              {navigation.find((item) => item.href === location.pathname)?.name || 'Company Settings'}
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              {new Date().toLocaleDateString('vi-VN', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={logout}
              className="p-2 text-slate-400 hover:text-[#0B1C2D] transition-colors"
              title="Logout"
            >
              <LogOut className="w-6 h-6" />
            </button>
            <button className="p-2 text-slate-400 hover:text-[#0B1C2D] transition-colors relative" title="Notifications">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-slate-50" />
            </button>
          </div>
        </header>

        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
