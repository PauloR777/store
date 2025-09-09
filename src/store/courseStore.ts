import { create } from "zustand";

export interface Course {
  id: string;
  nameTH: string;
  nameEN: string;
  credit: number;
  teacher: string;
  grade: string; // A, B+, C, F, W
}

interface CourseState {
  courses: Course[];
  dropped: Course[];
  addCourse: (course: Course) => void;
  dropCourse: (id: string) => void;
  gpa: () => number;
}

export const useCourseStore = create<CourseState>((set, get) => ({
  courses: [],
  dropped: [],
  addCourse: (course) =>
    set((state) => ({
      courses: [...state.courses, course],
    })),
  dropCourse: (id) =>
    set((state) => {
      const course = state.courses.find((c) => c.id === id);
      if (!course) return state;
      return {
        courses: state.courses.filter((c) => c.id !== id),
        dropped: [...state.dropped, course],
      };
    }),
  gpa: () => {
    const gradeMap: Record<string, number> = {
      A: 4,
      "B+": 3.5,
      B: 3,
      "C+": 2.5,
      C: 2,
      "D+": 1.5,
      D: 1,
      F: 0,
      W: 0,
    };
    const { courses } = get();
    if (courses.length === 0) return 0;
    let totalCredits = 0;
    let totalPoints = 0;
    courses.forEach((c) => {
      if (c.grade !== "W") {
        totalCredits += c.credit;
        totalPoints += gradeMap[c.grade] * c.credit;
      }
    });
    return totalCredits > 0 ? totalPoints / totalCredits : 0;
  },
}));
