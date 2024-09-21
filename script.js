const options = document.querySelectorAll('.option');
const resultDiv = document.getElementById('result');
const message = document.getElementById('message');
const image = document.getElementById('image');
const nextButton = document.getElementById('next');
const title = document.getElementById('title');

let step = 0;

// Define los textos y las imágenes de cada opción
const optionsData = [
  {
    text: 'Tu regalo lo disfrutarás una noche del mes de octubre!!',
    image: 'images/imagen1.jpg',
  },
  {
    text: '¡Te espera una sorpresa en tu próximo viaje!',
    image: 'images/imagen2.jpg',
  },
  {
    text: '¡Prepárate para una cena especial!',
    image: 'images/imagen3.jpg',
  },
  {
    text: '¡Vas a recibir una carta misteriosa!',
    image: 'images/imagen4.jpg',
  }
];

// Cuando se selecciona una opción
options.forEach(option => {
  option.addEventListener('click', (e) => {
    const selectedOption = e.target.getAttribute('data-value');
    showResult(selectedOption);
  });
});

// Muestra el resultado y oculta las opciones
function showResult(option) {
  title.style.display = 'none';
  options.forEach(option => option.style.display = 'none');
  resultDiv.classList.remove('hidden');
  message.textContent = optionsData[option - 1].text;
  image.src = optionsData[option - 1].image;
}

// Reinicia la interfaz cuando se pulsa NEXT
nextButton.addEventListener('click', () => {
  resultDiv.classList.add('hidden');
  options.forEach(option => option.style.display = 'inline-block');
  title.style.display = 'block';
});
