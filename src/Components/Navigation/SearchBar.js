import React, { useState } from "react";
import styles1 from "../../Styles/Navbar.module.css";
import styles2 from "../../Styles/MainSection.module.css";
import search from "../../Images/search.png";
import filter from "../../Images/filter.png";

import Filter from "../MainSection/Filters/Filter";
export default function SearchBar() {
  const [isFilterClicked,setIsFilterClicked] = useState(false);
  return (
    <>
      <div className={styles1.searchBarWrapper}>
        <div>
          <div className={styles1.searchIconWrapper}>
            <img src={search} alt="search icon"></img>
          </div>

          <input
            type="text"
            placeholder="Search"
            className={styles1.searchBar}
          ></input>
        </div>
        <div style={{flex:"1",justifyContent:"right",cursor:"pointer"}} onClick={()=>setIsFilterClicked(!isFilterClicked)}>
          <div id={styles2.filterWrappper}>
            <img src={filter} alt="filter"></img>
          </div>
        </div>
      </div>
      {isFilterClicked && <div className={styles1.FilterContainer}>
          <Filter/>
        </div>}
    </>
  );
}
