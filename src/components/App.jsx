import React from "react";
import List from "./List";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = React.useState([]);

  function handleSubmit(item) {
    console.log(item);

    setItems((items) => [...items, [item]]);
  }

  function deleteItem(id) {
    console.log("deleted " + id);
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onClick={handleSubmit} />
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
