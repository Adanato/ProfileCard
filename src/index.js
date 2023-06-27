import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return (
    <img src="rabbit.jpg" alt="rabbit picture" style={{ width: "442px" }}></img>
  );
}
function Intro() {
  return (
    <React.Fragment>
      <h2>Adam Nguyen</h2>
      <p>
        Hello I'm Adam. I like making coding projects to improve my skills.
        Rabbits are one of my favorite animals. This summer I'm learning React
        to complement my frontend skills. Hopefully I'll learn node.js and
        operate apis on the backend with an sql database.
      </p>
    </React.Fragment>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      <Skill name="HTML" />
      <Skill name="CSS" />
      <Skill name="JavaScript" />
      <Skill name="React" />
      <Skill name="Node.Js" />
      <Skill name="Express" />
    </ul>
  );
}

function Skill(props) {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const style = { backgroundColor: randomColor };

  return (
    <li className="skill" style={style}>
      {props.name}
    </li>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
