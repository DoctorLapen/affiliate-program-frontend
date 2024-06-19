import React from 'react'
import Brand from '../Brand/Brand'
import { Route, Routes } from 'react-router-dom'
import BasicPage from '../SignUpSignIn/BasicPage'
import SignUp from '../SignUpSignIn/SignUp'
import SignIn from '../SignUpSignIn/Signin'
import Redirect from '../Redirect/Redirect'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    //Runs only on the first render
    
    //   navigate("/signup");
         console.log("App");
   
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Redirect/>} />
       <Route path="/brand" element={<Brand />} />
       <Route path="/signin" element={<BasicPage ><SignIn/></BasicPage>} />
       <Route path="/signup" element={<BasicPage ><SignUp/></BasicPage>} />       
    </Routes>
  )
}

export default App