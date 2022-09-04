import React from 'react'
import { useState } from "react";

import Fade from 'react-reveal/Fade';

 
function Contact() {

  return (
    <>
    <Fade right>
     <section className="contact" id="connect">
      <h1 style={{textAlign:'right',fontSize:'70px',marginRight:'300px'}}>Contact</h1>
      <div style={{display:'flex'}}>
        <img src='https://static.vecteezy.com/system/resources/thumbnails/000/217/074/small/talking.jpg'/>
        <div style={{margin:'50px',width:'60%'}}>
        <h3>
          Publicity
        </h3>
        <h4 style={{marginTop:'20px'}}>
          Tushar Rai
        </h4>
        <p style={{marginTop:'20px'}}>
        harsh.rai.eee21@itbhu.ac.in 
        </p>
        <p>
          Call(1234567890)
        </p>
        <hr/>
        <h3>
          Publicity
        </h3>
        <h4 style={{marginTop:'20px'}}>
          Harsh Rai
        </h4>
        <p style={{marginTop:'20px'}}>
        harsh.rai.eee21@itbhu.ac.in 
        </p>
        Call(1234567890)
        <hr/>
        </div>
      </div>
    </section>
    </Fade>
    </>
  )
}

export default Contact