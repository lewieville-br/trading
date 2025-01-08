const tradeForm = document.getElementById('tradeForm');
const tradeTable = document.getElementById('tradeTable');

tradeForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form data
    const date = document.getElementById('date').value;
    const entry = parseFloat(document.getElementById('entry').value);
    const exit = parseFloat(document.getElementById('exit').value || 0);
    const investment = parseFloat(document.getElementById('investment').value);
    const notes = document.getElementById('notes').value;

    // Calculate profit/loss
    const profitLoss = exit > 0 ? ((exit - entry) / entry) * investment : 0;

    // Add trade to table
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${date}</td>
        <td>${entry.toFixed(2)}</td>
        <td>${exit > 0 ? exit.toFixed(2) : 'N/A'}</td>
        <td>${investment.toFixed(2)}</td>
        <td>${profitLoss.toFixed(2)}</td>
        <td>${notes || 'N/A'}</td>
    `;
    tradeTable.appendChild(row);

    // Reset form
    tradeForm.reset();
});
