import React from 'react'

const Post = ({posts, deletePost}) => {

  const postList = posts.length ? (
    posts.map(posts => {
      return (
        <div className="collection-item" key={posts.id}>
          <span onClick={() => {deletePost(posts.id)}}>{posts.content}</span>
        </div>
      )
    })
  ) : (
    <p className="center">There are no Posts</p>
  )
  return (
    <div className="post collection">
      {postList}
    </div>
  )
}

export default Post
