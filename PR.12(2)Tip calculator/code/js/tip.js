let calculate = document.querySelector('#calculate');

calculate.addEventListener('click', () => {
    let totalBill = document.querySelector('#totalBill').value;
    let tipPercent = document.querySelector('#tipPercent').value;
    let split = document.querySelector('#split').value;

    // Validate input
    if (totalBill === '' || tipPercent === '0' || split === '0') {
        alert('Please enter values');
        return;
    }
    
    // Calculate tip per person
    let tipPerPerson = (totalBill * tipPercent) / split;
    tipPerPerson = tipPerPerson.toFixed(2);

    // Calculate total per person
    let totalPerPerson = (parseFloat(totalBill) / split) + parseFloat(tipPerPerson);
    totalPerPerson = totalPerPerson.toFixed(2);

    // Display the calculated tip and total per person
    document.getElementById('tip').innerHTML = tipPerPerson;
    document.getElementById('total').innerHTML = totalPerPerson;
});
