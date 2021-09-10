import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { ListItem } from "./ListItem";
import './List.css'
function List() {
  const [query, setQuery] = useState("");

  const [list, setList] = useState([]);

  const handleDelete = (id) => {
    let updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
    };
    const handleComplete = (id) => {
        const updatedTodo = list.map(item => item.id === id ? {...item, status: !(item.status)}: item );
        setList(updatedTodo);
    };
    
  const handleAdd = () => {
    const payload = {
      title: query,
      status: false,
      id: uuid(),
    };
      setList([...list, payload]);
      setQuery("");
    };
    
//   console.log(list);
  return (
    <>
      <div className="InpParent">
        <div className="Inp">
            <input              
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="add yours todos..."
          />
        </div>
        <div className="Btn">
          <button onClick={handleAdd}>Add Todo</button>
        </div>
      </div>

      {list.map((items) => {
        return (
          <ListItem
            handleDelete={handleDelete}
            handleComplete={handleComplete}
            key={items.id}
            {...items}
          />
        );
      })}
    </>
  );
}

export { List };
