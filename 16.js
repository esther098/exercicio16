
function vermelho(){
    document.body.style.backgroundColor = 'red';
}
function azul(){
    document.body.style.backgroundColor = 'blue';
}
function roxo(){
    document.body.style.backgroundColor = 'purple';
}
function rosa(){
    document.body.style.backgroundColor = 'pink';
}




document.getElementById("ver").addEventListener("click", vermelho);
document.getElementById("azul").addEventListener("click", azul);
document.getElementById("rosa").addEventListener("click", rosa);
document.getElementById("roxo").addEventListener("click", roxo);
