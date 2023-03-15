import React from "react";
import ReactDOM from "react-dom";



import "./index.scss";
import ToDoList from "./ToDoList";


const App = () => (
  <ToDoList />
);
ReactDOM.render(<App />, document.getElementById("app"));
