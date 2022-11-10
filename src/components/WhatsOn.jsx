import React, { useState } from "react";
import FilmInfo from "./FilmInfo";

const WhatsOn = () => {
  return (
    <div className="container whatsOnContainer">
      <div>
        <FilmInfo />
      </div>
      <div>
        <FilmInfo />
      </div>
      <div>
        <FilmInfo />
      </div>
      <div>
        <FilmInfo />
      </div>
    </div>
  );
};

export default WhatsOn;
