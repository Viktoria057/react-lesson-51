import { useState } from "react";
import { PlusIcon, TrashIcon } from "./components/IconComponent";
import  Button from "./components/Button";
import {
  ToastNotification,
  notifySuccess,
  notifyError,
  notifyWarn,
} from "./components/ToastNotification";
import { IdleTimerComponent } from "./components/IdleTimerComponent";
import { SketchPicker } from "react-color";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [color, setColor] = useState("#3498db");

  const addTask = () => {
    if (!input.trim()) {
      notifyError("Поле не може бути порожнім!");
      return;
    }

    setTasks([...tasks, { text: input, color }]);
    setInput("");
    notifySuccess("Задачу додано!");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
    notifyWarn("Задачу видалено!");
  };

  const chartData = [
    {
      name: "Tasks",
      count: tasks.length,
    },
  ];

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Advanced Task Manager</h1>

      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Введіть задачу..."
        />
        <Button onClick={addTask}>
          <PlusIcon />
        </Button>
      </div>

      <h3>Оберіть колір задачі:</h3>
      <SketchPicker
        color={color}
        onChangeComplete={(selectedColor) => setColor(selectedColor.hex)}
      />

      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              backgroundColor: task.color,
              padding: "5px",
              margin: "5px 0",
            }}
          >
            {task.text}
            <Button onClick={() => deleteTask(index)}>
              <TrashIcon />
            </Button>
          </li>
        ))}
      </ul>

      <h3>Статистика задач:</h3>
      <BarChart width={300} height={200} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" />
      </BarChart>

      <ToastNotification />
      <IdleTimerComponent />
    </div>
  );
}

export default App;
