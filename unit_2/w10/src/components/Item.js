import React, { useReducer } from 'react';

function voteReducer(state, action) {
  switch (action) {
    case "UPVOTE":
      return state += 1
    default: return state;
  }
}

function Item({ title, item, index, columnKey, dispatch }) {
  
  const [vote, voteDispatch] = useReducer(voteReducer, 0);
  
  return (
    // Task 8): Render Item
    <>
        <h4>{item} (votes {vote})</h4>
        <br/>
        {/* Task 8a): Render button with upvoteItem dispatch */}
        <button onClick={() => voteDispatch("UPVOTE")}>Upvote</button>
        {/* Task 8b): Render button with deleteeItem dispatch */}
        <button onClick={() => dispatch({type:"DELETE", value:title, item: item})}>Delete</button>
    </>
  );
}

export default Item;