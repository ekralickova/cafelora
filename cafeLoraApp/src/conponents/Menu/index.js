import { Drink } from './components/Drink';
import './style.css';

export const Menu = (props) => {

  const { drinks } = props;

  const element = document.createElement('section');
  element.classList.add("menu");
  element.innerHTML = `
    <div class="container" id="menu">
      <h2>Naše nabídka</h2>
      <p class="menu-intro">
        Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
      </p>
      <div class="drinks-list">

    
      <div class="order-detail">
        <a href="/objednavka">Detail objednávky</a>
      </div>
    </div>`

  const ulElement = element.querySelector('.drinks-list');

  if (drinks === undefined) {
    fetch(`https://apps.kodim.cz/daweb/cafelora/api/me/drinks`
      , {
        method: 'GET',
        headers: {
          'Authorization': `Email kkkkk@gmail.com`,
        }
      }
    )
      .then((response) => response.json())
      .then((data) => {
        ulElement.append(...data.results.map((item) => Drink(item)));
      });
  }
  else {
    ulElement.append(...data.results.map((item) => Drink(item)));
  }

  return element;
}