import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/admin/Layout.jsx';
import ProtectedRoute from './components/admin/ProtectedRoute.jsx';
import Dashboard from './pages/admin/Dashboard.jsx';
import Users from './pages/admin/Users.jsx';
import Blog from './pages/admin/Blog.jsx';
import Login from './pages/admin/Login.jsx';
import Homepage from './pages/user/Homepage.jsx';

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
