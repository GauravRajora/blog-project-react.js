import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/admin/Layout';
import ProtectedRoute from './components/admin/ProtectedRoute';
import Dashboard from './pages/admin/Dashboard';
import Users from './pages/admin/Users';
import Blog from './pages/admin/Blog';
import Login from './pages/admin/Login';
import Homepage from './pages/user/homepage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/admin/login" element={<Login />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="blog" element={<Blog />} />
      </Route>
    </Routes>
  );
}

export default App;
