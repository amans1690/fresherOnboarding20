const buttons = document.querySelectorAll('#buttons li');
const alertIndex = function(index){
    return function(e){
        alert((index+1) + ' ' + e.target.innerHTML + ' Clicked!!');
    }
}
for(var i=0; i<buttons.length;i++){
    buttons[i].addEventListener('click', alertIndex(i));
}