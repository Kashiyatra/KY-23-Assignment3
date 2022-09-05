import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import logo from '../assets/img/logo.svg'

const Navigation = () => {



   return (
      <NavigationStyled>      
      
         <div className="logo">
            <img src={logo} alt="" />
         </div>
         <ul>
            <li>
               <Link to="header" spy={true} smooth={true}>Home </Link>
            </li>
            <li>
               <Link to="whyca" spy={true} smooth={true}>Why CA? </Link>
            </li>
            
            <li>
               <Link to="pricing" spy={true} smooth={true}>Duties </Link>
            </li>
            <li>
               <Link to="faq" spy={true} smooth={true}>Benefits</Link>
            </li>
         </ul>
      </NavigationStyled>
   )
}

const NavigationStyled = styled.nav`
   display: flex;
   justify-content: space-between;
   align-items: center;
   
   ul{
      display: flex;
      justify-content: space-between;
      width: 40%;
      li{
         cursor: pointer;
      }
   }
`

export default Navigation
