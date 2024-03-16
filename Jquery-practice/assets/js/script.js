// "use strict";



$(function(){


    //sidebar-up
    $(".open-icon").click(function(){
        $(".navigation-top").removeClass("sidebar-top");
        $(".close-icon").removeClass("d-none");
        $(".open-icon").addClass("d-none")
    })


    $(".close-icon").click(function(){
        $(".navigation-top").addClass("sidebar-top");
        $(".close-icon").addClass("d-none");
        $(".open-icon").removeClass("d-none")
    })
    //-------------------------



    //sidebar-right

    $(".left-icon").click(function(){
        $(".navigation-right").removeClass("sidebar-right");
        $(".left-icon").addClass("d-none");
        $(".right-icon").removeClass("d-none")
    })

    $(".right-icon").click(function(){
        $(".navigation-right").addClass("sidebar-right");
        $(".right-icon").addClass("d-none");
        $(".left-icon").removeClass("d-none")
    })

    //------------------------



    //sidebar-bottom

    $(".up-icon").click(function(){
        $(".navigation-bottom").removeClass("sidebar-bottom");
        $(".down-icon").removeClass("d-none");
        $(".up-icon").addClass("d-none")
    })

    $(".down-icon").click(function(){
        $(".navigation-bottom").addClass("sidebar-bottom");
        $(".down-icon").addClass("d-none");
        $(".up-icon").removeClass("d-none")
    })

})








// let closeIcon = document.querySelector(".close-icon");
// let openIcon = document.querySelector(".open-icon");

// let navigation = document.querySelector(".navigation-top")

// openIcon.addEventListener("click",function(){
//     navigation.classList.remove("sidebar-top")
//     closeIcon.classList.remove("d-none");
//     openIcon.classList.add("d-none")
// })

// closeIcon.addEventListener("click",function(){
//     navigation.classList.add("sidebar-top")
//     closeIcon.classList.add("d-none")
//     openIcon.classList.remove("d-none")
// })






// let leftIcon = document.querySelector(".left-icon");
// let rightIcon = document.querySelector(".right-icon");

// let navigationRight = document.querySelector(".navigation-right");


// leftIcon.addEventListener("click",function(){
//     navigationRight.classList.remove("sidebar-right")
//     leftIcon.classList.add("d-none")
//     rightIcon.classList.remove("d-none")
// })

// rightIcon.addEventListener("click",function(){
//     navigationRight.classList.add("sidebar-right")
//     rightIcon.classList.add("d-none")
//     leftIcon.classList.remove("d-none")
// })



// let upIcon = document.querySelector(".up-icon")
// let downIcon = document.querySelector(".down-icon")

// let navigationBottom = document.querySelector(".navigation-bottom")


// upIcon.addEventListener("click",function(){
//     navigationBottom.classList.remove("sidebar-bottom");
//     downIcon.classList.remove("d-none");
//     upIcon.classList.add("d-none")
// })

// downIcon.addEventListener("click",function(){
//     navigationBottom.classList.add("sidebar-bottom")
//     downIcon.classList.add("d-none")
//     upIcon.classList.remove("d-none")
// })
