// Code your solution here
const shoesSideBarUl = document.querySelector("#shoe-list")
const shoeImage = document.querySelector("#shoe-image")
const h4ShoeName = document.querySelector("#shoe-name")
const shoePrice = document.querySelector("#shoe-price")
const shoeDescription = document.querySelector("#shoe-description")
const formContainer = document.querySelector("#form-container")
// const h5reviews = document.querySelector(".card-header")
const reviewsListUl = document.querySelector("#reviews-list")

fetch("http://localhost:3000/shoes")
    .then((resp) => resp.json())
    .then((shoesArray) => {
        shoesArray.forEach((shoeObj) => {
            convertToHtml(shoeObj)
        })
    });

let convertToHtml = (singleObj) => {
    let shoeLi = document.createElement("li")
    shoeLi.className = "list-group-item"
    shoeLi.innerText = singleObj.name

    shoesSideBarUl.append(shoeLi)

    // EVENT LISTENET TO SHOELI
    shoeLi.addEventListener("click", (evt) => {

        shoeImage.src = singleObj.image 
        h4ShoeName.innerText = singleObj.name
        shoeDescription.innerText = singleObj.description
        shoePrice.innerText = singleObj.price

        singleObj.reviewsListUl.forEach( review => {
            let reviewLi = document.createElement("li")
            reviewLi.innerText = review.content
            reviewsListUl.append(reviewLi)
        })
        
    })
    
}


    