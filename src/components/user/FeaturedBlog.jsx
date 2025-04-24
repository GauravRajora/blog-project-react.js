function FeaturedBlog({ data }) {
    return (
        <section className="mt-12">
            <h2 className="text-[14px] font-semibold text-gray-700 mb-8" data-aos="fade-left">Featured Blogs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {data.map((blog, i) => (
                    <div key={blog.id}
                        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm custom-shadow transition-transform duration-800 ease-in-out transform hover:scale-105"
                        data-aos="zoom-in" data-aos-delay={i * 100}>
                        <a href="#"><img className="rounded-t-lg" src={blog.coverImage} alt={blog.title} /></a>
                        <div className="p-5">
                            <a href="#"><h5 className="mb-2 text-[14px] font-semibold text-gray-800">{blog.title}</h5></a>
                            <p className="mb-3 text-sm text-gray-600 line-clamp-2">{blog.content}</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                                Read more
                                <svg className="w-3.5 h-3.5 ms-2" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FeaturedBlog;