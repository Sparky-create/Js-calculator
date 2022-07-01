var num1 = parseInt(prompt("Input the first operand (Eg. 123..)"))
var opr = prompt("Input an operator (Eg. +,-,/,*)")
var num2 = parseInt(prompt("Input the second operand (Eg. 123..)"))


if(opr == "+")
{
    alert(num1 + num2)
}else if(opr == "-")
{
    alert(num1 - num2)
}else if(opr == "*")
{
    alert(num1 * num2)
}else if(opr == "/")
{
    alert(num1 / num2)
}