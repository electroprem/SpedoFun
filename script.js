const carSounds = document.getElementById('car-sounds');
const speedometer = document.getElementById('speedometer');

// Function to play sound based on button click (replace with actual audio files)
function playCarSound(sound) {
  const audio = new Audio(`sounds/${sound}.mp3`);  // Replace with your file path
  audio.play();
}

// Event listeners for car sound buttons
carSounds.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    playCarSound(button.textContent.toLowerCase());
  });
});

// Get speed using Geolocation API (example - replace with actual implementation)
function getSpeed() {
  navigator.geolocation.getCurrentPosition(position => {
    const speed = position.coords.speed * 3.6; // Convert m/s to km/h
    speedometer.textContent = `Speed: ${Math.round(speed)} km/h`;
  });
}

// Call getSpeed function (can be called repeatedly for updates)
getSpeed();
