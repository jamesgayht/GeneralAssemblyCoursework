import React, { useReducer, useState } from "react";
import "./App.css";
import Column from "./components/Column";

const titles = ["What went well", "What can be improved", "Action items"];
// Task 1: Create initial state
const initialState = [
  // Code goes here
  { title: titles[0], items: [] },
  { title: titles[1], items: [] },
  { title: titles[2], items: [] },
];

let itemPrompt = "";

// Task 2: Define reducer function
function reducer(state, action) {
  switch (action.type) {
    // Code goes here
    case "ADD ITEM":
      switch (action.value) {
        case titles[0]:
          itemPrompt = prompt(`Add item to "${action.value}" column.`);
          if (!!itemPrompt) state[0].items.push(itemPrompt);
          console.info(state);
          return [...state];

        case titles[1]:
          itemPrompt = prompt(`Add item to "${action.value}" column.`);
          if (!!itemPrompt) state[1].items.push(itemPrompt);
          return [...state];

        case titles[2]:
          itemPrompt = prompt(`Add item to "${action.value}" column.`);
          if (!!itemPrompt) state[2].items.push(itemPrompt);
          return [...state];

        default:
          return state;
      }

    case "DELETE":
      switch (action.value) {
        case titles[0]:
          console.info("in here!")
          state[0].items = state[0].items.filter(item => item !== action.item);
          return [...state];

        case titles[1]:
          state[1].items = state[1].items.filter(item => item !== action.item);
          return [...state];

        case titles[2]:
          state[2].items = state[2].items.filter(item => item !== action.item);
          return [...state];

        default:
          return state;
      }

    default:
      return state;
  }
}

function App() {
  // Task 3: Set up state with the use reducer hook
  // code goes here
  const [stateObj, dispatch] = useReducer(reducer, initialState);
  console.info("stateObj in app >>> ", stateObj);
  return (
    <div className="App">
      <h1>Retrospective Board</h1>
      <div className="columns">
        {/* Task 4: Render column components and pass state,dispatch down */}
        {/* Code goes here*/}
        {stateObj.map((obj, index) => (
          <Column
            key={index}
            columnKey={index}
            title={obj.title}
            items={obj.items}
            dispatch={dispatch}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
