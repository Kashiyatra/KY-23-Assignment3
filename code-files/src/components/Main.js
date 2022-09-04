import React from 'react'
import { NavLink } from 'react-router-dom'
import styled, {keyframes} from 'styled-components'
import PowerButton from '../subComponents/PowerButton'
import LogoComponent  from  '../subComponents/LogoComponent'
import SocialIcons from  '../subComponents/SocialIcons'
import { YinYang } from './AllSvgs';
import  { useState } from 'react'
import Intro from '../components/Intro'
import {motion} from 'framer-motion'


const MainContainer =styled.div`
 background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow: hidden;
position: relative;

h2,h3,h4,h5,h6{
  font-family: 'Karla', sans-serif;
  font-weight: 500;
}
`

const Container= styled.div`
padding:2rem;
`
const LOGIN= styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index:1;
`
const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

const Center = styled.button`
position: absolute;
top  :${props => props.click ?'85%': '50%'} ;
left :${props => props.click ?'92%': '50%'} ;

transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

&>:first-child{
  animation: ${rotate} infinite 1.5s linear;
}
&>: last-child{
  display: ${props => props.click ?'none': 'inline-block'} ;
  padding-top: 1rem;
}

`

const BENEFITS= styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 48%;
right: calc(0rem);
transform: rotate(-90deg) translate(50%, 50%);
text-decoration: none;
z-index: 1;
`

const DUTIES= styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
position: absolute;
top: 37%;
left: 2.5rem;
transform: translate(-50%, -50%)  rotate(-90deg);
text-decoration: none;
z-index: 1;
`
const BottomBar= styled.div`
position: absolute;
bottom: 2rem;
left: 0;
right:0;
width: 100%;
display: flex;
justify-content :space-evenly;
`

const About= styled(NavLink)`
color:${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index: 1;
`
const Contacts= styled(NavLink)`
color:${props => props.theme.text};
text-decoration: none;
z-index: 1;
`


const DarkDiv = styled.div`
position:absolute;
top: 0;
bottom:0;
right: 50%;
background-color: black;
width: ${props => props.click ? '50%' : '0%'};
height:  ${props => props.click ? '100%' : '0%'};
z-index :1;
transition: height 0.5s ease, width 1s ease 0.5s;
`


const Main = () => {

   const [click,setClick]= useState(false);
   const handleClick = () => setClick(!click);

  return (
    <MainContainer>
      <Container>
      <PowerButton/>
      <LogoComponent theme={click ? 'dark' :'light' }/>
      <SocialIcons theme={click ? 'dark' :'light'}
      
   />
      <DarkDiv click={click} />
      <Center click={click} >
          <YinYang onClick={()=> handleClick()} width={click ? 120 : 200} height={click ? 120 : 200} fill='currentColor' />
          <span><b>CLICK</b></span>
      </Center>

      <LOGIN to="/login" click={click} >
     <motion.h2
     
     whileHover={{scale: 1.1}}
     whileTap={{scale: 0.9}}
     >Become a Campus Ambassdor</motion.h2>
      </LOGIN>   

     <BENEFITS to="/benefits" click={click}>
      <motion.h2
      
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.9}}

      >Brownie Points</motion.h2>
      </BENEFITS> 
     
    <DUTIES to="/duties" click={click}>
     <motion.h2
     
     whileHover={{scale: 1.1}}
     whileTap={{scale: 0.9}}
     >Duties As a CA</motion.h2>
      </DUTIES> 

      <BottomBar>
        <About to="/Why CA" click={click}>
          <motion.h2
          
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
         >
            About Us
          </motion.h2>
        </About>
        <Contacts to="/contact" click={click}>
          <motion.h2
          
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
          >
            Contact Us
          </motion.h2>
        </Contacts>
      </BottomBar>

      </Container >
      {click ? <Intro click={click} /> : null }
    </MainContainer>
  )
}

export default Main