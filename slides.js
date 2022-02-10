let slide = document.getElementsByClassName("slides");

let slideIndex = 0;
autoslide();

function autoslide() {
    for(let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    slideIndex++;
    if(slideIndex > slide.length)
    {
        slideIndex = 1;
    }


    slide[slideIndex-1].style.display = "block";
    setTimeout(autoslide,3000);
}