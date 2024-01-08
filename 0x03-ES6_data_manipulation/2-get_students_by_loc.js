export default function getStudentsByLocation(list, location) {
  return Array.isArray(list) ? list.filter((element) => element.location === location) : [];
}
