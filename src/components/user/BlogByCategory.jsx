function BlogByCategory({ categories, blogs }) {
    return (
        <section className="py-12">
            <h2 className="text-[14px] font-semibold text-gray-700 mb-8" data-aos="fade-up">Explore by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {categories.map((category, index) => (
                    <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>

                        <div className="border-b border-gray-400 mb-4">
                            <h5 class="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[50px] after:bg-black capitalize leading-normal">
                                {category}
                            </h5>
                        </div>
                        <div className="space-y-4">
                            {blogs.map((post, i) => (
                                <div key={i}
                                    className="flex gap-4 items-start bg-white border-gray-200 rounded-lg shadow-sm custom-shadow transition-transform duration-800 ease-in-out transform hover:scale-105">
                                    <img src={post.coverImage} alt={post.title} className="w-20 h-20 object-cover rounded-md" />
                                    <div className='mt-3'>
                                        <h4 className="text-sm font-medium text-gray-700 hover:underline">{post.title}</h4>
                                        <p className="text-xs text-gray-500 mt-2">{post.publishedAt} • {post.views} VIEWS</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default BlogByCategory;