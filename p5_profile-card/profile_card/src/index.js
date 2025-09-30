import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "React",
    level: "advanced",
    color: "lightblue",
  },
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "orange",
  },
  {
    skill: "Nodejs",
    level: "intermediate",
    color: "yellow",
  },
  {
    skill: "Javascript",
    level: "advanced",
    color: "lightgreen",
  },
  {
    skill: "Data Structures",
    level: "advanced",
    color: "orangered",
  },
  {
    skill: "System Design",
    level: "beginner",
    color: "pink",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return <img className="avatar" src="/profile_card.jpg" alt="Pulkit Sharma" />;
}
function Intro() {
  return (
    <div>
      <h1>Pulkit Sharma </h1>
      <p>
        Full Stack Web Developer with 5 years of professional experience. I
        practice Heartfulness meditation, which helps me stay calm, focused, and
        become a better developer.
      </p>
    </div>
  );
}
function Skill({ color, skill, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      {/* <span>{setEmoji(level)}</span> */}
      <span>
        {level === "beginner" ? "🙂" : level === "advanced" ? "💪" : "👍"}
      </span>
    </div>
  );
}

// function setEmoji(level) {
//   return level === "beginner" ? "🙂" : level === "advanced" ? "💪" : "👍";
// }

function SkillList() {
  const skillLength = skills.length;
  return skillLength > 0 ? (
    <div className="skill-list">
      {skills.map((item) => (
        <Skill skill={item.skill} color={item.color} level={item.level} />
      ))}
    </div>
  ) : (
    <p>No Skills</p>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
