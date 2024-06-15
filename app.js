const cartUpdateBtn = document.getElementById("cartUpdateBtn")
const cardContainer = document.querySelectorAll(".cardContainer")
const countUpdate = document.getElementById("countUpdate")

let countNumber = []
countUpdate.innerHTML = countNumber.length

cartUpdateBtn.addEventListener("click",function () {
    countUpdate.innerHTML = countNumber.push(cardContainer)
})