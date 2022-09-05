import React, { Component } from "react";
import Slide from "react-reveal";

class Benefits extends Component {

  render() {
    if (!this.props.data) return null;

   

    return (
      <>
      <h1 style={{color:"white",display:"flex",justifyContent:"center",fontSize:"5rem"}}>Benefits</h1>
      <section id="benefits">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Certification</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">Certificate of appreciation undersignedby Kashiyatra IIT (BHU) Varanasi to all CA's</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Prizes</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">Exciting prizes and goodies for top 5 Campus Ambassadors</div>
              </div>
            </div>
          </div>
        </Slide>
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Concert Passes</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">Get premium access to concerts and EDM nights</div>
              </div>
            </div>
          </div>
        </Slide>
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Merchandise</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">Own and Flaunt official branded Kashiyatra Merchandise</div>
              </div>
            </div>
          </div>
        </Slide>
      </section>
      </>
      
    );
  }
}

export default Benefits;
