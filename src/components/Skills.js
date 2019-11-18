import React from "react";

// Chart Hypertext
import Chart from "./Chart";
import Skillset from "./Skillset";

// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import ChangingProgressProvider from "./ChangingProgressProvider";

// Radial separators
import RadialSeparators from "./RadialSeparators";


const Skills = () => {
  return (
    <section className="skills pt-5" id="skills">
      <div className="container py-lg-5">
        <p className="paragraph">I have knowledge of below technologies</p>
        <h3 className="heading mb-sm-5 mb-4">Skills & Abilities</h3>
        <div className="row">
          <section id="circleBar">
            <div className="container">
              <div className="row">
                <Skillset name="PHP" level="Advanced" value="70"/>
                <Skillset name="MongoDB" level="Beginner" value="30"/>
                <Skillset name="AWS" level="Intermediate" value="45"/>
                <Skillset name="MySQL" level="Advanced" value="75"/>
                <Skillset name="GIT" level="Advanced" value="70"/>
                <Skillset name="HTML & CSS" level="Advanced" value="80"/>
                <Skillset name="ReactJS" level="Intermediate" value="50"/>
                <Skillset name="CakePHP" level="Expert" value="80"/>
                <Skillset name="JavaScript" level="Advanced" value="75"/>
                <Skillset name="Python" level="Beginner" value="20"/>
                <Skillset name="CodeIgniter" level="Expert" value="85"/>

              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Skills;
