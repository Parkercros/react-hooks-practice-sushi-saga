import React from "react";

function MoreButton({ onClickMore }) {
  // render a button with an "onClick" handler
  return <button onClick={onClickMore}>More sushi!</button>;
}

export default MoreButton;

//The MoreButton component takes a prop called onClickMore, which is a function that will be called 
// when the button is clicked. When the button is clicked, it triggers the onClickMore function that is passed as a prop.