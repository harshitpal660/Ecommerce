import React from "react";
import SearchBar from "../Components/Navigation/SearchBar";
import NavBar from "../Components/Navigation/NavBar";
import MainSection from "../Components/MainSection/MainSection";

export default function HomePage() {
  return (
    <>
      <div id="HomePage">
        <div style={{position:"fixed",top:0,width:"100%"}}>
          <NavBar />
          <SearchBar />
        </div>

        <MainSection />
      </div>
    </>
  );
}
