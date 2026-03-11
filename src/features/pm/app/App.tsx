import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/features/pm/app/components/Layout';
import { Dashboard } from '@/features/pm/app/screens/Dashboard';
import { CreateProject } from '@/features/pm/app/screens/CreateProject';
import { ProjectOverview } from '@/features/pm/app/screens/ProjectOverview';
import { ProjectDetails } from '@/features/pm/app/screens/ProjectDetails';
import { DailyReport } from '@/features/pm/app/screens/DailyReport';
import { CreateWeeklyReport } from '@/features/pm/app/screens/CreateWeeklyReport';
import { UserProfile } from '@/features/pm/app/screens/UserProfile';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="create-project" element={<CreateProject />} />
        <Route path="projects" element={<ProjectOverview />} />
        <Route path="project-details" element={<ProjectDetails />} />
        <Route path="daily-report" element={<DailyReport />} />
        <Route path="create-weekly-report" element={<CreateWeeklyReport />} />
        <Route path="profile" element={<UserProfile />} />
      </Routes>
    </Layout>
  );
}
