// FizzBuzz Problem
// if num is div by 3 & 5 both print FizzBuzz
// if num is div by 3 only print Fizz
// if num is div by 5 only print Buzz
// if not div by both print Number
// Write a loop to print this series from 1 to 200

for (let i = 1; i <= 200; i++) {

    if (i % 3 == 0 && i % 5 == 0) 
    {
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0)
    {
        console.log("Fizz");
    }
    else if (i%5==0)
    {
        console.log("Buzz");
    }
    else 
    {
        console.log(i);
    }
    
}