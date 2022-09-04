import React from 'react'
import styled from 'styled-components'
import Me from '../assets/Images/ky2020.png'
import {motion} from 'framer-motion'

const Box=styled(motion.div)`

position: absolute;
top: 50%;
right: 50%;
left: 50%;
bottom: 50%;
transform: translate(-50%, -50%);
border-radius: 8px solid;
width:61vw;
height: 75vh;
display: flex;


background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) top;
        background-repeat: no-repeat;
        background-size: 100% 2px; 
        
 border-left: 0px  ${props => props.theme.body};
 border-right: 0px  ${props => props.theme.text};

        z-index:3;
)
`


const SubBox= styled.div`
width:50%;
position: relative;
display:flex;

.pic{
  position:fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  width: auto;
  height:100%;
}
`


const Intro = () => {
  return (
    <Box
    initial= {{height:0}}
    animate ={{height: '55vh'}}
    transition={{type: 'spring', duration:2, delay:1}} 
    >
        <SubBox>
          <motion.div
          initial= {{opacity:0}}
          animate ={{opacity: 1}}
          transition={{ duration:1, delay:2}} 
          >
            <img className="pic" src={Me} alt="Poster Image" />       
          </motion.div>
        </SubBox>
    </Box>
  )
}

export default Intro