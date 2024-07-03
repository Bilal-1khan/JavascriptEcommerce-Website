// global variables
const cartUpdateBtn = document.querySelectorAll(".cartBtn");
const countUpdate = document.getElementById("countUpdate");
let cardContainers = document.querySelectorAll(".cardContainer");

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

    let cardContainerElem = cardContainers[index];
    let productImage = cardContainerElem.querySelector(".image img");
    let productName = cardContainerElem.querySelector(".productName").innerText;

    cardImgData.push(productImage.getAttribute("src"));
    cardProductData.push(productName);

    cartListItems.innerHTML = `<img src="${cardImgData[index]}" alt="Product Image" style="width:50px;height:50px;"> 
      <span>${cardProductData[index]}</span>
      <span><i id="deleteCartData" class="fa-solid fa-xmark"></i></span>`;
    cartListItems.classList.add("cartlist-items");

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

// const testingArray = [1,2,3,4,5,6,7,8,9,10]

// testingArray.push(11,12)
// console.log(testingArray);
