function acertijo(palabraOculta, oportunidades) { //Funcion declarada
  
  alert("¡Bienvenido! ¿Te animás a decifrar nuestro acertijo?. Es la traducción de codificador y casa en inglés sin espacios.."); //Alert para empezar a interactuar con el usuario
  
  while (oportunidades > 0) { //Oportunidades mayor a cero
    
    const respuesta = prompt("Ingresá una palabra:");
    
    if (respuesta === palabraOculta) { // Uso condicional if/else

      alert("¡Respuesta correcta! Has ganado el juego.");

      return; //Si la respuesta es correcta termina el ciclo con return
    }else { oportunidades--; // Si la respuesta no es correcta se restan los intentos, por eso else
      alert(`¡Respuesta incorrecta! Te quedan ${oportunidades} oportunidades.`); // Alert con la cantidad de intentos restantes
    }
  }
  
  if (oportunidades === 0) { // Agotadas las oportunidades se termina
    alert(`¡Agotaste las oportunidades!. La palabra secreta era "${palabraOculta}".`);
  }
}
  
acertijo("coderhouse", 3); // coderhouse (palabra oculta) y 3 (intentos) 
