import "./style.css";
import { addStudent, getStudents } from "./db.js";

const form = document.querySelector("#registration-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const student = Object.fromEntries(formData.entries());

  const students = getStudents();
  const newId =
    students.length > 0 ? Math.max(...students.map((s) => s.id)) + 1 : 1;
  const newStudent = { id: newId, ...student };
  addStudent(newStudent);

  alert("Student registered successfully!");
  window.location.href = "/";
});
