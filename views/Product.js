import React, { useEffect, useState } from "react";

function Product(props) {
  const [data, setData] = useState(props.products);

  console.log(data);
  return (
    <div>
      <h1>{data[0].P_name}</h1>
      <h1>{data[0].P_desc}</h1>
    </div>
  );
}

export default Product;
