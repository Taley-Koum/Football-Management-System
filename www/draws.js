//show amd hide responsive nav bar
const miniDiv = document.querySelector('#mini_div');
const ul = document.querySelector('.udav');
ul.style.height = '68px';
miniDiv.style.display = 'none';
const navigation = document.querySelector('.navigation');
const logoArea = document.querySelector('.logo_area');
const navImg = document.querySelector('.navImage');
const cancel = document.querySelector('.cancel');
cancel.style.display = 'none';
//function to show and hide mini div
function navChange(){
    if(miniDiv.style.display == 'none'){
        miniDiv.style.display ='flex';
        ul.style.height = '63vh'
        navImg.src = "cancel-svgrepo-com.png";
        navImg.style.width = '45'
    }
    else{
        miniDiv.style.display = 'none';
        ul.style.height = '68px'
        navImg.src = "menu.png"
        navImg.style.width = '31'
    }
}