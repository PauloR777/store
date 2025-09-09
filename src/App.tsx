import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";
import CourseForm from "./component/CourseForm";
import CourseList from "./component/CourseList";
import CourseDrop from "./component/CourseDrop";
import { useCourseStore } from "./store/courseStore";

function App() {
  const gpa = useCourseStore((state) => state.gpa());

  return (
    <div>
      <h1>Todo List (Zustand)</h1>
      <TodoList />
      <TodoForm />
      
      <h1>ระบบถอนรายวิชา</h1>
      <CourseForm />
      <CourseList />
      <CourseDrop />
      <h2>GPA รวม: {gpa.toFixed(2)}</h2>
    </div>
  );
}

export default App;
