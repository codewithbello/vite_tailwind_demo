import "./style.css";
import { getStudents } from "./db.js";

function renderStudents() {
  const tableBody = document.querySelector("#student-table-body");
  if (!tableBody) return;

  const students = getStudents();
  const studentRows = students
    .map(
      (student) => `
    <tr>
      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">${student.name}</td>
      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">${student.email}</td>
      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">${student.course}</td>
    </tr>
  `
    )
    .join("");

  tableBody.innerHTML = studentRows;
}

renderStudents();
