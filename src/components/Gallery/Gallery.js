import React from "react";
import "../Gallery/Gallery.scss";

function Gallery() {
  const cards = [
    {
      title: "Portfolio",
      description:
        "当ウェブサイトです。Reactを用いてポートフォリオサイトを作成しました",
      skill: "スキル: React, Github Pages",
      userId: "",
      password: "",
      image: require("../../Images/firebase.jpg"),
      url: "https://react-pokemon-app-9d86a.web.app/",
    },
    {
      title: "Pokedex",
      description: "React, PokeAPIを用いてポケモン図鑑を作成しました",
      skill: "スキル: React,Firebase",
      userId: "",
      password: "",
      image: require("../../Images/firebase.jpg"),
      url: "https://react-pokemon-app-9d86a.web.app/",
    },
    {
      title: "Angular Chat",
      description:
        "Angularを用いてチャットアプリケーションを作成しました。認証機能、チャット内容のリアルタイム反映が可能です。",
      skill: "スキル: Angular, Bootstrap, Firebase, Firestore",
      userId: "E-mail: eskay058@gmail",
      password: "Password: password123",
      image: require("../../Images/firebase.jpg"),
      url: "https://angularchat-61281.web.app/account/login",
    },
    {
      title: "【ユーザー用】ECサイト",
      description:
        "Laravelの認証機能を利用し、管理者、オーナー、ユーザーと3つのログインが可能です。 Bladeコンポーネント, Stripe決済, 画像アップロードなどを実装しています。",
      skill: "スキル: Laravel, Tailwindcss, AWS",
      userId: "E-mail: test@test.com",
      password: "Password: password123",
      image: require("../../Images/firebase.jpg"),
      url: "http://mlshopsk.net/login",
    },
    {
      title: "【オーナー用】ECサイト",
      description:
        "Laravelの認証機能を利用し、管理者、オーナー、ユーザーと3つのログインが可能です。 Bladeコンポーネント, Stripe決済, 画像アップロードなどを実装しています。",
      skill: "スキル: Laravel, Tailwindcss, AWS",
      userId: "E-mail: test1@test.com",
      password: "Password: password123",
      image: require("../../Images/firebase.jpg"),
      url: "http://mlshopsk.net/owner/login",
    },
    {
      title: "【管理者用】ECサイト",
      description:
        "Laravelの認証機能を利用し、管理者、オーナー、ユーザーと3つのログインが可能です。 Bladeコンポーネント, Stripe決済, 画像アップロードなどを実装しています。",
      skill: "スキル: Laravel, Tailwindcss, AWS",
      userId: "E-mail: test@test.com",
      password: "Password: password123",
      image: require("../../Images/firebase.jpg"),
      url: "http://mlshopsk.net/admin/login",
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
