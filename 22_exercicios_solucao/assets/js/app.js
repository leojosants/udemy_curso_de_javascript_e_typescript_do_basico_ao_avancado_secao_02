window.alert('Digite dois números e veja o resultado da soma entre eles!');

let first_number = window.prompt('Digite o primeiro número');
let second_number = window.prompt('Digite o segundo número');

first_number = Number(first_number);
second_number = Number(second_number);

const result_addition = first_number + second_number;

window.alert(`A soma entre ${first_number} e ${second_number} é: ${result_addition}`);