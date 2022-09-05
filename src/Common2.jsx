import React from "react";
import { NavLink } from "react-router-dom";

function Common2({ name, imgsrc, visit, btname }) {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {name}
                    <strong className="brand-name"> Campus Ambassador</strong>
                  </h1>

                  <h2 className="my-3">
                  Certification
                  </h2>
                  <p className="my-3">
                  Certificate of appreciation undersignedby Kashiyatra IIT (BHU) Varanasi to all CA's
                  </p>
                  <h2 className="my-3">
                  Prizes
                  </h2>
                  <p className="my-3">
                  Exciting Prizes for top 5 campus Ambassdors
                  </p>
                  <h2 className="my-3">
                  Concert Passes
                  </h2>
                  <p className="my-3">
                  Get premium access to concerts and EDM nights
                  </p>

                  <div className="mt-3">
                    <NavLink to={visit} className="btn-get-started">
                      {btname}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={imgsrc}
                    className="img-fluid animated"
                    alt="HomeImg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common2;

