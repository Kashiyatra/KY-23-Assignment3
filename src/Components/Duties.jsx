import React from 'react'
import '../index.css'
import '../tabres.css'
import '../responsive.css'
import Image from './img/About.png'

function Duties() {
  document.title = 'Kashiyatra - Duties'
  return (
    <>
      <section id="About">
        <div id="Container">
          <div id="AboutContentWrapper">
            <div id="AboutDesc">
              <h2>Duties of a CA</h2>
              <p>
                Campus Ambassador is the face of Kashiyatra.They Act as a link
                between Kashiyatra and their college and are the first point of
                contact for the students .Following are the responsibilities one
                has to take
              </p>
              <br/>
              <h1>Represent</h1>
              <p>
                Represent and exemplify Kashiyatra in your college among your
                peers.
              </p>
              <br/>
              <h1>Publicize</h1>
              <p>
                Promote Kashiyatra by Publicizing its events through social media Platforms.
              </p>
              <br/>
              <h1>Conceptualize</h1>
              <p>
                Bring forth ideas and propasals as valuable input for team Kashiyatra.
              </p>
              <br/>
              <h1>Organise</h1>
              <p>
                Conduct workshops and promotional event in your college for Kashiyatra.
              </p>
            </div>
            <div id="AboutImage">
              <img draggable="false" src={Image} alt="Error" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Duties
