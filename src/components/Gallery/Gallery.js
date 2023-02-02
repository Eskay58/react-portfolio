import React from "react";
import "../Gallery/Gallery.scss";

function Gallery() {
  const cards = [
    {
      title: "Pokedex",
      description: "Reactを用いてポケモン図鑑を作成しました",
      skill: "スキル: React,Firebase",
      userId: "",
      password: "",
      image: require("../../Images/firebase.jpg"),
      url: "https://react-pokemon-app-9d86a.web.app/",
    },
    {
      title: "成果",
      description: "成果の説明",
      image: require("../../Images/js.png"),
    },
  ];

  return (
    <div id="gallery_container">
      <div id="galleries">
        {cards.map((card, i) => {
          return (
            <a href={card.url} className="card" key={i} target="_blank">
              <img className="card_img" src={card.image} />
              <div className="card_title">{card.title}</div>
              <div className="card_description">
                <p>
                  {card.description}
                  <br />
                  {card.skill}
                  <br />
                  {card.userId}
                  <br />
                  {card.password}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
