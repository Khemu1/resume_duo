import './App.css'
import Login from '/src/components/Login.jsx'
import Home from '/src/components/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
// import { useCookies } from 'react-cookie'

export const Context = React.createContext();

function App() {
  // const [cookies, setCookie] = useCookies('user')

  // function handlelogIn(user){
  //   setCookie('user', user, {path : "/"})
  // }

  const [username, setUsername] = useState('')

  return (
    <Context.Provider value={[username, setUsername]}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/Home' element={<Home />} />
        </Routes>
      </Router>
    </Context.Provider>
  )
}

export default App
