import convertirFizzBuzz from "./fizzbuzz";

describe ("Fizzbuzz", () => {
    it("deberia convertir un numero que no es multiplo de 3 ni 5 ", () => {
        expect(covertirFizzBuzz(1)).toEqual("1");
    });

    it("deberia convertir un numero que no es multiplo de 3 ni 5 ", () => {
        expect(covertirFizzBuzz(4)).toEqual("4");
    });

    // numero multiplo de 3 ejem 3 -> 'Fizz'
    it("deberia convertir un numero que es multiplo de 3 ", () => {
        expect(covertirFizzBuzz(3)).toEqual("Fizz");
    });


    // numero multiplo de 5 ejem 5 -> 'Buzz'
    it("deberia convertir un numero que es multiplo de 5 ", () => {
        expect(convertirFizzBuzz(5)).toEqual("Buzz");
    });

});

