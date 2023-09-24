function startApp() {
    function example01() {
        let first_name = 'Leonardo';

        console.log(first_name);

        first_name = 'José';

        console.log(first_name);
        example01();
    };

    function example02() {
        let first_name = 'keonardo';

        console.log(first_name);

        first_name[0] = 'l'.toUpperCase(); // imutável

        console.log(first_name);
        example02();
    };

    function example03() {
        let a = 'A';
        let b = a;

        console.log('\n' + a, b);

        a = 'D';

        console.log(a, b);
        example03();
    };

    function example04() {
        let number_array_01 = [1, 2, 3];
        let number_array_02 = number_array_01;
        let number_array_03 = number_array_02;
        console.log('\n' + number_array_01, number_array_02);

        number_array_01.push(4);
        console.log(number_array_01, number_array_02);

        number_array_02.pop(4);
        console.log(number_array_01, number_array_02);

        number_array_01.push(90);
        console.log(number_array_03);
        example04();
    };

    function example05() {
        let number_array_01 = [1, 2, 3];
        let number_array_02 = [...number_array_01];
        let number_array_03 = number_array_02;
        console.log('\n' + number_array_01, number_array_02);

        number_array_01.push(4);
        console.log(number_array_01, number_array_02);

        number_array_02.pop(4);
        console.log(number_array_01, number_array_02);

        number_array_01.push(90);
        console.log(number_array_03);
        example05();
    };

    function example06() {
        const person_01 = {
            first_name: 'Leonardo',
            last_name: 'Santos',
        };

        const person_02 = {...person_01};
        console.log('\n' + person_02);

        person_01.first_name = 'José';
        
        console.log(person_01);
        console.log(person_02);
    };
    example06();

};
startApp();