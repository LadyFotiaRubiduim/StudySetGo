let countdown;
const timerDisplay = document.querySelector('.timer');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const workModeButton = document.getElementById('work-mode');
const shortBreakModeButton = document.getElementById('short-break-mode');
const longBreakModeButton = document.getElementById('long-break-mode');

let workTime = 25 * 60; // 25 minutes in seconds
let shortBreakTime = 5 * 60; // 5 minutes in seconds
let longBreakTime = 15 * 60; // 15 minutes in seconds
let currentTime = workTime; // Set the initial time to work time

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timerDisplay.textContent = display;
}

function startTimer() {
    clearInterval(countdown);
    const now = Date.now();
    const then = now + currentTime * 1000;
    displayTimeLeft(currentTime);
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function resetTimer() {
    clearInterval(countdown);
    currentTime = workTime;
    displayTimeLeft(currentTime);
}

function setActiveModeButton(button) {
    const modeButtons = [workModeButton, shortBreakModeButton, longBreakModeButton];
    modeButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
}

workModeButton.addEventListener('click', () => {
    currentTime = workTime;
    displayTimeLeft(currentTime);
    setActiveModeButton(workModeButton);
});

shortBreakModeButton.addEventListener('click', () => {
    currentTime = shortBreakTime;
    displayTimeLeft(currentTime);
    setActiveModeButton(shortBreakModeButton);
});

longBreakModeButton.addEventListener('click', () => {
    currentTime = longBreakTime;
    displayTimeLeft(currentTime);
    setActiveModeButton(longBreakModeButton);
});

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);

// Set the initial active mode button
setActiveModeButton(workModeButton);
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask);

taskInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

taskList.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-button')) {
        event.target.parentElement.remove();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-button">Delete</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}
const workStartSound = document.getElementById('work-start');
const workEndSound = document.getElementById('work-end');
const breakStartSound = document.getElementById('break-start');
const breakEndSound = document.getElementById('break-end');
const resetSound = document.getElementById('reset-sound');

// Function to play the work start sound
function playWorkStartSound() {
    workStartSound.play();
}

// Function to play the work end sound
function playWorkEndSound() {
    workEndSound.play();
}

// Function to play the break start sound
function playBreakStartSound() {
    breakStartSound.play();
}

// Function to play the break end sound
function playBreakEndSound() {
    breakEndSound.play();
}

// Function to play the reset sound
function playResetSound() {
    resetSound.play();
}

// Example usage:
startButton.addEventListener('click', () => {
    // Play the work start sound when starting the timer
    playWorkStartSound();

    // Start the timer logic
    // ...
});

// Similar logic for other timer events

$("#create").click(function() {
    $(this).before("<textarea></textarea>");
  });