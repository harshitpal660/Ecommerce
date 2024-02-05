import React from "react";
import style from "../../../Styles/MainSection.module.css";
export default function Filter() {
  return (
    <>
      <div id={style.filterCategoryWrapper}>
        <div className={style.filterCategory}>
          <h3>Color</h3>
          <div className={style.filterValue}>
            <div className={style.checkBoxes}>
              <input type="checkbox" name="Red" value="Red" />
              <p>Red</p>
            </div>
            <div className={style.checkBoxes}>
              <input type="checkbox" name="Blue" value="Blue" />
              <p>Blue</p>
            </div>
            <div className={style.checkBoxes}>
              <input type="checkbox" name="Green" value="Green" />
              <p>Green</p>
            </div>
          </div>
        </div>
        <div className={style.filterCategory}>
          <h3>Gender</h3>
          <div className={style.filterValue}>
            <div className={style.checkBoxes}>
              <input type="checkbox" name="Red" value="Red" />
              <p>Men</p>
            </div>
            <div className={style.checkBoxes}>
              <input type="checkbox" name="Blue" value="Blue" />
              <p>Women</p>
            </div>
            <div className={style.checkBoxes}>
              <input type="checkbox" name="Green" value="Green" />
              <p>Other</p>
            </div>
          </div>
        </div>
        <div className={style.filterCategory}>
          <h3>Price</h3>
          <div className={style.filterValue}>
            <div className={style.checkBoxes}>
              <input type="checkbox" name="Red" value="Red" />
              <p>0-250</p>
            </div>
            <div className={style.checkBoxes}>
              <input type="checkbox" name="Blue" value="Blue" />
              <p>251-450</p>
            </div>
            <div className={style.checkBoxes}>
              <input type="checkbox" name="Green" value="Green" />
              <p>above 450</p>
            </div>
          </div>
        </div>
        <div className={style.filterCategory}>
          <h3>Type</h3>
          <div className={style.filterValue}>
            <div className={style.checkBoxes}>
              <input type="checkbox" name="Red" value="Red" />
              <p>Polo</p>
            </div>
            <div className={style.checkBoxes}>
              <input type="checkbox" name="Blue" value="Blue" />
              <p>Hoodie</p>
            </div>
            <div className={style.checkBoxes}>
              <input type="checkbox" name="Green" value="Green" />
              <p>Basic</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
