const full_name = window.prompt('Digite seu nome completo:');

window.document.body.innerHTML += `<br />`;

window.document.body.innerHTML += `
    Nome completo: <strong>${full_name}</strong> <br /> <br />
`;

window.document.body.innerHTML += `<hr /> <br />`;

window.document.body.innerHTML += `
    Total de letras: <strong>${full_name.length}</strong> <br /> <br />
`;

window.document.body.innerHTML += `
    Segunda letra: <strong>${full_name[1]}</strong> <br /> <br />
`;

window.document.body.innerHTML += `
    Primeiro indice da letra 'a': <strong>${full_name.indexOf('a')}</strong> <br /> <br />
`;

window.document.body.innerHTML += `
    Último indice da letra 'a': <strong>${full_name.lastIndexOf('a')}</strong> <br /> <br />
`;

window.document.body.innerHTML += `
    Três últimas letras: <strong>${full_name.slice(-3)}</strong> <br /> <br />
`;

window.document.body.innerHTML += `
    Grupo de letras: <strong>${full_name.split(' ')}</strong> <br /> <br />
`;

window.document.body.innerHTML += `
    Nome em letras maiúsculas: <strong>${full_name.toUpperCase()}</strong> <br /> <br />
`;

window.document.body.innerHTML += `
    Nome em letras minúsculas: <strong>${full_name.toLowerCase()}</strong> <br /> <br />
`;