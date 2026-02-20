import { Button } from 'antd';

/**
 * TaskItem component.
 *
 * A reusable presentational component that displays a single task.
 * Receives all data and event handlers via props.
 *
 * @param {Object} props
 * @param {string} props.title - Title of the task
 * @param {boolean} props.completed - Completion status of the task
 * @param {() => void} props.onToggle - Callback function to toggle task state
 */
const TaskItem = ({title, completed, onToggle}) => {
  return (
      <li>
        <span>
            {title}
        </span>
        <Button style={{border:"1% solid black",marginTop: "10px", marginLeft: "10px", paddingLeft: "20px"}}type={completed? "default":"primary"} 
          onClick={onToggle}>
            {completed ? "Undo" : "Complete"}
        </Button>
      </li>
  )
}

export default TaskItem
