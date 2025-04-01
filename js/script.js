/* `setInterval()` para generar el contador de 5 segundos 
(recuerda que es del 5 al 0, por tanto el intervalo debería ser uno más) 5, 4, 3, 2, 1, 0 ...


3. El juego se iniciará automáticamente con una cuenta atrás de 5 segundos.
4. Después de la cuenta atrás, el juego evaluará el número introducido.
5. Se mostrará un mensaje indicando si has salvado el mundo o si la bomba ha estallado.
*/



const compuCountdown = document.getElementById('countdown');
const userInput = document.getElementById('userInput');
const resultado = document.getElementById('result');
const cuentaRegresiva = document.getElementById('cuentaRegresiva');
const resultadoFinal = document.getElementById('resultadoFinal');
const empezarDeNuevo = document.getElementById('restart');
let numerosAleatorios 
let time = 5;
const numeroDelUsuario = prompt ('Elige un número del 1 al 3');



function introducirNumero() {
   if (numeroDelUsuario) {
        userInput.value = numeroDelUsuario}
        
};
introducirNumero()


const contador = new Promise((resolve) => {
 setTimeout(() => {
     numerosAleatorios = Math.floor(Math.random()*3) + 1;
     resolve(numerosAleatorios);
 },6000)
});
contador.then((numerosAleatorios) =>
compuCountdown.innerText = numerosAleatorios
);

//no funciona y no se porque

function resultadoDelJuego() {
  /*compuCountdown.textContent = numerosAleatorios;
  userInput.textContent = numeroDelUsuario;
  resultadoFinal.textContent = userInput && compuCountdown;*/

  //meter esto es una funcion y concatenar.
if(numeroDelUsuario == numerosAleatorios) {
  resultadoFinal.innerHTML = '<h2>¡Has salvado el mundo!</h2>';
} else {
  resultadoFinal.innerHTML ='<h2>La bomba ha estallado</h2>';
}

};
resultadoDelJuego();







//hasta aca funciona bien


//intervalo hecho en clase
function count () {
  
cuentaRegresiva = setInterval(() => {
  cuentaRegresiva.innerHTML = `Cuenta regresiva: ${time}`;
    if(time === 0) {
      
      clearInterval(cuentaRegresiva)
    } else { 
      time--;
    } 
  },1000);


}
count();





function resetGame() {
  userInput = parseInt(prompt("Introduce un número del 1 al 3:")) || 0;
  compuCountdown = Math.floor(Math.random() * 3) + 1;
  userInput.textContent = 0;
  compuCountdown.textContent = 0;
 
  
}

empezarDeNuevo.addEventListener("click", () => {
  location.reload()
});











  
//resultado del juego


       
//boton reiniciar ok
 /* 


        
};

*/
//funcion resetear ok
/*

});
*/