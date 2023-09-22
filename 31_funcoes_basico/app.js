function startApp() {
    // 
    function example01() {
        function greeting(name) {
            console.log(`Boa noite, ${name}!`);
        };

        greeting('Leonardo');
        greeting('João');
        example01();
    };

    // 
    function example02() {
        function greetingFunc(name) {
            return `Boa noite, ${name}!`;
        };

        const greeting = greetingFunc('Leonardo');

        console.log(greeting);
        example02();
    };

    // 
    function example03() {
        function sum(x, y) {
            const result = x + y;
            return result;
        };

        const result = sum(2, 3);
        console.log(result);
        example03();
    };

    // 
    function example04() {
        function sum(x = 1, y = 1) {
            const result = x + y;
            return result;
        };

        console.log(sum());
        console.log(sum(2));
        example04();
    };

    // 
    function example05() {
        const square = function (n) {
            return Math.sqrt(n);
        };

        console.log(square(25));
        example05();
    };

    // 
    function example06() {
        const square = n => Math.sqrt(n);

        console.log(square(25));
    };
    example06();
};
startApp();