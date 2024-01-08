export default function updateStudentGradeByCity(list, city, newGrades) {
  return list.map((ele) => {
    const newEle = ele;
    const grade = newGrades.filter((el) => el.studentId === newEle.id);
    newEle.grade = grade.length ? grade[0].grade : 'N/A';
    return newEle;
  }).filter((ele) => ele.location === city);
}
