import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, onEatSushi }) {
  // state to keep track of which sushi items to display
  const [sushiIndex, setSushiIndex] = useState(0);

  // array of sushi components to display
  const sushiComponents = sushis
    .slice(sushiIndex, sushiIndex + 4)
    .map((sushi) => (
      <Sushi key={sushi.id} sushi={sushi} onEatSushi={onEatSushi} />
    ));

  // handler for "More sushi!" button
  function handleClickMore() {
    // increment the sushi index by 4, wrapping back around to the beginning if necessary
    setSushiIndex((sushiIndex) => (sushiIndex + 4) % sushis.length);
  }

  // render the sushi container with sushi components and the "More sushi!" button
  return (
    <div className="belt">
      {sushiComponents}
      <MoreButton onClickMore={handleClickMore} />
    </div>
  );
}

export default SushiContainer;


//The SushiContainer component takes a prop called sushis, which is an array of sushi items, and a prop called onEatSushi,
//  which is a function that will be called when a sushi is eaten.

// The component uses state to keep track of which sushi items to display. It defines a sushiIndex state variable 
// that starts at 0, and a setSushiIndex function that can be used to update the sushiIndex state.

// The component creates an array of sushi components by slicing the sushis array based on the current sushiIndex state, 
// and mapping each sushi item to a Sushi component with the onEatSushi function as a prop.

// The component defines a handleClickMore function that is called when the "More sushi!" button is clicked. 
// It increments the sushiIndex state by 4, wrapping back around to the beginning of the sushis array if necessary.

// The component renders the sushi container with the sushi components and the "More sushi!" button. 
// The sushi components are displayed based on the current sushiIndex state.