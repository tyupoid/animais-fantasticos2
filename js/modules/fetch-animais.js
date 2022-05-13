import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  function preencherAnimais(animal) {
    const numerosGrid = document.querySelector(target);
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function AnimaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  async function criarAnimais() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      animaisJSON.forEach(animal => preencherAnimais(animal));
      AnimaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
