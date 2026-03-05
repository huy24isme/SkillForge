import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/auth/AuthContext'
import { mockUsers, roleHomePath } from '@/auth/mockUsers'

export function LoginPage() {
  const { login, isAuthenticated, user, logout } = useAuth()
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const result = login({ username, password })
    if (!result.success) {
      setError(result.message || 'Đăng nhập thất bại')
      return
    }

    const matched = mockUsers.find((account) => account.username === username)
    if (!matched) {
      return
    }

    navigate(roleHomePath[matched.role], { replace: true })
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <h1 className="text-2xl font-semibold text-gray-900">SkillForge Login</h1>
        <p className="text-sm text-gray-600 mt-1 mb-5">Mock đăng nhập theo role (không cần backend)</p>

        {isAuthenticated && user && (
          <div className="mb-4 text-xs bg-blue-50 border border-blue-200 rounded-md p-3 text-blue-700">
            <p>
              Đang đăng nhập: <strong>{user.username}</strong> ({user.role})
            </p>
            <div className="mt-2 flex gap-2">
              <button
                type="button"
                onClick={() => navigate(roleHomePath[user.role], { replace: true })}
                className="px-2 py-1 rounded bg-blue-600 text-white"
              >
                Vào dashboard hiện tại
              </button>
              <button
                type="button"
                onClick={logout}
                className="px-2 py-1 rounded border border-blue-300"
              >
                Logout để đổi tài khoản
              </button>
            </div>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Nhập username"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Nhập password"
              type="password"
              required
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button type="submit" className="w-full py-2.5 bg-[#0B1C2D] text-white rounded-md">
            Đăng nhập
          </button>
        </form>

        <div className="mt-5 text-xs text-gray-600 bg-gray-50 border border-gray-200 rounded-md p-3 space-y-1">
          <p className="font-medium text-gray-700">Tài khoản mock:</p>
          <p>- Employee: employee01 / 123456</p>
          <p>- PM: pm01 / 123456</p>
          <p>- Leadership: leader01 / 123456</p>
        </div>
      </div>
    </div>
  )
}
