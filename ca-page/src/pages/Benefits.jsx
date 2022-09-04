import React from 'react';
import "./Benefits.css";
import {Roll,Fade} from 'react-reveal';

// backgroundColor:"{props.color}"

const Benefits = (props) => {
  return (
    <div className="benefits"  >
    
          
        
    <div className="card" >
      <div className="card__body">
       <img src={props.img} class="card__image" />
       <Fade left> <h2 className="card__title" >{props.title}</h2></Fade>
       <Fade top> <p className="card__description">{props.description}</p></Fade>
       
      </div>
      
      
      <button className="card__btn">Interesed</button>
    </div>
    
    </div>
  )
}

export default Benefits;

