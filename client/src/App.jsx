import React, { useEffect } from 'react'
import Login from './pages/Login'

import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'

import Chats from './pages/Chats'
import { useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase.config'

import axios from 'axios'

import generateUsername from './generateUsername'

const App = () => {
  const [userData, setUserData] = useState(null)

  const navigate = useNavigate()


  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userName = generateUsername(user.email)

        const userInfo = {
          name: user.displayName,
          email: user.email,
          pic: user.photoURL,
          userName: userName
        }
        setUserData(userInfo);
        const result = await axios.post('http://localhost:8000/login', userInfo);
        console.log(result.data)
        localStorage.setItem('userInfo', JSON.stringify(result.data));
        navigate('/chats')
      }
    });
  }, []);


  return (
    <div>
      <Routes>
        <Route path='/chats' element={<Chats user={userData} />} />
        <Route path='/' element={<Login user={userData} setUser={setUserData} />} />
      </Routes>
    </div>
  )
}

export default App