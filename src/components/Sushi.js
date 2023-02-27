import React from "react";

function Sushi({ sushi, onEatSushi }) {
  // destructure the sushi object into individual properties
  const { name, img_url, price, eaten } = sushi;

  // handler for eating sushi
  function handleClick() {
    if (!eaten) {
      // call onEatSushi function with the eaten sushi object
      onEatSushi(sushi);
    } else {
      alert("Can't eat an empty plate, bud");
    }
  }

  // render the sushi plate and details
  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {eaten ? null : <img src={img_url} alt={name} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;


//The Sushi component takes a prop called sushi, which is an object that contains the sushi item data. It also takes a prop called onEatSushi,
//  which is a function that will be called when the sushi is eaten.

// The component uses destructuring to extract the individual properties of the sushi object, such as the name, 
// image URL, price, and whether the sushi has been eaten.

// The component defines a handleClick function that is called when the sushi plate is clicked. If the sushi has not been eaten, 
// it calls the onEatSushi function with the sushi object as an argument. If the sushi has already been eaten, it displays an alert message.

// The component renders the sushi plate and details. If the sushi has been eaten, it displays an empty plate. Otherwise, 
// it displays an image of the sushi. The component also displays the name and price of the sushi.