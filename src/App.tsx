import { useEffect, useState } from "react";
import { TodoAdd } from "./components/TodoAdd/TodoAdd";
import { TodoList } from "./components/TodoList/TodoList";
import "./index.css";
import { SearchFilter } from "./components/SearchFilter/SearchFilter";
import { Filters } from "./components/Filters/Filters";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos") as string) || [],
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filtersFunc = {
    // @ts-ignore
    all: (todos) => todos,
    // @ts-ignore
    completed: (todos) => todos.filter((todo) => todo.checked),
    // @ts-ignore
    active: (todos) => todos.filter((todo) => !todo.checked),
  };

  // @ts-ignore
  const filteredTodos = filtersFunc[filter](todos);
  // @ts-ignore
  const searchTodos = filteredTodos.filter((todo) =>
    todo.text.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <>
      <div className="container">
        <div className="app">
          <TodoAdd todos={todos} setTodos={setTodos} />
          <SearchFilter setSearchQuery={setSearchQuery} />
          <Filters setFilter={setFilter} />
          <TodoList todos={searchTodos} setTodos={setTodos} />
        </div>
      </div>
    </>
  );
}

export default App;
