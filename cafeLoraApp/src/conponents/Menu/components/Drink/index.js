import './style.css';
import { Layer } from '../Layer';

export const Drink = (props) => {

    const {name, image, layers} = props;
    let { ordered } = props;

    const element = document.createElement('div');
    element.classList.add("drink");
    element.innerHTML = `
    <div class="drink__product">
      <div class="drink__cup">
        <img src="${image}">
      </div>
      <div class="drink__info">
        <h3>${name}</h3>
      </div>
    </div>
    <div class="drink__controls">
      <button class="order-btn">
        Objednat
      </button>
    </div>`;

    const ulElement = element.querySelector('.drink__info');
    ulElement.append(
      ...layers.map((item) =>
        Layer({
          color: item.color,
          label: item.label
        }),
      ),
    );

    return element;
}