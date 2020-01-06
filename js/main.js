//Closure Example
const makeCounter = function(){
    let counter = 0;
    return function(){
        return counter++;
    };
};

let counter = makeCounter();
counter();


//Currying Example
const sum = function(a){
    return function(b){
        return function(c){
            return a + b +c;
        };
    };
};

sum(1)(2)(3);


