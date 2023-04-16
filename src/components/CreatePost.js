import React, { useState } from 'react';
import { createNewPost } from '../api';
import './Posts.css';

const CreatePost = ({ isLoggedIn, posts, setPosts, token }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('')
  // console.log("CreatePost", token);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isLoggedIn) {
      const newPost = {
        post: {
          title: title,
          description: description,
          price: price,
        },
      };

      const result = await createNewPost(newPost, token);
      if (result.success) {
        setPosts([result.data.post, ...posts]);
        setTitle('');
        setDescription('');
        setPrice('')
      } else {
        console.error("Error creating post:", result.error);
      }
    }
  };

  return (
    <>
      {isLoggedIn && (
        <div className="create-post">
          <h2>Create a new post</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                required
              ></textarea>
              <textarea
                placeholder="Price"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit">Create Post</button>
          </form>
        </div>
      )}
    </>
  );
};

export default CreatePost;
