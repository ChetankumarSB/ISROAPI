const searchBar = document.getElementById('searchBar');
const spacecraftList = document.getElementById('spacecraftList');
let spacecrafts = [];

fetch('https://isro.vercel.app/api/spacecrafts')
  .then(response => response.json())
  .then(data => {
    spacecrafts = data.spacecrafts;
    displaySpacecrafts(spacecrafts);
  });

function displaySpacecrafts(spacecrafts) {
  spacecraftList.innerHTML = '';
  for (let spacecraft of spacecrafts) {
    const spacecraftName = spacecraft.name.toLowerCase();
    if (spacecraftName.includes(searchBar.value.toLowerCase())) {
      const li = document.createElement('li');
      li.innerText = spacecraftName;
      spacecraftList.appendChild(li);
    }
  }
}

searchBar.addEventListener('input', () => {
  displaySpacecrafts(spacecrafts);
});
