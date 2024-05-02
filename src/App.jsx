import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function addNewItems(item) {
    setItems((prev) => prev.concat(item));
  }

  function deleteItem(id) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  function toggleItem(id) {
    setItems((prev) =>
      prev.map((item) =>
        item.id !== id ? item : { ...item, packed: !item.packed }
      )
    );
  }

  function clearItems() {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete all items!"
    );

    if (isConfirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form addNewItems={addNewItems} />
      <PackingList
        items={items}
        deleteItem={deleteItem}
        toggleItem={toggleItem}
        clearList={clearItems}
      />
      <Stats items={items} />
    </div>
  );
}
