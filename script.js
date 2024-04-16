const carSounds = document.getElementById('car-sounds');
const speedometer = document.getElementById('speedometer');
const status = document.querySelector("#status"); // Not used in this version
const mapLink = document.querySelector("#map-link");
const locationElement = document.getElementById('location');

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

// Get speed, latitude, and longitude using Geolocation API
function getSpeedAndLocation() {
  navigator.geolocation.getCurrentPosition(position => {
    const speed = position.coords.speed * 3.6; // Convert m/s to km/h
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    speedometer.textContent = `Speed: ${Math.round(speed)} km/h`;
    locationElement.textContent = `Latitude: ${latitude.toFixed(2)} °, Longitude: ${longitude.toFixed(2)} °`;
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = "View on OpenStreetMap";
  }, error => {
    console.error("Error retrieving location or speed:", error);
    // Handle errors gracefully (e.g. display an error message)
  });
}

// Call getSpeedAndLocation function repeatedly for updates
setInterval(getSpeedAndLocation, 1000); // Update every second

// Function to geolocate on button click (optional)
// Function to show user's location on button click
function geoFindMe() {
  navigator.geolocation.getCurrentPosition(position => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const locationElement = document.getElementById('location');
    locationElement.textContent = `Latitude: ${latitude.toFixed(2)} °, Longitude: ${longitude.toFixed(2)} °`;
  }, error => {
    console.error("Error retrieving location:", error);
    // Handle errors gracefully (e.g. display an error message)
  });
}

// Event listener for "find-me" button (uncomment to enable)
document.querySelector("#find-me").addEventListener("click", geoFindMe);

