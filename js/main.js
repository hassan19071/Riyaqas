// after loading;
const loading = document.querySelector(".loading");

window.addEventListener("load",()=>{
    document.body.style.overflowY = "auto";
    loading.style.display = "none";
})

// open and close menu links;

const linksMenu = document.querySelector(".nav-links");
const openMenuBtn = document.querySelectorAll(" .menu i");
const closeMenuBtn = document.querySelector(".nav-links .x");
const sideLayout = document.querySelector(".side-layout");

openMenuBtn.forEach((open)=>{
    open.addEventListener("click",()=>{
        linksMenu.classList.remove("close");
        sideLayout.classList.remove("close");
        document.body.style.overflow = "hidden";
    })
})

closeMenuBtn.addEventListener("click",()=>{
    linksMenu.classList.add("close");
    sideLayout.classList.add("close");
    document.body.style.overflowY = "visible";
});

// open and close dropdown links;
const dropLinks = document.querySelectorAll(".nav-links .drop");
const dropMenuLinks = document.querySelectorAll(".nav-links .drop .dropdown");

for (let i =0;i< dropLinks.length;i++){
    dropLinks[i].addEventListener("click",()=>{
        dropMenuLinks[i].classList.toggle("close");
    })
}

// visible navbar after scrolling
const navbarSection = document.querySelector(".sec");

window.addEventListener("scroll",()=>{
    if (scrollY > 200){
        navbarSection.style.transform = "translateY(0)";
        navbarSection.style.background = "#fff";
    }else{
        navbarSection.style.transform = "translateY(-100%)";
        navbarSection.style.background = "transparent";
    }
})

// open tabs in developer section
const tabsLinks = document.querySelectorAll(".developer .buttons span");
const tabsResults = document.querySelectorAll(".developer .infos .info");

for(let i =0; i < tabsLinks.length;i++){
    tabsLinks[i].addEventListener("click",()=>{
        tabsLinks.forEach((link)=>{
            link.classList.remove("active")
        });
        tabsResults.forEach((res)=>{
            res.classList.remove("active");
        });
        tabsLinks[i].classList.add("active");
        tabsResults[i].classList.add("active")
    })
}

// owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

// galley images;
const galleryImgs = document.querySelectorAll(".gallery .img");
const imagesType = document.querySelectorAll(".gallery .types span");

imagesType.forEach((type)=>{
    type.addEventListener("click",()=>{
        imagesType.forEach((type)=>{
            type.classList.remove("active");
        })
        type.classList.add("active");
        for (let i =0;i < galleryImgs.length;i++){
            if(type.innerHTML == "All"){
                galleryImgs[i].classList.add("active");
            }else{
                if(type.getAttribute("data-type") == galleryImgs[i].getAttribute("data-type")){
                    galleryImgs[i].classList.add("active");
                }else{
                    galleryImgs[i].classList.remove("active");
                }
            }
            
        }
    })
})
