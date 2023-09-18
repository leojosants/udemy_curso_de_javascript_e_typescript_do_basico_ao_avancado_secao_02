const alert_test = window.alert('teste');
// console.log(alert_test);

const confirm_test = window.confirm('Deseja realmente apagar?');
// console.log(confirm_test);

const prompt_test = window.prompt('Digite seu nome');
// console.log(prompt_test);

const first_number = Number(window.prompt('Digite o primeiro número'));
console.log(typeof first_number, first_number);

const second_number = Number(window.prompt('Digite segundo número'))
console.log(typeof second_number, second_number);

const result_addition = first_number + second_number;
console.log(result_addition);
alert(result_addition);