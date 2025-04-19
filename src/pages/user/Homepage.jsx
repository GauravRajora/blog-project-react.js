import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CommentSection from './CommentSection';
import BlogCarousel from '../../components/user/BlogCarousel';

const Homepage = () => {
    const [blogs] = useState([
        {
            id: 1,
            title: 'How to Build a React App',
            content: 'In this article, we will go through the steps of building a simple React app...',
            author: 'Jane Doe',
            comments: [
                { id: 1, text: 'Great article! Very helpful, thank you.', date: '2025-04-01 12:30' },
            ],
        },
        {
            id: 2,
            title: 'Understanding JavaScript Closures',
            content: 'JavaScript closures are a powerful concept that every developer should understand...',
            author: 'John Smith',
            comments: [
                { id: 1, text: 'Very insightful. Learned a lot about closures.', date: '2025-04-02 14:15' },
            ],
        },
    ]);

    return (
        <div className="bg-gray-50">

            <Header />

            <BlogCarousel />

            <main className="max-w-7xl mx-auto px-6 py-8">
                <h2 className="text-3xl font-bold text-center mb-8">Our Blog</h2>

                <div className="space-y-8">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="bg-white p-6 rounded-xl shadow-md">
                            <h3 className="text-2xl font-semibold text-teal-600">{blog.title}</h3>
                            <p className="text-gray-600 mt-2">By {blog.author}</p>
                            <p className="mt-4 text-gray-800">{blog.content}</p>

                            {/* Comment Section */}
                            <CommentSection blogId={blog.id} comments={blog.comments} />
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Homepage;
