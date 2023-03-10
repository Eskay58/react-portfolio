import React from "react";
import "../Gallery/Gallery.scss";

function Gallery() {
  const cards = [
    {
      title: "ポートフォリオサイト",
      description:
        "当ウェブサイトです。Reactを用いてポートフォリオサイトを作成しました。",
      skill: "React, Tailwindcss, Github Pages",
      userId: "",
      password: "",
      image: require("../../Images/Portfolio.png"),
      url: "#",
    },
    {
      title: "チャットアプリケーション",
      description:
        "Angularを用いてチャットアプリケーションを作成しました。認証機能、チャット内容のリアルタイム反映が可能です。",
      skill: "Angular, Bootstrap, Firebase, Firestore",
      userId: "E-mail: eskay058@gmail.com",
      password: "Password: password123",
      image: require("../../Images/angularchat2.png"),
      url: "https://angularchat-61281.web.app/account/login",
    },
    {
      title: "ポケモン図鑑",
      description: "React, PokeAPIを用いてポケモン図鑑を作成しました。",
      skill: "React, Firebase",
      userId: "",
      password: "",
      testCard: "",
      image: require("../../Images/pokedex.png"),
      url: "https://react-pokemon-app-9d86a.web.app/",
    },
    {
      title: "【ユーザー用】ECサイト",
      description:
        "Laravelの認証機能を利用し、管理者、オーナー、ユーザーと3つのログインが可能です。 商品の検索、カートへの追加、Stripeを使用した、デモ決済が可能です。",
      skill: "Laravel, Tailwindcss, MySQL, AWS",
      userId: "E-mail: test@test.com",
      password: "Password: password123",
      testCard: "Demo Card: 4242 4242 4242 4242",
      image: require("../../Images/mlshop-user.png"),
      url: "http://mlshopsk.net/login",
    },
    {
      title: "【オーナー用】ECサイト",
      description:
        "Laravelの認証機能を利用し、管理者、オーナー、ユーザーと3つのログインが可能です。店舗情報の編集、画像アップロード、商品在庫の管理が可能です。",
      skill: "Laravel, Tailwindcss, MySQL, AWS",
      userId: "E-mail: test1@test.com",
      password: "Password: password123",
      image: require("../../Images/mlshop-owner.png"),
      url: "http://mlshopsk.net/owner/login",
    },
    {
      title: "【管理者用】ECサイト",
      description:
        "Laravelの認証機能を利用し、管理者、オーナー、ユーザーと3つのログインが可能です。オーナー権限の新規登録、編集、削除が可能です。",
      skill: "Laravel, Tailwindcss, MySQL, AWS",
      userId: "E-mail: test@test.com",
      password: "Password: password123",
      image: require("../../Images/mlshop-admin.png"),
      url: "http://mlshopsk.net/admin/login",
    },
  ];

  return (
    <div id="gallery_container">
      <div id="galleries">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            {cards.map((card, i) => {
              return (
                <div className="p-4 md:w-1/2" key={i}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={card.image}
                      alt="blog"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        タイトル
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {card.title}
                      </h1>
                      <p className="leading-relaxed mb-3 text-sm">
                        {card.description}
                      </p>
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        スキル
                      </h2>
                      <p className="leading-relaxed mb-3 text-sm">
                        {card.skill}
                      </p>
                      {card.userId ? (
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                          テスト用アカウント
                        </h2>
                      ) : (
                        <></>
                      )}

                      <p className="leading-relaxed mb-3 text-sm">
                        {card.userId}
                        <br />
                        {card.password}
                      </p>

                      <p className="leading-relaxed mb-3 text-sm">
                        {card.testCard}
                      </p>

                      <div className="flex items-center flex-wrap ">
                        <a
                          href={card.url}
                          target="_blank"
                          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          アクセス
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
