import React from 'react'
import styles from './BasicPage.module.css'
import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })

  };
  const onChangeForm = async (event) => {
    event.preventDefault();
    navigate("/signin");
  }
  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(user);
      try {
        let res = await axios.post("http://localhost:3000/signup",user);
        console.log(res.data);
        
     } catch (error) {
        console.log(error);
       
     }
     try {
      let res = await axios.post("http://localhost:3000/signin",user);
      console.log(res.data);
      Cookies.set('token', res.data.token, { expires: 7 })
      navigate("/brand");
   } catch (error) {
      console.log(error);
     
   }
  }
  return (
    <form className={styles.signup}>
      <h1>Rejestracja</h1>
      <div>
        <input type="text" className={styles.name} placeholder="Naswa" name="name" onChange={handleChange} />
        <input type="email" className={styles.email} placeholder="E-mail" name="email" onChange={handleChange} />
      </div>
      <label htmlFor="password">Hasło</label>
      <input type="password" className={styles.pass} id="password" name="password" placeholder="Haslo" onChange={handleChange} />
      <button onClick={onChangeForm}>Zaloguj się</button>
      <button onClick={onSubmit}>Załóż konto</button>
    </form>
  )
}

export default SignUp