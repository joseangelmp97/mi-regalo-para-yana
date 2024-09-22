// Pantallas
const introScreen = document.getElementById('intro-screen');
const nextScreen = document.getElementById('next-screen');
const firstOptionsScreen = document.getElementById('first-options-screen');
const firstResultScreen = document.getElementById('first-result-screen');
const secondOptionsScreen = document.getElementById('second-options-screen');
const secondResultScreen = document.getElementById('second-result-screen');
const thirdOptionsScreen = document.getElementById('third-options-screen');
const thirdResultScreen = document.getElementById('third-result-screen');
const finalScreen = document.getElementById('final-screen');
const closingScreen = document.getElementById('closing-screen');

// Botones
const nextButton = document.getElementById('next-button');
const firstNextButton = document.getElementById('first-next-button');
const secondNextButton = document.getElementById('second-next-button');
const thirdNextButton = document.getElementById('third-next-button');
const finalNextButton = document.getElementById('final-next-button');

// Mensajes de resultado
const firstResultMessage = document.getElementById('first-result-message');
const secondResultMessage = document.getElementById('second-result-message');
const thirdResultMessage = document.getElementById('third-result-message');
const finalMessage = document.getElementById('final-message');

// Elementos para mostrar las imágenes
const firstResultImage = document.getElementById('first-result-image');
const secondResultImage = document.getElementById('second-result-image');
const thirdResultImage = document.getElementById('third-result-image');


// Variables para guardar las selecciones
let firstSelection = '';
let secondSelection = '';
let thirdSelection = '';

// Pantalla 1: Al hacer click en la imagen de introducción, se pasa a la pantalla intermedia
introScreen.addEventListener('click', () => {
    introScreen.style.display = 'none';
  nextScreen.classList.remove('hidden');
});

// Pantalla 2: Al hacer click en "NEXT", se pasa a la primera pantalla de opciones
nextButton.addEventListener('click', () => {
  nextScreen.classList.add('hidden');
  firstOptionsScreen.classList.remove('hidden');
});

// Pantalla 3: Selección de la primera opción (Día/Noche)
document.querySelectorAll('#first-options-screen .option').forEach(button => {
  button.addEventListener('click', (e) => {
    firstSelection = e.target.getAttribute('data-value') === '1' ? 'Día' : 'Noche';
    firstResultMessage.textContent = `Has elegido disfrutar tu regalo por la ${firstSelection}.`;
    firstResultImage.src = e.target.getAttribute('data-image'); // Muestra la imagen correspondiente
    firstResultImage.style.display = 'block'; // Muestra la imagen
    
    firstOptionsScreen.classList.add('hidden');
    firstResultScreen.classList.remove('hidden');
  });
});

// Pantalla 4: Al hacer click en "NEXT", se pasa a la segunda pantalla de opciones
firstNextButton.addEventListener('click', () => {
  firstResultScreen.classList.add('hidden');
  secondOptionsScreen.classList.remove('hidden');
});

// Pantalla 5: Selección de la segunda opción (Playa/Montaña/Ciudad)
document.querySelectorAll('#second-options-screen .option').forEach(button => {
  button.addEventListener('click', (e) => {
    switch (e.target.getAttribute('data-value')) {
      case '1':
        secondSelection = 'Playa';
        break;
      case '2':
        secondSelection = 'Montaña';
        break;
      case '3':
        secondSelection = 'Ciudad';
        break;
    }
    secondResultMessage.textContent = `Has elegido disfrutar tu regalo en la ${secondSelection}.`;
    secondResultImage.src = e.target.getAttribute('data-image'); // Muestra la imagen correspondiente
    secondResultImage.style.display = 'block'; // Muestra la imagen
    
    secondOptionsScreen.classList.add('hidden');
    secondResultScreen.classList.remove('hidden');
  });
});

// Pantalla 6: Al hacer click en "NEXT", se pasa a la tercera pantalla de opciones
secondNextButton.addEventListener('click', () => {
  secondResultScreen.classList.add('hidden');
  thirdOptionsScreen.classList.remove('hidden');
});

// Pantalla 7: Selección de la tercera opción (Comida/Adrenalina/Masaje/Arte)
document.querySelectorAll('#third-options-screen .option').forEach(button => {
  button.addEventListener('click', (e) => {
    switch (e.target.getAttribute('data-value')) {
      case '1':
        thirdSelection = 'Comida';
        break;
      case '2':
        thirdSelection = 'Adrenalina';
        break;
      case '3':
        thirdSelection = 'Masaje';
        break;
      case '4':
        thirdSelection = 'Arte';
        break;
    }
    thirdResultMessage.textContent = `Has elegido disfrutar una experiencia de ${thirdSelection}.`;
    thirdResultImage.src = e.target.getAttribute('data-image'); // Muestra la imagen correspondiente
    thirdResultImage.style.display = 'block'; // Muestra la imagen
    
    thirdOptionsScreen.classList.add('hidden');
    thirdResultScreen.classList.remove('hidden');
  });
});

// Pantalla 8: Al hacer click en "NEXT", se pasa a la pantalla de resumen final
thirdNextButton.addEventListener('click', () => {
  thirdResultScreen.classList.add('hidden');
  finalMessage.textContent = `Tu regalo es: ${firstSelection}, en la ${secondSelection}, con una experiencia de ${thirdSelection}.`;
  finalScreen.classList.remove('hidden');
});

// Pantalla 9: Al hacer click en la pantalla final, se muestra el mensaje de despedida
finalNextButton.addEventListener('click', () => {
  finalScreen.classList.add('hidden');
  closingScreen.classList.remove('hidden');
});
