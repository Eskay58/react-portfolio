import React from "react";
import "../Skills/Skills.scss";

function Skills() {
  const cards = [
    {
      title: "言語",
      description: "JavaScript / TypeScript / PHP / Java",
      // image: { cardImage1 },
      image: require("../../Images/firebase.jpg"),
      svg: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
    },
    {
      title: "フレームワーク",
      description: "Angular / React / Laravel / Spring",
      image: require("../../Images/js.png"),
      svg: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
    },
    {
      title: "AWS",
      description:
        "AWS Certified Cloud Practitioner / EC2 / ECS / S3 / Route53 / CloudWatch",
      image: require("../../Images/react.png"),
      svg: "M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z",
    },
    {
      title: "データベース",
      description: "MySQL / FireStore",
      image: require("../../Images/react.png"),
      svg: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125",
    },
    {
      title: "その他",
      description:
        "Tailwind CSS / Bootstrap / Firebase / Git / Github / Fusion 360",
      image: require("../../Images/js.png"),
      svg: "M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z",
    },
  ];

  return (
    <div id="skills_container">
      <div class="container px-5 mx-auto flex flex-wrap">
        <div class="flex flex-wrap -m-4">
          {cards.map((card, i) => {
            return (
              <div class="p-4 lg:w-1/2 md:w-1/2 w-full" kei={i}>
                <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                  <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d={card.svg}
                      />
                    </svg>
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-gray-900 text-lg font-bold title-font mb-3">
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
