import { useCourseStore } from "../store/courseStore";
import DropButton from "./DropButton"

const CourseList = () => {
  const courses = useCourseStore((state) => state.courses);

  return (
    <div>
      <h2>---รายวิชาที่ลงทะเบียน---</h2>
      <ul>
        {courses.map((c) => (
          <li key={c.id}>
            {c.id} - {c.nameTH} ({c.credit} หน่วยกิต) - {c.teacher} [เกรด: {c.grade}]
            <DropButton id={c.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
