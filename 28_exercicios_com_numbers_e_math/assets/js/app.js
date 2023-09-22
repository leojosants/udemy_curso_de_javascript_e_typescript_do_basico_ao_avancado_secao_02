function startApp() {
    const number_provided = Number(window.prompt('Digite um número: '));
    
    const data_round_down = document.querySelector('[data_round_down]');
    const data_precision = document.querySelector('[data_precision]');
    const data_round_up = document.querySelector('[data_round_up]');
    const data_number_h1 = document.querySelector('[data_number_h1]');
    const data_integer = document.querySelector('[data_integer]');
    const data_sqrt = document.querySelector('[data_sqrt]');
    const data_nan = document.querySelector('[data_nan]');

    data_number_h1.innerHTML = `${number_provided}`;
    data_sqrt.innerHTML = `${Math.sqrt(number_provided)}`;
    data_integer.innerHTML = `${Number.isInteger(number_provided)}`;
    data_nan.innerHTML = `${Number.isNaN(number_provided)}`;
    data_round_down.innerHTML = `${Math.floor(number_provided)}`;
    data_round_up.innerHTML = `${Math.ceil(number_provided)}`;
    data_precision.innerHTML = `${number_provided.toFixed(2)}`;
};

startApp();