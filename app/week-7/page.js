"use client";

import { useState } from "react";
import ItemList from "./item-list.js";
import Form from "./form.js";
import itemJson from "./items.json"; // ItemsJson is list of object

export default function Page() {
  const [items, setItems] = useState(itemJson);

  const handleAddItem = (newItem) => setItems([...items, newItem]);

  return (
    <main className="m-4">
      <h1 className="text-6xl font-bold p-3 mb-4">Shopping List</h1>
      <Form onAdd={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
