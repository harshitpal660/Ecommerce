import React from "react";
import style from "../../Styles/MainSection.module.css";
import Filter from "./Filters/Filter";
import CardsContainer from "./CardsContainer/CardsContainer";
export default function MainSection() {
  return (
    <>
      <div id={style.MainSection}>
        <div className={style.FilterContainer}>
          <Filter />
        </div>
        <div className={style.CardsContainer}>
          <CardsContainer />
        </div>
      </div>
    </>
  );
}
