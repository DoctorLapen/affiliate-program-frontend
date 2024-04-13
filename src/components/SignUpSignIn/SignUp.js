import React from 'react'

const SignUp = () => {
  return (
    <form className=''>
        <div> <h1>Rejestracja</h1></div>         
        <div> 
        <input type="text" placeholder="Naswa" /> 
        <input type="email" placeholder="E-mail"/>
        </div>
        
        <div> <label></label><input type="password" placeholder="Haslo"/> </div>
        <div> <input type="password" placeholder="Haslo"/> </div>
        <div> <button>login</button></div>
    </form>
  )
}

export default SignUp