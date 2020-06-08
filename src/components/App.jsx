import React from "react";
import List from "./List";

function App() {
  const [items, setItems] = React.useState([]);
  const [enteredItem, setEnteredItem] = React.useState("");

  function handleInput(event) {
    setEnteredItem(event.target.value);
  }

  function handleSubmit() {
    setItems((items) => [...items, [enteredItem]]);
    setEnteredItem("");
  }

  function deleteItem(id){
    console.log("deleted " + id);
    setItems(prevItems => {
      return prevItems.filter(
        (item, index) => {
return index !== id;
        }
      );
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          placeholder="Enter a new item"
          value={enteredItem}
          onChange={handleInput}
        />
        <button onClick={handleSubmit}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((items, index) => (
            <List key={index} id={index} items={items} onChecked={deleteItem} />
          ))}
          ;
        </ul>
      </div>
    </div>
  );
}

export default App;
