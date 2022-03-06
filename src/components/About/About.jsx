import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="entry">
        <div className="text">
          <h3>About Us</h3>
          <p>
            Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been
            dedicated to bring the perfect cup - from bean to brew - in every shipment.
          </p>
        </div>
      </div>
      <div className="commitment">
        <div className="d-flex flex-column flex-sm-row">
          <div className="image"></div>
          <div className="crd d-flex flex-column justify-content-center">
            <h3>Our commitment</h3>
            <p>
              We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the
              world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a
              year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and
              empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community
              initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles
              distinctive to their native growing region.
            </p>
          </div>
        </div>
      </div>
      <div className="quality">
        <div className="d-flex flex-column-reverse flex-lg-row">
          <div className="text">
            <h2>Uncompromising quality</h2>
            <p>
              Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality
              control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our
              goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.
            </p>
          </div>
          <img className="d-none d-lg-block" src="./img/about/image-quality-desktop.jpg" alt="Uncompromising quality" />
          <img className="d-block d-lg-none" src="./img/about/image-quality-tablet.jpg" alt="Uncompromising quality" />
        </div>
      </div>
      <div className="headquarters">
        <h4>Our headquarters</h4>
        <div className="crds d-flex flex-column flex-sm-row">
          <div className="crd d-flex flex-column align-items-center align-items-sm-start">
            <img src="./img/about/illustration-uk.svg" alt="United Kingdom" />
            <h3 className="small">United Kingdom</h3>
            <p>
              68 Asfordby Rd
              <br />
              Alcaston
              <br />
              SY6 1YA
              <br />
              +44 1241 918425
            </p>
          </div>
          <div className="crd d-flex flex-column align-items-center align-items-sm-start">
            <img src="./img/about/illustration-canada.svg" alt="Canada" />
            <h3 className="small">Canada</h3>
            <p>
              1528 Eglinton Avenue
              <br />
              Toronto
              <br />
              Ontario M4P 1A6
              <br />
              +1 416 485 2997
            </p>
          </div>
          <div className="crd d-flex flex-column align-items-center align-items-sm-start">
            <img src="./img/about/illustration-australia.svg" alt="Australia" />
            <h3 className="small">Australia</h3>
            <p>
              36 Swanston Street
              <br />
              Kewell
              <br />
              Victoria
              <br />
              +61 4 9928 3629
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
