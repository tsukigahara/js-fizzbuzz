for (let i = 1; i < 101; i++) {
    const number = i;

    if ((number%3 == 0) && (number%5 == 0)) {
        console.log(number+"fizzbuzz")

    }
    else if (number%5 == 0) {
        console.log(number+"buzz")
        
    }
    else if (number%3 == 0) {
        console.log(number+"fizz")
    }
    else {
        console.log(number);
    }


    
}