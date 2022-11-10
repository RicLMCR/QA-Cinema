import React, { useEffect, useState } from "react";
import FilmInfo from "./FilmInfo";

const WhatsOn = () => {
  const [filmInformation, setFilmInformation] = useState();

  //Fetch to DB
  const getFilms = async () => {
    console.log("getting films");
    try {
      const response = await fetch("http://localhost:4000/films", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      setFilmInformation(data);
      console.log(filmInformation);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("useeffect running");
    getFilms();
    console.log("useeffect:",filmInformation)
  }, []);

  return (
    
    <div className="container whatsOnContainer">
      {/* {filmInformation.map((film, index) => {
        <p key={index.id}>{film.title}</p>;
      })} */}
      {/*       
      <FilmInfo
          title={filmInformation[1].title}
          agecert={filmInformation[1].agecert}
          synopsis={filmInformation[1].synopsis}
          showtime1={filmInformation[1].showtimes[0]}
          showtime2={filmInformation[1].showtimes[1]}
          showtime3={filmInformation[1].showtimes[2]}
        /> */}
{/* 
<FilmInfo title={filmInformation[0].title}/> */}
    </div>
  );
};

export default WhatsOn;
