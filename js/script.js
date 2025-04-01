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
 },5000)
});
contador.then((numerosAleatorios) =>
compuCountdown.innerText = numerosAleatorios
);

//contador();


//hasta aca funciona bien



//no funciona y no se porque

function resultadoDelJuego() {
  compuCountdown.textContent = numerosAleatorios;
  userInput.textContent = numeroDelUsuario;
  resultadoFinal.textContent = userInput && compuCountdown;

if(numeroDelUsuario === numerosAleatorios) {
  resultadoFinal.innerHTML = '¡Has salvado el mundo!';
} else {
  resultadoFinal.innerHTML ='La bomba ha estallado';
}

};


// Función de cuenta atrás utilizando async/await
async function startCountdown() {
  for (let i = cuentaRegresiva; i > 0; i--) {
    cuentaRegresiva.textContent = i;
      await boom(1000);  // Espera 1 segundo antes de continuar
  }
}

 




function resetGame() {
  userInput = parseInt(prompt("Introduce un número del 1 al 3:")) || 0;
  compuCountdown = Math.floor(Math.random() * 3) + 1;
  userInput.textContent = 0;
  compuCountdown.textContent = 0;
 
  
}

empezarDeNuevo.addEventListener("click", resetGame);











  
//resultado del juego


       
//boton reiniciar ok
 /* 


        
};

*/
//funcion resetear ok
/*

});
*/