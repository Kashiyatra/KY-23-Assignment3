import React from 'react'
import styled, { keyframes,ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';
import {lightTheme} from './Themes';
import { Design, Develope} from './AllSvgs';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import astronaut from '../assets/Images/pngegg.png'



const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;

`


const float= keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`

const Butterfly = styled.div`
position:absolute;
top: 10%;
right:10%;
width:25vw;
animation:${float} 4s ease infinite;
img{
  width:100%;
  height:auto;
}
`


const Main=styled.div`
border:2px solid ${props => props.theme.text};
color:${props => props.theme.text};
padding:2rem;
width:50vw;
height:50vh;
z-index:3;
line-height:1.5;

display:flex;
justify-content: center;
align-items: center;
font-size: calc(0.8rem+ 1.9vw);
backdrop-filter:blur(3px);

position:absolute;
left:calc(8rem + 5vw);
top:10rem;
font-family:'Ubuntu Mono',monospace;
font-style: italic;

`


const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
<Box>

<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton />
<ParticleComponent theme='dark' />

        <Butterfly>
         <img src={astronaut} alt="pngegg" />
        </Butterfly>
         <Main>
          
           <h1>WHY BECOME A CAMPUS AMBASSDOR..</h1>
          <br/>
          <br/>
          For bringing together a fest which encircles diversity like never
          before we are reaching out to colleges across the country.
          
          <br/> The selected Campus Ambassdor in his tenure will represent Kashiyatra, IIT BHU
          in his/her college and will become an integral member of the team.
        <br/><br/>
        # Become a Leader.<br/>
        # Update your organisational skills.<br/>
        # Polish your communication and public speaking skills.<br/>
        # Get the exposure to online and media marketing.<br/>
        # Expand your creative horizons.
        
         </Main>

        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage