let wlSlajdNumer=0;

let strzalkaL= document.querySelector(".strzalkaL");
let strzalkaP= document.querySelector(".strzalkaP");

let kr0 = document.querySelector("#kr0");
let kr1 = document.querySelector("#kr1");
let kr2 = document.querySelector("#kr2");

let slajd0 = document.querySelector("#slajd0");
let slajd1 = document.querySelector("#slajd1");


let ukryjAktywnySlajd=() => {
    let aktywnyElement= document.querySelector(".active");
    aktywnyElement.classList.remove("active");
};

let pokazSlajd=(nrSlajd) =>{
    ukryjAktywnySlajd();
    document.querySelector("#slajd"+ nrSlajd).classList.add("active");
};

let przesunP=()=>{
    if(wlSlajdNumer===2){
        wlSlajdNumer=0;
    }
    else{
        wlSlajdNumer=wlSlajdNumer+1;
    }
    pokazSlajd(wlSlajdNumer);

};
let przesunL=()=>{
    if(wlSlajdNumer===0){
        wlSlajdNumer=2;
    }
    else{
        wlSlajdNumer=wlSlajdNumer-1;
    }
    pokazSlajd(wlSlajdNumer);

};

let wlSlajd0 =()=>{
    wlSlajdNumer=0;
    pokazSlajd(0);
}
let wlSlajd1 =()=>{
    wlSlajdNumer=1;
    pokazSlajd(1);
}
let wlSlajd2 =()=>{
    wlSlajdNumer=2;
    pokazSlajd(2);
}


kr0.addEventListener('click', wlSlajd0);
kr1.addEventListener('click', wlSlajd1);
kr2.addEventListener('click', wlSlajd2);

strzalkaP.addEventListener("click", przesunP);
strzalkaL.addEventListener("click", przesunL);

let back = document.querySelector("#back");
let galeria = document.querySelector("#gornyRzad")

let z1 = document.querySelector("#z1");
let zd1 = document.querySelector("#zd1");
let z2 = document.querySelector("#z2");
let zd2 = document.querySelector("#zd2");
let z3 = document.querySelector("#z3");
let zd3 = document.querySelector("#zd3");
let z4 = document.querySelector("#z4");
let zd4 = document.querySelector("#zd4");
let z5 = document.querySelector("#z5");
let zd5 = document.querySelector("#zd5");
let z6 = document.querySelector("#z6");
let zd6 = document.querySelector("#zd6");
let z7 = document.querySelector("#z7");
let zd7 = document.querySelector("#zd7");
let z8 = document.querySelector("#z8");
let zd8 = document.querySelector("#zd8");
let z9 = document.querySelector("#z9");
let zd9 = document.querySelector("#zd9");
let z10 = document.querySelector("#z10");
let zd10 = document.querySelector("#zd10");
let z11 = document.querySelector("#z11");
let zd11 = document.querySelector("#zd11");
let z12 = document.querySelector("#z12");
let zd12 = document.querySelector("#zd12");
let z13 = document.querySelector("#z13");
let zd13 = document.querySelector("#zd13");
let z14 = document.querySelector("#z14");
let zd14 = document.querySelector("#zd14");
let z15 = document.querySelector("#z15");
let zd15 = document.querySelector("#zd15");

let zoomContainer = document.querySelector("#zoomContainer");
let gornyRzad = document.getElementById('gornyRzad');
let header = document.getElementById('header');

function powiekszZ1(){
    zd1.style.display = "block";
    back.style.display = "block";
    galeria.style.opacity = "0.5";
    zd1.style.opacity = "1";
    galeria.style.opacity = "0.5";
    gornyRzad.classList.add('disabled');
    header.classList.add('disabled');
}

function powiekszZ2(){
    zd2.style.display = "block";
    back.style.display = "block";
    galeria.style.opacity = "0.5";
    zd2.style.opacity = "1";
    gornyRzad.classList.add('disabled');
    header.classList.add('disabled');
}

function powiekszZ3(){
    zd3.style.display = "block";
    back.style.display = "block";
    galeria.style.opacity = "0.5";
    zd3.style.opacity = "1";
    gornyRzad.classList.add('disabled');
    header.classList.add('disabled');
}

function powiekszZ4(){
    zd4.style.display = "block";
    back.style.display = "block";
    galeria.style.opacity = "0.5";
    zd4.style.opacity = "1";
    gornyRzad.classList.add('disabled');
    header.classList.add('disabled');
}

function powiekszZ5(){
    zd5.style.display = "block";
    back.style.display = "block";
    galeria.style.opacity = "0.5";
    zd5.style.opacity = "1";
    gornyRzad.classList.add('disabled');
    header.classList.add('disabled');
}
function powiekszZ6(){
    zd6.style.display = "block";
    back.style.display = "block";
    galeria.style.opacity = "0.5";
    zd6.style.opacity = "1";
    gornyRzad.classList.add('disabled');
    header.classList.add('disabled');
}
function powiekszZ7(){
    zd7.style.display = "block";
    back.style.display = "block";
    galeria.style.opacity = "0.5";
    zd7.style.opacity = "1";
    gornyRzad.classList.add('disabled');
    header.classList.add('disabled');
}
function powiekszZ8(){
    zd8.style.display = "block";
    back.style.display = "block";
    galeria.style.opacity = "0.5";
    zd8.style.opacity = "1";
    gornyRzad.classList.add('disabled');
    header.classList.add('disabled');
}
function powiekszZ9(){
    zd9.style.display = "block";
    back.style.display = "block";
    galeria.style.opacity = "0.5";
    zd9.style.opacity = "1";
    gornyRzad.classList.add('disabled');
    header.classList.add('disabled');
}
function powiekszZ10(){
    zd10.style.display = "block";
    back.style.display = "block";
    galeria.style.opacity = "0.5";
    zd10.style.opacity = "1";
    gornyRzad.classList.add('disabled');
    header.classList.add('disabled');
}
function powiekszZ11(){
    zd11.style.display = "block";
    back.style.display = "block";
    galeria.style.opacity = "0.5";
    zd11.style.opacity = "1";
    gornyRzad.classList.add('disabled');
    header.classList.add('disabled');
}
function powiekszZ12(){
    zd12.style.display = "block";
    back.style.display = "block";
    galeria.style.opacity = "0.5";
    zd12.style.opacity = "1";
    gornyRzad.classList.add('disabled');
    header.classList.add('disabled');
}
function powiekszZ13(){
    zd13.style.display = "block";
    back.style.display = "block";
    galeria.style.opacity = "0.5";
    zd13.style.opacity = "1";
    gornyRzad.classList.add('disabled');
    header.classList.add('disabled');
}

function powiekszZ14(){
    zd14.style.display = "block";
    back.style.display = "block";
    galeria.style.opacity = "0.5";
    zd14.style.opacity = "1";
    gornyRzad.classList.add('disabled');
    header.classList.add('disabled');
}

function powiekszZ15(){
    zd15.style.display = "block";
    back.style.display = "block";
    galeria.style.opacity = "0.5";
    zd15.style.opacity = "1";
    gornyRzad.classList.add('disabled');
    header.classList.add('disabled');
}

