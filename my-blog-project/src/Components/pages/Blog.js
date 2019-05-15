import React, { Component } from 'react';
import Post from './Post';
import AddPost from './AddPost';

class Blog extends Component {
  state = {
    posts: [
      {id: 1, content: 'First post'}
    ]
  }
  deletePost = (id) => {
    const posts = this.state.posts.filter(posts => {
      return posts.id !== id
    });
    this.setState({
      posts
    })
  }
  addPost = (post) => {
    post.id = Math.random();
    let posts = [...this.state.posts, post];
    this.setState({
      posts
    })
  }
  render() {
    return (
      <div className='container-fluid'>
        <h1>
          Blog
        </h1>
        <Post posts={this.state.posts} deletePost={this.deletePost}/>
        <AddPost addPost={this.addPost}/>
      </div>
    );
  }
}

export default Blog;
