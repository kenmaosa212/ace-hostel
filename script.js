function validateForm() {
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const now = new Date();
    const selectedDateTime = new Date(${date}T${time});

    if (selectedDateTime <= now) {
        alert('Please select a future date and time.');
        return false;
    }

    showConfirmation();
    return false; // Prevent form submission for this example
}

function showConfirmation() {
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const slot = document.getElementById('slot').value;

    const message = Your reservation for slot ${slot} on ${date} at ${time} has been confirmed!;
    document.getElementById('confirmationMessage').innerText = message;
    document.getElementById('confirmationMessage').classList.remove('hidden');
}

function resetForm() {
    document.getElementById('reservationForm').reset();
    document.getElementById('confirmationMessage').classList.add('hidden');
}