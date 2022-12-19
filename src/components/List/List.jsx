import React from "react";
import { data } from "../../data";
import Card from "../Card/Card";
import "./List.scss";
// import Card from "../Card/Card";
// import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
  //   const { data, loading, error } = useFetch(
  //     `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
  //       (item) => `&[filters][sub_categories][id][$eq]=${item}`
  //     )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  //   );

  return (
    <div className="list">
      {/* {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)} */}
      {data?.map((item) => (
        <Card item={item} key={item} />
      ))}
    </div>
  );
};

export default List;
