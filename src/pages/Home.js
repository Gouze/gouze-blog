import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import PostList from '../components/post/PostList';

export class HomePage extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div>
        <PostList posts={posts}></PostList>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    posts: state.firestore.ordered.posts,
  };
};

const connectors = compose(connect(mapStateToProps), firestoreConnect(['posts']));

export default connectors(HomePage);
