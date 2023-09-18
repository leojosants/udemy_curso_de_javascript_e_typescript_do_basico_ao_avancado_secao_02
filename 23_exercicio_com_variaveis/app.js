let value_a = 'A'; // B
let value_b = 'B'; // C
let value_c = 'C'; // A
let temporary;

temporary = value_a;
value_a = value_b;
value_b = value_c;
value_c = temporary;

console.log(value_a, value_b, value_c);
