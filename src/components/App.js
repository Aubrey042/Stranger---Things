import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Navbar, Login, Posts, Welcome, Register } from '.';
import { getPosts } from '../api';
import { getMe } from '../api/auth';
import './index.css';

const App = () => {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState({});
    const [token, setToken] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const navigate = useNavigate();

    useEffect(() => {
  const getInitialData = async () => {
    const fetchedPosts = await getPosts();
    setPosts(fetchedPosts);
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      const fetchedUser = await getMe(storedToken);
      setUser(fetchedUser.user);
      setIsLoggedIn(true);
      navigate("/posts");
    }
  };
  getInitialData();
}, []);

    
    useEffect(() => {
    const fetchUser = async () => {
        const fetchedUser = await getMe(token);
        setUser(fetchedUser.user);
    };
    fetchUser();
    }, [token]);
    return(
        <>
        <header className="header">
            <h1>Stranger's Things</h1>
        <Navbar
        setIsLoggedIn={setIsLoggedIn}
        setUser={setUser}
        setToken={setToken}
        />
        </header>
        <main className="main-content">
        <Routes>
         <Route path='/' element={
         <Welcome
         user={user}
         isLoggedIn={isLoggedIn}
         posts={posts}
         setPosts={setPosts}
        />}  
         />
         
         <Route path='/login' element={
         <Login 
         token={token} 
         setToken={setToken} 
         user={user} 
         setUser={setUser} 
         isLoggedIn={isLoggedIn} 
         setIsLoggedIn={setIsLoggedIn}/>}  
         />  

         <Route path='/posts' element={
         <Posts
         posts={posts}
         setPosts={setPosts}
         isLoggedIn={isLoggedIn}
         user={user}
         />}  
         />
         <Route path="/register" element={<Register />} />
        </Routes>
        </main>
        </>
    );
};

export default App;