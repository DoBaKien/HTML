import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { ChangeEvent, useState } from "react";
import Create from "./component/Create";
import TodoList from "./component/TodoList";
export type TodoType = { id: string; name: string; isCompleted: boolean };

function App() {
  const [list, setList] = useState<TodoType[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleClick = () => {
    const item: TodoType = {
      id: uuidv4(),
      name: newTodo,
      isCompleted: false,
    };

    setList([item, ...list]);
    setNewTodo("");
  };
  return (
    <>
      <p>To do app</p>

      <Create
        handleChange={handleChange}
        handleClick={handleClick}
        newTodo={newTodo}
      />

      <TodoList list={list} />
    </>
  );
}

export default App;
