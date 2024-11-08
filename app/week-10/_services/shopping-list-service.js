import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
  // retrieve collection containing meta data about the collection and a list of its documents as document snapshots.
  const q = query(collection(db, "users", userId, "items"));
  // get docs to query docs
  const snapShot = await getDocs(q);
  // For each document, add an object the items array containing the document ID and data.
  const items = snapShot.docs.map((item) => ({
    id: item.id,
    ...item.data(),
  }));
  return items;
}

export async function addItem(userId, item) {
  // Reference the sub collection of items of user
  const q = query(collection(db, "users", userId, "items"));
  // adding new item to the sub_collection
  const addNewItem = await addDoc(q, item);
  return addNewItem.id;
}
