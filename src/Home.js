import React from "react";
import Common from "./Common";
import web from "../src/Pictures/img2.png";

function Home() {
  return (
    <>
      <Common
        name="Kashiyatra "
        imgsrc={web}
        visit="/duties"
        btname="Get started"
      />
    </>
  );
}

export default Home;
