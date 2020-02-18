import React, { Component } from 'react';
import { createPost } from '../../store/actions/postActions';
import { connect } from 'react-redux';

export class CreatePost extends Component {
  state = {
    title: '',
    content: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createPost(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h5>CreatePost</h5>
          <div className="form-controller">
            <label htmlFor="title">Title</label>
            <input onChange={this.handleChange} type="text" name="title" id="title" />
          </div>
          <div className="form-controller">
            <label htmlFor="content">Content</label>
            <textarea id="content" cols="30" rows="10" onChange={this.handleChange}></textarea>
          </div>
          <button>Create</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPost(post)),
  };
};

export default connect(null, mapDispatchToProps)(CreatePost);
