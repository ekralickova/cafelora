import './style.css';

export const Banner = () => {

    const element = document.createElement('section');
    element.classList.add("banner");
    element.innerHTML = `
    <div class="container" id="home">
      <div class="banner__content">
        <h1>Přijď to ochutnat!</h1>
        <p>Nabízíme kvalitní kávu, útulné prostředí a perfektní servis.</p>
      </div>
    </div>`
    return element;
}