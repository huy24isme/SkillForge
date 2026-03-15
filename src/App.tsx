import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import EmployeeApp from '@/features/employee/app/App'
import PMApp from '@/features/pm/app/App'
import LeadershipApp from '@/features/leadership/app/App'
import AdminApp from '@/features/admin/app/App'
import { AuthProvider, useAuth } from '@/auth/AuthContext'
import { ProtectedRoute } from '@/auth/ProtectedRoute'
import { LoginPage } from '@/features/auth/LoginPage'
import { roleHomePath } from '@/auth/mockUsers'
import { LandingPage } from './pages/LandingPage'

function DefaultRedirect() {
  const { isAuthenticated, user } = useAuth()

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />
  }

  return <Navigate to={roleHomePath[user.role]} replace />
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login" element={<LoginPage />} />

          <Route
            path="/employee/*"
            element={
              <ProtectedRoute role="employee">
                <EmployeeApp />
              </ProtectedRoute>
            }
          />

          <Route
            path="/pm/*"
            element={
              <ProtectedRoute role="pm">
                <PMApp />
              </ProtectedRoute>
            }
          />

          <Route
            path="/leadership/*"
            element={
              <ProtectedRoute role="leadership">
                <LeadershipApp />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/*"
            element={
              <ProtectedRoute role="admin">
                <AdminApp />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<DefaultRedirect />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
