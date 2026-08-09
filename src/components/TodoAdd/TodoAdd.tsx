import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import cls from "./TodoAdd.module.css";

export const TodoAdd = ({ todos, setTodos }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value.trim()) {
      const newTodo = {
        id: crypto.randomUUID(),
        text: value.trim(),
        checked: false,
      };

      setTodos([...todos, newTodo]);
    }

    setValue("");
  };

  return (
    <form onSubmit={onSubmit} className={cls.form}>
      <input
        onChange={onChange}
        value={value}
        placeholder="Write your todo..."
        required
        className={cls.input}
      />
      <button className={cls.btn}>Add +</button>
    </form>
  );
};
