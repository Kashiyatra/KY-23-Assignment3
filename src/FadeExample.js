import React from "react";
import Fade from "react-reveal/Fade";
import image2 from "./grp135right.png";
import image from "./grp142.png";
import image3 from "./grp135.png";
import image6 from "./image3.png";
import image8 from "./image5.png";
import image9 from "./image6.png";
import upperLeft from "./Rectangle 4.png";
import upperRight from "./Rectangle 10.png";
import lowerRight from "./Rectangle 8.png";
import lowerLeft from "./Rectangle 7.png";
import bubble from "./Rectangle 17.png";
import arrow_24 from "./Arrow_24.png";
import arrow_25 from "./Arrow_25.png";
import arrow_26 from "./Arrow_26.png";
import arrow_27 from "./Arrow_27.png";
import smallEllipse from "./Ellipse 4.png";
import smallRectangle from "./Rectangle 11.png";
import smallTriangle from "./Polygon 4.png";
import officialMerchandice from "./Official Merchandise Own and flaunt official branded Kashiyatra merchandise..png";
import certification from "./CERTIFICATION Certificate of appreciation undersigned by Kashiyatra IIT(BHU) Varanasi to all CA's..png";
import meetStars from "./Meet the Stars Get a chance to take selfie with famous celebs & artists..png";
import prizes from "./PRIZES Exciting prizes and goodies for top 5 campus ambassadors.png";
import clickMe from "./CLICK ME.png";
import image10 from "./Gunman.png";
import frontImg from "./image.jpg";
import frontImg2 from "./image2.jpg";
import logo from "./kashiyatraLogo.png";
import "./App.css";
import Toggle from "./Toggle";
import Name from "./Name";

