export default function getStudentIdsSum(list) {
  return Array.isArray(list) ? list.reduce((acc, curr) => acc + curr.id, 0) : [];
}
