
import AddOffer from '../AddOffer/AddOffer';
import PromotionalOffer from '../PromotionalOffer/PromotionalOffer';
import Sidebar from '../Sidebar/Sidebar';
import BasicPage from '../SignUpSignIn/BasicPage';
import SignUp from '../SignUpSignIn/SignUp';
import styles from './App.module.css'

import React, { Profiler, useState } from 'react'

const App = () => {
  const [offers,setOffers] = useState([]); 
  const [isShow,setShow] = useState(false); 
  const showModal = ()=>{
    setShow(true);
  }
  const addOffer = (offer)=>{
    setOffers([...offers,offer]);
    setShow(false);
  }
  return (
   <div className={styles.app}>
    <Sidebar/>
    <main className={styles.main}>
      <div className={styles.toolsContainer}>
        <div className={styles.tools}>
        <input type="text" placeholder='Szukaj' className={styles.search}/>
        <button className={styles.offerButton} onClick={showModal}>Dodaj ofertę</button>
        </div>
      </div>
      
      <div className={styles.offerContainer}>
        {
          offers.map(offer=><PromotionalOffer uid={offer.uid} offer={offer.offer} brand={offer.brand} payments={offer.payments}balance={0}status={false}/>)
        }
      <PromotionalOffer uid={101} offer={"Mithlesha Kumara Singha"} brand={"Kritipur, Kathmandu"} payments={400}balance={1500}status={false}/>
      <PromotionalOffer uid={178} offer={"Mithlesha Kumara Singha"} brand={"Kritipur, Kathmandu"} payments={89}balance={20076}status={true}/>
      <PromotionalOffer uid={111} offer={"Mithlesha Kumara Singha"} brand={"Kritipur, Kathmandu"} payments={478}balance={478}status={true}/>
      <PromotionalOffer uid={122} offer={"Mithlesha Kumara Singha"} brand={"Kritipur, Kathmandu"} payments={100}balance={2000}status={false}/>
      </div>
    </main>
    {isShow && <AddOffer addOffer={addOffer}/>}
   </div>
  )
}

export default App
