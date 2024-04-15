export default function updateStudentGradeByCity(students, city, newGrades) {
  if (Array.isArray(students)) {
    return students.filter((student) => student.location === city)
      .map((student) => {
        const grades = newGrades.filter((newGrade) => newGrade.studentId === student.id);
        if (grades.length === 0) {
          return { ...student, grade: 'N/A' };
        }
        return { ...student, grade: grades[0].grade };
      });
  }
  return [];
}
