import React from "react";
import SushiWallet from "./SushiWallet";

function Table({ wallet, onAddMoney, plates = [] }) {
  // create an array of empty plate components
  const displayPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  // render the table with the wallet balance and empty plates
  return (
    <>
      <h1 className="remaining">You have: ${wallet} remaining!</h1>
      <div className="table">
        <div className="stack">{displayPlates}</div>
        <SushiWallet onAddMoney={onAddMoney} />
      </div>
    </>
  );
}

export default Table;


//The Table component takes three props: wallet, which is the current balance of the wallet; onAddMoney, 
// which is a function that will be called when money is added to the wallet; and plates, which is an array of sushi plates that have been eaten.

// The component creates an array of empty plate components based on the length of the plates array. Each empty plate is positioned vertically using CSS.

// The component renders the table with the wallet balance and empty plates. 
// It displays the wallet balance with a heading, and the empty plates using a div with the stack class.
//  It also renders a SushiWallet component with the onAddMoney function as a prop, which allows the user to add money to the wallet. 
//  The SushiWallet component is positioned below the empty plates using CSS.