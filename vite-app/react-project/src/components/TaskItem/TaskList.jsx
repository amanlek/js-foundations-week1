import TaskItem from "./TaskItem";
import { Layout } from "antd";
const { Content } = Layout;

/**
 * TaskList component.
 *
 * Receives the list of tasks and a toggle handler from App via props.
 * It maps over the tasks and passes individual task data to TaskItem.
 *
 * @param {Object} props
 * @param {{id: number, title: string, completed: boolean}[]} props.tasks
 *        Array of task objects passed from App
 * @param {(id: number) => void} props.onToggleTask
 *        Function passed from App to toggle task completion
 */
const TaskList = ({ tasks, onToggleTask }) => {
  return (
    <>
      <strong style={{ fontSize: "16px" }}>Courses:</strong>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            title={task.title}
            completed={task.completed}
            onToggle={() => onToggleTask(task.id)}
          />
        ))}
      </ul>
    </>
  );
};

export default TaskList;
