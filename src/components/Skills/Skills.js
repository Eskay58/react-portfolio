import React from "react";
import "../Skills/Skills.scss";

function Skills() {
  const cards = [
    {
      title: "成果",
      description: "成果の説明",
      // image: { cardImage1 },
      image: require("../../Images/firebase.jpg"),
    },
    {
      title: "成果",
      description: "成果の説明",
      image: require("../../Images/js.png"),
    },
    {
      title: "成果",
      description: "成果の説明",
      image: require("../../Images/react.png"),
    },
    {
      title: "成果",
      description: "成果の説明",
      // image: { cardImage1 },
      image: require("../../Images/firebase.jpg"),
    },
    {
      title: "成果",
      description: "成果の説明",
      image: require("../../Images/js.png"),
    },
    {
      title: "成果",
      description: "成果の説明",
      image: require("../../Images/react.png"),
    },
  ];

  return (
    <div id="skills_container">
      <div id="skills">
        {cards.map((card, i) => {
          return (
            <div className="card" key={i}>
              <img className="card_img" src={card.image} />
              {/* <div className="card_title">{card.title}</div> */}
              <div className="card_description">{card.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
