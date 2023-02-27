import React, { useState } from "react";

function SushiWallet({ onAddMoney }) {
  // state to keep track of the input field value
  const [value, setValue] = useState(0);

  // handler for submitting the form
  function handleSubmit(event) {
    event.preventDefault();
    // call the onAddMoney function with the current input value
    onAddMoney(value);
    // reset the input field value to 0
    setValue(0);
  }

  // handler for changing the input field value
  function handleChange(event) {
    // parse the input value as an integer and update the state
    const value = parseInt(event.target.value, 10);
    setValue(value);
  }

  // render the input form with the input field and button
  return (
    <form onSubmit={handleSubmit}>
      <input type="number" value={value} onChange={handleChange} />
      <button type="submit">Add $ to Budget</button>
    </form>
  );
}

export default SushiWallet;


//The SushiWallet component takes a prop called onAddMoney, which is a function that will be called when the "Add $ to Budget" button is clicked.

// The component uses state to keep track of the input field value. It defines a value state variable that starts at 0, 
// and a setValue function that can be used to update the value state.

// The component defines a handleSubmit function that is called when the form is submitted.
//  It prevents the default form submission behavior, and calls the onAddMoney function with the current value state as an argument. 
//  It then resets the value state to 0.