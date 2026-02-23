import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { v4 as uuidv4 } from "uuid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ListIcon from "@mui/icons-material/List";

import {
  Box,
  Paper,
  Stack,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Typography,
} from "@mui/material";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  useEffect(() => {
    console.log("TodoApp component mounted");
  }, []);

  useEffect(() => {
    console.log("Tasks updated");
  }, [tasks]);

  const addTask = () => {
    if (taskText.trim() === "") return;

    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: uuidv4(),
        text: taskText,
        completed: false,
      },
    ]);

    setTaskText("");
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    console.log("Task Deleted");
  };

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", marginLeft: "36%", marginTop:"2%"}}>
      <Paper elevation={4} sx={{ p: 3, width: "100%" }}>
        <Typography
          fontWeight="600"
          variant="h5"
          textAlign="center"
          gutterBottom
        >
          Todo List
        </Typography>

        <Stack direction="row" spacing={2} mb={3}  >
          <TextField
            fullWidth
            id="outlined-basic"
            label="Enter a task"
            variant="outlined"
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
          <br />
          <Button variant="outlined" onClick={addTask}>
            Add
          </Button>
        </Stack>
      </Paper>
      <br />
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "grey.100", p: 2, borderRadius: 2, ml:3}}>
        <List>
          {tasks.length != 0 && <ListIcon />}
          {tasks.map((task) => (
            <ListItem key={task.id}>
              <ListItemText>{task.text}</ListItemText>
              <Checkbox
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />

              <IconButton
                onClick={() => deleteTask(task.id)}
                aria-label="delete"
                color="error"
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
};

export default TodoApp;
