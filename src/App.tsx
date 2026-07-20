import { useEffect, useState } from "react";
import type { Priority } from "./types/priority";
import type { Todo } from "./types/todo";
import TodoItem from "./TodoItem";


function App() {

  const [input, setInput] = useState<string>("");
  const [priority, setPriority] = useState<Priority>("Moyenne");

  const savedTodos = localStorage.getItem("todos");
  const initialTodos = savedTodos ? JSON.parse(savedTodos) : [];
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [filter, setFilter] = useState<Priority | "All">("All");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  function addTodo() {
    if (input.trim() === "") return;
    const newTodo: Todo = {
      id: Date.now(),
      text: input.trim(),
      priority: priority
    };
    setTodos([...todos, newTodo]);
    setInput("");
    setPriority("Moyenne");
    console.log(newTodo);
  }

  let filteredTodos: Todo[] = [];
  if (filter === "All") {
    filteredTodos = todos;
  } else {
    filteredTodos = todos.filter(todo => todo.priority === filter);
  }


  return (
    <>
      <div className="flex justify-center">
        <div className="w-2/3 flex flex-col gap-4 my-15 bg-base-200 p-5 rounded-lg ">
          <div className="flex gap-4">
            <input
              type="text"
              className="input w-full"
              placeholder="Sorato eto ny raharaha tokony ho atao..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <select className="select w-full"
              value={priority}
              onChange={(e) => setPriority(e.target.value as Priority)}>
              <option value="Urgent">Maika</option>
              <option value="Moyenne">Tsy dia maika</option>
              <option value="Basse">Afaka miandry</option>
            </select>
            <button onClick={addTodo} className="btn btn-primary">Hapiana</button>
          </div>
          <div className="space-y-2 flex-1 h-fit">
            <div className="flex flex-wrap gap-4">
              <button
                className={`btn btn-soft btn-sm ${filter === "All" ? "btn-success" : ""}`}
                onClick={() => setFilter("All")}
              >
                Izy rehetra
              </button>
            </div>
            {filteredTodos.length>0 ? (
              <ul className="divide-y divide-primary/20">
                {filteredTodos.map((todo) => (
                  <TodoItem key={todo.id} todo={todo} />
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">Tsy misy todo</p>
            )}

          </div>
        </div>
      </div>
    </>
  )
}

export default App
