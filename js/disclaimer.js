var divs = document.getElementsByTagName('div');
for(let i=0; i<divs.length; i++){
    if(divs[i].className == '' && divs[i].id == ''){
        divs[i].remove()
    }
}