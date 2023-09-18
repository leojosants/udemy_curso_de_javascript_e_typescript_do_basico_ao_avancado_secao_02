const first_name = 'Leonardo';
const lastname = 'Santos';
const current_year = 2023;
const year_of_birth = 1984;
const age = current_year - year_of_birth;
const weight_in_kg = 76;
const heigth_in_meters = 1.70;
const body_mass_index = weight_in_kg / (heigth_in_meters * heigth_in_meters);

console.log(`Nome completo: ${first_name} ${lastname}`);
console.log(`Ano de nascimento: ${current_year}`);
console.log(`Idade: ${age} anos`);
console.log(`Peso: ${weight_in_kg} kg`);
console.log(`Altura: ${heigth_in_meters} m`);
console.log(`Índice de Massa Corporal - IMC: ${body_mass_index}`);