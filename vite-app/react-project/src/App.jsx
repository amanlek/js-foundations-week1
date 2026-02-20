import AppHeader from "./components/AppHeader";
import Main from "./components/Main";
import { Layout } from "antd";
import AppFooter from "./components/AppFooter";
import TaskList from "./components/TaskList";
import { useState } from "react";
const { Content } = Layout;

function App() {
  const[tasks, setTasks] = useState([
    {id:1, title:"Java", completed: false},
    {id:2, title:"React", completed: false},
    {id:3, title:"Python", completed: false},
    {id:4, title:"JS", completed: false},
    {id:5, title:"NodeJS", completed: false},
    {id:5, title:"C++", completed: false},
  ]);

  /**
   * Toggles the completed status of a task.
   *
   * This function is passed to child components via props
   * and triggered from TaskItem on button click.
   *
   * @param {number} - id
   */
  const toggleTask =(id) =>{
    setTasks((prevTask)=>
      prevTask.map((task)=>
        task.id === id ? {...task, completed: !task.completed} : task));
  };



  return (
   
    <>     
      <Layout style={{ minHeight: "100vh" }}>
        <AppHeader/>
        <Content style={{ padding: "20px" }}>
          <TaskList tasks={tasks} onToggleTask={toggleTask}/> {/* Passing tasks data and toggle function to TaskList via props */}
        </Content>
        <AppFooter/>        { /* Displays footer information*/}
      </Layout>
    </>
  );
}



export default App;