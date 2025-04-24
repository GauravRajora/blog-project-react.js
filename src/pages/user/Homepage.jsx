import React, { useEffect, useState, lazy, Suspense } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Header';
import Footer from './Footer';

// Lazy loaded components
const BlogCarousel = lazy(() => import('../../components/user/BlogCarousel'));
const FeaturedBlog = lazy(() => import('../../components/user/FeaturedBlog'));
const BlogByCategory = lazy(() => import('../../components/user/BlogByCategory'));
const LatestBlog = lazy(() => import('../../components/user/LatestBLog'));
const LatestBlogComments = lazy(() => import('../../components/user/LatestBlogComments'));

const comments = [
  {
    name: 'David',
    date: '16 Jan 2020',
    comment: 'A writer is someone for whom writing is more difficult than...',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Kokawa',
    date: '12 Feb 2020',
    comment: 'Striking pewter studded epaulettes silver zips',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Tsukasi',
    date: '18 May 2020',
    comment: 'Workwear bow detailing a slingback buckle strap',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
];

const Homepage = () => {
  const [blogs, setBlogs] = useState([]);
  const [featuredBlogs, setFeaturedBlogs] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const fetchBlogs = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/blogs?page=1&limit=20`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        setBlogs(data.blogs?.filter(blog => blog.isPublished) || []);
      } catch (err) {
        console.error('Error fetching blogs:', err);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    if (!blogs.length) return;
    setFeaturedBlogs(blogs.filter(blog => blog.isFeatured).slice(0, 4));
  }, [blogs]);

  const latestBlogs = [...blogs]
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 2);

  const mostPopular = [...blogs]
    .sort((a, b) => b.views - a.views)
    .slice(0, 2);

  const categories = [...new Set(blogs.flatMap(blog => blog.tags).slice(0, 3))];

  return (
    <div className="bg-gray-100">
      <Header />

      <Suspense fallback={<div className="text-center py-10">Loading components...</div>}>
        <BlogCarousel blogs={blogs.slice(0, 5)} />

        <main className="max-w-7xl mx-auto px-6 py-8">
          <LatestBlog latestBlogs={latestBlogs} mostPopular={mostPopular} />
          <FeaturedBlog data={featuredBlogs} />
          <BlogByCategory categories={categories} blogs={blogs.slice(0, 4)} />
          <LatestBlogComments latestPosts={latestBlogs} comments={comments} />
        </main>
      </Suspense>

      <Footer />
    </div>
  );
};

export default Homepage;
