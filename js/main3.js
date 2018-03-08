//btn1-----------------------------------
let btn1 = document.querySelector('.btn1'),
    box = document.querySelector('.box'),
    move = document.querySelector('.move1');
    moveWidth = move.offsetWidth;
    box1Width = box.offsetWidth-moveWidth-11;
    box.style.borderWidth = 30

btn1.addEventListener('click', function(){
    animateLeft(1000,box1Width);
});

function animateLeft(duration, end){
    const move = document.querySelector('.move1');
    const frameRate = 1000/60;
    const perFrame = end/(duration/frameRate);

    function update(){
        const currentLeft = parseInt(getComputedStyle(move).left,10);
        move.style.left = currentLeft + perFrame + 'px';
        if (parseInt(getComputedStyle(move).left,10) <= end){
            setTimeout(update,frameRate);
        }
    }
    setTimeout(update,frameRate)
}


//btn2-----------------------------------
let btn2 = document.querySelector('.btn2'),
    move2 = document.querySelector('.move2');
move2Width = move2.offsetWidth;
box2Width = box.offsetWidth-moveWidth-11;
box.style.borderWidth = 30
btn2.addEventListener('click', function(){
    animateLeft2(1000,box2Width);
});

function animateLeft2(duration, end){
    const move2 = document.querySelector('.move2'),
          frameRate = 1000/60,
          perFrame = end/(duration/frameRate);
    function update(){
        const currentWidth = move2.offsetWidth;
        move2.style.width = currentWidth + perFrame + 'px';
        if (currentWidth < end){
            setTimeout(update,frameRate);
        }
    }
    setTimeout(update,frameRate)
}
//btn3-----------------------------------
$('.btn3').on('click', function(){
    $('.move3').animate({
        width: $('.box').width(),
        "easing": "easein"
    },{
        duration : 3000
    })
})