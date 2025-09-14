import"./style-Bp3DqqqO.js";import{g as n}from"./db-CKQjmJgf.js";function r(){const e=document.querySelector("#student-table-body");if(!e)return;const s=n().map(t=>`
    <tr>
      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">${t.name}</td>
      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">${t.email}</td>
      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">${t.course}</td>
    </tr>
  `).join("");e.innerHTML=s}r();
