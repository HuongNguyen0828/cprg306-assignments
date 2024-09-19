import ItemList from "./item-list";

export default function Page() {
    return (
      <main className="m-4">
        <h1 className="text-6xl font-bold p-3 mb-4">Shopping List</h1>
        <ItemList/>
      </main>
    );
  }