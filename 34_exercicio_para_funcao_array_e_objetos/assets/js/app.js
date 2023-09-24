function startApp() {
    elements_html = {
        data_last_name: document.querySelector('[data_last_name]'),
        data_weight: document.querySelector('[data_weight]'),
        data_height: document.querySelector('[data_height]'),
        data_result: document.querySelector('[data_result]'),
        data_form: document.querySelector('[data_form]'),
        data_name: document.querySelector('[data_name]'),
    };

    const registrationOfPeople = [];

    function receiveFormEvent(event) {
        event.preventDefault();

        const last_name = elements_html.data_last_name;
        const weight = elements_html.data_weight;
        const height = elements_html.data_height;
        const name = elements_html.data_name;

        registrationOfPeople.push({
            last_name: last_name.value,
            weight: weight.value,
            height: height.value,
            name: name.value,
        });


        elements_html.data_result.innerHTML += `
            <p>
                <br />- Nome:      ${name.value} 
                <br />- Sobrenome: ${last_name.value} 
                <br />- Peso:      ${weight.value} 
                <br />- Altura:    ${height.value}
            </p>
        `;

        elements_html.data_last_name.value = '';
        elements_html.data_height.value = '';
        elements_html.data_weight.value = '';
        elements_html.data_name.value = '';
    };

    elements_html.data_form.addEventListener('submit', receiveFormEvent);
};

startApp();