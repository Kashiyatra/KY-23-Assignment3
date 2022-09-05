import React from 'react'
import '../index.css'
import '../tabres.css'
import '../responsive.css'
import TeamData from './TeamData'
import SingleTeam from './SingleTeam'
import SectionTitle from './SectionTitle'

function Contact() {
  document.title = 'Kashiyatra'
  return (
    <>
      <section id="Team">
        <div id="Container">
          <SectionTitle title="Contact" desc="For any Query contact any person below" />
          <div id="TeamContentWrapper">
            {TeamData.map((data, index) => {
              return (
                <SingleTeam
                  key={data.id}
                  src={data.src}
                  desc={data.desc}
                  name={data.name}
                />
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
export default Contact
