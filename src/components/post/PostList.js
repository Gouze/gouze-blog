import React from 'react';
import PostSummary from './PostSummary';
import { Link } from 'react-router-dom';

const PostList = ({ posts }) => {
  return (
    <div className="post-list mb-4">
      {posts &&
        posts.map(post => {
          return (
            <Link to={'/admin/post/' + post.id} key={post.id}>
              <PostSummary post={post} />
            </Link>
          );
        })}
    </div>
  );
};

export default PostList;
