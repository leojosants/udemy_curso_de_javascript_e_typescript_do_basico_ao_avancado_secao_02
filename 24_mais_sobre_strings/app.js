let string_test = 'O rato roeu a roupa do rei de roma.';

// retorna o caracter
console.log('string_test[4]:', string_test[4]);

// retorna o caracter
console.log('string_test.charAt(6):', string_test.charAt(6));

// concatena
console.log('string_test.concat(` -> ESSA PARTE FOI ADICIONADA`):', string_test.concat(` ESSA PARTE FOI ADICIONADA`));

// retorna a posição onde se inicia
console.log('string_test.indexOf("texto"):', string_test.indexOf('texto'));

// retorna a posição onde se inicia
console.log('string_test.indexOf("text"):', string_test.indexOf('text'));

// inicia a busca na posição e percorre pra frente
console.log('string_test.indexOf("o", 3):', string_test.indexOf('o', 3));

// inicia a busca da posição e precorre pra trás
console.log('string_test.lastIndexOf("o"):', string_test.lastIndexOf('o'));

// inicia a busca da posição e precorre pra trás
console.log('string_test.lastIndexOf("o", 3):', string_test.lastIndexOf('o', 3));

// regex - retorna todas as letras minusculas
console.log('string_test.match(/[a-z]/g):', string_test.match(/[a-z]/g));

// regex - retorna a primeira ocorrencia de qualquer letra entre o intervalo
console.log('string_test.search(/[a-z]/g):', string_test.search(/[a-z]/g));

// regex - retorna o indice
console.log('string_test.search(/x/):', string_test.search(/x/));

// regex - realiza substituicao primeiro pelo segundo parametro
console.log('string_test.replace(/Um/, "Outro"):', string_test.replace(/Um/, 'Outro'));

// realiza substituicao primeiro pelo segundo parametro
console.log('string_test.replace("Um", "Outro"):', string_test.replace('Um', 'Outro'));

// realiza substituicao primeiro pelo segundo parametro - somente na primeira ocorrencia
console.log('string_test.replace(/r/, "#"):', string_test.replace(/r/, '#'));

// realiza substituicao primeiro pelo segundo parametro - flag g  - todas as ocorrencias
console.log('string_test.replace(/r/g, "#"):', string_test.replace(/r/g, '#'));

// tamanho da string
console.log('string_test.length:', string_test.length);

// fatiamento - inicia na posicao 2 e termina na 6
console.log('string_test.slice(2, 6):', string_test.slice(2, 6));

// fatiamento - inicia do final e regride
console.log('string_test.slice(-3):', string_test.slice(-3));

// separa cara grupo pelo espaco - todas as ocorrecias
console.log('string_test.split(" "):', string_test.split(' '));

// separa cara grupo pelo espaco - tantas ocorrencias
console.log('string_test.split(" ", 2):', string_test.split(' ', 2));

// transforma todos os caracteres em maiusculos
console.log('string_test.toUpperCase():', string_test.toUpperCase());

// transforma todos os caracteres em minusculos
console.log('string_test.toLowerCase():', string_test.toLowerCase());