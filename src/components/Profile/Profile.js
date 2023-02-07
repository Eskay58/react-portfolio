import React, { useEffect, useState } from "react";
import reactImage from "../../Images/react.png";
import jsImage from "../../Images/js.png";
import firebaseImage from "../../Images/firebase.jpg";
import profileImage from "../../Images/js.png";
import githubImage from "../../Images/js.png";
import "./Profile.scss";

function Profile() {
  const birthdate = {
    day: 8,
    month: 5,
    year: 1996,
  };
  const [age, setAge] = useState(0);
  const [position, setPosition] = useState("");
  //   let age = 0;
  //   let position = "";

  useEffect(() => {
    initAge();
    initPosition();
  }, [age]);

  const initAge = () => {
    let _birthdate = new Date(
      birthdate.year,
      birthdate.month - 1,
      birthdate.day
    );
    let today = new Date();
    let _age = today.getFullYear() - _birthdate.getFullYear();
    if (
      today.getMonth() < _birthdate.getMonth() ||
      (today.getMonth() === _birthdate.getMonth() &&
        today.getDate() < _birthdate.getDate())
    ) {
      _age--;
    }
    // age = _age;
    setAge(_age);
  };

  const initPosition = () => {
    let grade = age - 22;
    let position = "社会人" + grade + "年目";
    setPosition(position);
  };

  return (
    <div id="profile_container">
      {/* <div>
        <img
          id="profile_img"
          src={profileImage}
          className="profile-image mb-3"
        />
        <h2 className="text-3xl mb-6">Seiya</h2>
        <div id="profile_description">
          <p className="profile-text mb-3">
            {birthdate.year}年{birthdate.month}月{birthdate.day}日生まれ
            {age}歳
          </p>
          <p className="profile-text mb-3">{position}</p>
          <div id="profile_intro" className="profile_text">
            <p className="mb-3">
              自己紹介文
              <br />
              自己紹介文
            </p>
          </div>
          <div>E-mail: eskay058@gmail.com</div>
        </div>
        <div id="socials">
          <a href="SNSリンク" className="social_icon">
            <img src="#" alt="" />
          </a>
          <a
            href="https://github.com/Eskay58/"
            target="_blank"
            className="social_icon"
          >
            <img src={githubImage} alt="" />
          </a>
        </div>
      </div> */}

      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 md:flex-row-reverse flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-4 md:mb-0 items-center text-center">
            <img
              id="profile_img"
              src={profileImage}
              className="profile-image"
              class="object-cover object-center rounded"
            />
            {/* <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            /> */}
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pr-8 md:pr-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Seiya
            </h1>
            <p class="mb-8 leading-relaxed">
              <p className="profile-text mb-3">
                {birthdate.year}年{birthdate.month}月{birthdate.day}日生まれ
                {age}歳
              </p>
              <p className="profile-text mb-3">{position}</p>
              <p className="mb-3">
                自己紹介文
                <br />
                自己紹介文
              </p>
              <p>E-mail: eskay058@gmail.com</p>
            </p>
            <div id="socials" className="flex justify-center">
              <a
                href="https://github.com/Eskay58/"
                target="_blank"
                className="social_icon"
              >
                <img src={githubImage} alt="" />
              </a>
            </div>
            {/* <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div> */}
          </div>
          {/* <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"> */}
        </div>
      </section>
      <ul>
        <li>#fix header</li>
        <li>skills style</li>
        <li>add image</li>
        <li>fix profile text</li>
        <li>github pages deploy</li>
        <li>#profile選択時だけ横にずれる</li>
        <li>pokedex カード一個足りない</li>
      </ul>
    </div>
  );
}

export default Profile;
