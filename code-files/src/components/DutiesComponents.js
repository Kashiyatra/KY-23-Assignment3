import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {motion}  from 'framer-motion'


const Box= styled(motion(NavLink))`
width: calc( 10rem + 8vw);
text-decoration: none;
height: 20rem;
padding: 1rem;
color: ${props => props.theme.text};
border: 2px solid ${props => props.theme.text};
backdrop-filter: blur(8px);
box-shadow:0 0 1rem 0 rgba(0,0,0,0.9);
cursor: pointer;

display: flex;
flex-direction: column;
z-index:5;
&:hover{
    color:${props => props.theme.body};
    background-color: ${props => props.theme.text};
    transition: all 0.3s ease;
}
`

const Image = styled.div`
background-image: ${props => `url(${props.img})`};
width: 100%;
height: 60%;
background-size: cover;
border: 1px solid transparent;
background-position: center center;
${Box}:hover &{
  border:1px solid ${props => props.theme.body}; 
}
`

const Description = styled.h3`
color:inherit;
padding: 0.5rem 0;
padding-top: 1rem;
font-family: 'Karla' ,cursive sans-serif;
font-weight: 700;
border-bottom: 1px solid ${props => props.theme.text};
`


const Title= styled.h1`
color:inherit;
padding: 0.5rem 0;
padding-top: 1rem;
font-family: 'Karla' ,sans-serif;
font-weight: 700;
border-bottom: 1px solid ${props => props.theme.text};

${Box}:hover &{
  border-bottom: 1px solid ${props => props.theme.body}; 
}
`


const DutiesComponents = (props) => {
    const {name, desc, imgSrc} =props.duties;

    return( 
    <Box to="/duties">
    <Image img={imgSrc} />
    <Title>{name}</Title>
    <Description>{desc}</Description>
    </Box>
  )
}

export default DutiesComponents;