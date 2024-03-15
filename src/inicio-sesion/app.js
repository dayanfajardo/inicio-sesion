


    // Obtener referencias a los elementos del DOM
const form          = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

// Función para manejar el envío del formulario
// function handleSubmit(event) {
 const App =( event ) => {
    event.preventDefault(); // Evitar que el formulario se envíe por defecto

  // Obtener los valores de los campos de entrada
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Aquí puedes realizar la validación de los campos si es necesario
  
  // Simular el envío de los datos al servidor
  console.log('Usuario:', username);
  console.log('Contraseña:', password);

  // Aquí puedes enviar los datos al servidor usando fetch() o cualquier otra técnica
}
  // }


// Agregar un event listener al formulario para capturar el evento de envío
form.addEventListener('submit', App);


