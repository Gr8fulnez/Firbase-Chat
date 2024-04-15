import React from "react";
import "./userInfo.css";
import { useUserStore } from "../../../lib/userStore";

const Userinfo = () => {

  const { currentUser } = useUserStore();

  console.log(currentUser)
  return (
    <div className="userInfo">
      <div className="user">
        <img src={currentUser.avatar || "./avatar.png"} alt="" />
        <p>{currentUser.username}</p>
      </div>
      <div className="icons">
        <img src="./more.png" alt="" />
        <img src="./video.png" alt="" />
        <img src="./edit.png" alt="" />
      </div>
    </div>
  );
};

export default Userinfo;
