import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CourseList from './pages/CourseList';
import CourseDetailPage from './pages/CourseDetailPage';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import QuizPage from './pages/QuizPage';
import Analytics from './pages/Analytics';
import NotFound from './pages/NotFound';

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/courses', element: <CourseList /> },
  { path: '/courses/:id', element: <CourseDetailPage /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/profile', element: <Profile /> },
  { path: '/quizzes/:id', element: <QuizPage /> },
  { path: '/analytics', element: <Analytics /> },
  { path: '*', element: <NotFound /> },
];
