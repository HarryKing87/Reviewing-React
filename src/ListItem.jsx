import React, { useState } from "react";

function ListItem(props) {
  const [deletable, setDeletable] = useState(false);
  const deleteItem = () => {
    setDeletable(!deletable);
  };

  return (
    <li
      style={{
        textDecoration: deletable ? "line-through" : "none"
      }}
      onClick={deleteItem}
      key={props.index}
      id={props.id}
      className="list-item"
    >
      {props.listItem}
    </li>
  );
}

export default ListItem;
