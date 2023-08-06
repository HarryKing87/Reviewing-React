import "./App.css";
import { useState } from "react";
import InputText from "./InputText";
import ListItem from "./ListItem";

export default function App() {
  const [items, setItems] = useState("");
  const [listItem, setListItem] = useState([]);

  function typeInput(e) {
    setItems(e.target.value);
  }

  const addListItem = () => {
    setListItem([...listItem, items]);
    setItems("");
  };
  return (
    <div className="App">
      <InputText text={typeInput} />
      <button onClick={addListItem}>Add</button>
      <div>
        <ul>
          {listItem.map((addedItem, index) => (
            <ListItem listItem={addedItem} key={index} id={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}
