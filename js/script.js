/* `setInterval()` para generar el contador de 5 segundos 
(recuerda que es del 5 al 0, por tanto el intervalo debería ser uno más) 5, 4, 3, 2, 1, 0 ...


3. El juego se iniciará automáticamente con una cuenta atrás de 5 segundos.
4. Después de la cuenta atrás, el juego evaluará el número introducido.
5. Se mostrará un mensaje indicando si has salvado el mundo o si la bomba ha estallado.
*/


const restart = document.getElementById('restart');
const countdown = document.getElementById('countdown');
const result = document.getElementById('result');
const userInput = document.getElementById('userInput');
let numerosAleatorios 

restart.addEventListener('click', () => {

}) //boton reiniciar ok
  

const numeroDelUsuario = prompt ('Elige un número del 1 al 3');


function introducirNumero() {
   if (numeroDelUsuario) {
        userInput.value = numeroDelUsuario}
        console.log(numeroDelUsuario);
};
introducirNumero()

const contador = new Promise((resolve) => {
    setTimeout(() => {
        numerosAleatorios = Math.floor(Math.random()*3) + 1;
        resolve(numerosAleatorios);
    },5000)
});
contador.then((numerosAleatorios) =>
    countdown.innerText = numerosAleatorios
);

contador() 