import { useState } from "react";
import { useCourseStore } from "../store/courseStore";

const CourseForm = () => {
  const addCourse = useCourseStore((state) => state.addCourse);
  const [form, setForm] = useState({
    id: "",
    nameTH: "",
    nameEN: "",
    credit: 3,
    teacher: "",
    grade: "A",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addCourse({ ...form, credit: Number(form.credit) });
    setForm({ id: "", nameTH: "", nameEN: "", credit: 3, teacher: "", grade: "A" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="id" value={form.id} onChange={handleChange} placeholder="รหัสวิชา" />
      <input name="nameTH" value={form.nameTH} onChange={handleChange} placeholder="ชื่อวิชา (ไทย)" />
      <input name="nameEN" value={form.nameEN} onChange={handleChange} placeholder="ชื่อวิชา (อังกฤษ)" />
      <input name="credit" type="number" value={form.credit} onChange={handleChange} placeholder="หน่วยกิต" />
      <input name="teacher" value={form.teacher} onChange={handleChange} placeholder="อาจารย์ผู้สอน" />
      <select name="grade" value={form.grade} onChange={handleChange}>
        <option>A</option><option>B+</option><option>B</option>
        <option>C+</option><option>C</option>
        <option>D+</option><option>D</option>
        <option>F</option><option>W</option>
      </select>
      <button type="submit">เพิ่มรายวิชา</button>
    </form>
  );
};

export default CourseForm;
