function searchMobile() {
  const query = document.getElementById('searchInput').value;
  alert(`AI will search for: ${query}`);
  // You will connect to an AI/API to fetch mobile details here
}

function comparePhones() {
  const phone1 = document.getElementById('phone1').value;
  const phone2 = document.getElementById('phone2').value;

  const resultDiv = document.getElementById('comparisonResult');
  resultDiv.innerHTML = `
    <div class="card">
      <h3>${phone1}</h3>
      <p>Specs, price, rating (auto from AI)</p>
      <p>Rating: 8.5/10 ⭐</p>
    </div>
    <div class="card">
      <h3>${phone2}</h3>
      <p>Specs, price, rating (auto from AI)</p>
      <p>Rating: 9.2/10 ⭐</p>
    </div>
  `;
}

window.onload = () => {
  const suggestions = ['iPhone 15 Pro', 'Samsung S24 Ultra', 'Redmi Note 13 Pro'];
  const container = document.getElementById('suggestedMobiles');
  suggestions.forEach(name => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>${name}</h3><p>Specs and AI rating will go here</p>`;
    container.appendChild(card);
  });
};
