import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = (props) => {
  const { isLoggedIn, user } = props;
  const navigate = useNavigate();

  const handleLoginButtonClick = () => {
    navigate('/login');
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <h1>Welcome to Stranger's Things, {user.username}!</h1>
          
        </>
      ) : (
        <>
          <h1>Welcome to Stranger's Things! Please login or register if you don't have an account.</h1>
          <button onClick={handleLoginButtonClick}>Login</button>
          
        </>
      )}
    </>
  );
};

export default Welcome;
