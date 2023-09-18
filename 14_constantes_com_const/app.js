/* SyntaxError: Missing initializer in const declaration */
// const name;

/* TypeError: Assignment to constant variable. */
// const name = 'João';
// name = 'Leonardo';

const first_number = 5;
const second_number = 10;
const result_operation = first_number * second_number;
const duplicate_result = result_operation * 2;

let tripled_result = result_operation * 3;
tripled_result = tripled_result + 5;

console.log(typeof result_operation);
console.log(duplicate_result);
console.log(tripled_result);