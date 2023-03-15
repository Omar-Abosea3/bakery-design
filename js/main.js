var myNav = document.getElementById('mynav');
window.onscroll = function () { 
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("bg-transparent");
    } 
    else {
        myNav.classList.add("bg-transparent");
        myNav.classList.remove("nav-colored");
    }

    if($(window).scrollTop() >= $('#About').offset().top){
        $('.toTop').removeClass('d-none');
    }else{
        $('.toTop').addClass('d-none');
    }
    if($('html,body').scrollTop() >= $('#Home').offset().top){
        $('nav ul a').css('color','#8E7754');
        $('nav ul a').not($('nav ul a').eq(0)).css('color','white')
    }if($('html,body').scrollTop()>=$('#About').offset().top){
        $('nav ul a').css('color','#8E7754');
        $('nav ul a').not($('nav ul a').eq(1)).css('color','white')
    }if($('html,body').scrollTop()>=$('#OurOffer').offset().top){
        $('nav ul a').css('color','#8E7754');
        $('nav ul a').not($('nav ul a').eq(2)).css('color','white')
    }if($('html,body').scrollTop()>=$('#Gallary').offset().top){
        $('nav ul a').css('color','#8E7754');
        $('nav ul a').not($('nav ul a').eq(3)).css('color','white')
    }if($('html,body').scrollTop()>=$('#Blog').offset().top){
        $('nav ul a').css('color','#8E7754');
        $('nav ul a').not($('nav ul a').eq(4)).css('color','white')
    }if($('html,body').scrollTop()>=$('#Contact').offset().top){
        $('nav ul a').css('color','#8E7754');
        $('nav ul a').not($('nav ul a').eq(5)).css('color','white')
    }
};

$('nav ul a').click(function(){
    let sectionOffsetTop=$($(this).attr('href')).offset().top;
    $('html,body').animate({scrollTop:sectionOffsetTop},2000);
 })

$('.toTop').click(function(){
    $('html,body').animate({scrollTop:0},2000);
 })
