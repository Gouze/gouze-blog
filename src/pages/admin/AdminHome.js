import React, { Component } from 'react';

import Notifications from '../../components/layout/admin/Notifications';
import PostList from '../../components/post/PostList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import 'firebase/database';

export class AdminHomePage extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="dashboard container mx-auto">
        <div className="flex mb-4">
          <div className="md:w-1/2 sm:w-full h-12 ">
            <PostList posts={posts} />
          </div>
          <div className="md:w-5/12 ml-auto sm:w-full bg-gray-200 h-12">
            <Notifications />
          </div>
        </div>
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

export default connectors(AdminHomePage);
