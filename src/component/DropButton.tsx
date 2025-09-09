import { useCourseStore } from "../store/courseStore";

const DropButton = ({ id }: { id: string }) => {
  const dropCourse = useCourseStore((state) => state.dropCourse);

  return <button onClick={() => dropCourse(id)}>ถอนรายวิชา</button>;
};

export default DropButton;
