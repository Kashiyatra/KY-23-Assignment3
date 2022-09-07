import React from "react";
import PropTypes from "prop-types";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Zoom from "react-reveal/Zoom";

function Theme(props) {
  return (
    <>
      <div className="banner" id="home">
        <div className="text" style={{ textAlign: "center", fontSize: "40px" }}>
          <Typewriter
            options={{
              strings: [
                " Get ready to explore the unkown areas of your interest",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="yo" >
          <motion.button
            className="yu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ borderRadius: "15px" }}
            onClick={props.toggleMode}
          >
            CLICK ME
          </motion.button>
        </div>
        <img
          src="https://i.pinimg.com/originals/fe/2c/64/fe2c646744bf4b17d310aed8240aedb3.png"
          style={{ height: "340px", width: "400px" }}
          alt="Header Img"
        />
      </div>
    </>
  );
}

export default Theme;
