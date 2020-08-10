// Code your solution here
const outerUlShoeList = document.querySelector("#shoe-list")
const mainShoeDiv = document.querySelector("#main-shoe")
const imgShoe = document.querySelector("#shoe-image")
const h4ShoeName = document.querySelector("#shoe-name")
const paragraphShoeDescription = document.querySelector("#shoe-description")
const paragraphShoePrice = document.querySelector("#shoe-price")
const ulShoeReviews = document.querySelector("#reviews-list")

const shoeFormContainer = document.querySelector("#form-container")

fetch("http://localhost:3000/shoes")
.then(response => response.json())
.then(shoesList => {
    shoesList.forEach((singleShoe) => {
        convertToHtml(singleShoe)
    })
})

let convertToHtml = (shoeObject) => {
    let shoeLiElement = document.createElement("li")
    shoeLiElement.className = 'list-group-item'
    shoeLiElement.innerText = shoeObject.name
    outerUlShoeList.append(shoeLiElement)

    //EVENT LISTENER FOR SHOE LI ELEMENT
    shoeLiElement.addEventListener("click", (event) => {
        mainShoeDiv.innerText = ""
        imgShoe.src = shoeObject.image
        h4ShoeName.innerText = shoeObject.name
        paragraphShoeDescription.innerText = shoeObject.description
        paragraphShoePrice.innerText = shoeObject.price
        // ulShoeReviews.innerText = shoeObject.reviews[0].content
        mainShoeDiv.append(imgShoe, h4ShoeName, paragraphShoeDescription, paragraphShoePrice, ulShoeReviews, shoeFormContainer)

        //form not working lol wooo
        let newShoeForm = document.createElement("form")
        let contentShoe = document.createElement("input")
        contentShoe.name = "description"
        contentShoe.placeholder = "review"
        let contentButton = document.createElement("button")
        contentButton.innerText = "submit"
        newShoeForm.append(contentShoe, contentButton)


        shoeObject.reviews.forEach(review => {
            let reviewLi = document.createElement("li")
            reviewLi.innerText = review.content
            ulShoeReviews.append(reviewLi)
        })

        mainShoeDiv.append(shoeFormContainer, ulShoeReviews)
    }) //END OF EVENT LISTENER FOR SHOE LIE ELEMENT

} //END OF CONVERTTOHTML

