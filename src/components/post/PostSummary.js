import React from 'react';

const PostSummary = ({ post }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{post.title}</div>
      </div>
      <div className="px-6 py-4">17 May 89</div>
    </div>
  );
};

export default PostSummary;
