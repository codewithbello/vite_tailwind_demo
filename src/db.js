const MOCK_DB_KEY = "students";
const initialStudents = [
  {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    course: "Web Fundamentals",
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    course: "Advanced JavaScript",
  },
  {
    id: 3,
    name: "Charlie",
    email: "charlie@example.com",
    course: "React Deep Dive",
  },
];

export function getStudents() {
  const fromStorage = localStorage.getItem(MOCK_DB_KEY);
  if (fromStorage) return JSON.parse(fromStorage);

  // If no data in storage, initialize with mock data
  localStorage.setItem(MOCK_DB_KEY, JSON.stringify(initialStudents));
  return initialStudents;
}

export function addStudent(student) {
  const students = getStudents();
  students.push(student);
  localStorage.setItem(MOCK_DB_KEY, JSON.stringify(students));
}
