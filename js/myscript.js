function FizzBuzzGen() {
    // inserisco contenuto (vuoto) in main
    document.getElementById("main").innerHTML = " ";
    // input del valore dal hmtl
    var generateNum = document.getElementById("generate_input").value;
    // aggiungo +1 al valore 
    generateNum++;
    console.log(generateNum);
    for (let i = 1; i < generateNum ; i++) {
        const number = i;

        // creo elemento div
        const divHTML = document.createElement("div");
        // inserisco contenuto in div
        divHTML.innerHTML = number;
        // inserisco classe 
        divHTML.classList.add("normal");
        // inserisco div nel main
        document.getElementById("main").appendChild(divHTML);

        if ((number%3 == 0) && (number%5 == 0)) {
            console.log(number+"fizzbuzz");
            divHTML.innerHTML = "fizzbuzz";
            divHTML.classList.add("fizzbuzz");
        }
        else if (number%5 == 0) {
            console.log(number+"buzz");
            divHTML.innerHTML = "buzz";
            divHTML.classList.add("buzz");
        }
        else if (number%3 == 0) {
            console.log(number+"fizz");
            divHTML.innerHTML = "fizz";
            divHTML.classList.add("fizz");
        }
        else {
            console.log(number);
        }
    }    
}