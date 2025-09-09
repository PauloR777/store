import { useState } from "react";
import { useTodoStore } from "../store/todoStore";

const TodoForm = () => {
  const [text, setText] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() === "") return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="เพิ่มงานใหม่..."
      />
      <button type="submit">เพิ่ม</button>
    </form>
  );
};

export default TodoForm;
