import React, { useEffect, useState } from "react";
import profileImage from "../../Images/profile.jpg";
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

      <section className="text-gray-600 body-font ">
        <div className="container mx-auto flex px-5 md:flex-row-reverse flex-col items-center max-w-screen-lg">
          <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-4 md:mb-0 items-center text-center">
            <img
              id="profile_img"
              src={profileImage}
              className="object-cover object-center rounded-3xl"
            />
            {/* <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            /> */}
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pr-8 md:pr-8 flex flex-col md:items-start md:text-left mb-4 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Seiya
            </h1>
            <div className="mb-8 leading-relaxed">
              <p className="profile-text mb-3">
                {birthdate.year}年{birthdate.month}月{birthdate.day}日生まれ
                {age}歳
              </p>
              <p className="profile-text mb-3">{position}</p>
              <p className="mb-3">
                機械工学科を卒業後、メーカーにて機械エンジニアを2年経験したのち、ものづくりの柔軟性に魅力を感じてWebエンジニアに転向しました。
                <br />
                主にフロントエンドを担当しており、更なるスキルアップを目指して転職活動中です。
              </p>
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                Contact
              </h2>
              <p>E-mail: eskay058@gmail.com</p>
            </div>
            <div id="socials" className="flex justify-center">
              <a
                href="https://github.com/Eskay58/"
                target="_blank"
                className="social_icon"
              >
                <svg
                  width="98"
                  height="96"
                  viewBox="0 0 98 96"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                    fill="#24292f"
                  />
                </svg>
              </a>
            </div>
            {/* <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div> */}
          </div>
          {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"> */}
        </div>
      </section>
      <ul className="mt-24">
        <li>#fix header</li>
        <li>#skills style</li>
        <li>add image</li>
        <li>#fix profile text</li>
        <li>chat リアルタイムの方式</li>
        <li>class名 ClassNameへ</li>
        <li>github pages deploy</li>
        <li>#profile選択時だけ横にずれる</li>
        <li>#pokedex カード一個足りない</li>
      </ul>
    </div>
  );
}

export default Profile;
