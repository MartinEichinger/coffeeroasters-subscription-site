import React from "react";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="entry">
        <div className="text">
          <h1>Great coffee made simple.</h1>
          <p>
            Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <a href="/plan">
            <button>Create your plan</button>
          </a>
        </div>
      </div>
      <div className="collection">
        <div className="box d-flex flex-column">
          <div className="title">Our collection</div>
          <div className="overlay"></div>
        </div>
        <div className="crds d-flex flex-column flex-md-column flex-lg-row justify-content-evenly">
          <div className="crd d-flex flex-column flex-sm-row flex-md-row flex-lg-column justify-content-between align-items-center">
            <img src="/image-gran-espresso.png" alt="Gran Espresso" />
            <div>
              <h4>Gran Espresso</h4>
              <p>Light and flavorful blend with cocoa and black pepper for an intense experience.</p>
            </div>
          </div>
          <div className="crd d-flex flex-column flex-sm-row flex-md-row flex-lg-column justify-content-between align-items-center">
            <img src="/image-planalto.png" alt="Plan Alto" />
            <div>
              <h4>Planalto</h4>
              <p>Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.</p>
            </div>
          </div>
          <div className="crd d-flex flex-column flex-sm-row flex-md-row flex-lg-column justify-content-between align-items-center">
            <img src="/image-piccollo.png" alt="Piccollo" />
            <div>
              <h4>Piccollo</h4>
              <p>Mild and smooth blend featuring notes of toasted almond and dried cherry.</p>
            </div>
          </div>
          <div className="crd d-flex flex-column flex-sm-row flex-md-row flex-lg-column justify-content-between align-items-center">
            <img src="/image-danche.png" alt="Danche" />
            <div>
              <h4>Danche</h4>
              <p>Ethiopian hand-harvested blend densely packed with vibrant fruit notes.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="choose">
        <div className="text">
          <h2>Why choose us?</h2>
          <p>
            A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every level.
          </p>
        </div>
        <div className="crds d-flex flex-column flex-lg-row justify-content-center">
          <div className="crd d-flex flex-column flex-sm-row flex-lg-column align-items-center justify-content-between">
            <img src="icon-coffee-bean.svg" alt="coffee bean" />
            <div>
              <h4>Best quality</h4>
              <p>Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
            </div>
          </div>
          <div className="crd d-flex flex-column flex-sm-row flex-lg-column align-items-center justify-content-between">
            <img src="icon-gift.svg" alt="gift" />
            <div>
              <h4>Exclusive benefits</h4>
              <p>Special offers and swag when you subscribe, including 30% off your first shipment.</p>
            </div>
          </div>
          <div className="crd d-flex flex-column flex-sm-row flex-lg-column align-items-center justify-content-between">
            <img src="icon-truck.svg" alt="truck" />
            <div>
              <h4>Free shipping</h4>
              <p>We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="works">
        <h4>How it works </h4>
        <div className="crds d-flex flex-column flex-sm-row">
          <div className="crd d-flex flex-column">
            <div className="stepper d-none d-sm-flex flex-row align-items-center">
              <div className="circle"></div>
              <div className="line"></div>
            </div>
            <h1>01</h1>
            <h3>Pick your coffee</h3>
            <p>
              Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </p>
          </div>
          <div className="crd d-flex flex-column">
            <div className="stepper d-none d-sm-flex flex-row align-items-center">
              <div className="circle"></div>
              <div className="line"></div>
            </div>
            <h1>02</h1>
            <h3>Choose the frequency</h3>
            <p>
              Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </p>
          </div>
          <div className="crd d-flex flex-column">
            <div className="stepper d-none d-sm-flex flex-row align-items-center">
              <div className="circle"></div>
              <div className="line"></div>
            </div>
            <h1>03</h1>
            <h3>Receive and enjoy!</h3>
            <p>
              We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </p>
          </div>
        </div>
        <a href="/plan">
          <button>Create your plan</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
