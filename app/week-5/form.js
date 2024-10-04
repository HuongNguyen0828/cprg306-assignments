"use client"

import NewItem from "./newItem.js";

import { useState } from "react";

export default function Form() 
{
  
  const [name, setName] = useState("");
  // Handle button Red and Blue separately
  const [category, setCategory] = useState("Produce");  
  
  // Count
  //Count
  const [quantity, setQuantity] = useState(1);
  // Handle button Red and Blue separately
  const [red, setRed] = useState(true); // Initially value of DISABLE RedButton = true
  const [blue, setBlue] = useState(false); // Initially value of DISABLE BlueButton = False

  let increment;
  let decrement;
  // Red: Disable - when quantity = 0, otherwise, enable
  const controlRed = function (number) {
    number === 1 ? setRed(true) : setRed(false);
  } ;
  // Blue Disable when quantity = 20, otherwise, enable
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
  

  // When submit
  const handleSubmit = (event) => {
    // Prevent form to be submitted
    event.preventDefault();

    // Item object
    const item = {
        name, 
        quantity,
        category
    };

    // Alert object
    alert(`Added item: ${item.name}, quantity: ${item.quantity}, category: ${item.category}`);
    // Print item object to console log
    console.log(item);

   // Reset all field
   setName("");
   setQuantity(1);
   setCategory("Produce");
   setBlue(false);
   setRed(true);

  };
 
  return (
    <main>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 m-2 w-96 h-50 mx-auto p-3 bg-blue-300">
            <input 
                className="border rounded h-12 p-2" 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Item name" 
                required
                value={name} 
                onChange={(event) => setName(event.target.value)}
                />
            <div className="flex justify-between">

                <div className="flex w-36 h-12 gap-3 border-2 rounded bg-slate-50 p-3">
                    <p className="flex-1">{quantity}</p>
                    <button type="button" onClick={increment }  disabled={blue} className="flex-1 h-6 bg-blue-500  hover:bg-blue-600 rounded  disabled:bg-slate-400 active:bg-blue-300 " >+</button>
                    <button type="button" onClick={decrement}  disabled={red} className="flex-1 h-6 bg-red-500 rounded hover:bg-red-600 disabled:bg-slate-400 active:bg-red-300 ">-</button>
                </div>

                <select value={category} onChange={(e) => setCategory(e.target.value)}  className="border rounded">
                    <option>Produce</option>
                    <option>Dairy</option>
                    <option>Bakery</option>
                    <option>Meat</option>
                    <option>Frozen Foods</option>
                    <option>Canned Goods</option>
                    <option>Dry Goods</option>
                    <option>Beverages</option>
                    <option>Snacks</option>
                    <option>Household</option>
                    <option>Other</option>
                </select>
            </div>
            <button className="border rounded h-10 bg-blue-500 text-white hover:bg-blue-600 " type="submit">+</button>
        
        </form>
    </main>
    
    
    );
  
}