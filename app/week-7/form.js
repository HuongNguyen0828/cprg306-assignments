"use client";
import { useState } from "react";

export default function Form({ onAdd }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");
  //Count
  const [quantity, setQuantity] = useState(1);

  // When submit
  const handleSubmit = (event) => {
    // Prevent form to be submitted
    event.preventDefault();

    const id = Math.floor(Math.random() * 1000000);
    // Item object
    const item = {
      id,
      name,
      quantity,
      category,
    };

    // Alert object
    alert(
      `Added item: ${item.name}, quantity: ${item.quantity}, category: ${item.category}`
    );
    // Print item object to console log
    console.log(item);

    // Add item to item list
    onAdd(item);

    // Reset all field
    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <main>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 m-2 w-96 h-50 p-3 bg-blue-300"
      >
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
            <button
              type="button"
              onClick={quantity < 20 && (() => setQuantity(quantity + 1))}
              disabled={quantity === 20 ? true : false}
              className="flex-1 h-6 bg-blue-500  hover:bg-blue-600 rounded  disabled:bg-slate-400 active:bg-blue-300 "
            >
              +
            </button>
            <button
              type="button"
              onClick={quantity > 1 && (() => setQuantity(quantity - 1))}
              disabled={quantity === 1 ? true : false}
              className="flex-1 h-6 bg-red-500 rounded hover:bg-red-600 disabled:bg-slate-400 active:bg-red-300 "
            >
              -
            </button>
          </div>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen food">Frozen Foods</option>
            <option value="canned good">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button
          className="border rounded h-10 bg-blue-500 text-white hover:bg-blue-600 "
          type="submit"
        >
          +
        </button>
      </form>
    </main>
  );
}
