function startApp() {
    // displaying an array
    function example_01() {
        const studies = ['AlunoA', 'AlunoB', 'AlunoC'];

        console.log(studies);
        console.log(studies[0]);
        console.log(studies[1]);
        console.log(studies[2]);
        example_01();
    };

    // changing elemento in the array
    function example_02() {
        const studies = ['AlunoA', 'AlunoB', 'AlunoC'];

        console.log(studies);

        studies[0] = 'AlunoC';

        console.log(studies);
        example_02();
    };

    // adding element at the end
    function example_03() {
        const studies = ['AlunoA', 'AlunoB', 'AlunoC'];

        console.log(studies);

        studies.push('AlunoD');

        console.log(studies);
        example_03();
    };

    // adding element in specific position
    function example_04() {
        const studies = ['AlunoA', 'AlunoB', 'AlunoC'];

        console.log(studies);

        studies[3] = 'AlunoD'; // If the position exists, this area is overwritten.

        console.log(studies);
        example_04();
    };

    // adding element at the beginning
    function example_05() {
        const studies = ['AlunoA', 'AlunoB', 'AlunoC'];

        console.log(studies);

        studies.unshift('AlunoD');

        console.log(studies);
        example_05();
    };

    // remove element at the beginning
    function example_06() {
        const studies = ['AlunoA', 'AlunoB', 'AlunoC'];

        console.log(studies);

        studies.shift();

        console.log(studies);
        example_06();
    };

    // adding element at the end
    function example_07() {
        const studies = ['AlunoA', 'AlunoB', 'AlunoC'];

        console.log(studies);

        studies.pop();

        console.log(studies);
        example_07();
    };

    // deletes only the element keeping the index
    function example_08() {
        const studies = ['AlunoA', 'AlunoB', 'AlunoC'];

        console.log(studies);

        delete studies[1];

        console.log(studies);
        example_08();
    };

    // accessing non-existent element
    function example_09() {
        const studies = ['AlunoA', 'AlunoB', 'AlunoC'];

        console.log(studies);

        console.log(studies[50]);
        example_09();
    };

    // slice
    function example_10() {
        const studies = ['AlunoA', 'AlunoB', 'AlunoC'];

        console.log(studies);

        studies.push('AlunoD');
        studies.push('AlunoE');

        console.log(studies);
        console.log(studies.slice(0, 3));
        console.log(studies.slice(0, -2));
        example_10();
    };

    // instance
    function example_11() {
        const studies = ['AlunoA', 'AlunoB', 'AlunoC'];

        console.log(studies);
        console.log(typeof studies);
        console.log(studies instanceof Array);
    };
    example_11();
};
startApp();