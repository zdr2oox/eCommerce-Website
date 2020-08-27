//---------------------------------------------------------------------------------
const handleMenuToggle = () => {
    const navContainer = document.getElementById('nav-container');
    navContainer.classList.toggle('show-nav');
}

const spoiler = () => {
    $("#triangle").toggleClass("triangle");
    $(".accordionWrapper").toggleClass("spoilerShow");
}

// Header According
var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem ()  {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionItem close';
    }
    if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
    }
}
// ------------------------------------------------------------------------------------
// Navigation Desktop
function showNavD () {
    const navD = document.getElementById('nav-d');
    navD.classList.toggle('visible');
}
//-------------------------------------------------------------------------------------
//Carousel
function carousel (id, obj) {
    if (obj === undefined) {
        // const carousel = document.querySelector(`carousel-img c-img-${id}`);
        $(`.c-img-1`).removeClass("c-visible");
        $(`.c-img-2`).removeClass("c-visible");
        $(`.c-img-3`).removeClass("c-visible");
        $(`.c-img-${id}`).toggleClass("c-visible");        
    } else {
        $(`.mobile > .pop-items-list > li`).addClass("not-visible");
        $(`#${obj}`).removeClass('not-visible')
    }

}
// -------------------------------------------------------------------------------------
//Featured Products Slider 

setInterval(() => {
    fpSliderNext();

}, 5000);

let fpSlides = [];
let currentSlide = 0;

const slider = `
<ul>
<li>
  <img src="/src/img/tile-1.svg" alt="">
  <p>Lorem ipsum dolor sit amet consectetur</p>
  <p class='fp-green'>Awesome</p>
</li>
<li>
  <img src="/src/img/tile-2.svg" alt="">
  <p>Lorem ipsum dolor sit amet consectetur</p>
  <p class='fp-green'>Marketing</p>
</li>
<li>
  <img src="/src/img/tile-3.svg" alt="">
  <p>Lorem ipsum dolor sit amet consectetur</p>
  <p class='fp-green'>Awesome</p>
</li>
<li>
  <img src="/src/img/tile-4.svg" alt="">
  <p>Lorem ipsum dolor </p>
  <p class='fp-green'>Marketing</p>
</li></ul>`

fpSlides.push(slider);
async function fpSliderNext() {

    if(currentSlide+1 >= fpSlides.length) {
        loadSlide();
    } else {
        currentSlide++;
    }
    if (fpSlides[currentSlide] == '<ul></ul>') {
        currentSlide = 0;
    }

    $('.fp-slider').html(fpSlides[currentSlide]);
};

function fpSliderPrev() {
    $('.fp-slider').html( fpSlides[currentSlide > 0? currentSlide-- : currentSlide=0] );
};
//---------------------------------------------------------------------------------------------
// Add to favorite
let favoriteItemsNum = 1;
function addToFavorite () {
    $('#favorite-icon').text(++favoriteItemsNum);
}
//--------------------------------------------------------------------------------------------
// Scroll to top 

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// ----------------------------------------------------------------------------------------------

//  Read More 

function readMore() {
    document.getElementById('read-more').style.display = 'inline';
    document.getElementById('read-more-btn').style.display= 'none';
}
//-----------------------------------------------------------------------------------------------
// Filter 

function toggleFilter() {
    console.log('yep')
    $('#f-cont').toggle( () => {
            $('#f-cont').css( {
                display: 'none'
            });
        }
    )
    let toggleFilter = document.getElementById("toggle-filter");
    if (toggleFilter.innerHTML === "Hide Filter") {
      toggleFilter.innerHTML = "Show Filter";
    } else {
      toggleFilter.innerHTML = "Hide Filter";
    }

}
//current year
setTimeout($(document).ready( () => {
    $(".year").text(new Date().getFullYear());
}), 5000);
//----------------------------------------------------------------------------------------
// changing main img on product page

function changeImg(imgNum) {
    document.getElementById('mainImg').src = `/src/img/pdet${imgNum}.jpg`
}

function changeQuantity(num) {
let quantity = +document.getElementById('pd-num').value;
if(quantity <= 0 && num === -1) num = 0;
else if (quantity > 0) num=num+quantity;
document.getElementById('pd-num').value = num;

}
//--------------------------------------------------------
// spoiler footer
function fSpoiler (props) {
    console.log('open')
    $(`.${props}`).toggleClass("f-open");
}
// -----------------------------------------------------------------------------------------
// Cookies policy dialog 
if(!localStorage.getItem('accept')){
    setTimeout(showDialog, 10000)
}
function showDialog() {
     $('.cookies').removeClass('invisible');
}
function c_close() {
    $('.cookies').addClass('invisible');
}
function c_accept() {
    localStorage.setItem('accept', true);
    c_close();
    console.log('done')
}
//------------------------------------------------------------------------------------




