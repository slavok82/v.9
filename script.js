const arr= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numberInput = () => {
  const num1 = +prompt('Enter first number');
  const num2 = +prompt('Enter second number');
  if (isNaN(num1) || isNaN(num2) || !num1 || !num2) {    
    return numberInput();
  }
  const min = num1 > num2 ? num2 : num1;
  const max = num1 > num2 ? num1 : num2;
  return { min, max };
}
const minMax = (arr, { min, max }) => {
    function isBetween(min, max) {
      return (currentNum) => {
        return currentNum >= min && currentNum <= max;
      }
    }
    return arr.filter(isBetween(min, max));
}
console.log(minMax(arr, numberInput()));
//--
const sum = (numb, numb2) => numb + numb2;
const diff = (numb, numb2) => numb - numb2;
const mult = (numb, numb2) => numb * numb2;  
const div = (numb, numb2) => numb / numb2; 
const pow = (numb, numb2) => Math.pow(numb, numb2); 
const operators = {
    "+": sum,
    "-": diff,
    "*": mult,
    "/": div,
    "pow": pow,
}
function calculations() {
    const operations = prompt("Enetr operation   +  -  *  /  pow");
    let result = null;
    if (operations === null && operations !== operators[operations])  {
        return false;
    } 
    else {
        const firstNumb = prompt('enter first number!');
        const secondNumb = prompt('enter second number!');
            if (!isNaN(+firstNumb) && !isNaN(+secondNumb)) {
                result = operators[operations](+firstNumb, +secondNumb);
            }
        let resultStr = '';
        resultStr = `${firstNumb} ${operations} ${secondNumb} = ${result}`;
        alert(resultStr);                    
    }
    if (result) {
        const isAgree = confirm('do you want to do any other calculations?');
        if (isAgree) {
            calculations();
        }                   
    }
}
calculations();
//--
const products = [
    {name: 'Product 1', quantity: 10, price: 25},
    {name: 'Product 2', quantity: 3, price: 55},
    {name: 'Product 3', quantity: 22, price: 35},
];
function sortByField (fieldName, sortType) {
    if (sortType === 'asc') {
      return (a, b) => a[fieldName] - b[fieldName];
    } else if (sortType === 'desc'){
      return (a, b) => b[fieldName] - a[fieldName];
    };
};  
console.log(products.sort(sortByField('price', 'desc')));



