import React from "react";

function AddItemButton({ title, columnKey, dispatch }) {
  /* Task 6: Define add item button with proper dispatch function arguments */

  const addItem = () => {
    // Code goes here, use the dispatch function.
    dispatch({ type: "ADD ITEM", value: title });
  };

  return <button onClick={addItem}>Add Item</button>;
}

export default AddItemButton;
