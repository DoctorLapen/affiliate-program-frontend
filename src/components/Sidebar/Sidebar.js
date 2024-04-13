import React from 'react'
import styles from './Sidebar.module.css'
import logo from '../../assets/images/logoMain.png'
const Sidebar = () => {
  return (
    <aside className={styles.side}>
        <header className={styles.header}>
        <div className={styles.title}>
        <div className={styles.image}  style={{ backgroundImage: `url(${logo})` }}/>
        <h1>Analytix</h1>
        </div>
        </header>
        <nav className={styles.linkContainer}>
            <div className={styles.link}>
            <a href="url">Marka</a>
            </div>
            <div className={styles.link}>
            <a href="url">Dodano oferty</a>
            </div>
            <div className={styles.link}>
            <a href="url">Oferuje</a>
            </div>
            <div className={styles.link}>
            <a href="url">Profil</a> 
            </div>
            <div className={styles.link}>
            <a href="url">Balansować</a> 
            </div>
            <div className={styles.link}>
            <a href="url">Pomoc techniczna</a>
            </div>
        </nav>
    </aside>
  )
}

export default Sidebar