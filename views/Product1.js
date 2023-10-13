import React, { useEffect, useState } from "react";
import axios from "axios";

function Product1() {
  const [data, setData] = useState([]);
  var val;
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/product/api/products"
      );
      setData(response.data);
      console.log("response DATA:");
      console.log(response.data);
      val = response.data;
    } catch (err) {
      console.error(err);
    }
  };
  fetchData();
  console.log("DATA:");
  console.log(data);
  console.log("response DATA:");
  console.log(val);
  return <div>{data.length ? <div>test</div> : <div>not found</div>}</div>;
}

export default Product1;
