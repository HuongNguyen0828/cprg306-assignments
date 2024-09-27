"use client"

import { useState } from "react";

export default function NewItem() 
{

  // Count
  const [quantity, setQuantity] = useState(1);
  // Handle button Red and Blue separately
  const [red, setRed] = useState(true); // Initially value of DISABLE RedButton = true
  const [blue, setBlue] = useState(false); // Initially value of DISABLE BlueButton = False

  let increment;
  let decrement;


  // Disable - when quantity = 0, otherwise, enable
  const controlRed = function (number) {

    number === 1 ? setRed(true) : setRed(false);
   
  } ;

  // Disable when quantity = 20, otherwise, enable
  const controlBlue =function (number) {
    number === 20 ? setBlue(true) : setBlue(false);
  } ;

  // Increment function: MAIN EVENT Handler 
  if (quantity <20) {
    increment = function() 
      {
        // Calling set value
        setQuantity(quantity + 1);

        // Calling both control Blue and Red
        controlRed(quantity + 1);
        controlBlue(quantity + 1);

      }
      
    }
    
    // Decrement function: MAIN EVENT Handler 
  if (quantity > 1 ) {
    // Enable - button
    decrement = () => 
      {
        setQuantity(quantity - 1);
      

        // Calling both control Blue and Red
        controlRed(quantity - 1);
        controlBlue(quantity - 1);
      
      }
  }
 
  return (
      <div className="flex w-52 gap-3 border-2 m-auto mt-5 p-3 text-center">
        <p className="flex-1">{quantity}</p>
        <button onClick={increment }  disabled={blue} className="flex-1  bg-blue-500 rounded  disabled:bg-slate-400 active:bg-blue-300" >+</button>
        <button onClick={decrement}  disabled={red} className="flex-1 bg-red-700 rounded disabled:bg-slate-400 active:bg-red-300">-</button>
      </div>
    );
  
}