import React, { useState } from 'react';
import CreatePost from './CreatePost';
import SearchForm from './SearchForm';
import { deletePost } from '../api';
import { sendMessage } from '../api';

const Posts = ({ posts, setPosts, isLoggedIn, user, token }) => {
  const [messageContent, setMessageContent] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); 

  const handleDelete = async (postId) => {
    const result = await deletePost(postId, token);
    if (result.success) {
      setPosts(posts.filter((post) => post._id !== postId));
    } else {
      console.error('Error deleting the post.');
    }
  };

  const handleSendMessage = async (postId, messageContent) => {
    const result = await sendMessage(postId, messageContent, token);
    if (result.success) {
      console.log('Message sent successfully');
    } else {
      console.error('Error sending the message');
    }
  };

  const handleInputChange = (event) => {
    setMessageContent(event.target.value);
  };

  function postMatches(post, text) {
    return (
      post.title.toLowerCase().includes(text.toLowerCase()) ||
      post.description.toLowerCase().includes(text.toLowerCase()) ||
      post.author.username.toLowerCase().includes(text.toLowerCase())
    );
  }

  const filteredPosts = posts.filter((post) => postMatches(post, searchTerm));
  const postsToDisplay = searchTerm.length ? filteredPosts : posts;

  return (
    <>
      <CreatePost
        user={user}
        isLoggedIn={isLoggedIn}
        posts={posts}
        setPosts={setPosts}
        token={token}
      />
      <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="posts-container">
        {postsToDisplay.map((post) => {
          const isAuthor = user && post.author._id === user._id;
          return (
            <article className="post" key={post._id}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <p>Author: {post.author.username} Price: {post.price}</p>
              {isAuthor ? (
                <>
                  <button onClick={() => handleDelete(post._id)}>
                    Delete Post
                  </button>
                </>
              ) : (
                isLoggedIn && (
                  <>
                    <input
                      type="text"
                      value={messageContent}
                      onChange={handleInputChange}
                      placeholder="Type your message here"
                    />
                    <button
                      onClick={() =>
                        handleSendMessage(post._id, messageContent)
                      }
                    >
                      Send Message
                    </button>
                  </>
                )
              )}
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Posts;
