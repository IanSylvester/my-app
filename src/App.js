import React from "react";
import Backdrop from "./components/Backdrop";
import Todo from "./components/Todo";
import Modal from "./components/Modal";

const App = () => {
  return (
    <div>
      <h1>My To-do's</h1>
      <Todo text="Learn JavaScript" />
      <Todo text="Learn React"/>
      <Todo text="Take Over the World!"/>
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
