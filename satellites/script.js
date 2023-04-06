const searchBar = document.getElementById('searchBar');
const satelliteList = document.getElementById('satelliteList');
let satellites = [];

fetch('https://isro.vercel.app/api/customer_satellites')
  .then(response => response.json())
  .then(data => {
    satellites = data.customer_satellites;
    displaySatellites(satellites);
  })
  .catch(error => {
    console.log(error);
  });

function displaySatellites(satellites) {
  satelliteList.innerHTML = '';
  for (let satellite of satellites) {
    const satelliteName = satellite.id.toLowerCase();
    if (satelliteName.includes(searchBar.value.toLowerCase())) {
      const li = document.createElement('li');
      li.innerHTML = `
        <h2>${satellite.id}</h2>
        <p><strong>Country:</strong> ${satellite.country}</p>
        <p><strong>Launch Date:</strong> ${satellite.launch_date}</p>
        <p><strong>Mass:</strong> ${satellite.mass} kg</p>
        <p><strong>Launcher:</strong> ${satellite.launcher}</p>
      `;
      satelliteList.appendChild(li);
    }
  }
}

searchBar.addEventListener('input', () => {
  displaySatellites(satellites);
});
