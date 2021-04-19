const imgElement = document.createElement('img');

imgElement.src = 'image/gatitos.png';

const paragraphElement = document.createElement('p');
paragraphElement.textContent = 'Mi texto en el párrafo';

const textNode = document.createTextNode('Texto que queremos añadir');

document.body.appendChild(paragraphElement);

document.body.appendChild(imgElement);

const newContainer = document.createElement('div');
newContainer.textContent = 'Esto es un contenedor';

document.body.insertBefore(newContainer, imgElement);

const firstContainer = document.createElement('div');

firstContainer.textContent = 'Yo voy primero';

document.body.insertBefore(firstContainer, document.body.firstElementChild);

document.body.replaceChild(imgElement, firstContainer);