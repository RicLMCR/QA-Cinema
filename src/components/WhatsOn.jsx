import React, { useState } from "react";
import FilmInfo from "./FilmInfo";

const WhatsOn = () => {
  const [filmInformation, setMyFilmInformation] = useState({
    films: [
      {
        id: 1,
        title: "fortropolis",
        shortname: "fortropolis",
        synopsis:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam explicabo quibusdam perferendis ipsa nisi doloremque quae eaque voluptas incidunt, adipisci mollitia, facere animi voluptates fugit ad impedit inventore temporibus sit quisquam cupiditate rerum a? Illum!",
        showtimes: ["10:00", "15:00", "18:30"],
        agecert: "PG",
        nowShowingSrcset: {
          small: "fortropolis_la2wkj,w200.png",
          medium: "fortropolis_la2wkj,w833.png",
          large: "fortropolis_la2wkj,w1181.png",
          xlarge: "fortropolis_la2wkj,w1400.png",
        },
        whatsOnSrcset: {
          small: "fortropolis_r38okt,w200.png",
          medium: "fortropolis_r38okt,w757.png",
          large: "fortropolis_r38okt,w1112.png",
          xlarge: "fortropolis_r38okt,w1400.png",
        },
      },
    ],
  });

  return (
    <div className="container whatsOnContainer">
      <div>
        <FilmInfo
          title={filmInformation.films[0].title}
          synopsis={filmInformation.films[0].synopsis}
          showtime1={filmInformation.films[0].showtimes[0]}
          showtime2={filmInformation.films[0].showtimes[1]}
          showtime3={filmInformation.films[0].showtimes[2]}
        />
      </div>
    </div>
  );
};

export default WhatsOn;
