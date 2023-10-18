import React from "react";
import { ItemProvider } from "../context/ItemContext";
import Item from "../components/Item";

function Main() {
  const itemData = {
    name: "Bread",
    qty: 20,
    price: "$3",
  };

  return (
    <ItemProvider itemData={itemData}>
      <div id="main" style={{ display: "flex", justifyContent: "center" }}>
        <Item />
      </div>
    </ItemProvider>
  );
}

export default Main;
