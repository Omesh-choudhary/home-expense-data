import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Contact from './pages/Contact'
import Home from './pages/Home'
import Services from './pages/Services'
import Register from './pages/Register'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Error from './pages/Error'
import ProtectedRoute from './utils/ProtectedRoute'
import Logout from './pages/Logout'
import Data from './pages/Data'

function App() {
  const [count, setCount] = useState(0)
 

  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route element={<ProtectedRoute/>}>
    <Route path='/' element={<Home/>} />
    <Route path='/data' element={<Data/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/services' element={<Services/>} />
    <Route path='/logout' element={<Logout/>} />
    </Route>

    <Route path='/register' element={<Register/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='*' element={<Error/>} />
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
