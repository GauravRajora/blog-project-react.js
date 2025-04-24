import { FaStar } from "react-icons/fa";
function LatestBlogComments({ latestPosts, comments }) {
    return (
        <section className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Latest Posts */}
            <div className="md:col-span-2">
                <h2 className="text-[14px] font-semibold text-gray-700 mb-6 border-b pb-2">Latest Posts</h2>
                <div className="space-y-8">
                    {latestPosts.map((post, idx) => (
                        <div key={idx}
                            className="flex gap-4 items-start bg-white border-gray-200 rounded-lg shadow-sm custom-shadow transition-transform duration-800 ease-in-out transform hover:scale-105">
                            <img src={post.coverImage} alt={post.title} className="w-56 h-40 object-cover rounded-md" />
                            <div className='mt-4'>
                                <p className="text-xs text-blue-600 font-medium lowercase">{post.category}</p>
                                <h3 className="text-[18px] mt-2 font-semibold text-gray-700 hover:underline">{post.title}</h3>
                                <div className='flex gap-4 my-4'>
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className="text-xs" />
                                    ))}
                                </div>
                                <div className="text-xs text-gray-500 mt-3">
                                    {post.date} • {post.readTime} • {post.views} VIEWS
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Last Comments */}
            <div>
                <h2 className="text-[14px] font-semibold text-gray-700 mb-6 border-b pb-2">Recent Comments</h2>
                <div className="space-y-4">
                    {comments.map((comment, idx) => (
                        <div key={idx}
                            className="bg-white p-4 rounded shadow-sm flex items-start gap-4 transition-transform duration-800 ease-in-out transform hover:scale-105">
                            <img src={comment.avatar} alt={comment.name} className="w-12 h-12 rounded-full object-cover" />
                            <div>
                                <div className="text-xs font-semibold text-gray-700">
                                    {comment.name} <span className="text-gray-400 font-normal">• {comment.date}</span>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">{comment.comment}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default LatestBlogComments;