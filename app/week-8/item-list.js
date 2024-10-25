"use client";
import { useState } from "react";

import Item from "./item.js";
import MealIdeal from "./meal-ideal.js";

export default function ItemList({ items, onItemClicked }) {
  // Setting state for sorting by
  const [sortBy, setSortBy] = useState("name");

  // onClick function
  if (sortBy === "name") {
    items.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sortBy == "category") {
    items.sort((a, b) => a.category.localeCompare(b.category));
  }

  return (
    <>
      <div className="flex gap-4 m-4 mb-6">
        <p className="mt-auto">Sort by: </p>
        <button
          type="button"
          className="bg-cyan-700 rounded p-2"
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          type="button"
          className="bg-cyan-700 rounded p-2"
        >
          Category
        </button>
      </div>

      {items.map((item) => (
        <section key={item.id}>
          <Item
            className="w-96 p-4 ml-4 border"
            onClick={() => onItemClicked(item.name)}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          ></Item>
        </section>
      ))}
    </>
  );
}
