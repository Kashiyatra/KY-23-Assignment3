import React from 'react'
import '../index.css'
import '../tabres.css'
import '../responsive.css'
import { NavLink } from 'react-router-dom'

function Home() {
  document.title = 'Kashiyatra'
  return (
    <>
      <header>
        <div id="Container">
          <div id="HeaderContentWrapper">
            <div id="HeaderDesc">
              <h1>Kashiyatra 2022</h1>
              <p>
              The Annual Social-cultural festival of  <span> Indian Institute of Technology (BHU) Varanasi.</span>
              </p>
              <NavLink exact to="/signup">
                Sign Up
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
export default Home
