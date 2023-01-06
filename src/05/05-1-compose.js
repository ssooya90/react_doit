const multiplication = (a,b) => a * b;
const add = (a,b) => a + b;

const multiplicationX = x => a => multiplication(a, x)
const addX = x => a => add(x, a);

const addFour = addX(4);
const multiplicationTwo = multiplicationX(2);
const multiplicationThree = multiplicationX(3);
const calcu = x => addFour(multiplicationThree(multiplicationTwo(x)));


// 커링의 가독점 단점을 보완한 컴포즈 함수

[multiplicationTwo, multiplicationThree, addFour].reduce(
    function (prevFunc, nextFunc){
        return function(value){
            return nextFunc(prevFunc(value));
        }
    },
    function(k) { return k}
);

function compose(funcArr){
    return funcArr.reduce(
        function (prevFunc, nextFunc){
            return function(value){
                return nextFunc(prevFunc(value));
            }
        },
        function(k) { return k}
    )
}

const formulaWithCompose = compose[multiplicationTwo, multiplicationThree, addFour];
console.log(formulaWithCompose(10))