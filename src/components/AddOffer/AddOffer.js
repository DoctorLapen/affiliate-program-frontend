import React, { useState } from 'react'
import styles from './AddOffer.module.css';
import axios from 'axios';
import Cookies from 'js-cookie';
const AddOffer = ({addOffer}) => {
    const[data,setData] = useState({});
    const handleChange = (event) => {
        setData({...data,[event.target.name]:event.target.value})
        
      };
      const sendOffer= async()=>{
        try {
          const token = Cookies.get('token');
  
          const login = await axios.post("http://localhost:3000/offers",data, {
            headers: {
              "Authorization": `Bearer ${token}`,
            }
          });
          console.log(login.data);
  
        } catch (error) {
          console.log(error);
  
        }
      }
      const handleSubmit= () => {
        addOffer(data);
        sendOffer();
      };
  return (
    <div className={styles.offer} >
        <form className={styles.form}>
        <label for="uid" >UID</label>
         <input type="number"id="uid" name="uid" onChange={handleChange}/>        
         <label for="offer">Nazwa</label>
         <input type="text"id="offer" name="offer" onChange={handleChange}/>
         <label for="brand">Marka</label>
         <input type="text"id="brand" name="brand" onChange={handleChange}/>
         <label for="payments">Płacić</label>
         <input type="text" id="payments" name="payments" onChange={handleChange}/>
         <div className={styles.left}>
         <button onClick={handleSubmit} >Dodaj ofertę</button>
         </div>
        </form>
    </div>
  )
}

export default AddOffer