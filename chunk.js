
//Recursion in javascript
let myFunc = function () {
    myfunc();
}

//1+2+3+...........+n
//without recursion
let total = 0;
let n = 10;
for (let i = 0; i < n; i++) {
    total += i;
}
console.log(total);
//0+1=1 1+2=3 3+3=6 
//last total + cur.value = cur.total 
//f(n-1) + n = f(n) 

function sum(n) {
    if (n === 0) {
        return 0;
    } else {
        return sum(n - 1) + n;
    }
}
console.log('recursion ', sum(10000));
//sum(3)
//sum(2)+3
//sum(1)+2+3
//sum(0)+1+2+3
//0+1+2+3

console.log("hello")

//solution (n(n+1))/2//using cpu

let l = 100000;

console.log((l * (l + 1)) / 2)