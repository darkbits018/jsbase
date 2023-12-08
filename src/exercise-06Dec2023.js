const companies = [
  { name: 'Intelliswift', hq: 'Newark, CA', indiaLocations: ['Pune', 'Bengaluru'] },
  { name: 'Salesforce', hq: 'San Francisco, CA', indiaLocations: ['Hyderabad', 'Bengaluru', 'Mumbai', 'Gurugram', 'Jaipur'] }
];

/* 
  Task-1 
  Print following company information on console
  1. Number of companies, 
  2. Name of companies, 
  3. Headquarters of the companies

  Task-2
  Have a button in HTML and on click of the button, show the following as a bulleted list on HTML page:
  Name of company - HQ - India Locations
  E.g. Intelliswift - Newark, CA - Pune, Bengaluru

  Hint: You will need to use document.querySelector or document.getElementById and set it's inner HTML to the content.
*/

console.log('Number of companies:', companies.length);

console.log('Name of companies:');
companies.forEach((company) => console.log(company.name));

console.log('Headquarters of the companies:');
companies.forEach((company) => console.log(company.hq));

function displayCompanyInfo() {
  const container = document.getElementById('companyInfoContainer');

  container.innerHTML = '';

  const ul = document.createElement('ul');
  companies.forEach((company) => {
    const li = document.createElement('li');
    li.textContent = `${company.name} - ${company.hq} - ${company.indiaLocations.join(', ')}`;
    ul.appendChild(li);
  });
  container.appendChild(ul);
}