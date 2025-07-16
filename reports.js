// Sample data for demonstration (replace with real data or fetch from backend)
const reportData = [
  { date: '2024-06-01', meter: 'Meter 1', usage: 120, status: 'Normal' },
  { date: '2024-06-01', meter: 'Meter 2', usage: 98, status: 'Alert' },
  { date: '2024-06-02', meter: 'Meter 1', usage: 110, status: 'Normal' },
];

const tableBody = document.querySelector('.reports-table tbody');
const fromDateInput = document.querySelector('.filter-date:nth-child(1)');
const toDateInput = document.querySelector('.filter-date:nth-child(2)');
const meterSelect = document.querySelector('.filter-meter');
const filterBtn = document.querySelector('.filter-btn');
const exportBtn = document.querySelector('.export-btn');

function renderTable(data) {
  tableBody.innerHTML = '';
  if (data.length === 0) {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.colSpan = 4;
    cell.textContent = 'No reports found.';
    cell.style.textAlign = 'center';
    row.appendChild(cell);
    tableBody.appendChild(row);
    return;
  }
  data.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.date}</td>
      <td>${item.meter}</td>
      <td>${item.usage}</td>
      <td><span class="status ${item.status.toLowerCase()}">${item.status}</span></td>
    `;
    tableBody.appendChild(row);
  });
}

function filterData() {
  const from = fromDateInput.value;
  const to = toDateInput.value;
  const meter = meterSelect.value;
  return reportData.filter(item => {
    const inDateRange = (!from || item.date >= from) && (!to || item.date <= to);
    const meterMatch = !meter || item.meter === meter;
    return inDateRange && meterMatch;
  });
}

filterBtn.addEventListener('click', () => {
  const filtered = filterData();
  renderTable(filtered);
});

exportBtn.addEventListener('click', () => {
  const filtered = filterData();
  let csv = 'Date,Meter,Usage (m³),Status\n';
  filtered.forEach(item => {
    csv += `${item.date},${item.meter},${item.usage},${item.status}\n`;
  });
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'reports.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});

// Initial render
renderTable(reportData); 