// after loading;
const loading = document.querySelector(".loading");

window.addEventListener("load",()=>{
    document.body.style.overflowY = "auto";
    loading.style.display = "none";
})


// open and close menu links;

const linksMenu = document.querySelector(".nav-links");
const openMenuBtn = document.querySelectorAll(".header_2 .menu i");
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
const navbarSection = document.querySelector(".header_2 .sec");

window.addEventListener("scroll",()=>{
    if (scrollY > 200){
        navbarSection.style.transform = "translateY(0)";
        navbarSection.style.background = "#fff";
    }else{
        navbarSection.style.transform = "translateY(-100%)";
        navbarSection.style.background = "transparent";
    }
})

// cutome select
var x, i, j, l, ll, selElmnt, a, b, c;

x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;

  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);


const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});

// cart quantity;
const plusBtn = document.querySelector(".shop-details .info .plus");
const minusBtn = document.querySelector(".shop-details .info .minus");
const qty = document.querySelector(".shop-details .info .qty");

plusBtn.addEventListener("click",()=>{
  qty.innerHTML = parseFloat(qty.innerHTML) + 1;
});

minusBtn.addEventListener("click",()=>{
  if (qty.innerHTML > 0 ){
    qty.innerHTML = parseFloat(qty.innerHTML) - 1;
  }
});

// reviews $ description

const desRev = document.querySelectorAll(".reviews .btns span");
const resultDesRev = document.querySelectorAll(".reviews .results >div");

for (let i =0;i<desRev.length;i++){
  desRev[i].addEventListener("click",()=>{
    desRev.forEach((el)=>{
      el.classList.remove("active");
    })
    resultDesRev.forEach((el)=>{
      el.classList.remove("active");
    })
    resultDesRev[i].classList.add("active");
    desRev[i].classList.add("active");
  })
}


// imgs => main img;
const gridImgs = document.querySelectorAll(".imgs-grid img");
const mainImg = document.querySelector(".main-img img");

gridImgs.forEach((img)=>{
  img.addEventListener("click",()=>{
    mainImg.src = img.src;
  })
})