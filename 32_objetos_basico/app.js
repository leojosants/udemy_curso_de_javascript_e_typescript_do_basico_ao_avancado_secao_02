function startApp() {
    function example01() {
        const name_01 = 'Leonardo';
        const lastname_01 = 'Santos';
        const age_01 = 39;

        const name_02 = 'João';
        const lastname_02 = 'Oliveira';
        const age_02 = 49;
        example01();
    };

    function example02() {
        const person_01 = {
            name_01: 'Leonardo',
            lastname_01: 'Santos',
            age_01: 39,
        };

        const person_02 = {
            name_02: 'João',
            lastname_02: 'Oliveira',
            age_02: 49,
        };

        console.log('\n', person_01);
        console.log('\n', person_02);
        example02();
    };

    function example02() {
        function createPerson(name, lastname, age) {
            return {
                name,
                lastname,
                age,
            };
        };

        const person_01 = createPerson('Leonardo', 'Santos', 39);
        const person_02 = createPerson('João', 'Oliveira', 49);

        console.log('\n', person_01);
        console.log('\n', person_02);
        example02();
    };

    function example03() {
        const person_01 = {
            first_name: 'Leonardo',
            lastname: 'Santos',
            age: 39,
            
            introduceYourself() { 
                console.log(`\nOlá, Meu nome é ${this.first_name} ${this.lastname} e tenho ${this.age} anos.`);
            },

            haveBirthday() { 
                this.age++;
                console.log(`Fiz aniversário, agora tenho ${this.age} anos.`);
            },
        };

        person_01.introduceYourself();
        person_01.haveBirthday();
    };

    example03();
};

startApp();