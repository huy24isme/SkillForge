export type UserRole = 'employee' | 'pm' | 'leadership'

export type MockUser = {
  username: string
  password: string
  role: UserRole
  displayName: string
}

export const mockUsers: MockUser[] = [
  {
    username: 'employee01',
    password: '123456',
    role: 'employee',
    displayName: 'Employee User',
  },
  {
    username: 'pm01',
    password: '123456',
    role: 'pm',
    displayName: 'Project Manager User',
  },
  {
    username: 'leader01',
    password: '123456',
    role: 'leadership',
    displayName: 'Leadership User',
  },
]

export const roleHomePath: Record<UserRole, string> = {
  employee: '/employee/employee',
  pm: '/pm',
  leadership: '/leadership/executive',
}
