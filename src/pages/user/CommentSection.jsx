import React, { useState } from 'react';

const CommentSection = ({ blogId, comments }) => {
  const [commentText, setCommentText] = useState('');
  const [allComments, setAllComments] = useState(comments);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      const newComment = {
        id: allComments.length + 1,
        text: commentText,
        date: new Date().toLocaleString(),
      };
      setAllComments([...allComments, newComment]);
      setCommentText('');
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold">Comments</h3>
      <div className="mt-4">
        {allComments.length === 0 ? (
          <p>No comments yet. Be the first to comment!</p>
        ) : (
          <ul>
            {allComments.map((comment) => (
              <li key={comment.id} className="mb-4">
                <div className="bg-gray-100 p-4 rounded-md shadow">
                  <p className="font-semibold text-sm">{comment.date}</p>
                  <p className="mt-2">{comment.text}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <form onSubmit={handleCommentSubmit} className="mt-6">
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Add a comment..."
          rows="4"
          className="w-full p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <button
          type="submit"
          className="mt-4 py-2 px-6 bg-teal-500 text-white rounded-lg hover:bg-teal-600 focus:outline-none"
        >
          Submit Comment
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
