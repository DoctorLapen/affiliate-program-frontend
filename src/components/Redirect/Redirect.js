import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
const Redirect = () => {
    const navigate = useNavigate();
  useEffect(() => {
    //Runs only on the first render
    
       navigate("/signup");
         console.log("App");
   
  }, []);
  return (
    <div></div>
  )
}

export default Redirect