import header from './header.js';

function about() {
  const container = document.createElement('div');

  const topContent = document.createElement('div');
  container.append(topContent);
  topContent.classList.add('containerClass', 'about');

  topContent.append(header());

  const titleAbout = document.createElement('h1');
  topContent.append(titleAbout);
  titleAbout.textContent = "ABOUT US";

  const bottomContent = document.createElement('div');
  container.append(bottomContent);

  const company = document.createElement('h2');
  bottomContent.append(company);
  company.textContent = "OUR COMPANY";

  const companyParagraph = document.createElement('p');
  bottomContent.append(companyParagraph);
  companyParagraph.textContent = "Dumb Starbucks a coffee experience located in os Angeles California. By adding the word dumb we are legally allowed to use the coveted Starbucks name and logo because we fulfilled the minimum requirements to be considered a parody under US law we have a full menu including all your favorite Starbucks items a delicious selection of pastries";

  const obs = document.createElement('p');
  bottomContent.append(obs);
  obs.textContent = "Ps: This is not a real company or website. It's a parody of a parody";

  const contactContainer = document.createElement('div');
  bottomContent.append(contactContainer);
  
  const contactTitle = document.createElement('h2');
  contactContainer.append(contactTitle);
  contactTitle.textContent = "CONTACT US";

  const hours = document.createElement('p');
  contactContainer.append(hours);
  hours.textContent = "Monday to Monday \r\n 07:00 AM to 09:00 PM";

  const form = document.createElement('form');
  contactContainer.appendChild(form);
  form.id = "news"
  form.setAttribute('method', "post");

  const label = document.createElement("label");
  const input = document.createElement("input");
  form.append(label);
  form.append(input);

  input.id = "inputNewsId"
  label.setAttribute('for', input.id);

  input.classList.add('inputClass'); 
  input.setAttribute('type', "email");
  input.placeholder = "EMAIL ADDRESS"

  label.textContent = "Get News & Offers";

  const btn = document.createElement("button"); 
  form.append(btn);
  btn.innerText = "JOIN →";


  return container
}

export default about;

// 1802 Hillhurst