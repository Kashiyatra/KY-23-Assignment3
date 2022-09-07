import React from "react";
import Card from "./Card";

function Duties() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Duties</h1>
        <h5 className="text-center">Campus Ambassador is the face of Kashiyatra.They Act as a link
                between Kashiyatra and their college and are the first point of
                contact for the students .Following are the responsibilities one
                has to take</h5>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <Card title="Represent" imgsrc="https://ky-2020.netlify.app/img/20190825_202120.png" />
              <Card title="Publicize" imgsrc="https://ky-2020.netlify.app/img/20190825_202032.png" />
              <Card title="Conceptualize" imgsrc="https://ky-2020.netlify.app/img/iii.png" />
              <Card title="Organise" imgsrc="https://ky-2020.netlify.app/img/20190825_202100.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Duties;
