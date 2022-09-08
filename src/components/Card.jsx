import React from 'react';
import styled from 'styled-components';

function Card({
   text, card
}) {
   return (
      <CardStyled >
         <div className="card-image-con">
            <img src={card} alt="" />
         </div>
         <p className="c-para">{text}</p>
      </CardStyled >
   )
}

const CardStyled = styled.div`
    background-color: white;
    padding: 3rem 2rem;
    border-radius: 50px;
    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
    .card-title{
        font-size: 1.7rem;
        color: #000;
        text-align: center;
        padding: 1.5rem 0;
        span{
            font-size: 1.1rem;
        }
    }
    .button-con{
        text-align: center;
        padding: 1.4rem 0;
        button{
            border: 2px solid #16194F;
            padding: .6rem 1.5rem;
            outline: none;
            cursor: pointer;
            background: transparent;
            border-radius: 20px;
            font-size: inherit;
            color: #16194F;
        }
    }
    .card-image-con{
        display: flex;
        justify-content: center;
        img{
            width: 70%;
        }
    }
    .plan-con{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1.4rem 0;
        img{
            padding: 0 .2rem;
        }
    }
    .text-check{
        display: flex;
        align-items: center;
        padding: .3rem 0;
        font-size: 1.1rem;
        img{
            padding-right: .3rem;
            width: 24px;
        }
        &:nth-child(6){
            color: #B7B7B7;
        }
        &:nth-child(7){
            color: #B7B7B7;
        }
        &:nth-child(8){
            color: #B7B7B7;
        }
    }
`;
export default Card;