import React, { useEffect, useState, useCallback } from 'react';
import BlogFormModal from '../../components/admin/BlogFormModal';
import BlogList from './BlogList';

const Blog = () => {
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchBlogs = useCallback(async () => {
        setLoading(true);
        const token = localStorage.getItem("token");
        try {
            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/blogs?page=${currentPage}&limit=10`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

            const data = await res.json();
            setBlogs(data.blogs);
            setTotalPages(data.totalPages);
            await setLoading(false);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    }, [currentPage]);

    useEffect(() => {
        fetchBlogs();
    }, [fetchBlogs]);

    const handleAddBlog = async (blogData) => {
        const token = localStorage.getItem("token");

        try {
            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/blogs`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(blogData)
            });

            if (!res.ok) {
                const data = await res.json();
                console.error(data.message || 'Failed to create blog');
                return;
            }

            setShowModal(false);
            fetchBlogs();
        } catch (err) {
            console.error("Something went wrong", err);
        }
    };

    return (
        <div>
            <button
                onClick={() => setShowModal(true)}
                className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
            >
                Add New Blog
            </button>

            <BlogFormModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onSubmit={handleAddBlog}
            />

            <BlogList
                blogs={blogs}
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
                loading={loading}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
        </div>
    );
};

export default Blog;
