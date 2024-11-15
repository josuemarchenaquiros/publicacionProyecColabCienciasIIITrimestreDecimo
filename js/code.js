function ShowBox(){
    var CardSelected = document.getElementById()
}
// Función para mostrar la información de los hongos en el popup
function mostrarInfo(id) {
    const infoText = document.getElementById('info-text');
    const popup = document.getElementById('info-popup');
    
    // Definir la información para cada hongo
    let info = '';
    switch (id) {
        case 1:
            info = '<h2>Geastrum saccatum</h2> <img class="hongoMB" src="https://inaturalist-open-data.s3.amazonaws.com/photos/1196356/original.jpg"> <p>Geastrum saccatum es un hongo que se caracteriza por su forma distintiva, que se abre en segmentos como los pétalos de una flor, creando una estructura parecida a una estrella. Este hongo se encuentra en suelos húmedos, especialmente en bosques tropicales y subtropicales, donde hay mucha materia orgánica en descomposición. Su función ecológica es la de descomponedor, ayudando a descomponer madera muerta y otros materiales orgánicos, contribuyendo al reciclaje de nutrientes en el ecosistema forestal.</p>';
            break;
        case 2:
            info = '<h2>Marasmius berteroi</h2> <img class="hongoMB" src="/img/Hongos Diseño/Marasmius berteroi - Hongos paracaídas y rehiletes.png"> <p>Marasmius berteroi es un hongo pequeño con un sombrero en forma de campana. Una característica fascinante de este hongo es su capacidad para secarse completamente durante períodos de sequedad y luego rehidratarse cuando las condiciones mejoran. Se encuentra en bosques tropicales y subtropicales, sobre madera muerta y materiales vegetales en descomposición. En cuanto a su rol ecológico, actúa como un descomponedor, descomponiendo la madera y otros restos orgánicos, lo que facilita el reciclaje de nutrientes y la salud del suelo.</p>';
            break;
        case 3:
            info = '<h2>Oudemansiella canarii</h2> <img class="hongoMB" src="./img/Hongos Diseño/Oudemansiella canarii - Hongo de Palo.png"> <p>Oudemansiella canarii es un hongo que se encuentra comúnmente en troncos y ramas caídas. Su sombrero es blanco o beige, y su cuerpo es delicado. Este hongo prospera en bosques húmedos, donde crece sobre madera muerta en descomposición. Como descomponedor, juega un papel clave en la descomposición de la madera y otros materiales orgánicos, contribuyendo al ciclo de nutrientes en los ecosistemas forestales y ayudando a mantener la salud del suelo.</p>';
            break;
        case 4:
            info = '<h2>Coqueina tricholoma</h2> <img class="hongoMB" src="./img/Hongos Diseño/Coqueina tricholoma- Hongo de Copa Rosada.jpeg"> <p>Coqueina tricholoma es un hongo carnoso cuyo sombrero varía entre tonos beige y rosados. Se encuentra en bosques húmedos y suelos ricos en materia orgánica. Este hongo crece sobre la madera muerta y otros restos vegetales en descomposición. Su función ecológica es ser un descomponedor, descomponiendo la madera muerta y ayudando en el reciclaje de nutrientes, lo que contribuye al equilibrio del ecosistema forestal.</p>';
            break;
            case 5:
                info = '<h2>Cyathus striatus</h2> <img class="hongoMB" src="/img/Hongos Diseño/Cyathus striatus (nido de pajaros).png"> <p>Cyathus striatus, conocido como el hongo de nido de pájaro, se caracteriza por su forma peculiar de cáliz delgado que se abre para liberar esporas. Se encuentra en bosques húmedos, creciendo sobre madera muerta y materiales vegetales en descomposición. Este hongo desempeña un papel fundamental como descomponedor de madera y otros restos orgánicos, contribuyendo al ciclo de nutrientes y a la regeneración del suelo al descomponer materiales vegetales en descomposición.</p>';
                break;
            case 6:
                info = '<h2>Foraminispora rugosa</h2> <img class="hongoMB" src="https://inaturalist-open-data.s3.amazonaws.com/photos/337154420/original.jpeg"> <p>Foraminispora rugosa es un hongo pequeño con un sombrero rugoso. Aunque no es tan conocido como otros hongos, es esencial para el ciclo de descomposición. Crece en bosques húmedos sobre madera muerta y otros materiales vegetales en descomposición. Actúa como descomponedor, descomponiendo la madera y otros restos orgánicos, y ayudando a liberar nutrientes al suelo, lo que favorece la salud del ecosistema forestal.</p>';
                break;
            case 7:
                info = '<h2>Mycena holoporphyra</h2> <img class="hongoMB" src="./img/Hongos Diseño/Mycena holoporphyra(Mycenaceae).png"> <p>Mycena holoporphyra es un hongo pequeño del género Mycena, que tiene un sombrero de color blanco o gris y un pie largo y delgado. Es común en bosques húmedos, donde crece sobre madera muerta y hojas en descomposición. Este hongo actúa como descomponedor de la madera y la materia vegetal, facilitando el reciclaje de nutrientes y contribuyendo a la salud del ecosistema forestal al descomponer los restos orgánicos en descomposición.</p>';
                break;
            case 8:
                info = '<h2>Coriolopsis polyzona</h2> <img class="hongoMB" src="./img/Hongos Diseño/Coriolopsis polyzona - Hongo oreja de palo.png"> <p>Coriolopsis polyzona, conocido como el hongo oreja de palo, tiene un sombrero de color blanco a gris y una textura similar al cuero. Este hongo crece sobre madera muerta en bosques húmedos, especialmente en áreas tropicales y subtropicales. Su función ecológica es la de descomponedor, descomponiendo madera muerta y otros materiales orgánicos, lo que permite la reincorporación de nutrientes al suelo y mantiene el equilibrio del ecosistema.</p>';
                break;
            case 9:
                info = '<h2>Lactifluus deceptivus</h2> <img class="hongoMB" src="https://inaturalist-open-data.s3.amazonaws.com/photos/5769431/large.jpeg"> <p>Lactifluus deceptivus es un hongo conocido por su capacidad para liberar un líquido blanco lechoso cuando se corta o se daña. Su sombrero puede ser de color anaranjado o marrón. Este hongo se encuentra en suelos húmedos y ricos en nutrientes, típicos de los bosques tropicales y subtropicales, y crece sobre materia orgánica en descomposición. Como descomponedor, desempeña un papel importante en la descomposición de madera muerta y otros materiales orgánicos, ayudando a reciclar nutrientes esenciales en el ecosistema.</p>';
                break;
            case 10:
                info = '<h2>Phallus indusiatus</h2> <img class="hongoMB" src="./img/Hongos Diseño/Phallus indusiatus (Hongo de velo de novia).png"> <p>Phallus indusiatus, conocido como el hongo de la "danza del velo", es famoso por su forma única: un tallo largo y delgado que termina en una "falda" o velo. Este hongo crece sobre madera muerta y materiales vegetales en descomposición en bosques tropicales y subtropicales. Su rol ecológico es como descomponedor, descomponiendo materia orgánica y ayudando a mantener el ciclo de nutrientes en el ecosistema. Además, su apariencia inconfundible y su capacidad para dispersar esporas lo hacen un hongo de gran interés para la ecología forestal.</p>';
                break;
            default:
                info = '<p>No se encontró información para este hongo.</p>';
                break;
        }
    
        // Mostrar la información en el popup
        infoText.innerHTML = info;
        popup.style.display = 'flex'; // Mostrar el popup
    }
    
    // Cerrar el popup cuando se hace clic en la "X"
    document.getElementById('close-btn').addEventListener('click', function() {
        document.getElementById('info-popup').style.display = 'none';
    });
    
    let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;
 
function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages; // Ciclar al siguiente índice
    const offset = -currentIndex * (100 / totalImages); // Calcular el desplazamiento en función del número de imágenes
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}
 
// Cambiar cada 3 segundos
setInterval(showNextImage, 5000);
