function fresherOnboarding(){
    var haha = 1;
    return function(a){
        return haha+a;
    }
};

var haha = fresherOnboarding();
console.log('yup: ', haha());