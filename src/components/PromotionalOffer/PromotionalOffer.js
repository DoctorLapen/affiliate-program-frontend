import React from 'react'
import styles from './PromotionalOffer.module.css'
import trueIcon from '../../assets/images/StatusTrue.png'
import  falseIcon  from '../../assets/images/StatusFalse.png'
const PromotionalOffer = ({uid,offer,brand,payments,balance,status}) => {
  return (
    <section className={styles.offer}>
        <span style={{width:"50px"}}>{uid}</span>
        <span style={{width:"100px"}}>{offer}</span>
        <span style={{width:"100px"}}>{brand}</span>
        <span style={{width:"125px"}}>${payments}</span>
        <span style={{width:"100px"}}>${balance}</span>
        <span style={{width:"50px",height:"19px"}}>
        <div className={styles.status} 
        style={{ backgroundImage: `url(${status ? trueIcon:falseIcon})`}}>

        </div>
        </span>
    </section>
  )
}

export default PromotionalOffer