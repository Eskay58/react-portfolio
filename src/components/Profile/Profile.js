import React, { useEffect, useState } from "react";
import reactImage from "../../Images/react.png";
import jsImage from "../../Images/js.png";
import firebaseImage from "../../Images/firebase.jpg";
import profileImage from "../../Images/sibainu.jpg";
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
      <img
        id="profile_img"
        alt=""
        src={profileImage}
        className="profile-image"
      />
      <h2>Seiya</h2>
      <div id="profile_description">
        <p className="profile-text">
          {birthdate.year}年{birthdate.month}月{birthdate.day}日生まれ
          {age}歳
        </p>
        <p className="profile-text">{position}</p>
        <div id="profile_intro" className="profile_text">
          <p>
            自己紹介文
            <br />
            自己紹介文
          </p>
        </div>
      </div>
      <div id="socials">
        <a href="SNSリンク" className="social_icon">
          <img src="#" alt="" />
        </a>
        <a href="SNSリンク" className="social_icon">
          <img src="#" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Profile;
