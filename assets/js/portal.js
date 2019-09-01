var intervalo = 4000;

function slide1() {
    document.getElementById('banner').src= '/assets/images/BarackObama.jpg';
    setInterval("slide2()", intervalo);
}

function slide2() {
    document.getElementById('banner').src= '/assets/images/morena.jpg';
    setInterval("slide3()", intervalo);
}

function slide3() {
    document.getElementById('banner').src= '/assets/images/quadrilha.jpg';
    setInterval("slide1()", intervalo);
}

