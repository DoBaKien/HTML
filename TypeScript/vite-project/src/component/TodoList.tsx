import { TodoType } from "../App";
import Todo from "./Todo";

const TodoList = ({ list }: { list: TodoType[] }) => {
  return (
    <div>
      {list.map((todo) => {
        return <Todo name={todo.name} />;
      })}
    </div>
  );
};

export default TodoList;
