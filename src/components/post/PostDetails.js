import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const PostDetails = props => {
  const { post } = props;
  console.log(post);
  if (post) {
    return (
      <div className="container my-4 post-details mx-auto">
        <h1>{post.title}</h1>
        <p>{post.content}t</p>
        <span></span>
      </div>
    );
  } else {
    return <div>loading</div>;
  }
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const posts = state.firestore.data.posts;
  const post = posts ? posts[id] : null;
  return {
    post: post,
  };
};

export default compose(connect(mapStateToProps), firestoreConnect(['posts']))(PostDetails);
