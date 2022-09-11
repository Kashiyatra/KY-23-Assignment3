import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import {Facebook,Twitter, YouTube ,Instagram} from '../components/AllSvgs'
import {DarkTheme } from '../components/Themes'
import {motion} from 'framer-motion'


const Icons= styled.div`
display: flex;
flex-direction: column;
align-items: centre;

position: fixed;
bottom:0;
left:2rem;
z-index:3;


&>*:not(:last-child){
    margin: 0.5rem 0;
}

`
const Line = styled.span`
width:3px;
height: 10rem;
background-color: ${props => props.color ==='dark' ? DarkTheme.text : DarkTheme.body };
`

const SocialIcons = (props) => {
  return (
    <Icons>
         
         <motion.div
          whileHover={{scale: 1.3}}
          whileTap={{scale: 0.9}}
          >
            <NavLink style={{color:'inherit'}} target="_blank"to={{pathname:"https://www.facebook.com/kashiyatra.IITBHU/"}}>
                <Facebook width={25} height={25} fill={props.theme === "dark"? DarkTheme.text : DarkTheme.body}/>
            </NavLink>
         </motion.div>

         <motion.div
          whileHover={{scale: 1.3}}
          whileTap={{scale: 0.9}}
       >
            <NavLink style={{color:'inherit'}} target="_blank"to={{pathname:"https://www.youtube.com/user/kashiyatraiitbhu"}}>
                <YouTube width={25} height={25} fill={props.theme === "dark"? DarkTheme.text : DarkTheme.body}/>
            </NavLink>
         </motion.div>

         <motion.div
          whileHover={{scale: 1.3}}
          whileTap={{scale: 0.9}}
       >
            <NavLink style={{color:'inherit'}} target="_blank"to={{pathname:"https://twitter.com/ky_iitbhu?lang=en"}}>
                <Twitter width={25} height={25} fill={props.theme === "dark"? DarkTheme.text : DarkTheme.body}/>
            </NavLink>
         </motion.div>

         <motion.div
          whileHover={{scale: 1.3}}
          whileTap={{scale: 0.9}}
       >
            <NavLink style={{color:'inherit'}}  target="_blank"to={{pathname:"https://www.youtube.com/user/kashiyatraiitbhu"}}>
                <Instagram width={25} height={25} fill={props.theme === "dark"? DarkTheme.text : DarkTheme.body}/>
            </NavLink>
         </motion.div>

      <Line/> 
    </Icons>
  )
}

export default SocialIcons