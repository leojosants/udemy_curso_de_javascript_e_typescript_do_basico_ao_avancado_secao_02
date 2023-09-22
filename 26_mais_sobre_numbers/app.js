function startApp() {
    // string
    function example_01() {
        let number_1 = 1;
        let number_2 = 2.5;
        console.log(number_1.toString() + number_2);
        console.log(typeof number_1);
        number_1 = number_1.toString();
        console.log(typeof number_1);
        example_01();
    };

    // binary
    function example_02() {
        let number_1 = 1500;
        console.log(number_1.toString(2));
        example_02();
    };

    // number formatting
    function example_03() {
        let number_1 = 10.89354758500;

        console.log(number_1);
        console.log(number_1.toFixed(2));
        example_03();
    };

    // check if it is a number
    function example_04() {
        let number_1 = 10;
        let number_2 = 10.5;

        // console.log(number_1);
        // console.log(number_2);
        console.log(Number.isInteger(number_1));
        console.log(Number.isInteger(number_2));
        example_04();
    };

    // 
    function example_05() {
        let number_1 = 10;
        let temporary_1 = number_1 * 'teste';
        let temporary_2 = number_1 * '5'; // BE CAREFUL WHEN PERFORMING OPERATIONS BETWEEN STRING AND NUMBER

        console.log(Number.isNaN(temporary_1));
        console.log(Number.isNaN(temporary_2));
        example_05();
    };

    // imprecision
    function example_06() {
        let number_1 = 0.7;
        let number_2 = 0.1;

        number_1 += number_2;
        number_1 += number_2;
        number_1 += number_2;
        number_1 += number_2;
        number_1 += number_2;
        number_1 += number_2;
        number_1 += number_2;
        number_1 += number_2;
        number_1 += number_2;
        number_1 += number_2;
        number_1 += number_2;
        number_1 += number_2;
        number_1 += number_2;

        console.log(number_1);

        // number_1 = parseFloat(number_1.toFixed(2));
        number_1 = Number(number_1.toFixed(2));

        console.log(number_1);
        console.log(Number.isInteger(number_1));
        example_06();
    };

    // imprecision
    function example_07() {
        let number_1 = 0.7;
        let number_2 = 0.1;

        number_1 = ((number_1 * 100) + (number_2 * 100)) / 100;
        number_1 = ((number_1 * 100) + (number_2 * 100)) / 100;
        number_1 = ((number_1 * 100) + (number_2 * 100)) / 100;

        console.log(number_1);

        console.log(Number.isInteger(number_1));
    };
    example_07();

};
startApp(); 