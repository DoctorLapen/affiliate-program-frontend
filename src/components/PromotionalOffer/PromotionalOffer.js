import React from 'react'
import styles from './PromotionalOffer.module.css'
import trueIcon from '../../assets/images/StatusTrue.png'
import  falseIcon  from '../../assets/images/StatusFalse.png'
const PromotionalOffer = ({uid,offer,brand,payments,balance,status}) => {
  return (
    <section className={styles.offer}>
        <span>{uid}</span>
        <span>{offer}</span>
        <span>{brand}</span>
        <span>${payments}</span>
        <span>${balance}</span>
        <span className={styles.status} 
        style={{ backgroundImage: `url(${status ? trueIcon:falseIcon})` }}></span>
    </section>
  )
}

export default PromotionalOffer