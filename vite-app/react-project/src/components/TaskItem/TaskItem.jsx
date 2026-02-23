import { Button } from 'antd';


const TaskItem = ({title, completed, onToggle}) => {
  return (
      <li>
        <span>
            {title}
        </span>
        <Button style={{border:"1% solid black",marginTop: "10px", marginLeft: "10px", paddingLeft: "20px"}} type={completed? "default":"primary"}
          onClick={onToggle}>
            {completed ? "Undo" : "Complete"}
        </Button>
      </li>
  )
}

export default TaskItem
