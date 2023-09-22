function startApp() {
    // round the value down
    function example_01() {
        let number_1 = 9.54578;
        let number_2 = Math.floor(number_1);

        console.log(number_1);
        console.log(number_2);
        example_01();
    };

    // round the value up
    function example_02() {
        let number_1 = 9.54578;
        let number_2 = Math.ceil(number_1);

        console.log(number_1);
        console.log(number_2);
        example_02();
    };

    // Rounds the nearest value above half - 0,5... = 1
    function example_03() {
        let number_1 = 9.54578;
        let number_2 = Math.round(number_1);

        console.log(number_1);
        console.log(number_2);
        example_03();
    };

    // max and min value
    function example_04() {
        console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9));
        console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9));
        example_04();
    };

    // random
    function example_05() {
        console.log(Math.round(Math.random() * (10 - 5) + 5));
        example_05();
    };

    // PI
    function example_06() {
        console.log(Math.PI);
        example_06();
    };

    // pow
    function example_07() {
        console.log(Math.pow(2, 2));
        console.log(2 ** 2);
        example_07();
    };

    // sqrt
    function example_08() {
        console.log(Math.sqrt(25));
        console.log(25 ** (1 / 2));
        console.log(25 ** 0.5);
        example_08();
    };

    // sqrt
    function example_09() {
        console.log(10 / 0);
    };
    example_09();
};
startApp();