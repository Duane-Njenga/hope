import { Outlet, useNavigate } from "react-router"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { useEffect, useState } from "react"

function App() { 
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [projects, setProjects] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"))

  const navigate = useNavigate()
  
  if (user.role === "admin") {
    navigate("/admin")
  } else {
    navigate("/")
  }

  useEffect(() => {
    fetch('http://localhost:5555/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error('Error fetching projects:', err));
  }, []);


  return (
    <>
    <Navbar isLoggedIn ={isLoggedIn}/>
    <main>
      <Outlet context={{setIsLoggedIn, projects}}/>
    </main>
    <Footer/>
    </>
  )
}

export default App