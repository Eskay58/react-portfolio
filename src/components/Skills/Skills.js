import React from "react";
import "../Skills/Skills.scss";

function Skills() {
  const cards = [
    {
      title: "言語",
      description: "JavaScript / TypeScript / PHP / Java",
      // image: { cardImage1 },
      image: require("../../Images/firebase.jpg"),
    },
    {
      title: "フレームワーク",
      description: "Angular / React / Laravel / Spring",
      image: require("../../Images/js.png"),
    },
    {
      title: "AWS",
      description:
        "AWS Certified Cloud Practitioner / EC2 / ECS / S3 / Route53 / CloudWatch",
      image: require("../../Images/react.png"),
    },
    {
      title: "データベース",
      description: "MySQL / FireStore",
      image: require("../../Images/react.png"),
    },
    {
      title: "その他",
      description:
        "Tailwind CSS / Bootstrap / Firebase / Git / Github / Fusion 360",
      image: require("../../Images/js.png"),
    },
  ];

  return (
    <div id="skills_container">
      <div class="container px-5 mx-auto flex flex-wrap">
        <div class="flex flex-wrap -m-4">
          {cards.map((card, i) => {
            return (
              <div class="p-4 lg:w-1/2 md:w-full" kei={i}>
                <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                  <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-8 h-8"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                      {card.title}
                    </h2>
                    <p class="leading-relaxed text-base">{card.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
