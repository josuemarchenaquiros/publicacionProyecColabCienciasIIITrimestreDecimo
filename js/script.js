function openModal(card) {
    // Obtener información de la carta
    const title = card.querySelector('h3').innerText;
    const imgSrc = card.querySelector('img').src;
    const detailContent = card.querySelector('.detail').innerHTML;  // Obtener todo el contenido HTML de .detail

    // Asignar la información al modal
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-image').src = imgSrc;
    document.getElementById('modal-description').innerHTML = detailContent;  // Usar innerHTML para incluir todo el contenido

    // Mostrar el modal y añadir animación
    const modal = document.getElementById('modal');
    const modalContent = modal.querySelector('.modal-content');
    modal.style.display = 'block';
    setTimeout(() => {
        modalContent.classList.add('show');
    }, 10); // Esperar un poco para que se aplique la transición
}


function closeModal() {
    const modal = document.getElementById('modal');
    const modalContent = modal.querySelector('.modal-content');
    modalContent.classList.remove('show'); // Remover la clase de animación

    // Esperar a que la animación termine antes de ocultar el modal
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300); // Esperar el tiempo de la animación
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({
        behavior: 'smooth' // Animación suave
    });
}

let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages; // Ciclar al siguiente índice
    const offset = -currentIndex * (100 / totalImages); // Calcular el desplazamiento en función del número de imágenes
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

// Cambiar cada 3 segundos
setInterval(showNextImage, 3000);

