function home(){
    window.scrollTo(0,0);
}
function about(){
    window.scrollTo(0,500);
}
function serv(){
    window.scrollTo(0,900);
}
function pot(){
    window.scrollTo(0,1300);
}
function cont(){
    window.scrollTo(0,2000);
}
if(window.innerWidth<=1000){
function show(){
    document.getElementById('head2').style.display='flex';
    document.getElementById('x').style.display='flex';
    document.getElementById('pitch').style.display='none';
}
function remove(){
    document.getElementById('head2').style.display='none';
    document.getElementById('x').style.display='none';
    document.getElementById('pitch').style.display='flex';
}
function home(){
    window.scrollTo(0,0);
    remove();
}
function about(){
    window.scrollTo(0,430);
    remove();
}
function serv(){
    window.scrollTo(0,900);
    remove();
}
function pot(){
    window.scrollTo(0,1850);
    remove();
}
function cont(){
    window.scrollTo(0,4300);
    remove();
}
}