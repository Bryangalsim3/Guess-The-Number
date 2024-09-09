let targetNumber;
let attempts;
let guessedNumbers;

function startGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    guessedNumbers = [];
    document.getElementById('guess').disabled = false;
    document.getElementById('restartBtn').style.display = 'none';
    document.getElementById('message').textContent = '';
    document.getElementById('prize').textContent = '';
}

function makeGuess() {
    const guessInput = document.getElementById('guess');
    const guess = Number(guessInput.value);
    const message = document.getElementById('message');
    const prize = document.getElementById('prize');

    if (guess < 1 || guess > 100) {
        message.textContent = 'Please enter a number between 1 and 100.';
        return;
    }

    if (guessedNumbers.includes(guess)) {
        message.textContent = 'You have already guessed this number. Try a different one.';
        return;
    }

    guessedNumbers.push(guess);
    attempts++;

    if (guess === targetNumber) {
        let prizeAmount;
        switch (attempts) {
            case 1:
                prizeAmount = '₱500';
                break;
            case 2:
                prizeAmount = '₱100';
                break;
            case 3:
                prizeAmount = '₱50';
                break;
            case 4:
                prizeAmount = '₱20';
                break;
            case 5:
                prizeAmount = '₱10';
                break;
            default:
                prizeAmount = '₱0';
                break;
        }
        message.textContent = `Congratulations! You guessed the number correctly in ${attempts} attempt(s).`;
        prize.textContent = `You win ${prizeAmount}!`;
        document.getElementById('restartBtn').style.display = 'inline-block';
        guessInput.disabled = true;
    } else if (attempts >= 5) {
        message.textContent = `Game over! You've used all your attempts. The correct number was ${targetNumber}.`;
        prize.textContent = 'Better luck next time!';
        document.getElementById('restartBtn').style.display = 'inline-block';
        guessInput.disabled = true;
    } else {
        if (guess < targetNumber) {
            message.textContent = `Too low! You have ${5 - attempts} attempt(s) left.`;
        } else {
            message.textContent = `Too high! You have ${5 - attempts} attempt(s) left.`;
        }
    }
}

function restartGame() {
    startGame();
}

startGame();  // Initialize the game when the page loads
