import convertirFizzBuzz from "./fizzbuzz";

describe("Fizzbuzz", () => {
    // numero que no es multiplo de 3 ni 5 ejem 1 -> '1'
    it("deberia convertir un numero que no es multiplo de 3 ni 5 ", () => {
        expect(convertirFizzBuzz(1)).toEqual("1");
    });

    // numero que no es multiplo de 3 ni 5 ejem 4 -> '4'
    it("deberia convertir un numero que no es multiplo de 3 ni 5 ", () => {
        expect(convertirFizzBuzz(4)).toEqual("4");
    });

    // numero multiplo de 3 ejem 3 -> 'Fizz'
    it("deberia convertir un numero que es multiplo de 3 ", () => {
        expect(convertirFizzBuzz(3)).toEqual("Fizz");
    });

    // numero multiplo de 5 ejem 5 -> 'Buzz'
    it("deberia convertir un numero que es multiplo de 5 ", () => {
        expect(convertirFizzBuzz(5)).toEqual("Buzz");
    });

    // numero multiplo de 3 y 5 ejem 15 -> 'FizzBuzz'
    it("deberia convertir un numero que es multiplo de 3 y 5 ", () => {
        expect(convertirFizzBuzz(15)).toEqual("FizzBuzz");
    });
});