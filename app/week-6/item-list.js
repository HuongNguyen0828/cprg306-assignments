"use client";
import {useState} from "react";

import Item from "./item.js";
import itemJson from "./items.json"; // ItemsJson is list of object



export default function ItemList() {
    // Array of Object item, SORTING items
    const items = itemJson;

    // Object of groupedCategory
    // Sort by grouped category: 
    //{
      // bakery: [item1, item2]],
      // canned good : [item1, item2}
    let sortedItems = {};


    // Setting state for sorting by
    const [sortBy, setSortBy] = useState("name");

    // onClick function
      if (sortBy === "name") {
        items.sort((a, b) => a.name.localeCompare(b.name));
      }
      if (sortBy == "category") {
        items.sort((a, b) => a.category.localeCompare(b.category));
      }
      if (sortBy == "grouped category") { 

    
        sortedItems = items.reduce((acc, item) => {
          const category = item.category;
          if (!acc[category]) {
            acc[category] = []; // create empty list
          }
          acc[category].push(item); // Then, push that item in
          return acc;
        
        }, {});

        console.log(sortedItems)
      }
      

    return (
        <>
          <div className="flex gap-4 m-5">
            <p className="mt-auto">Sort by: </p>
            <button type="button" 
              className="bg-cyan-700 rounded p-2"
              onClick={() => setSortBy("name")}>Name
            </button>
            <button onClick={() => setSortBy("category")} type="button" className="bg-cyan-700 rounded p-2">Category</button>
            <button onClick={() => setSortBy("grouped category")} type="button" className="bg-cyan-700 rounded p-2">Grouped Category</button>

          </div>

          
          {items.map((item) => (
            <section key={item.id}>
                <div  className="w-96 p-4 ml-4 bg-blue-200 border">
                <Item name={item.name} quantity={item.quantity} category={item.category}></Item> 
                </div>
            </section>
            ))}
        </>
    );
}