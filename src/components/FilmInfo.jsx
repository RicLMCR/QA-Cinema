import React, { useState } from "react";

const FilmInfo = (props) => {

  return (
    <div className="container filmInfoContainer">
      <div className="filmInfoCol filmInfoCol1">
        <div className="filmInfoCol1Main">
          <img src="/" />
        </div>
        <div className="filmInfoCol1Footer">
          <h4>{props.showtime1}</h4>
          <h4>{props.showtime2}</h4>
          <h4>{props.showtime3}</h4>
        </div>
      </div>

      <div className="filmInfoCol filmInfoCol2">
        <div className="filmInfoCol2Header">
          <h2>{props.title}</h2>
          <img src="/" />
        </div>
        <div className="filmDescription">
          <p>
            {props.synopsis}
          </p>
        </div>
        <div className="filmInfoCol2Footer">
          <button type="submit">Book</button>
        </div>
      </div>
    </div>
  );
};

export default FilmInfo;
