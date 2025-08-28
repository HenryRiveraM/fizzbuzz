
function convertirFizzBuzz(n) {
    // multiplo de 3 y 5
    if (n % 3 === 0 && n % 5 === 0) {
        return "FizzBuzz";
    }

    // multiplo de 3
    if (n % 3 === 0) {
        return "Fizz";
    }

    // multiplo de 5
    if (n % 5 === 0) {
        return "Buzz";
    }

    // no es multiplo de 3 ni 5
    return n + "";
}

export default convertirFizzBuzz;