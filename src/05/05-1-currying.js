function multiply(a, b){
    return a * b;
}

function multiplyTwo(a){
    return multiply(a, 2)
}

// function multiplyX(x) {
//     return function(a) {
//         return multiply(a, x);
//     }
// }

const multiplayX = x => a => multiply(a, x);

const multiflyThree = multiplayX(3);
const multiflyFour = multiplayX(4);

const result1 = multiflyThree(3);
const result2 = multiflyFour(4);


function testFunction(a,b,c){  // 고정할 인자를 먼저 받는다
    return function(x){ // 받을 변수를 선택
        return ((x * a) * b) + c;
    }
}

function testFunction2(a,b){
    return function(x,y){
        return ((a+x) + (b+y));
    }
}

const equation = (a,b,c) => x => ((x * a) * b) + c;

const formula = equation(2,3,4);
console.log(formula)
const x = 10;
const result = formula(10);

const test1 = testFunction(2,3,4)
const test2 = testFunction2(1,2);

console.log(test1(10))
console.log(test2(9 , 8))


const multiplication = (a,b) => a * b;
const add = (a,b) => a + b;


const multiplicationX = x => a => multiplication(a, x)
const addX = x => a => add(x, a);

const addFour = addX(4);
const multiplicationTwo = multiplicationX(2);
const multiplicationThree = multiplicationX(3);
const calcu = x => addFour(multiplicationThree(multiplicationTwo(x)));


const result3 = calcu(2)
console.log(result3)

// ((2*2) * 3) + 4
// (4 * 3) + 4

// ((1*2) * 3) + 4

const calcu2 = x => multiplicationTwo(multiplicationThree(addFour(x)))
const result4 = calcu2(2);
console.log(result4);

// ((x + 4) * 3 ) * 2

// 커링의 가독점 단점을 보완한 컴포즈 함수

[multiplicationTwo, multiplicationThree, addFour].reduce(
    function (prevFunc, nextFunc){
        return function(value){
            return nextFunc(prevFunc(value));
        }
    },
    function(k) { return k}
);







