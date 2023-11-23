let correctNumber;
let chances;

function startGame() {
    // Validate login (dummy validation for demonstration)
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'user' && password === '1234') { // Updated password check
        // Successful login, hide login container and show game container
        document.getElementById('loginForm').reset();
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('gameContainer').style.display = 'block';

        // Start the number guessing game
        resetGame();
    } else {
        alert('Invalid username or password. Try again.');
    }
}

function checkGuess() {
    const userGuessInput = document.getElementById('userGuess');
    const resultDisplay = document.getElementById('result');
    const retryBtn = document.getElementById('retryBtn');

    // Validate user input
    const userGuess = parseInt(userGuessInput.value);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        resultDisplay.textContent = 'Please enter a valid number between 1 and 10.';
        return;
    }

    // Check if the guess is correct
    if (userGuess === correctNumber) {
        resultDisplay.textContent = 'Congratulations! You guessed the correct number.';
        retryBtn.disabled = false;
    } else {
        // Provide feedback and reduce chances
        chances--;
        resultDisplay.textContent = `Incorrect! ${chances} ${chances === 1 ? 'chance' : 'chances'} left.`;

        // Check if the user has run out of chances
        if (chances === 0) {
            resultDisplay.textContent = `Sorry, you ran out of chances. The correct number was ${correctNumber}.`;
            retryBtn.disabled = false;
        }
    }
}

function resetGame() {
    // Reset game variables and UI
    const userGuessInput = document.getElementById('userGuess');
    const resultDisplay = document.getElementById('result');
    const retryBtn = document.getElementById('retryBtn');

    userGuessInput.value = '';
    resultDisplay.textContent = '';
    retryBtn.disabled = true;

    // Generate a new random number and reset chances
    correctNumber = Math.floor(Math.random() * 10) + 1;
    chances = 3;
}
