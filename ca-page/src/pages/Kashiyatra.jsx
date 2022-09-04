import React from 'react'
import "./kashiyatra.css";
import {Roll,Fade} from 'react-reveal';

import leaves1 from '../data/leaves1.png';
import leaves2 from '../data/leaves2.png';
import leaves3 from '../data/leaves3.png';
import leaves4 from '../data/leaves4.png';
import kashiDay from '../data/kashi-day.png';
import kashiNightPic from '../data/kashi-night-pic.png';



const Kashiyatra = () => {
 

  return (
    <section>
    <Fade bottom><h2>Kasshiyatra 2023</h2></Fade>
    <div className="set mt-6 mb-6 " >
    <div></div>
    <div><img src={leaves1}/></div> 
    <div><img src={leaves2}/></div> 
      <div><img src={leaves3}/></div> 
      <div><img src={leaves4}/></div> 
      <div><img src={leaves1}/></div> 
    <div><img src={leaves2}/></div> 
      <div><img src={leaves3}/></div> 
      <div><img src={leaves4}/></div> 
      
      <div><img src={leaves1}/></div> 
    <div><img src={leaves2}/></div> 
      <div><img src={leaves3}/></div> 
      <div><img src={leaves4}/></div> 
      <div><img src={leaves1}/></div> 
    <div><img src={leaves2}/></div> 
      <div><img src={leaves3}/></div> 
      <div><img src={leaves4}/></div> 
      
    </div>
    </section>
   
  )
  
}

export default Kashiyatra


