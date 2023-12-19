const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
    };

    const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
        /*Anadi un parseInt a numeroAdivinado ya que este es una cadena de texto debido al readlinesync.question por ende iba a ser desigual q numero secreto */
    
       numeroAdivinado = parseInt(numeroAdivinado,10);
        if (numeroAdivinado === numeroSecreto) {
            console.log('¡Felicitaciones! ¡Adivinaste el número secreto!');
    } else if (numeroAdivinado > numeroSecreto) {
    console.log('El número secreto es menor. ¡Sigue intentando!');
    } else {
    console.log('El número secreto es mayor. ¡Sigue intentando!');
    }
    };

    module.exports = {
        generarNumeroAleatorio,
        verificarAdivinanza
    };