import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class TodoClassComponent extends Component {
  constructor(props) {
    super(props);

    // Initial State
    this.state = {
      tasks: [],
      taskText: "",
    };

    console.log("Constructor called");
  }

  //LifeCycle Methods
  componentDidMount() {
    console.log("TodoApp component mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tasks !== this.state.tasks) {
      console.log("Tasks updated");
    }
  }

  componentWillUnmount() {
    console.log("TodoApp component unmounted");
  }

  handleChange = (e) => {
    this.setState({ taskText: e.target.value });
  };

  addTask = () => {
    const { taskText } = this.state;
    if (taskText.trim() === "") return;

    this.setState((prevState) => ({
      tasks: [
        ...prevState.tasks,
        {
          id: uuidv4(),
          text: taskText,
          completed: false,
        },
      ],
      taskText: "",
    }));
  };

  deleteTask = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
    console.log("Task Deleted");
  };

  toggleTask = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    }));
  };

  render() {
    const { tasks, taskText } = this.state;

    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.heading}>Todo List</h2>

          <div style={styles.inputRow}>
            <input
              type="text"
              placeholder="Enter a task"
              value={taskText}
              onChange={this.handleChange}
              style={styles.input}
            />
            <button onClick={this.addTask} style={styles.addBtn}>
              Add
            </button>
          </div>
        </div>

        <ul style={styles.list}>
          {tasks.length === 0 && (
            <p style={{ textAlign: "center", color: "gray" }}>
              No items available
            </p>
          )}
          {tasks.map((task) => (
            <li style={styles.listItem}>
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  color: task.completed ? "gray" : "black",
                }}
              >
                {task.text}
              </span>

              <div>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => this.toggleTask(task.id)}
                />
                <button
                  onClick={() => this.deleteTask(task.id)}
                  style={styles.deleteBtn}
                  disabled={!task.completed}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoClassComponent;

const styles = {
  container: {
    padding: "20px",
    maxWidth: "400px",
    margin: "40px auto",
    fontFamily: "Arial",
  },
  card: {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
  heading: {
    textAlign: "center",
  },
  inputRow: {
    display: "flex",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "8px",
  },
  addBtn: {
    padding: "8px 12px",
    cursor: "pointer",
  },
  list: {
    marginTop: "20px",
    padding: 0,
    listStyle: "none",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px",
    borderBottom: "1px solid #ddd",
  },
  deleteBtn: {
    marginLeft: "8px",
    cursor: "pointer",
  },
};
