import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, Legend, BarChart, Bar, AreaChart, Area
  } from 'recharts';
  
  function Dashboard() {
    const userGrowthData = [
      { month: 'Jan', users: 30 },
      { month: 'Feb', users: 45 },
      { month: 'Mar', users: 60 },
      { month: 'Apr', users: 80 },
      { month: 'May', users: 100 },
    ];
  
    const blogCategoryData = [
      { name: 'Tech', value: 10 },
      { name: 'Lifestyle', value: 5 },
      { name: 'Travel', value: 3 },
      { name: 'Education', value: 7 },
    ];
  
    const userRolesData = [
      { role: 'Admin', count: 2 },
      { role: 'Editor', count: 5 },
      { role: 'User', count: 20 },
    ];
  
    const blogWeeklyData = [
      { week: 'Week 1', posts: 2 },
      { week: 'Week 2', posts: 4 },
      { week: 'Week 3', posts: 3 },
      { week: 'Week 4', posts: 5 },
    ];
  
    const activeUsersData = [
      { name: 'John', posts: 15 },
      { name: 'Alice', posts: 12 },
      { name: 'Bob', posts: 8 },
    ];
  
    const postsCommentsData = [
      { title: 'Post 1', posts: 8, comments: 15 },
      { title: 'Post 2', posts: 10, comments: 18 },
      { title: 'Post 3', posts: 6, comments: 12 },
    ];
  
    const userGrowthByRoleData = [
      { role: 'Admin', growth: 10 },
      { role: 'Editor', growth: 20 },
      { role: 'User', growth: 35 },
    ];
  
    const COLORS = ['#14b8a6', '#0ea5e9', '#f97316', '#8b5cf6'];
  
    return (
      <> 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 mt-2">
  
          {/* Blog Categories */}
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="text-lg font-semibold mb-2">Blog Posts by Category</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={blogCategoryData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={80}
                  label
                >
                  {blogCategoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
  
          {/* Weekly Blog Posts */}
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="text-lg font-semibold mb-2">Weekly Blog Publishing</h3>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={blogWeeklyData}>
                <defs>
                  <linearGradient id="colorPosts" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="posts" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorPosts)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
  
        {/* Additional Charts (Small) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
          {/* Active Users */}
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="text-lg font-semibold mb-2">Top 3 Active Users</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={activeUsersData}
                  dataKey="posts"
                  nameKey="name"
                  outerRadius={80}
                  label
                >
                  {activeUsersData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
  
          {/* Posts vs Comments */}
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="text-lg font-semibold mb-2">Posts vs Comments</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={postsCommentsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="title" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="posts" fill="#0ea5e9" />
                <Bar dataKey="comments" fill="#14b8a6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
  
          {/* User Growth by Role */}
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="text-lg font-semibold mb-2">User Growth by Role</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={userGrowthByRoleData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="role" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="growth" stroke="#8b5cf6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </>
    );
  }
  
  export default Dashboard;
  