import React, { useState } from "react";
import "./App.css";
import AddTaskForm from "./Components/AddTaskForm";
import Task from "./Components/Task";

const App = () => {


  return (
    <>
      <div className="App">
        <AddTaskForm val={"dd"} button={()=>{}}></AddTaskForm>
        <NumberList />
      </div>
    </>
  );
};

export default App;
