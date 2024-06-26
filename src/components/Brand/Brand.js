
import AddOffer from '../AddOffer/AddOffer';
import PromotionalOffer from '../PromotionalOffer/PromotionalOffer';
import Sidebar from '../Sidebar/Sidebar';
import BasicPage from '../SignUpSignIn/BasicPage';
import SignUp from '../SignUpSignIn/SignUp';
import styles from './Brand.module.css';
import axios from 'axios';
import React, { Profiler, useState ,useEffect} from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
const Brand = () => {
  const [offers,setOffers] = useState([]); 
  const [isShow,setShow] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    //Runs only on the first render
    
    async function fetchOffers() {
      try {
        const token = Cookies.get('token');

        const res = await axios("http://localhost:3000/offers", {
          headers: {
            "Authorization": `Bearer ${token}`,
          }
        });
        console.log(res.data.offers);
        setOffers([...res.data.offers]);
      } catch (error) {
        console.log(error);
       //  navigate("/signup");
      }
    }
    fetchOffers();
  }, []);
  const showModal = ()=>{
    setShow(true);
  }
  const addOffer = (offer)=>{
    console.log(offer)
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
      <div className={styles.offerTitle}>
        <div style={{width:"50px"}}>UID</div>
        <div style={{width:"100px"}}>Nazwa</div>
        <div style={{width:"100px"}}>Marka</div>
        <div style={{width:"125px"}}>Płacić</div>
        <div style={{width:"100px"}}>Balansować</div>
        <div style={{width:"50px"}}>Status</div>
      </div>
        {
          offers.map(offer=><PromotionalOffer uid={offer.uid} offer={offer.offer} brand={offer.brand} payments={offer.payments}balance={0}status={offer.status}/>)
        }
      </div>
    </main>
    {isShow && <AddOffer addOffer={addOffer}/>}
   </div>
  )
}

export default Brand
