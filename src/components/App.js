import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]); // state for the sushi data
  const [wallet, setWallet] = useState(100); // state for the user's wallet

  // fetch sushi data from API and update state
  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((sushis) => {
        // add "eaten" property to each sushi object
        const updatedSushis = sushis.map((sushi) => {
          return { ...sushi, eaten: false };
        });
        setSushis(updatedSushis);
      });
  }, []);

  // handler for eating sushi
  function handleEatSushi(eatenSushi) {
    if (wallet >= eatenSushi.price) {
      // mark sushi as eaten and update state
      const updatedSushis = sushis.map((sushi) => {
        if (sushi.id === eatenSushi.id) return { ...sushi, eaten: true };
        return sushi;
      });

      setSushis(updatedSushis);
      // deduct sushi price from wallet and update state
      setWallet((wallet) => wallet - eatenSushi.price);
    } else {
      alert("Need more 💸");
    }
  }

  // handler for adding money to wallet
  function handleAddMoney(moreMoney) {
    setWallet((wallet) => wallet + moreMoney);
  }

  // get array of eaten sushis
  const eatenSushis = sushis.filter((sushi) => sushi.eaten);

  return (
    <div className="app">
      {/* pass sushi data and eat handler to sushi container */}
      <SushiContainer sushis={sushis} onEatSushi={handleEatSushi} />
      {/* pass wallet data and add handler to table */}
      <Table wallet={wallet} onAddMoney={handleAddMoney} plates={eatenSushis} />
    </div>
  );
}

export default App;



//the App component manages the state of the sushi data and the user's wallet. 
// It fetches the sushi data from the API and sets the initial state in the useEffect hook. It also defines handlers 
// for eating sushi and adding money to the wallet, which are passed as props to the SushiContainer and Table components.

// The SushiContainer component displays the sushi data and allows the user to eat sushi by clicking on it. When a sushi is eaten,
//  it calls the onEatSushi handler with the eaten sushi object.

// The Table component displays the user's wallet balance and a list of plates with the eaten sushis. 
// It also allows the user to add money to the wallet by entering an amount and clicking a button. When the button is clicked, 
// it calls the onAddMoney handler with the amount entered by the user.