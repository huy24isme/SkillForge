import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/features/pm/app/components/Layout';
import { Dashboard } from '@/features/pm/app/screens/Dashboard';
import { CreateProject } from '@/features/pm/app/screens/CreateProject';
import { TeamMatching } from '@/features/pm/app/screens/TeamMatching';
import { ProjectOverview } from '@/features/pm/app/screens/ProjectOverview';
import { DailyReport } from '@/features/pm/app/screens/DailyReport';
import { UserProfile } from '@/features/pm/app/screens/UserProfile';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="create-project" element={<CreateProject />} />
        <Route path="team-matching" element={<TeamMatching />} />
        <Route path="projects" element={<ProjectOverview />} />
        <Route path="daily-report" element={<DailyReport />} />
        <Route path="profile" element={<UserProfile />} />
      </Routes>
    </Layout>
  );
}
