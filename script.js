$(document).ready(function(){
    
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    })
})

window.onload = () => {
    const scrollBtn = document.querySelector('.isShowBtn')
    window.onscroll = () =>{
        if(window.scrollY > 500){
            scrollBtn.classList.remove('hide')
        }else if(window.scrollY < 500){
            scrollBtn.classList.add('hide')
        }
    };

    scrollBtn.onclick = () =>{
        window.scrollTo(0,0);
    };
};