function mouseOver1() {
  document.querySelector(".show1").classList.add("show1After");
  document.querySelectorAll(".browniePt")[0].classList.toggle("browniePtHover");
}
function mouseOver2() {
  document.querySelector(".show2").classList.add("show2After");
  document.querySelectorAll(".browniePt")[1].classList.toggle("browniePtHover");
}
function mouseOver3() {
  document.querySelector(".show3").classList.add("show3After");
  document.querySelectorAll(".browniePt")[2].classList.toggle("browniePtHover");
}
function mouseOver4() {
  document.querySelector(".show4").classList.add("show4After");
  document.querySelectorAll(".browniePt")[3].classList.toggle("browniePtHover");
}
function openOne() {
  if (
    document.querySelectorAll(".card2")[0].classList.contains("card2After1")
  ) {
    document.querySelector(".oneContent").innerHTML = "View Details  ->";
    document.querySelector(".oneContent1").style.display = "none";
  } else {
    document.querySelector(".oneContent").innerHTML = "Hide Details  ->";
    document.querySelector(".oneContent1").style.display = "block";
  }
  document.querySelectorAll(".card2")[0].classList.toggle("card2After1");
  document
    .querySelectorAll(".backgroundContact")[0]
    .classList.toggle("backgroundContactAfter");
}
function openTwo() {
  if (
    document.querySelectorAll(".card2")[1].classList.contains("card2After2")
  ) {
    document.querySelector(".twoContent").innerHTML = "View Details  ->";
    document.querySelector(".oneContent2").style.display = "none";
  } else {
    document.querySelector(".twoContent").innerHTML = "Hide Details  ->";
    document.querySelector(".oneContent2").style.display = "block";
  }
  document.querySelectorAll(".card2")[1].classList.toggle("card2After2");
  document
    .querySelectorAll(".backgroundContact")[1]
    .classList.toggle("backgroundContactAfter");
}
function openFour() {
  if (
    document.querySelectorAll(".card2")[2].classList.contains("card2After3")
  ) {
    document.querySelector(".fourContent").innerHTML = "View Details  ->";
    document.querySelector(".oneContent4").style.display = "none";
  } else {
    document.querySelector(".fourContent").innerHTML = "Hide Details  ->";
    document.querySelector(".oneContent4").style.display = "block";
  }
  document.querySelectorAll(".card2")[2].classList.toggle("card2After3");
  document
    .querySelectorAll(".backgroundContact")[2]
    .classList.toggle("backgroundContactAfter");
}
function openThree() {
  if (
    document.querySelectorAll(".card2")[3].classList.contains("card2After3")
  ) {
    document.querySelector(".threeContent").innerHTML = "View Details  ->";
    document.querySelector(".oneContent3").style.display = "none";
  } else {
    document.querySelector(".threeContent").innerHTML = "Hide Details  ->";
    document.querySelector(".oneContent3").style.display = "block";
  }
  document.querySelectorAll(".card2")[3].classList.toggle("card2After3");
  document
    .querySelectorAll(".backgroundContact")[3]
    .classList.toggle("backgroundContactAfter");
}
class FadeExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ show: !this.state.show });
    document.querySelector(".before").style.display = "none";
    document.querySelector(".after").style.display = "flex";
  }
  render() {
    return (
      <>
        <div className="one">
          <nav
            id="navbar-example2"
            className="navbar px-3 mb-3 bg-dark after"
            style={{
              display: "none",
              position: "fixed",
              top: "0",
              right: "0",
              left: "0",
              zIndex: "10",
            }}
          >
            <a className="navbar-brand" href="#">
              <img src={logo} alt="Paris" />
            </a>
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#scrollspyHeading2"
                  style={{ color: "whitesmoke" }}
                >
                  Why CA
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#scrollspyHeading3"
                  style={{ color: "whitesmoke" }}
                >
                  Benefits
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#scrollspyHeading4"
                  style={{ color: "whitesmoke" }}
                >
                  Contacts
                </a>
              </li>
            </ul>
          </nav>
          <div
            data-bs-spy="scroll"
            data-bs-target="#navbar-example2"
            data-bs-root-margin="0px 0px -40%"
            data-bs-smooth-scroll="true"
            style={{ paddingTop: "3em" }}
            className="scrollspy-example bg-light p5 rounded-2 backgroundImg"
          >
            <h4
              className="before"
              style={{
                paddingTop: "0",
                paddingBottom: "10em",
                textAlign: "center",
              }}
            >
              <div class="flip-box">
                <div class="flip-box-inner">
                  <div class="flip-box-front">
                    <img src={frontImg2} alt="Paris" className="firstImg" />
                    <h2
                      style={{
                        fontFamily: "squidGameFont",
                        color: "whitesmoke",
                        position: "relative",
                        top: "-100px",
                      }}
                    >
                      KASHIYATRA 2022
                    </h2>
                    <p
                      style={{
                        fontFamily: "squidGameFont",
                        color: "whitesmoke",
                        position: "relative",
                        top: "-88px",
                      }}
                    >
                      Welcomes You
                    </p>
                  </div>
                  <div class="flip-box-back" onClick={this.handleClick}>
                    <img src={frontImg} alt="Paris" className="firstImg" />
                    <img
                      className="secondImg"
                      src={clickMe}
                      alt=""
                      style={{
                        position: "absolute",
                        padding: "4px",
                        top: "280px",
                        left: "398px",
                        zIndex: "10",
                      }}
                    />
                    <img
                      className="secondImg"
                      src={bubble}
                      alt=""
                      style={{
                        position: "absolute",
                        padding: "4px",
                        top: "220px",
                        left: "350px",
                        width: "200px",
                      }}
                    />
                    <img
                      className="secondImg"
                      src={arrow_24}
                      alt=""
                      style={{
                        position: "absolute",
                        padding: "4px",
                        top: "179px",
                        left: "310px",
                        width: "100px",
                      }}
                    />
                  </div>
                </div>
              </div>
              {this.state.show ? "" : ""}
            </h4>
            <h1>
              <Fade top opposite collapse when={this.state.show}>
                <h4
                  id="scrollspyHeading1"
                  style={{ paddingTop: "2.7em", textAlign: "center" }}
                >
                  <img className="firstImg1" src={image} alt="" />
                </h4>
                <h4
                  id="scrollspyHeading2"
                  style={{ paddingTop: "8.7em", paddingBottom: "10.7em" }}
                >
                  <div className="container">
                    <div
                      className="background"
                      style={{
                        width: "7.8em",
                        height: "7.8em",
                        backgroundColor: "black",
                        display: "inline-block",
                        borderRadius: "30px",
                      }}
                    >
                      <img
                        src={image2}
                        alt="..."
                        style={{
                          maxWidth: "7em",
                          position: "relative",
                          bottom: "102px",
                          left: "10px",
                        }}
                      />
                    </div>
                    <article
                      style={{
                        display: "inline-block",
                        position: "relative",
                        top: "-165px",
                        color: "black",
                        fontFamily: "squidGameFont",
                        left: "138px",
                        fontSize: "1.2em",
                      }}
                    >
                      <Name></Name>
                    </article>
                    <article
                      style={{
                        display: "inline-block",
                        //   position: "absolute",
                        top: "10px",
                        color: "#837495",
                        fontFamily: '"Montez", sans-serif',
                        fontSize: "1.3em",
                      }}
                    >
                      <article className="campusArticle">
                        For bringing together a fest which encircles diversity
                        like never before we are reaching out to colleges across
                        the country. The selected Campus Ambassador in his/her
                        tenure will represent Kashiyatra, IIT(BHU) in his/her
                        college and will become a an integral member of the
                        team.
                      </article>
                    </article>
                    <article
                      style={{
                        display: "inline-block",
                        position: "absolute",
                        top: "180px",
                        color: "#837495",
                        fontFamily: '"Montez", sans-serif',
                        left: "680px",
                        top: "380px",
                        width: "600px",
                        fontSize: "1.3em",
                      }}
                    >
                      Become a Leader
                    </article>
                    <article
                      style={{
                        display: "inline-block",
                        position: "absolute",
                        top: "230px",
                        color: "#837495",
                        fontFamily: '"Montez", sans-serif',
                        left: "545px",
                        top: "420px",
                        width: "600px",
                        fontSize: "1.3em",
                      }}
                    >
                      <Toggle
                        value1="Update your organisational skills"
                        value2="Polish your communicating & public speaking skills"
                      ></Toggle>
                    </article>
                    <article
                      style={{
                        display: "inline-block",
                        position: "absolute",
                        top: "280px",
                        color: "#837495",
                        fontFamily: '"Montez", sans-serif',
                        left: "550px",
                        top: "460px",
                        width: "600px",
                        fontSize: "1.3em",
                      }}
                    >
                      <Toggle
                        value1="Expand your creative horizons"
                        value2="Get the exposure to online and media marketing"
                      ></Toggle>
                    </article>
                    <div
                      className="background"
                      style={{
                        width: "7.8em",
                        height: "7.8em",
                        backgroundColor: "black",
                        display: "inline-block",
                        borderRadius: "30px",
                        position: "absolute",
                        right: "30px",
                        top: "207px",
                      }}
                    >
                      <img
                        src={image3}
                        alt="..."
                        style={{
                          maxWidth: "7em",
                          position: "relative",
                          bottom: "102px",
                          left: "10px",
                        }}
                      />
                    </div>
                  </div>
                </h4>
                {/* <h4 id="scrollspyHeading4" style={{ paddingTop: "4.7em" }}></h4> */}
                <h4
                  id="scrollspyHeading3"
                  style={{ paddingTop: "8.5em", paddingBottom: "7.5em" }}
                >
                  <div
                    style={{
                      fontFamily: "squidGameFont",
                      fontSize: "1.8em",
                      textAlign: "center",
                      position: "relative",
                      top: "-50px",
                      color: "white",
                    }}
                  >
                    BR<p className="pink">O</p>WNI<p className="pink">E</p> P
                    <p className="pink">O</p>INTS
                  </div>
                  <img
                    src={smallEllipse}
                    alt=""
                    style={{
                      position: "fixed",
                      padding: "4px",
                      top: "407px",
                      left: "723px",
                      zIndex: "10",
                    }}
                  />
                  <img
                    src={smallTriangle}
                    alt=""
                    style={{
                      position: "absolute",
                      padding: "4px",
                      top: "458px",
                      left: "725px",
                      zIndex: "10",
                    }}
                  />
                  <img
                    src={smallTriangle}
                    alt=""
                    style={{
                      position: "absolute",
                      padding: "4px",
                      top: "410px",
                      left: "770px",
                      zIndex: "10",
                    }}
                  />
                  <img
                    src={smallRectangle}
                    alt=""
                    style={{
                      position: "absolute",
                      padding: "4px",
                      top: "458px",
                      left: "770px",
                      width: "32px",
                      zIndex: "10",
                    }}
                  />
                  <div className="container box">
                    <img
                      className="secondImg browniePt"
                      src={upperLeft}
                      alt=""
                      onMouseMove={mouseOver1}
                      style={{
                        display: "inline-block",
                        padding: "4px",
                        marginLeft: "36%",
                      }}
                    />
                    <img
                      className="secondImg browniePt"
                      src={upperRight}
                      alt=""
                      onMouseMove={mouseOver2}
                      style={{ display: "inline-block", padding: "4px" }}
                    />
                    <img
                      className="secondImg browniePt"
                      src={lowerLeft}
                      alt=""
                      onMouseMove={mouseOver3}
                      style={{
                        display: "inline-block",
                        padding: "4px",
                        marginTop: "0%",
                        marginLeft: "36%",
                      }}
                    />
                    <img
                      className="secondImg browniePt"
                      src={lowerRight}
                      alt=""
                      onMouseMove={mouseOver4}
                      style={{
                        display: "inline-block",
                        padding: "4px",
                        marginTop: "0%",
                        marginLeft: "0%",
                      }}
                    />

                    <div className="show2">
                      <img
                        className="secondImg"
                        src={officialMerchandice}
                        alt=""
                        style={{
                          position: "absolute",
                          padding: "4px",
                          top: "-466px",
                          left: "810px",
                          zIndex: "10",
                        }}
                      />
                      <img
                        className="secondImg"
                        src={bubble}
                        alt=""
                        style={{
                          position: "absolute",
                          padding: "4px",
                          top: "-486px",
                          left: "776px",
                        }}
                      />
                      <img
                        className="secondImg"
                        src={arrow_26}
                        alt=""
                        style={{
                          position: "absolute",
                          padding: "4px",
                          top: "-371px",
                          left: "707px",
                        }}
                      />
                    </div>
                    <div className="show4">
                      <img
                        className="secondImg"
                        src={prizes}
                        alt=""
                        style={{
                          position: "absolute",
                          padding: "4px",
                          top: "-25px",
                          left: "810px",
                          zIndex: "10",
                        }}
                      />
                      <img
                        className="secondImg"
                        src={bubble}
                        alt=""
                        style={{
                          position: "absolute",
                          padding: "4px",
                          top: "-62px",
                          left: "776px",
                        }}
                      />
                      <img
                        className="secondImg"
                        src={arrow_24}
                        alt=""
                        style={{
                          position: "absolute",
                          padding: "4px",
                          top: "-119px",
                          left: "707px",
                        }}
                      />
                    </div>
                    <div className="show3">
                      <img
                        className="secondImg"
                        src={meetStars}
                        alt=""
                        style={{
                          position: "absolute",
                          padding: "4px",
                          top: "-8px",
                          left: "353px",
                          zIndex: "10",
                        }}
                      />
                      <img
                        className="secondImg"
                        src={bubble}
                        alt=""
                        style={{
                          position: "absolute",
                          padding: "4px",
                          top: "-47px",
                          left: "321px",
                        }}
                      />
                      <img
                        className="secondImg"
                        src={arrow_25}
                        alt=""
                        style={{
                          position: "absolute",
                          padding: "4px",
                          top: "-145px",
                          left: "443px",
                        }}
                      />
                    </div>
                    <div className="show1">
                      <img
                        className="secondImg"
                        src={certification}
                        alt=""
                        style={{
                          position: "absolute",
                          padding: "4px",
                          top: "-456px",
                          left: "348px",
                          zIndex: "10",
                        }}
                      />
                      <img
                        className="secondImg"
                        src={bubble}
                        alt=""
                        style={{
                          position: "absolute",
                          padding: "4px",
                          top: "-486px",
                          left: "321px",
                        }}
                      />
                      <img
                        className="secondImg"
                        src={arrow_27}
                        alt=""
                        style={{
                          position: "absolute",
                          padding: "4px",
                          top: "-371px",
                          left: "445px",
                        }}
                      />
                    </div>
                  </div>
                  {/* <img className="secondImg" src={image4} alt="" /> */}
                </h4>
                <h4
                  id="scrollspyHeading4"
                  style={{ paddingTop: "4.8em", paddingBottom: "3.8em" }}
                >
                  <div className="container2">
                    <div className="card2 card2One">
                      <div
                        className="backgroundContact"
                        style={{
                          width: "7.8em",
                          height: "7.8em",
                          backgroundColor: "black",
                          display: "inline-block",
                          borderRadius: "30px",
                          position: "relative",
                          right: "-12px",
                          top: "14px",
                        }}
                      >
                        <p
                          style={{
                            color: "whitesmoke",
                            position: "absolute",
                            fontFamily: "squidGameFont",
                            bottom: "-48px",
                            fontSize: "17px",
                            left: "55px",
                          }}
                        >
                          Publicity
                        </p>
                        <p
                          className="oneContent"
                          style={{
                            color: "#C94F5A",
                            position: "absolute",
                            fontFamily: '"Montagu Slab", sans-serif',
                            bottom: "-65px",
                            fontSize: "10px",
                            left: "64px",
                          }}
                          onClick={openOne}
                        >
                          View Details ->
                        </p>
                        <p
                          className="oneContent1"
                          style={{
                            color: "whitesmoke",
                            position: "absolute",
                            fontFamily: "squidGameFont",
                            bottom: "-137px",
                            fontSize: "9px",
                            left: "13px",
                          }}
                        >
                          Lorem ipsum dolor sit amet, ad tibique omnesque
                          facilisis has. Dicat vivendum nam ex, vel no vitae
                          tantas.
                        </p>
                        <img
                          className="secondImg"
                          src={image6}
                          alt=""
                          style={{
                            maxWidth: "6em",
                            position: "relative",
                            bottom: "-46px",
                            left: "23px",
                          }}
                        />
                      </div>
                    </div>
                    <div className="card2 card2Two">
                      <div
                        className="backgroundContact"
                        style={{
                          width: "7.8em",
                          height: "7.8em",
                          backgroundColor: "black",
                          display: "inline-block",
                          borderRadius: "30px",
                          position: "relative",
                          right: "-12px",
                          top: "14px",
                        }}
                      >
                        <p
                          style={{
                            color: "whitesmoke",
                            position: "absolute",
                            fontFamily: "squidGameFont",
                            bottom: "-48px",
                            fontSize: "17px",
                            left: "55px",
                          }}
                        >
                          Events
                        </p>
                        <p
                          className="twoContent"
                          style={{
                            color: "#C94F5A",
                            position: "absolute",
                            fontFamily: '"Montagu Slab", sans-serif',
                            bottom: "-65px",
                            fontSize: "10px",
                            left: "64px",
                          }}
                          onClick={openTwo}
                        >
                          View Details ->
                        </p>
                        <p
                          className="oneContent2"
                          style={{
                            color: "whitesmoke",
                            position: "absolute",
                            fontFamily: "squidGameFont",
                            bottom: "-137px",
                            fontSize: "9px",
                            left: "13px",
                          }}
                        >
                          Lorem ipsum dolor sit amet, ad tibique omnesque
                          facilisis has. Dicat vivendum nam ex, vel no vitae
                          tantas.
                        </p>
                        <img
                          className="secondImg"
                          src={image10}
                          alt=""
                          style={{
                            maxWidth: "4em",
                            position: "relative",
                            bottom: "-54px",
                            left: "43px",
                          }}
                        />
                      </div>
                    </div>
                    <div className="card2 card2Four">
                      <div
                        className="backgroundContact"
                        style={{
                          width: "7.8em",
                          height: "7.8em",
                          backgroundColor: "black",
                          display: "inline-block",
                          borderRadius: "30px",
                          position: "relative",
                          right: "-12px",
                          top: "14px",
                        }}
                      >
                        <p
                          style={{
                            color: "whitesmoke",
                            position: "absolute",
                            fontFamily: "squidGameFont",
                            bottom: "-48px",
                            fontSize: "17px",
                            left: "55px",
                          }}
                        >
                          Marketing
                        </p>
                        <p
                          className="fourContent"
                          style={{
                            color: "#C94F5A",
                            position: "absolute",
                            fontFamily: '"Montagu Slab", sans-serif',
                            bottom: "-65px",
                            fontSize: "10px",
                            left: "64px",
                          }}
                          onClick={openFour}
                        >
                          View Details ->
                        </p>
                        <p
                          className="oneContent4"
                          style={{
                            color: "whitesmoke",
                            position: "absolute",
                            fontFamily: "squidGameFont",
                            bottom: "-137px",
                            fontSize: "9px",
                            left: "13px",
                          }}
                        >
                          Lorem ipsum dolor sit amet, ad tibique omnesque
                          facilisis has. Dicat vivendum nam ex, vel no vitae
                          tantas.
                        </p>
                        <img
                          className="secondImg"
                          src={image8}
                          alt=""
                          style={{
                            maxWidth: "5.3em",
                            position: "relative",
                            bottom: "-53px",
                            left: "30px",
                          }}
                        />
                      </div>
                    </div>
                    <div className="card2 card2Three">
                      <div
                        className="backgroundContact"
                        style={{
                          width: "7.8em",
                          height: "7.8em",
                          backgroundColor: "black",
                          display: "inline-block",
                          borderRadius: "30px",
                          position: "relative",
                          right: "-12px",
                          top: "14px",
                        }}
                      >
                        <p
                          style={{
                            color: "whitesmoke",
                            position: "absolute",
                            fontFamily: "squidGameFont",
                            bottom: "-48px",
                            fontSize: "17px",
                            left: "55px",
                          }}
                        >
                          Content
                        </p>
                        <p
                          className="threeContent"
                          style={{
                            color: "#C94F5A",
                            position: "absolute",
                            fontFamily: '"Montagu Slab", sans-serif',
                            bottom: "-65px",
                            fontSize: "10px",
                            left: "64px",
                          }}
                          onClick={openThree}
                        >
                          View Details ->
                        </p>
                        <p
                          className="oneContent3"
                          style={{
                            color: "whitesmoke",
                            position: "absolute",
                            fontFamily: "squidGameFont",
                            bottom: "-137px",
                            fontSize: "9px",
                            left: "13px",
                          }}
                        >
                          Lorem ipsum dolor sit amet, ad tibique omnesque
                          facilisis has. Dicat vivendum nam ex, vel no vitae
                          tantas.
                        </p>
                        <img
                          className="secondImg"
                          src={image9}
                          alt=""
                          style={{
                            maxWidth: "6em",
                            position: "relative",
                            bottom: "-61px",
                            left: "16px",
                          }}
                        />
                      </div>
                    </div>

                    <div
                      style={{
                        fontFamily: "squidGameFont",
                        fontSize: "3em",
                        position: "relative",
                        top: "120px",
                        left: "50px",
                        color: "whitesmoke",
                        display: "inline-block",
                      }}
                    >
                      Contacts
                    </div>
                    <div
                      style={{
                        fontFamily: "squidGameFont",
                        fontSize: "4em",
                        position: "relative",
                        top: "260px",
                        left: "50px",
                        color: "#F73D64",
                        display: "inline-block",
                      }}
                    >
                      &
                    </div>
                    <div
                      style={{
                        fontFamily: "squidGameFont",
                        fontSize: "3em",
                        position: "relative",
                        top: "420px",
                        left: "50px",
                        color: "whitesmoke",
                        display: "inline-block",
                      }}
                    >
                      Emails
                    </div>
                    {/* <img className="secondImg" src={image7} alt="" />
                  <img className="secondImg" src={image8} alt="" />
                  <img className="secondImg" src={image9} alt="" />
                <img className="secondImg" src={image10} alt="" /> */}
                  </div>
                </h4>
              </Fade>
            </h1>
          </div>
        </div>
        <table
          style={{
            width: "100%",
            textAlign: "center",
            color: "whitesmoke",
            fontFamily: "squidGameFont",
          }}
        >
          <tr>
            <th style={{ paddingBottom: "20px" }}>Quick Links</th>
            <th style={{ paddingBottom: "20px" }}>Video & Images</th>
            <th style={{ paddingBottom: "20px" }}>Campus Ambassador</th>
            <th style={{ paddingBottom: "20px" }}>Learn More</th>
          </tr>
          <tr>
            <td style={{ fontSize: "0.8em", padding: "6px" }}>Register</td>
            <td style={{ fontSize: "0.8em", padding: "6px" }}>Gallery</td>
            <td style={{ fontSize: "0.8em", padding: "6px" }}>Why CA?</td>
            <td style={{ fontSize: "0.8em", padding: "6px" }}>FAQs</td>
          </tr>
          <tr>
            <td style={{ fontSize: "0.8em", padding: "6px" }}>
              Privacy Policy
            </td>
            <td style={{ fontSize: "0.8em", padding: "6px" }}>Aftermovie</td>
            <td style={{ fontSize: "0.8em", padding: "6px" }}>
              Rules and Regulations
            </td>
            <td style={{ fontSize: "0.8em", padding: "6px" }}>
              Previous years sponsers
            </td>
          </tr>
        </table>
        <footer
          style={{
            backgroundColor: "blck",
            color: "whitesmoke",
            textAlign: "center",
            fontFamily: "squidGameFont",
          }}
        >
          Copyright © 2022 Kashiyatra IIT-BHU
        </footer>
      </>
    );
  }
}

export default FadeExample;
