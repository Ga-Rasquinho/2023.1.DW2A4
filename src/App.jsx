import React, {useState} from "react";
import {v4 as uuidv4} from 'uuid';

import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask";
import "./App.css";

const App = () => {
    // const message = "Hello world";
    const [tasks, setTasks] = useState([
      {
        id: '1',
        title: 'Titulo',
        completed: false,
      },
      {
        id: '2',
        title: 'Titulo2',
        completed: true,
      },      
    ]);

    const handleTaskClick = (taskID) => {
      const newTask = tasks.map((task) =>{
        if (task.id === taskID) return {... task, completed: !task.completed}

        return task;
      });

      setTasks(newTask);

    };

    const handleTaskAddition = (taskTitle) => {
      const newTasks = [
        ... tasks, 
        {
            title: taskTitle,
            id: uuidv4(),
            completed: false,
        },
      ];

      setTasks(newTasks);
    };

    return(
      <> 
          <div className="container">
            <AddTask handleTaskAddition={handleTaskAddition}/>
            <Tasks tasks={tasks} handleTaskClick={handleTaskClick}/>
          </div>
      </>
    );
};

export default App;
