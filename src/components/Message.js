import React from "react";

const Message = ({ message }) => {
  return (
    <div className="message">
      <div className="messageInfo">
        <img src="" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>message</p>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Message;
