import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="search-form">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="user-chat">
        <img
          src="https://images.unsplash.com/photo-1667822308503-78ae392157c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="user logo"
        />
        <div className="user-chat-info">
          <span>John</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
