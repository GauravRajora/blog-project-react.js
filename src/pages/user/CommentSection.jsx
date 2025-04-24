import React, { useState } from 'react';

const CommentSection = ({ blogId, comments }) => {
  const [commentText, setCommentText] = useState('');
  const [allComments, setAllComments] = useState(comments);
  const [isVisible, setIsVisible] = useState(false); // toggle visibility

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
    <>
      <button
        className="text-teal-600 text-sm font-medium underline hover:text-teal-800"
        onClick={() => setIsVisible((prev) => !prev)}
      >
        {isVisible ? 'Hide Comments' : 'Show Comments'}
      </button>

      {isVisible && (
        <>
          <h3 className="font-semibold mt-4">Comments</h3>
          <div className="mt-3">
            {allComments.length === 0 ? (
              <p className="text-sm text-gray-500">No comments yet. Be the first to comment!</p>
            ) : (
              <ul>
                {allComments.map((comment) => (
                  <li key={comment.id} className="mb-3">
                    <div className="bg-gray-100 p-3 rounded-md shadow">
                      <p className="font-medium text-xs text-gray-600">{comment.date}</p>
                      <p className="mt-1 text-sm text-gray-800">{comment.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <form onSubmit={handleCommentSubmit} className="mt-5">
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Add a comment..."
              rows="1"
              className="w-full p-2 text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              type="submit"
              className="mt-3 py-2 px-5 text-sm bg-teal-500 text-white rounded-lg hover:bg-teal-600 focus:outline-none"
            >
              Submit Comment
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default CommentSection;
