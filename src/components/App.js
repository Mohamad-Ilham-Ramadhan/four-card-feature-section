import React from "react";
import Card from "./Card";
import iconSupervisor from "../images/icon-supervisor.svg";
import iconTeamBuilder from "../images/icon-team-builder.svg";
import iconKarma from "../images/icon-karma.svg";
import iconCalculator from "../images/icon-calculator.svg";

export default function App() {
  return (
    <>
      <div className="mb-5 p-1"></div>
      <div className="mb-4 p-1"></div>
      <header className="text-center mb-5">
        <div className="container">
          <h1 className="font-weight-light heading-1">
            Reliable, efficient delivery
          </h1>
          <h2 className="font-weight-bold heading-1 mb-4">
            Powered by Technology
          </h2>
          <p className="heading-small">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>
      </header>
      <div className="mb-3 p-1"></div>
      <div className="container">
        <div className="row align-items-lg-center">
          <div className="col-lg-4 col-sm-6 mb-4">
            <Card
              title="Supervisor"
              text="Monitor activity to identify project roadblocks."
              image={iconSupervisor}
              color="success"
            />
          </div>
          <div className="col-lg-4 col-sm-12 order-sm-3 order-lg-2">
            <div className="row align-items-lg-center">
              <div className="col-sm-6 col-lg-12 mb-4">
                <Card
                  title="Team builder"
                  text="Scans our talent network to create the optimal team for your
                  project."
                  image={iconTeamBuilder}
                  color="danger"
                />
              </div>
              <div className="w-100 d-none d-lg-block"></div>
              <div className="col-sm-6 col-lg-12 mb-4">
                <Card
                  title="Karma"
                  text="Regularly evaluates our talent to ensure quality."
                  image={iconKarma}
                  color="warning"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 order-sm-2 order-lg-3 mb-4">
            <Card
              title="Calculator"
              text="Uses data from past projects to provide better delivery
              estimates"
              image={iconCalculator}
              color="primary"
            />
          </div>
        </div>
      </div>
    </>
  );
}
