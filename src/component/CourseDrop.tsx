import { useCourseStore } from "../store/courseStore";

const CourseDrop = () => {
  const dropped = useCourseStore((state) => state.dropped);

  return (
    <div>
      <h2>---รายวิชาที่ถอนแล้ว---</h2>
      <ul>
        {dropped.map((c) => (
          <li key={c.id}>
            {c.id} - {c.nameTH} ({c.credit} หน่วยกิต)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDrop;
