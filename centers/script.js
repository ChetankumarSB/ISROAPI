const searchBar = document.getElementById('searchBar');
const centreList = document.getElementById('centreList');
let centres = [];

fetch('https://isro.vercel.app/api/centres')
  .then(response => response.json())
  .then(data => {
    centres = data.centres;
    displayCentres(centres);
  });

function displayCentres(centres) {
  centreList.innerHTML = '';
  for (let centre of centres) {
    const centreName = centre.name.toLowerCase();
    if (centreName.includes(searchBar.value.toLowerCase())) {
      const li = document.createElement('li');

      li.innerHTML = `
      <h2><strong>Name:</strong> ${centre.name}</h2>
      <p><strong>Place:</strong>  ${centre.Place}</p>
      <p><strong>State:</strong> ${centre.State}</p>
    `;
      centreList.appendChild(li);
    }
  }
}

searchBar.addEventListener('input', () => {
  displayCentres(centres);
});