function zniknijZ1(){
    zd1.style.display = "none";
    back.style.display = "none";
    galeria.style.opacity = "1";
    gornyRzad.classList.remove('disabled');
    header.classList.remove('disabled');
}
function zniknijZ2(){
    zd2.style.display = "none";
    back.style.display = "none";
    galeria.style.opacity = "1";
    gornyRzad.classList.remove('disabled');
    header.classList.remove('disabled');
}
function zniknijZ3(){
    zd3.style.display = "none";
    back.style.display = "none";
    galeria.style.opacity = "1";
    gornyRzad.classList.remove('disabled');
    header.classList.remove('disabled');
}
function zniknijZ4(){
    zd4.style.display = "none";
    back.style.display = "none";
    galeria.style.opacity = "1";
    gornyRzad.classList.remove('disabled');
    header.classList.remove('disabled');
}
function zniknijZ5(){
    zd5.style.display = "none";
    back.style.display = "none";
    galeria.style.opacity = "1";
    gornyRzad.classList.remove('disabled');
    header.classList.remove('disabled');
}
function zniknijZ6(){
    zd6.style.display = "none";
    back.style.display = "none";
    galeria.style.opacity = "1";
    gornyRzad.classList.remove('disabled');
    header.classList.remove('disabled');
}
function zniknijZ7(){
    zd7.style.display = "none";
    back.style.display = "none";
    galeria.style.opacity = "1";
    gornyRzad.classList.remove('disabled');
    header.classList.remove('disabled');
}
function zniknijZ8(){
    zd8.style.display = "none";
    back.style.display = "none";
    galeria.style.opacity = "1";
    gornyRzad.classList.remove('disabled');
    header.classList.remove('disabled');
}
function zniknijZ9(){
    zd9.style.display = "none";
    back.style.display = "none";
    galeria.style.opacity = "1";
    gornyRzad.classList.remove('disabled');
    header.classList.remove('disabled');
}
function zniknijZ10(){
    zd10.style.display = "none";
    back.style.display = "none";
    galeria.style.opacity = "1";
    gornyRzad.classList.remove('disabled');
    header.classList.remove('disabled');
}
function zniknijZ11(){
    zd11.style.display = "none";
    back.style.display = "none";
    galeria.style.opacity = "1";
    gornyRzad.classList.remove('disabled');
    header.classList.remove('disabled');
}
function zniknijZ12(){
    zd12.style.display = "none";
    back.style.display = "none";
    galeria.style.opacity = "1";
    gornyRzad.classList.remove('disabled');
    header.classList.remove('disabled');
}
function zniknijZ13(){
    zd13.style.display = "none";
    back.style.display = "none";
    galeria.style.opacity = "1";
    gornyRzad.classList.remove('disabled');
    header.classList.remove('disabled');
}
function zniknijZ14(){
    zd14.style.display = "none";
    back.style.display = "none";
    galeria.style.opacity = "1";
    gornyRzad.classList.remove('disabled');
    header.classList.remove('disabled');
}
function zniknijZ15(){
    zd15.style.display = "none";
    back.style.display = "none";
    galeria.style.opacity = "1";
    gornyRzad.classList.remove('disabled');
    header.classList.remove('disabled');
}


z1.addEventListener("click", powiekszZ1)
z2.addEventListener("click", powiekszZ2)
z3.addEventListener("click", powiekszZ3)
z4.addEventListener("click", powiekszZ4)
z5.addEventListener("click", powiekszZ5)
z6.addEventListener("click", powiekszZ6)
z7.addEventListener("click", powiekszZ7)
z8.addEventListener("click", powiekszZ8)
z9.addEventListener("click", powiekszZ9)
z10.addEventListener("click", powiekszZ10)
z11.addEventListener("click", powiekszZ11)
z12.addEventListener("click", powiekszZ12)
z13.addEventListener("click", powiekszZ13)
z14.addEventListener("click", powiekszZ14)
z15.addEventListener("click", powiekszZ15)
back.addEventListener("click", zniknijZ1)
back.addEventListener("click", zniknijZ2)
back.addEventListener("click", zniknijZ3)
back.addEventListener("click", zniknijZ4)
back.addEventListener("click", zniknijZ5)
back.addEventListener("click", zniknijZ6)
back.addEventListener("click", zniknijZ7)
back.addEventListener("click", zniknijZ8)
back.addEventListener("click", zniknijZ9)
back.addEventListener("click", zniknijZ10)
back.addEventListener("click", zniknijZ11)
back.addEventListener("click", zniknijZ12)
back.addEventListener("click", zniknijZ13)
back.addEventListener("click", zniknijZ14)
back.addEventListener("click", zniknijZ15)