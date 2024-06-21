import React from 'react'
import styles from './BasicPage.module.css'
import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })

  };
  const onChangeForm = async (event) => {
    event.preventDefault();
    navigate("/signup");
  }
  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(user);
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
      <h1>Zaloguj się</h1>
      <input type="email" className={styles.email} placeholder="E-mail" name="email" onChange={handleChange} style={{width:"410px",marginLeft:"0"}}/>
      <label htmlFor="password">Hasło</label>
      <input type="password" className={styles.pass} id="password" name="password" placeholder="Haslo" onChange={handleChange} />
      <button  className={styles.changemode} onClick={onChangeForm}>Rejestracja</button>
      <button className={styles.submit} onClick={onSubmit}>Zaloguj się</button>
    </form>
  )
}

export default SignIn