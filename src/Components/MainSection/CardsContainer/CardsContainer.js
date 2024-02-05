import React from "react";
import { useEffect,useState } from "react";
// import style from "../../../Styles/MainSection.module.css";
import Card from "./Card";
export default function CardsContainer() {
    const [data,setData] = useState([]);
  useEffect(() => {
    fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setData(data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
        {data.map((item)=>{
            return <Card item={item} key={item.id}/>
        })}
    </>
  );
}
