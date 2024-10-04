"use client"

import { useState } from "react";

export default function NewItem() {
  // Count
  const [quantity, setQuantity] = useState(1);
 
  return (
      <div className="flex w-52 gap-3 border-2 m-auto mt-5 p-3 text-center">
        <p className="flex-1">{quantity}</p>
        <button onClick={quantity <20 && (() => setQuantity(quantity + 1)) }  disabled={quantity == 20 && true} className="flex-1  bg-blue-500 rounded  disabled:bg-slate-400 active:bg-blue-300 " >+</button>
        <button onClick={quantity > 1 && (() => setQuantity(quantity - 1))}  disabled={quantity === 1 && true} className="flex-1 bg-red-700 rounded disabled:bg-slate-400 active:bg-red-300 ">-</button>
      </div>
    );
  
}