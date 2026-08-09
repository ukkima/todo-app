import { Trash2 } from "lucide-react";
import cls from "./TodoList.module.css";
// @ts-ignore

export const TodoList = ({ todos, setTodos }) => {
  // @ts-ignore

  const onChange = (id) => {
    // @ts-ignore

    setTodos((prev) =>
      // @ts-ignore

      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      }),
    );
  };
  // @ts-ignore

  const onDelete = (id) => {
    // @ts-ignore

    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className={cls.div}>
      {
        // @ts-ignore
        todos.map((todo) => (
          <div className={cls.todo} key={todo.id}>
            <label className={cls.label}>
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => onChange(todo.id)}
                className={cls.input}
              />
              <span>{todo.text}</span>
            </label>

            <button className={cls.delete} onClick={() => onDelete(todo.id)}>
              <Trash2 />
            </button>
          </div>
        ))
      }
    </div>
  );
};
