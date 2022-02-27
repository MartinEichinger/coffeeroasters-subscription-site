import React, { useState } from "react";

const Plan = () => {
  const [selection, setSelection] = useState({
    set1: 0,
    set2: 0,
    set3: 0,
    set4: 0,
    set5: 0,
  });

  var enable = selection.set1 !== 0 && selection.set2 !== 0 && selection.set3 !== 0 && selection.set4 !== 0 && selection.set5 !== 0;

  //enable = true;

  console.log("enable: ", enable);

  return (
    <div className="plan">
      <div className="entry">
        <div className="text">
          <h1>Create a plan</h1>
          <p>
            Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered
            fresh to your door.
          </p>
        </div>
      </div>
      <div className="works">
        <div className="crds d-flex flex-column flex-sm-row">
          <div className="crd d-flex flex-column">
            <div className="stepper d-none d-sm-flex flex-row align-items-center">
              <div className="circle"></div>
              <div className="line"></div>
            </div>
            <h1>01</h1>
            <h3>Pick your coffee</h3>
            <p>
              Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There's new coffees
              in all profiles every month for you to try out.
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
      </div>
      <div className="plan">
        <div className="d-flex flex-row justify-content-center">
          <div className="steps d-none d-lg-block">
            <a href="#panelsStayOpen-headingOne">
              <h4 className={selection.set2 === 0 && selection.set3 === 0 && selection.set4 === 0 && selection.set5 === 0 ? "active" : ""}>
                <span>01</span>Preferences
              </h4>
            </a>
            <a href="#panelsStayOpen-headingTwo">
              <h4 className={selection.set2 !== 0 && selection.set3 === 0 && selection.set4 === 0 && selection.set5 === 0 ? "active" : ""}>
                <span>02</span>Bean type
              </h4>
            </a>
            <a href="#panelsStayOpen-headingThree">
              <h4 className={selection.set3 !== 0 && selection.set4 === 0 && selection.set5 === 0 ? "active" : ""}>
                <span>03</span>Quantity
              </h4>
            </a>
            <a href="#panelsStayOpen-headingFour">
              <h4 className={selection.set4 !== 0 && selection.set5 === 0 ? "active" : ""}>
                <span>04</span>Grind option
              </h4>
            </a>
            <a href="#panelsStayOpen-headingFive">
              <h4 className={selection.set5 !== 0 ? "active" : ""}>
                <span>05</span>Deliveries
              </h4>
            </a>
          </div>
          <div className="details d-flex flex-column align-items-center align-items-lg-end">
            <div className="accordion" id="accordionPlan">
              <div className="accordion-item">
                <div className="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    <h2>How do you drink your coffee?</h2>
                  </button>
                </div>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                  <div className="accordion-body">
                    <div className="crds d-flex flex-column flex-sm-row">
                      <div
                        className={selection.set1 === "Capsule" ? "crd active" : "crd"}
                        onClick={() => {
                          selection.set1 = "Capsule";
                          setSelection({ ...selection });
                        }}
                      >
                        <h4>Capsule</h4>
                        <p>Compatible with Nespresso systems and similar brewers</p>
                      </div>
                      <div
                        className={selection.set1 === "Filter" ? "crd active" : "crd"}
                        onClick={() => {
                          selection.set1 = "Filter";
                          setSelection({ ...selection });
                        }}
                      >
                        <h4>Filter</h4>
                        <p>For pour over or drip methods like Aeropress, Chemex, and V60</p>
                      </div>
                      <div
                        className={selection.set1 === "Espresso" ? "crd active" : "crd"}
                        onClick={() => {
                          selection.set1 = "Espresso";
                          setSelection({ ...selection });
                        }}
                      >
                        <h4>Espresso</h4>
                        <p>Dense and finely ground beans for an intense, flavorful experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    <h2>What type of coffee?</h2>
                  </button>
                </div>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                  <div className="accordion-body">
                    <div className="crds d-flex flex-column flex-sm-row">
                      <div
                        className={selection.set2 === "Single Origin" ? "crd active" : "crd"}
                        onClick={() => {
                          selection.set2 = "Single Origin";
                          setSelection({ ...selection });
                        }}
                      >
                        <h4>Single origin</h4>
                        <p>Distinct, high quality coffee from a specific family-owned farm</p>
                      </div>
                      <div
                        className={selection.set2 === "Decaf" ? "crd active" : "crd"}
                        onClick={() => {
                          selection.set2 = "Decaf";
                          setSelection({ ...selection });
                        }}
                      >
                        <h4>Decaf</h4>
                        <p>Just like regular coffee, except the caffeine has been removed</p>
                      </div>
                      <div
                        className={selection.set2 === "Blended" ? "crd active" : "crd"}
                        onClick={() => {
                          selection.set2 = "Blended";
                          setSelection({ ...selection });
                        }}
                      >
                        <h4>Blended</h4>
                        <p>Combination of two or three dark roasted beans of organic coffees</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="panelsStayOpen-headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    <h2>How much would you like?</h2>
                  </button>
                </div>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                  <div className="accordion-body">
                    <div className="crds d-flex flex-column flex-sm-row">
                      <div
                        className={selection.set3 === "250g" ? "crd active" : "crd"}
                        onClick={() => {
                          selection.set3 = "250g";
                          setSelection({ ...selection });
                        }}
                      >
                        <h4>250g</h4>
                        <p>Perfect for the solo drinker. Yields about 12 delicious cups.</p>
                      </div>
                      <div
                        className={selection.set3 === "500g" ? "crd active" : "crd"}
                        onClick={() => {
                          selection.set3 = "500g";
                          setSelection({ ...selection });
                        }}
                      >
                        <h4>500g</h4>
                        <p>Perfect option for a couple. Yields about 40 delectable cups.</p>
                      </div>
                      <div
                        className={selection.set3 === "1000g" ? "crd active" : "crd"}
                        onClick={() => {
                          selection.set3 = "1000g";
                          setSelection({ ...selection });
                        }}
                      >
                        <h4>1000g</h4>
                        <p>Perfect for offices and events. Yields about 90 delightful cups.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="panelsStayOpen-headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFour"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFour"
                  >
                    <h2>Want us to grind them?</h2>
                  </button>
                </div>
                <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                  <div className="accordion-body">
                    <div className="crds d-flex flex-column flex-sm-row">
                      <div
                        className={selection.set4 === "Wholebean" ? "crd active" : "crd"}
                        onClick={() => {
                          selection.set4 = "Wholebean";
                          setSelection({ ...selection });
                        }}
                      >
                        <h4>Wholebean</h4>
                        <p>Best choice if you cherish the full sensory experience</p>
                      </div>
                      <div
                        className={selection.set4 === "Filter" ? "crd active" : "crd"}
                        onClick={() => {
                          selection.set4 = "Filter";
                          setSelection({ ...selection });
                        }}
                      >
                        <h4>Filter</h4>
                        <p>For drip or pour-over coffee methods such as V60 or Aeropress</p>
                      </div>
                      <div
                        className={selection.set4 === "Cafetiére" ? "crd active" : "crd"}
                        onClick={() => {
                          selection.set4 = "Cafetiére";
                          setSelection({ ...selection });
                        }}
                      >
                        <h4>Cafetiére</h4>
                        <p>Course ground beans specially suited for french press coffee</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="panelsStayOpen-headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFive"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFive"
                  >
                    <h2>How often should we deliver?</h2>
                  </button>
                </div>
                <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                  <div className="accordion-body">
                    <div className="crds d-flex flex-column flex-sm-row">
                      <div
                        className={selection.set5 === "Every Week" ? "crd active" : "crd"}
                        onClick={() => {
                          selection.set5 = "Every Week";
                          setSelection({ ...selection });
                        }}
                      >
                        <h4>Every week</h4>
                        <p>$14.00 per shipment. Includes free first-class shipping.</p>
                      </div>
                      <div
                        className={selection.set5 === "Every 2 Weeks" ? "crd active" : "crd"}
                        onClick={() => {
                          selection.set5 = "Every 2 Weeks";
                          setSelection({ ...selection });
                        }}
                      >
                        <h4>Every 2 weeks</h4>
                        <p>$17.25 per shipment. Includes free priority shipping.</p>
                      </div>
                      <div
                        className={selection.set5 === "Every Month" ? "crd active" : "crd"}
                        onClick={() => {
                          selection.set5 = "Every Month";
                          setSelection({ ...selection });
                        }}
                      >
                        <h4>Every month</h4>
                        <p>$22.50 per shipment. Includes free priority shipping.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="summary">
              <p>ORDER SUMMARY</p>
              <h4>
                “I drink my coffee using <span>{selection.set1 !== 0 ? selection.set1 : "_____"}</span>, with a{" "}
                <span>{selection.set2 !== 0 ? selection.set2 : "_____"}</span> type of bean.{" "}
                <span>{selection.set3 !== 0 ? selection.set3 : "_____"}</span> ground ala{" "}
                <span>{selection.set4 !== 0 ? selection.set4 : "_____"}</span>, sent to me{" "}
                <span>{selection.set5 !== 0 ? selection.set5 : "_____"}</span>.”
              </h4>
            </div>

            <button
              type="button"
              className={enable ? "nix" : "inactive"}
              data-bs-toggle={enable ? "modal" : "nix"}
              data-bs-target={enable ? "#createPlanModal" : "nix"}
            >
              Create my plan!
            </button>
          </div>
        </div>
      </div>
      <div className="modal" id="createPlanModal" tabIndex="-1" role="dialog" aria-labelledby="createPlanModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="createPlanModalLabel">
                Order Summary
              </h2>
            </div>
            <div className="modal-body form d-flex flex-column">
              <h4>
                “I drink my coffee using <span>{selection.set1 !== 0 ? selection.set1 : "_____"}</span>, with a{" "}
                <span>{selection.set2 !== 0 ? selection.set2 : "_____"}</span> type of bean.{" "}
                <span>{selection.set3 !== 0 ? selection.set3 : "_____"}</span> ground ala{" "}
                <span>{selection.set4 !== 0 ? selection.set4 : "_____"}</span>, sent to me{" "}
                <span>{selection.set5 !== 0 ? selection.set5 : "_____"}</span>.”
              </h4>
              <p>
                Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be
                redeemed at the checkout.{" "}
              </p>
              <div className="d-none d-sm-flex flex-row align-items-center">
                <h3>$14.00 / mo</h3>
                <button>Checkout</button>
              </div>
              <div className="d-flex d-sm-none flex-row align-items-center">
                <button>Checkout - $14.00 / mo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
