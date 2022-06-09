import React from "react";
import Todo from "./components/Todo";

const App = () => {
  return (
    <div>
      <h1>My To-do's</h1>
      <Todo text="Learn JavaScript" />
      <Todo text="Learn React"/>
      <Todo text="Take Over the World!"/>
    </div>
  );
}

export default App;
