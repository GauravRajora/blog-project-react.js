function LatestBlog({ latestBlogs, mostPopular }) {
    return (
        <section className="mt-12">
            <h2 className="text-[14px] font-semibold text-gray-700 mb-8" data-aos="fade-right">Latest Blog Cards</h2>

            <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
                {/* Latest Blog Cards */}
                <div className="xl:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols- gap-6">
                    {latestBlogs.map((card, index) => (
                        <a key={card.id} href="#" data-aos="fade-up" data-aos-delay={index * 100}
                            className="w-full flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100 custom-shadow transition-transform duration-800 ease-in-out transform hover:scale-105">
                            <img src={card.coverImage} alt={card.title}
                                className="object-cover w-full rounded-t-lg h-96 md:h-56 md:w-48 md:rounded-none md:rounded-s-lg" />
                            <div className="flex flex-col justify-between p-4 leading-normal w-full">
                                <h5 className="mb-2 text-[14px] font-semibold text-gray-800">{card.title}</h5>
                                <p className="mb-3 text-sm text-gray-600">{card.description}</p>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Most Popular Section */}
                <div className="h-fit xl:col-span-1" data-aos="fade-left">
                    <h3 className="text-[14px] font-semibold text-gray-700 mb-4">Most Popular</h3>
                    <ul className="space-y-4">
                        {mostPopular.map((item, index) => (
                            <li key={index} className="flex gap-4 transition-transform duration-800 ease-in-out transform hover:scale-105">
                                <img src={item.coverImage} alt={item.title} className="w-16 h-16 object-cover rounded" />
                                <div>
                                    <h4 className="text-sm font-medium text-gray-700 line-clamp-2 hover:underline">{item.title}</h4>
                                    <p className="text-xs text-gray-500">{item.publishedAt} • {item.views} VIEWS</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default LatestBlog;