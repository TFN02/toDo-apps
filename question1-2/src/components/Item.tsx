import React from "react";
import { useItem } from "../context/ItemContext";

const Item = () => {
  const itemData = useItem();

  React.useEffect(() => {
    console.log("data", itemData);
  }, [itemData]);

  return (
    <div className="item">
      <span>Hello World</span>
    </div>
  );
}

export default Item;
