import React, { useState } from "react";
import AddItemButton from "./AddItemButton";
import Item from "./Item";

function Column({ title, items, columnKey, dispatch }) {
  return (
    <div className="column">
      <h2>{title}</h2>
      {/* Task 5: Render add item button and pass down dispatch with relevant infos */}
      <AddItemButton
        title={title}
        columnKey={columnKey}
        dispatch={dispatch}
      ></AddItemButton>
      {/* <button onClick={() => dispatch(title)}>Add Item</button> */}
      {/* Task 7: Render add item button and pass down dispatch with relevant infos */}
      <br />
      <br />
      {items
        ? items.map((item, index) => (
            <>
              <Item
                columnKey={columnKey}
                title={title}
                item={item}
                index={index}
                dispatch={dispatch}
                key={title + index}
              ></Item>
              <br />
              <br />
            </>
          ))
        : null}
    </div>
  );
}

export default Column;
