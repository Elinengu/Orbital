import React from "react";
import "./Sugestions.css";
import { Avatar } from "@mui/material";

function Sugestions() {
  return (
    <div className="suggestions">
      <div className="suggestions__title">Suggestions for you</div>
      <div className="suggestion__username">
        <div className="username__left">
          <span className="avatar">
            <Avatar>R</Avatar>
          </span>
          <div className="username__info">
            <span className="username">Eline</span>
            <span className="relation">New to Instagram</span>
          </div>
        </div>
        <div className="follow__button">Follow</div>
      </div>

      <div className="suggestion__username">
        <div className="username__left">
          <span className="avatar">
            <Avatar>R</Avatar>
          </span>
          <div className="username__info">
            <span className="username">Eline</span>
            <span className="relation">New to Instagram</span>
          </div>
        </div>
        <div className="follow__button">Follow</div>
      </div>

      <div className="suggestion__username">
        <div className="username__left">
          <span className="avatar">
            <Avatar>R</Avatar>
          </span>
          <div className="username__info">
            <span className="username">Eline</span>
            <span className="relation">New to Instagram</span>
          </div>
        </div>
        <div className="follow__button">Follow</div>
      </div>

      <div className="suggestion__username">
        <div className="username__left">
          <span className="avatar">
            <Avatar>R</Avatar>
          </span>
          <div className="username__info">
            <span className="username">Eline</span>
            <span className="relation">New to Instagram</span>
          </div>
        </div>
        <div className="follow__button">Follow</div>
      </div>
    </div>
  );
}

export default Sugestions;
