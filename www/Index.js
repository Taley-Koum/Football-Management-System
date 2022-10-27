

/*function change(id){
    let container = document.querySelector('#container_main_section');
    const div = document.getElementById(id);
    div.style.display = "block";
    const clone = div.cloneNode(true);
    div.style.display = "none";
    while (container.firstChild) container.firstChild.remove();
    container.replaceWith(clone); 
    
};

*/


//JAVASCRIPT FOR RESPONSIVE MATXHDAY SLIDER
function change(id){
    let main_cont = document.querySelector('#container_main_section');
    const div = document.getElementById(id);
    main_cont.innerHTML = div.innerHTML;
} 

const scroller_element = document.querySelectorAll('.scroller_pass');
for(let i=0; i<scroller_element.length; i++){
    scroller_element[i].addEventListener('click', function(){
        scroller_element.forEach(function(li){
            li.classList.remove('active');
        })
        this.classList.add('active');
    })
}

const filterDiv = document.querySelector('#filterDiv');
const button = document.querySelector('#button_club_filter');
const club_display = document.querySelector('#club_display');
const svg = document.querySelector('#button_club_filter span')

// button.addEventListener('click', function(){
//     if(club_display.style.display === 'none'){
//         club_display.style.display = 'block';
//         filterDiv.style.height = '556px';
//         button.style.color = 'deepblue';
//         button.innerHTML = 'Hide'
//     }
//     else{
//         club_display.style.display = 'none';
//         filterDiv.style.height = '111px';
//     }
// });


//JAVASCRIPT FOR RESPONSIVE CLUB FILTER BUTTON 
function display(){
    if(club_display.style.display === 'none'){
        club_display.style.display = 'block';
        filterDiv.style.height = '556px';
        button.style.color = 'deepblue';
        svg.innerHTML = 'Hide';
    }
    else{
        club_display.style.display = 'none';
        filterDiv.style.height = '111px';
        svg.innerHTML = 'Club';
    }
};


//JAVASCRIPT FOR RESPONSIVE SCROLLER FOR MATCHDAY

const svg_right = document.querySelector('#svg_scroll_right');
const svg_left = document.querySelector('#svg_scroll_left');
const matches_played = document.querySelector('#matches_played_container');
const tmp = document.querySelector('#to_matches_played');
const scroller = document.querySelector('#scroller_scroller');

sectionIndex = 0;
svg_left.addEventListener('click',()=>{
    sectionIndex = (sectionIndex < scroller_element.length) ? sectionIndex + 1 : 15;
    scroller.style.transform = 'translate(' + -(sectionIndex) + 1.5 + '%)'; 
    if(sectionIndex > 5){
        sectionIndex = -1;
    }
})


svg_right.addEventListener('click',()=>{
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    scroller.style.transform = 'translate(' + -(sectionIndex) + 1 + '%)'; 
    // if(sectionIndex > 5){
    //     sectionIndex = 1;
    // }
})

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























// svg_left.addEventListener('click', () => {
//     moveToNextSlide();
// });

// svg_right.addEventListener('click', () =>{
//     moveToPrevSlide();
// });

// function updPosition(){
//     for(slide of scroller_element){
//         console.log(slide);
//     }
// }

// function moveToNextSlide(){
//     updPosition();
//     if(position === scroller_element.length){
//         position = 0;
//     }
//     else{
//         position++;
//     }
// };
// function moveToPrevSlide(){
//     if(position === 0){
//         position = 0;
//     }
//     else{
//         position--;
//     }
// }
