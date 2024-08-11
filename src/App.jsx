import './App.css'
import Login from '/src/components/Login.jsx'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useCookies } from 'react-cookie'

function App() {
  // const [cookies, setCookie] = useCookies('user')

  // function handlelogIn(user){
  //   setCookie('user', user, {path : "/"})
  // }

  

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
