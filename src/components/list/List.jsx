import React from "react";
import "./list.css";
import Userinfo from "./Userinfo/Userinfo";
import ChatList from "./chatList/ChatList";
const List = () => {
  return (
    <div className="list">
      <Userinfo />
      <ChatList />
    </div>
  );
};

export default List;
