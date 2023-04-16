const BASE = 'https://strangers-things.herokuapp.com/api/2303-ftb-et-web-ft'

export const getPosts = async (token) => {
    try {
      const response = await fetch(`${BASE}/posts`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
  
      const {data} = await response.json();
  
      return data.posts;
    } catch (error) {
      console.error(error);
    }
  };
  
  export const createNewPost = async (newPost, token) => {
    
    try {
      const response = await fetch(`${BASE}/posts`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(newPost),
      });
  
      const result = await response.json();
    
      return result;
    } catch (error) {
      console.error(error);
    }
  };
  
  export const updateEntirePost = async (postId, post, token) => {
    try {
      const response = await fetch(`${BASE}/posts/${postId}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(post),
      });
  
      const result = await response.json();
  
      return result;
    } catch (error) {
      console.error(error);
    }
  };
  
  export const updatePartialPost = async (postId, updatedFields, token) => {
    try {
      const response = await fetch(`${BASE}/posts/${postId}`, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(updatedFields),
      });
  
      const result = await response.json();
  
      return result;
    } catch (error) {
      console.error(error);
    }
  };
  
  export const deletePost = async (postId, token) => {
    try {
      /* you should check to see if the author of the post is you before
      deleting the post. If not put a guard clause in to prevent that
      from occurring. It may also be nice to have a helpful message
      stating you can't delete that.
      */
      const response = await fetch(`${BASE}/posts/${postId}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': `Bearer ${token}`
        },
      });
  
      const result = await response.json();
      
      return result;
    } catch (error) {
      console.error(error);
    }
  };

  export const sendMessage = async (postId, messageContent, token) => {
    try {
      const response = await fetch(`${BASE}/posts/${postId}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          message: {
            content: messageContent,
          },
        }),
      });
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  };
 