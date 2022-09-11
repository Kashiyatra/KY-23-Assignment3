//Power button

import React from 'react'
import styled from 'styled-components'
import { PowerBtn } from '../components/AllSvgs'
import { NavLink } from 'react-router-dom'

const Power = styled.button`
position: fixed;
top: 2rem;
left: 50%;
transform: translate(-50%,0);

background-color: #fff;
padding: 0%,3rem;
border-radius:50%;
border: 2px solid #245501;
height: 2.5rem;

display: flex;
justify-content: centre;
align-self: centre;
z-index :3;

cursor: pointer;

&: hover{
  background-color: #ccff33;
  box-shadow: 0 0 2px 3px #80b918;
}

&>*:first-child{
  text-decoration: none;
  color: inherit;
}

`

const PowerButton = () => {
  return (
    <Power>
       <NavLink to="/">
        <PowerBtn width={38} height={33} fill='currentColor' />
       </NavLink>
    </Power>
  )
}

export default PowerButton
