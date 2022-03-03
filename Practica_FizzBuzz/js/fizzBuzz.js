function FizzBuzz(num) {

    for (let i = 1; i <= num; i++) {
        if (((i % 3) == 0) && ((i % 5) == 0)) {
            document.write(i + ".-" + " " + "FizzBuzz");
            document.write("<br>");
        } else if ((i % 3) == 0) {
            document.write(i + ".-" + " " + "Fizz");
            document.write("<br>");
        } else if ((i % 5) == 0) {
            document.write(i + ".-" + " " + "Buzz");
            document.write("<br>");
        } else {
            document.write(i + ".-");
            document.write("<br>");
        }

    }
}

FizzBuzz(100);