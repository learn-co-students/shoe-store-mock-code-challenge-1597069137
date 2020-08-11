// Code your solution here
const shoeListSideBar = document.querySelector("#shoe-list")
// this is a ul so we will have to create lis with the information we are given
const shoeCardDiv = document.querySelector("#main-shoe")
// this div will be assigned the goods
const shoeCardBody = document.querySelector(".card-body")
const shoeCardImg = document.querySelector("#shoe-image")
const shoeCardH4 = document.querySelector("#shoe-name")
const shoeCardP = document.querySelector("#shoe-description")
const shoeCardPrice = document.querySelector("#shoe-price")
const shoeFormContainer = document.querySelector("#form-container")
const reviewsUl = document.querySelector("#reviews-list")

fetch("http://localhost:3000/shoes")
    .then(resp => resp.json())
    .then(shoesObjArray =>{
        shoesObjArray.forEach(shoeObj =>{
            // put this shoeObj onto the html
            convertShoeToHtml(shoeObj)
        })
        shoeCardHtml(shoesObjArray[3])
    })


function convertShoeToHtml(obj){
    // this function should just portray the shoe as an li
    let shoeLi = document.createElement("li")
        shoeLi.classList.add("list-group-item")
        shoeLi.innerText = obj.name
    shoeListSideBar.append(shoeLi) 

    shoeLi.addEventListener("click", evt =>{
        // you still have access to the obj that was passed through
        // pass this creation here like we did in our fetch
        // when the li is clicked you need to clear the previous output
        shoeCardBody.innerText = ""
        shoeCardHtml(obj)

    })
}


function shoeCardHtml(shoeObj){
    // this has to get access to the elements from the given html
    
    shoeCardImg.src = shoeObj.image
    shoeCardH4.innerText = shoeObj.name
    shoeCardP.innerText = shoeObj.description
    shoeCardPrice.innerText = `$ ${shoeObj.price}`
    // have to clear the from everytime there is a click
    shoeFormContainer.innerText = ""

    let newShoeForm = document.createElement("form")
        newShoeForm.id = "new-review"
    let formGroup = document.createElement("div")
        formGroup.classList.add("form-group")
    let formInput = document.createElement("textarea")
        formInput.classList.add("form-control")
        formInput.id = "review-content"
        formInput.rows = "3"
    let sbmtBtn = document.createElement("input")
        sbmtBtn.type = "submit"
        sbmtBtn.classList.add("btn")
        sbmtBtn.classList.add("btn-primary")
    formGroup.append(formInput, sbmtBtn)
    newShoeForm.append(formGroup)
    shoeFormContainer.append(newShoeForm)
    shoeCardBody.append(shoeCardImg, shoeCardH4, shoeCardP, shoeCardPrice, shoeFormContainer)

    shoeReviewLister(shoeObj)


    newShoeForm.addEventListener("submit", function(evt) {   
        evt.preventDefault()
        
        let userInput = evt.target["review-content"].value
       
        fetch(`http://localhost:3000/shoes/${shoeObj.id}/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                content: userInput
            })
        })
        .then(resp => resp.json())
        .then(newReview =>{
            
            shoeObj.reviews.push(newReview)
            shoeReviewLister(shoeObj)

        })
    
    })
 
}



// get access to the obj in question 
// get their reviews and display them as lis
// somehow update the obj in memory
function shoeReviewLister(obj){
    reviewsUl.innerText = ""
    console.log(obj.reviews)
    obj.reviews.forEach(review =>{
       let reviewLi = document.createElement("li")
        reviewLi.classList.add("list-group-item")
        reviewLi.innerText = review.content
        reviewsUl.append(reviewLi)
    })
    
}