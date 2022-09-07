import React, { Component } from "react";
import Fade from "react-reveal";

class Duties extends Component {
  render() {
    if (!this.props.data) return null;


    return (
      <section id="duties">
        <Fade duration={1000}>
          <div className="row">
            <div className="ten columns main-col">
              <h2>Duites of Campus Ambassador</h2>

              <p>Campus Ambassador is the face of Kashiyatra.They Act as a link
                between Kashiyatra and their college and are the first point of
                contact for the students .Following are the responsibilities one
                has to take</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Represent</h2>
                  <p className="address">
                  Represent and exemplify Kashiyatra in your college among your
                  peers.
                  </p>
                </div>
                <div className="columns contact-details">
                  <h2>Publicize</h2>
                  <p className="address">
                  Promote Kashiyatra by Publicizing its events through social media Platforms.
                  </p>
                </div>
                <div className="columns contact-details">
                  <h2>Organise</h2>
                  <p className="address">
                  Conduct workshops and promotional event in your college for Kashiyatra.
                  </p>
                </div>
                <div className="columns contact-details">
                  <h2>Conceptualize</h2>
                  <p className="address">
                  Bring forth ideas and propasals as valuable input for team Kashiyatra.
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Duties;
