// global variables
const cartUpdateBtn = document.querySelectorAll(".cartBtn");
const cartPreviewBtn = document.querySelectorAll(".Preview")
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

// search items
function searchFilterData() {
  const searchFilter = document.getElementById("searchFilter").value.toUpperCase()
  const productDetails = document.getElementsByClassName("decription")
  let cardsData = cardContainers
  
  for (let i = 0; i < productDetails.length; i++) {
    let itemsTextData = productDetails[i].firstElementChild
    let textDataValue = itemsTextData.innerHTML || itemsTextData.innerText || itemsTextData.textContent 

      if (textDataValue.toUpperCase().indexOf(searchFilter) > -1) {
        cardsData[i].style.display = ''
      } else {
        cardsData[i].style.display = 'none'
      }
  }
}

// preview items
const itemModal = document.querySelector(".productModalDiv")
const itemModalDetails = document.querySelector(".productModal")
const itemModalData = itemModalDetails.querySelector(".productModalData")
const closeModal = document.querySelector(".popupClose")
let itemsCounterNum = 0

cartPreviewBtn.forEach((previewCart,itemsIndex)=>{
  const productImages = cardContainers[itemsIndex].querySelector('.image img').src
  const itemsDescription = cardContainers[itemsIndex].querySelector(".productDescription").innerText
  
  itemModalData.innerHTML =`
  <img src=${productImages} alt="image" style="max-width:200px;width:100%;border-radius:8px;"/> 
  <div>
  ${itemsDescription}
  </div>
  <div class='incrDcrBTN'>
  <button id="minus" style="padding:.5rem 1rem;background-color:black;color:#fff;cursor:pointer;font-size:1.2rem;border:none;">-</button>
  <span id='itemsCountNum'></span>
  <button id="plus" style="padding:.5rem 1rem;background-color:black;color:#fff;cursor:pointer;font-size:1.2rem;border:none;">+</button>
  </div>
  `
  

  

  previewCart.addEventListener("click",function () {
    itemModal.style.display="block"
  })
  closeModal.addEventListener("click",function () {
    itemModal.style.display="none"
  })
  // itemModal.innerHTML=productImages
})