"use strict";

// let tabOne = document.querySelector(".ts")
// let tabTwo = document.querySelector(".bjk")
// let tabThree = document.querySelector(".fb")
// let tabFour = document.querySelector(".gs");

// let content = document.querySelector(".content")

// let title = document.querySelector(".content h4")
// let text = document.querySelector(".content h5")

// tabOne.addEventListener("click",function(){
//     content.classList.remove("d-none")
//     tabOne.classList.add("active")
//     tabTwo.classList.remove("active")
//     tabThree.classList.remove("active")
//     tabFour.classList.remove("active")

//     title.innerHTML = "Trabzonspor was founded 1967"
//     text.innerHTML = "Trabzonspor 8 times champions in super league"
//     title.style.color = "#c00000"
//     text.style.color = "#3d94ae"
// })



$(function(){


    $(".ts").click(function(){
        $(".content").removeClass("d-none");
        $(".ts").addClass("active");
        $(".bjk").removeClass("active");
        $(".fb").removeClass("active");
        $(".gs").removeClass("active");

        $(".content h4").html("Trabzonspor was founded 1967")
        $(".content h5").html("Trabzonspor 8 times champions in super league")

    })


    $(".bjk").click(function(){
        $(".content").removeClass("d-none");
        $(".bjk").addClass("active");
        $(".ts").removeClass("active");
        $(".fb").removeClass("active");
        $(".gs").removeClass("active");

        $(".content h4").html("Besiktas was founded 1903")
        $(".content h5").html("Besiktas 16 times champions in super league")


    })


    $(".fb").click(function(){
        $(".content").removeClass("d-none");
        $(".fb").addClass("active");
        $(".ts").removeClass("active");
        $(".bjk").removeClass("active");
        $(".gs").removeClass("active");

        $(".content h4").html("Fenerbahce was founded 1907")
        $(".content h5").html("Fenerbahce 19 times champions in super league")

    })


    $(".gs").click(function(){
        $(".content").removeClass("d-none");
        $(".gs").addClass("active");
        $(".ts").removeClass("active");
        $(".bjk").removeClass("active");
        $(".fb").removeClass("active");

        $(".content h4").html("Galatasary was founded 1907")
        $(".content h5").html("Galatasaray 23 times champions in super league")

    })






})




// tabTwo.addEventListener("click",function(){
//     tabTwo.classList.add("active")
//     tabOne.classList.remove("active")
//     tabThree.classList.remove("active")
//     tabFour.classList.remove("active")

//     title.innerHTML = "Besiktas was founded 1903"
//     text.innerHTML  = "Besiktas 15 times champion in super league"
//     title.style.color = "black"
//     text.style.color = "black"


//     content.classList.remove("d-none");
// })



// tabThree.addEventListener("click",function(){
//     tabThree.classList.add("active")
//     tabOne.classList.remove("active")
//     tabTwo.classList.remove("active")
//     tabFour.classList.remove("active")

//     title.innerHTML = "Fenerbahce was founded 1907"
//     text.innerHTML  = "Fenerbahce 19 times champion in turkish league"
//     title.style.color = "#162a72"
//     text.style.color = "#fffb05"

//     content.classList.remove("d-none");
// })


// tabFour.addEventListener("click",function(){
//     tabFour.classList.add("active")
//     tabOne.classList.remove("active")
//     tabTwo.classList.remove("active")
//     tabThree.classList.remove("active")

//     title.innerHTML = "Galatasaray was founded 1905"
//     text.innerHTML = " UEFA europa league champions"
//     title.style.color = "#ff9a00"
//     text.style.color = "#ff0000"

//     content.classList.remove("d-none")
// })