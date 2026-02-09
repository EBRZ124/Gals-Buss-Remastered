import { Fragment } from "react/jsx-runtime";
import ListGroup from "./components/ListGroup";
import NavBar from "./components/NavBar";
import ToastMessage from "./components/ToastMessage";

function App() {
  return (
    <Fragment>
      <NavBar></NavBar>
      <ListGroup />
      <ToastMessage></ToastMessage>
    </Fragment>
  );
}

export default App;
