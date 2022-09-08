import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import { InnerLayout } from '../styles/Layout'
import card from '../assets/img/creditcard.svg';

const DutiesSection = () => {
   return (
      <PaymentStyled id='pricing'>
         <InnerLayout>
            <div data-aos='fade-down-right'>
               <h3 className="small-heading">
                  Duties <span>of Campus Ambassador</span>
               </h3>
               <p className="c-para">Start with our free plan and switch to premium as you grow. </p>
            </div>
            <div className='card-con'>
               <Card
                  text={'Represent and exemplify Kashiyatra in your college among your peers.'}        
                  card={card}                  
               />
               <Card
                  text={'Promote Kashiyatra by publicizing its events through social media.'}        
                  card={card}                  
               />
               <Card
                  text={'Bring forth ideas and proposals as valuable inputs for team Kashiyatra.'}        
                  card={card}                  
               />
               <Card
                  text={'Conduct workshops and promotional events in your college for Kashiyatra.'}        
                  card={card}                  
               />
            </div>
         </InnerLayout>
      </PaymentStyled>
   )
}

const PaymentStyled = styled.section`
 .card-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 3rem;
        padding-top: 6.4rem;
        
        @media screen and (max-width: 689px){
          grid-template-columns: repeat(1, 1fr);
        }
    }
   p{
      text-align: center;
   }
`

export default DutiesSection
