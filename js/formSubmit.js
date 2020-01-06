const paramUtils = (function(){
    const getAllQueryParameters = function(){
        const urlParams = {};
        if(!window.location.search){
            return urlParams;
        }
    
        const paramStr = window.location.search;
        const splitParts1 = paramStr.slice(1).split('&');
        splitParts1.forEach(function(param){
            const splitParam = param.split('=');
            if(splitParam.length = 2){
                urlParams[splitParam[0]] = splitParam[1];
            }
        });
        return urlParams;
    };
    return {
        getAllQueryParameters: getAllQueryParameters
    };
})();

const formSubmit = (function(paramUtils){
    const welcomeNode = document.getElementById('welcome');
    const queryParams = paramUtils.getAllQueryParameters();

    const createQueryList = function(){
        const ul = document.createElement('ul');
        for(param in queryParams){
            const li = document.createElement('li');
            li.innerHTML = param + ' = ' + queryParams[param];
            ul.appendChild(li);
        }
        welcomeNode.appendChild(ul);
    };

    return {
        init: function(){
            welcomeNode.innerHTML = 'Welcome to OLX!! Here are the query params';
            createQueryList();
        }
    }

})(paramUtils);


formSubmit.init();