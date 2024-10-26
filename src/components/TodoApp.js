import React,{ useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";


const TodoApp = () => {
    const [task,setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("All"); 

    const handleInputChange = (event) => {
        setTask(event.target.value);
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        if (task.trim()) {
            setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
        setTask("");
        }
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter((task)=> task.id !== taskId));

    };

    const toggleComplete = (taskId) => {
        setTasks(
          tasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
          )
        );
      };

      const handleFilterChange = (event) => {
        setFilter(event.target.value)
      }

      const filteredTasks = tasks.filter(task => {
        if (filter === "All") return true;
        if (filter === "Completed") return task.completed;
        if (filter === "Incomplete") return !task.completed;
        return true;
      });

    return ( 
        <div className="TodoApp ">
          <AddTaskForm 
          task={task}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}/>
            <h1>TO-DO-LIST</h1>
            
            <div className="filter">
            <label htmlFor="filter" className="form-label">Filter Tasks</label>
            <select id="filter" value={filter} onChange={handleFilterChange} className="form-select">
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Incomplete">Incomplete</option>
              </select>
            </div>
            <TaskList
            tasks={filteredTasks}
            onToggleComplete={toggleComplete}
            onDelete={deleteTask}/>
            
        </div>
     );
}
 
export default TodoApp;