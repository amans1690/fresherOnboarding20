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


//XHR Example
const url = 'json/jsonExample.json';
const xhr = (function(url){
    const requestListener = function(){
        var data = JSON.parse(this.responseText);
        console.log(data);
    };
    
    const requestError = function(error){
        console.log('We have an issue ', error);
    };
    return {
        send: function(){
            var request = new XMLHttpRequest();
            request.onload = requestListener;
            request.onerror = requestError;
            request.open('get', url, true);
            request.send();
        }
    };
})(url);

const fetchWrapper = (function(url){
    return {
        fetch: function(){
            window.fetch(url).then(function(data){
                console.log(data);
            }).catch(function(error){
                console.log('We have an issue ', error);
            });
        }
    };
})(url);




