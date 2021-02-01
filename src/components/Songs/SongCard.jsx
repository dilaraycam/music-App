import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import "./SongCard.css";

function SongCard(props) {
  return (
    <div className="card mb-3" id="cardPosition">
      <ReactPlayer
        url={props.url}
        className="react-player"
        width="100%"
        height="100%"
      />

      <div className="card-body" id="cardFont">
        <h5 className="card-title" id="cardFont">
          {props.title}
        </h5>
        <p className="card-text" id="cardFont">
          {props.detail}
        </p>
        <Link
          className="btn btn-primary"
          id="buttonFont"
          to={`/allsongs/${props.id}`}
        >
          Detail
        </Link>
      </div>
    </div>
  );
}

export default SongCard;
