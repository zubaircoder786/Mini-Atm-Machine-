let balance = 1000; // Initial balance, matching the HTML's display

// Select HTML elements once to avoid repeated lookups
const balanceDisplay = document.getElementById('balance');
const amountInput = document.getElementById('amount');
const messageDisplay = document.getElementById('message');

// Function to update the balance displayed in the HTML
function updateDisplay() {
    balanceDisplay.textContent = balance;
}

// Ensure the initial HTML balance matches the JS variable
updateDisplay();

function withdraw() {
    // Get the value from the input and convert it to a number
    const amount = parseFloat(amountInput.value);

    // Check if the input is a valid positive number
    if (isNaN(amount) || amount <= 0) {
        messageDisplay.textContent = "❌ Please enter a valid positive amount.";
        return;
    }

    if (amount <= balance) {
        balance -= amount; // update balance
        updateDisplay(); // update the HTML display
        messageDisplay.textContent = `✅ Withdrawn: $${amount}.`;
    } else {
        messageDisplay.textContent = "❌ Insufficient balance.";
    }
    
    // Clear the input field after transaction
    amountInput.value = '';
}

function deposit() {
    // Get the value from the input and convert it to a number
    const amount = parseFloat(amountInput.value);

    // Check if the input is a valid positive number
    if (isNaN(amount) || amount <= 0) {
        messageDisplay.textContent = "❌ Please enter a valid positive amount.";
        return;
    }

    balance += amount;
    updateDisplay(); // update the HTML display
    messageDisplay.textContent = `✅ Deposited: $${amount}.`;

    // Clear the input field after transaction
    amountInput.value = '';
}

function checkBalance() {
    messageDisplay.textContent = `💰 Your current balance is: $${balance}`;
    amountInput.value = '';
}