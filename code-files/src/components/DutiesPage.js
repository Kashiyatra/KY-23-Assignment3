import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg"
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import LogoComponent from '../subComponents/LogoComponent'
import {Duties} from '../data/DutiesData'
import DutiesComponents from '../components/DutiesComponents'
// import BigTitle from "../subComponents/BigTitlte"
import { motion } from 'framer-motion'
import Anchor from '../subComponents/Anchor'



const MainContainer = styled.div`
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
background-attachement: fixed;
background-position: center;
width:100vw;
height: auto;
`

const Container = styled.div`
background-color: ${props => 'rgba(${props.theme.bodyRgba},0.8)'};
width: 100%;
height: auto;
position:relative;
padding-bottom: 5rem;
`

const Center = styled.div`
display :flex;
justify-content: center;
align-items: center;
padding-top: 10rem; 
`

const Grid = styled.div`
display:grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
`



const DutiesPage = () => {


  return (
    <MainContainer>
       <Container>
          <LogoComponent/>  
          <PowerButton/>
          <SocialIcons/>
          <Anchor/>
<Center>
           <Grid>
          {
            Duties.map(duties=> {
            return <DutiesComponents key={duties.id} duties={duties}/>
            })
          }
           </Grid>
</Center>
       </Container>
    </MainContainer>
  )
}

export default DutiesPage