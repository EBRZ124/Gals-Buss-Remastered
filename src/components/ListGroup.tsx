import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  const items = ["Riga", "Tallin", "Brussel", "Tokyo"];

  const message = items.length === 0 ? <p>No cities found</p> : null;

  return (
    <Fragment>
      <h1>List</h1>
      {message}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log("works")}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
