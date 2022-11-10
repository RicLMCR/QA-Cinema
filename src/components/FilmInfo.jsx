import React, { useState } from "react";

const FilmInfo = () => {
  return (
    <div className="container filmInfoContainer">
        <div className="filmInfoCol filmInfoCol1">
          <div className="filmInfoCol1Main">
            <img src="/"/>

          </div>
          <div className="filmInfoCol1Footer">
            <h2>Times here</h2>
            <h2>Times here</h2>
            <h2>Times here</h2>
          </div>
        </div>

        <div className="filmInfoCol filmInfoCol2">
          <div className="filmInfoCol2Header">
            <h2>Film Title</h2>
            <img src="/"/>
          </div>
          <div className="filmDescription">
            <p>Lorem ipsum dolor sit amet. Sit odit excepturi ab quae dicta non cumque ullam sit voluptatem illo? Et quia rerum et alias Quis vel dolores deleniti eum quia voluptatibus est culpa dolor aut voluptatem asperiores ab incidunt nobis. Aut perspiciatis velit qui reiciendis alias non voluptatum pariatur. Qui neque quos ut dicta magni ut fugit error.

At natus accusantium et magni nemo ab accusamus aperiam sed internos eaque et fugiat sunt. Qui illo nihil et obcaecati officia ut dolores voluptas et minima consequatur non doloremque vitae sit consequuntur officia et velit fugit.</p>
          </div>
          <div className="filmInfoCol2Footer">
            <button type="submit">Book</button>
          </div>
        </div>

    </div>
  );
};

export default FilmInfo;
