import React, { useState } from "react";
import TaskItemApp from "./components/TaskItem/TaskItemApp";
import ToDoApp from "./components/to-do/ToDoApp";

const App = () => {
  const [showTaskApp, setShowTaskApp] = useState(false);
  const [showToDoApp, setShowToDoApp] = useState(false);
  
  const handleClickTask = () => {
    setShowTaskApp(true);
    setShowToDoApp(false);

  };
  const handleClickToDo = () => {
    setShowToDoApp(true);
    setShowTaskApp(false);
  };

  return (
    <>
    <div style={{ marginLeft:"45%", marginTop:"5%"}}>
      <button style={{ padding: "10px", marginRight:"1%"}} onClick={handleClickTask}>Task Item App</button>
      <button style={{ padding: "10px"}} onClick={handleClickToDo}>Todo App</button>
</div>
      {/*Rendering */}
      {showTaskApp ? <TaskItemApp /> : null}
      {showToDoApp ? <ToDoApp /> : null}
    
    </>
  );
};

export default App;
