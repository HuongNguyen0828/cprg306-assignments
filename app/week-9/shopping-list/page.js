"use client";
import Link from "next/link";

// Import the useUserAuth hook
import { useUserAuth } from "../_utils/auth-context";

import { useState } from "react";
import ItemList from "./item-list.js";
import Form from "./form.js";
import itemJson from "./items.json"; // ItemsJson is list of object
import MealIdeal from "./meal-ideal.js";

export default function Page() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, firebaseSignOut } = useUserAuth();

  const [items, setItems] = useState(itemJson);
  const [selectedItem, setSelectedItem] = useState("");

  const handleAddItem = (newItem) => setItems([...items, newItem]);
  // To React recognized which item is clicked
  const handleItemClicked = (selectedItem) => {
    let cleanQuantityEmoji;
    const emojiAndDigitRegex =
      /[\d\u{1F600}-\u{1F64F}|\u{1F300}-\u{1F5FF}|\u{1F680}-\u{1F6FF}|\u{1F700}-\u{1F77F}|\u{1F780}-\u{1F7FF}|\u{1F800}-\u{1F8FF}|\u{1F900}-\u{1F9FF}|\u{1FA00}-\u{1FAFF}|\u{2600}-\u{26FF}|\u{2700}-\u{27BF}]/gu;

    if (/,/.test(selectedItem)) {
      const arrayCleanAfterComma = selectedItem.split(","); // split name of item
      const cleanAfterComma = arrayCleanAfterComma[0];
      cleanQuantityEmoji = cleanAfterComma.replace(emojiAndDigitRegex, "");
    } else {
      cleanQuantityEmoji = selectedItem.replace(emojiAndDigitRegex, "");
    }
    // alert(cleanQuantityEmoji);
    console.log(cleanQuantityEmoji);
    setSelectedItem(cleanQuantityEmoji.trim(" "));
  };

  return (
    <>
      {user ? (
        <main className="m-4">
          <nav>
            <button
              className="btn fixed top-4 right-4"
              onClick={async () => await firebaseSignOut()}
            >
              Sign out{" "}
            </button>
          </nav>
          <h1 className="text-6xl font-bold p-3 mb-4">Shopping List</h1>
          <div className="flex gap-5 ">
            <div>
              <Form onAdd={handleAddItem} />
              <ItemList items={items} onItemClicked={handleItemClicked} />
            </div>
            <MealIdeal ingredient={selectedItem} />
          </div>
        </main>
      ) : (
        <div className="alert alert-error m-10 w-1/2">
          You must login to view the app!{" "}
          <Link href="../week-9" className="link link-primary">
            Back to homepage
          </Link>
        </div>
      )}
    </>
  );
}