// global variables
const cartUpdateBtn = document.querySelectorAll(".cartBtn")
const countUpdate = document.getElementById("countUpdate")
let cardContainers = document.querySelectorAll(".cardContainer")

// cart dropdown functionality
const dropDownBtn = document.getElementById("dropDownBtn")
const dropDownList = document.getElementById("dropDownList")
dropDownBtn.addEventListener("click",function () {
    dropDownList.classList.toggle("displayBlock")
})

// cart data functionality
let cardData = []
const ulBox = document.getElementById("ulBox")

// cart data update in list
cartUpdateBtn.forEach((curBtnEle,index)=>{
    curBtnEle.addEventListener("click",function () {
      let cartListItems = document.createElement("li")
      cardContainers.forEach((cardContainerElem) => {
        let productImage = cardContainerElem.querySelector(".image img");
        cardData.push(productImage.getAttribute("src"));
    });
      cartListItems.innerHTML = `<img src="${cardData[index]}" alt="Product Image" style="width:50px;height:50px;"> <span><i id="deleteCartData" class="fa-solid fa-xmark"></i></span>`;
      cartListItems.classList.add("cartlist-items")
      let deleteData = cartListItems.querySelector("#deleteCartData")
      deleteData.addEventListener("click",function () {
            cartListItems.remove()      
            countUpdate.innerHTML = Number(cardData.index) - Number(cardData.index)       
      })
      ulBox.appendChild(cartListItems)
      console.log(ulBox.appendChild(cartListItems));
    })
})

// counter number update
let countNumber = []
countUpdate.innerHTML = countNumber.length

cartUpdateBtn.forEach((curElem)=>{
    curElem.addEventListener('click',function () {
        countNumber.push(cardContainers)
        countUpdate.innerHTML = countNumber.length
    })
})