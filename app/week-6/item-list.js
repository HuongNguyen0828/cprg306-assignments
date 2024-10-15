"use client";
import { useState } from "react";

import Item from "./item.js";
import itemJson from "./items.json"; // ItemsJson is list of object

export default function ItemList() {
  // Array of Object item, SORTING items
  let items = itemJson;

  // Setting state for sorting by
  const [sortBy, setSortBy] = useState("name");

  // onClick function
  if (sortBy === "name") {
    items.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sortBy == "category") {
    items.sort((a, b) => a.category.localeCompare(b.category));
  }
  const categoryItems = items.reduce((acc, item) => {
    const category = item.category;
    if (!acc[category]) {
      acc[category] = []; // create empty list
    }
    acc[category].push(item); // Then, push that item in
    return acc;
  }, {});

  //Sort categoryItems. Parsed the object into array of key and value (lists of items), sorted by key.
  // Apply sort and map for that parsed list afterward
  // Object of groupedCategory
  // Sort by grouped category:
  //{
  // bakery: [item1, item2]],
  // canned good : [item1, item2
  //}
  const parsedObject = Object.entries(categoryItems).sort((a, b) =>
    a[0].localeCompare(b[0])
  ); // sort by key

  // if (sortBy == "grouped category") {
  //   // items = sortedByKey;
  // }
  return (
    <>
      <div className="flex gap-4 m-5">
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
        <button
          onClick={() => setSortBy("grouped category")}
          type="button"
          className="bg-cyan-700 rounded p-2"
        >
          Grouped Category
        </button>
      </div>

      {sortBy === "grouped category" ? (
        <ul className="mb-4">
          {parsedObject.map(([grouped, array], index) => (
            <li key={index} className="">
              <span className="font-bold"> {grouped.toUpperCase()} </span>
              {array.map((item) => (
                <section key={item.id}>
                  <div className="w-96 p-4 ml-4 bg-blue-200 border">
                    <Item
                      name={item.name}
                      quantity={item.quantity}
                      category={item.category}
                    ></Item>
                  </div>
                </section>
              ))}
            </li>
          ))}
        </ul>
      ) : (
        items.map((item) => (
          <section key={item.id}>
            <div className="w-96 p-4 ml-4 bg-blue-200 border">
              <Item
                name={item.name}
                quantity={item.quantity}
                category={item.category}
              ></Item>
            </div>
          </section>
        ))
      )}
    </>
  );
}
