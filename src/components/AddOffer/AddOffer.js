import React, { useState } from 'react'
import styles from './AddOffer.module.css';
const AddOffer = ({addOffer}) => {
    const[data,setData] = useState({});
    const handleChange = (event) => {
        setData({...data,[event.target.name]:[event.target.value]})
        
      };
      const handleSubmit= () => {
        addOffer(data);
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