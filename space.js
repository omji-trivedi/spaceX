window.addEventListener("scroll", () => {

    let div2 = document.querySelector(".div-2");
    let div2position = div2.getBoundingClientRect().top;
    let div3 = document.querySelector(".div-3");
    let div3position = div3.getBoundingClientRect().top;
    let div4 = document.querySelector(".div-4");
    let div4position = div4.getBoundingClientRect().top;

    let screenposition = window.innerHeight;

    if (div2position < screenposition) {
        div2.classList.add("active");
    }
    if (div3position < screenposition) {
        div3.classList.add("active");
    }
    if (div4position < screenposition) {
        div4.classList.add("active");
    }
})


var prevscroll = window.pageYOffset;
var header = document.querySelector(".header");
var black = document.querySelector(".black");

window.addEventListener("scroll", () => {
    var currentscroll = window.pageYOffset;
    let screenposition = window.innerHeight;

    bar1.classList.remove("active");
    bar2.classList.remove("active");
    bar3.classList.remove("active");
    hdn.classList.remove('active');
    hdnelmn.classList.remove('active');

    if (prevscroll > currentscroll) {
        black.classList.add("active");
        header.classList.add("active");
        if (currentscroll < 570) {
            black.classList.remove("active");
        }
    } else {
        black.classList.remove("active");
        header.classList.remove("active");
    }
    prevscroll = currentscroll;
})


const bar = document.querySelector(".hambur");
const bar1 = document.querySelector(".bar-1");
const bar2 = document.querySelector(".bar-2");
const bar3 = document.querySelector(".bar-3");
const hdn = document.querySelector(".hidden");
const hdnelmn = document.querySelector(".elm");

bar.addEventListener("click", () => {
    console.log('done');
    bar1.classList.toggle("active");
    bar2.classList.toggle("active");
    bar3.classList.toggle("active");
    hdn.classList.toggle('active');
    hdnelmn.classList.toggle('active');
})