import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import User from './Components/User'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
function App() {
const router =createBrowserRouter([
  {path:'/', element:<><Navbar /><Home /></> },
  {path:'/about',element:<><Navbar /><About /></>},
  {path:'/contact', element: <><Navbar /><Contact /></>},
  {path:'/user/:username', element: <><Navbar /><User /></>}
])

  return (
  <>
<RouterProvider router={router} />
  </>

  )
}

export default App
