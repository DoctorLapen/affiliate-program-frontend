import React from 'react'
import styles from './BasicPage.module.css'
import logo from '../../assets/images/logo.png'
const BasicPage = ({children}) => {
  return (
    <div className={styles.page}>
        <div className={styles.left}>
            <div className={styles.form}>
                {children}
            </div>
        </div>
        <div className={styles.right}>
        <div className={styles.logo}>
            <div className={styles.image}  style= {{ backgroundImage: `url(${logo})` }}/>
            <h1>Analytix</h1>
        </div>
        </div>
    </div>
  )
}

export default BasicPage