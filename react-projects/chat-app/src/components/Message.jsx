import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="message-info">
        <img
          src="https://images.unsplash.com/photo-1667822308503-78ae392157c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="user logo"
        />
        <span>just now</span>
      </div>
      <div className="message-content">
        <p>Hello</p>
        <img
          src="https://images.unsplash.com/photo-1667822308503-78ae392157c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="user logo"
        />
      </div>
    </div>
  );
};

export default Message;
