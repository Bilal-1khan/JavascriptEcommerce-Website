// global variables
const cartUpdateBtn = document.querySelectorAll(".cartBtn");
const countUpdate = document.getElementById("countUpdate");
let cardContainers = document.querySelectorAll(".cardContainer");
console.log(cardContainers.length);

// cart dropdown functionality
const dropDownBtn = document.getElementById("dropDownBtn");
const dropDownList = document.getElementById("dropDownList");
dropDownBtn.addEventListener("click", function () {
  dropDownList.classList.toggle("displayBlock");
});

// update counter number
let countNumber = [];
countUpdate.innerText = countNumber.length;

cartUpdateBtn.forEach((curElem) => {
  curElem.addEventListener("click", function () {
    countNumber.push(cardContainers);
    countUpdate.innerHTML = countNumber.length;
  });
});

// cart data functionality
let cardImgData = [];
let cardProductData = [];
const ulBox = document.getElementById("ulBox");

// cart data update in list
cartUpdateBtn.forEach((curBtnEle, index) => {
  curBtnEle.addEventListener("click", function () {

    let cartListItems = document.createElement("li");
    cartListItems.classList.add("cartlist-items");

    let cardContainerElem = cardContainers[index];
    let productImage = cardContainerElem.querySelector(".image img");
    let productName = cardContainerElem.querySelector(".productName").innerText;

    cardImgData.push(productImage.getAttribute("src"));
    cardProductData.push(productName);

    cartListItems.innerHTML = 
    `<img src="${cardImgData[index]}" alt="Product Image" style="width:50px;height:50px;border-radius:8px;"> 
      <span>${cardProductData[index]}</span>
      <span><i id="deleteCartData" class="fa-solid fa-xmark"></i></span>`;

    // delete list
    let deleteData = cartListItems.querySelector("#deleteCartData");
    deleteData.addEventListener("click", function () {
      cartListItems.remove();
      countNumber.pop()
      countUpdate.innerText = countNumber.length
    });

    ulBox.appendChild(cartListItems);
  });
});


// search card data
const searchFilter = document.querySelector("#searchFilter")
searchFilter.addEventListener("keyup",function (e) {
  const itemsFilter = document.querySelectorAll(".productName")
  console.log(e.key);
  
  for (let i = 0; i < itemsFilter.length; i++) {
    console.log(itemsFilter);
    console.log(i);
  }
})