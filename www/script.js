
//highlight section scroller
right_scroller = document.querySelector('#right_highlight_svg');
left_scroller = document.querySelector('#left_highlight_svg');
highlight_scroller = document.querySelector('#highlight_scroler');
hl = document.querySelectorAll('.high_light');
const move = document.querySelector('#move_highlight');
highlight_index = 0;
right_scroller.addEventListener('click', ()=>{
    highlight_index = (highlight_index < hl.length) ? highlight_index + 1 : 6
    move.style.transform = 'translate(' + -(highlight_index) + 0.4 + '%)';
});

left_scroller.addEventListener('click', ()=>{
    highlight_index = (highlight_index > 0) ? highlight_index - 1 : 0
    move.style.transform = 'translate(' + -(highlight_index) + 0.4 + '%)';
});


//featured news section 
const swiper = document.querySelectorAll('.transition_span span');
for(let i=0; i<swiper.length; i++){
    swiper[i].addEventListener('click', function(){
        swiper.forEach(function(li){
            li.classList.remove('focus');
        })
        this.classList.add('focus');
    })
}

// change featured news on click (time delay included)//

const news = document.querySelectorAll('#topNews_container > div')

function influence(id){
    let container = document.querySelector('#topNews');
    const id_element = document.getElementById(id);
    container.innerHTML = id_element.innerHTML;
};


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


