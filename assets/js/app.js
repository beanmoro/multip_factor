const factorial = (n) => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

const validateNumber = (n) => isNaN(n) || (n < 1 || n > 20)

const getInputNumber = () => {
    let n = NaN
    while (validateNumber(n)) {
        n = parseInt(prompt('Ingrese un numero entre 1 y 20: '))

        if (isNaN(n)) {
            alert('ERROR: No ingresaste un numero. Por favor intentelo nuevamente...')
        } else if (n < 1 || n > 20) {
            alert('ERROR: Numero fuera de rango. Por favor intentelo nuevamente...')
        }
    }
    return n;
}

const processOutput = (n) => {
    let multip_output = '';
    let factor_output = '';
    for (let i = 1; i <= n; i++) {
        multip_output += `${i} x ${n} = ${i * n}\n`
        factor_output += `El factorial de ${i}! = ${factorial(i)}\n`;
    }
    return `Resultados: \n${multip_output}${factor_output}`;
}


const main = () => {
    let exit = false
    while (!exit) {
        let inputNum = getInputNumber();
        let final_output = processOutput(inputNum);
        alert(final_output);
        console.log(final_output); // Por si el alert no muestra todas las lineas
        exit = !confirm('Deseas continuar con el programa?');
    }
}


main();



