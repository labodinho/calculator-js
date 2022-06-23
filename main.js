//calculator using prompt

var operator = prompt("Enter operator (+ or - or * or /): ")
var firstDigit = parseInt(prompt("Enter First Number: "))
var secondDigit = parseInt(prompt("Enter Second Number: "))

if (operator == "+"){
    prompt('Answer = ' + firstDigit + secondDigit)
} else if (operator == "-") {
    prompt('Answer = ' + firstDigit - secondDigit)
}  else if (operator == "/") {
    prompt('Answer = ' + firstDigit / secondDigit)
}  else if (operator == "*") {
    prompt('Answer = ' + firstDigit * secondDigit)
} else prompt ("You've not performed any operation/ invalid input(s)")