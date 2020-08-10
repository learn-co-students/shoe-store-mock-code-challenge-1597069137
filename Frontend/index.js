// Code your solution here
let shoeSidebar = document.querySelector("#shoe-list")
let mainShoeImage = document.querySelector("#shoe-image")
let mainShoeName = document.querySelector("#shoe-name")
let mainShoeDes = document.querySelector("#shoe-description")
let mainShoePrice = document.querySelector("#shoe-price")
let formContainer = document.querySelector("#form-container")
let reviewList = document.querySelector("#reviews-list")
let shoeArr = []

fetch("http://localhost:3000/shoes")
.then(res => res.json())
.then((shoeObjArr) =>{
  shoeArr = shoeObjArr
  renderShoesInSidebar()
  renderShoeInMain(shoeArr[0])
})

let shoeHTMLForSidebar = (shoeObj) => {
  let shoeLi = document.createElement("li")
  shoeLi.className = "list-group-item"
  shoeLi.innerText = shoeObj.name

  shoeSidebar.append(shoeLi)

  shoeLi.addEventListener("click", (evt) => {
    renderShoeInMain(shoeObj)
  })
}

let renderShoesInSidebar = () => {
  shoeArr.forEach((shoeObj) => {
    shoeHTMLForSidebar(shoeObj)
  })
}

let shoeHTMLForMain = (shoeObj) => {
  mainShoeImage.src = shoeObj.image
  mainShoeName.innerText = shoeObj.name
  mainShoeDes.innerText = shoeObj.description
  mainShoePrice.innerText = ` Price: ${shoeObj.price}`

  reviewList.innerHTML = ""
  shoeObj.reviews.forEach ((review) => {
    reviewHTML(review)
  })
}

let formHTML = (shoeObj) => {
  formContainer.innerHTML = ""
  let form = document.createElement("form")
  form.id = "new-review"

  let formDiv = document.createElement("div")
  formDiv.className = "form-group"

  let formText = document.createElement("textarea")
  formText.className = "form-control"
  formText.id = "review-content"
  formText.rows = "3"

  let formSubmit = document.createElement("input")
  formSubmit.type = "submit"
  formSubmit.className = "btn btn-primary"

  formDiv.append(formText, formSubmit)
  form.append(formDiv)

  formContainer.append(form)

  form.addEventListener("submit", (evt) => {
    evt.preventDefault()
    let newReview = evt.target["review-content"].value

    shoeObj.reviews.push({
      content: newReview
    })
    fetch(`http://localhost:3000/shoes/${shoeObj.id}/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        content: newReview
      })
    })
    .then(res => res.json())
    .then(newReview => {
      reviewHTML(newReview)
    })
    evt.target.reset()
  })
}

let renderShoeInMain = (shoeObj) => {
  shoeHTMLForMain(shoeObj)
  formHTML(shoeObj)
}

let reviewHTML = (review) => {
  let reviewLi = document.createElement("li")
  reviewLi.className = "list-group-item"
  reviewLi.innerText = review.content

  let deleteReviewDiv = document.createElement("div")
  let deleteReviewButton = document.createElement("button")
  deleteReviewButton.innerText = "Delete Review"
  deleteReviewButton.className = "btn-danger"
  deleteReviewDiv.append(deleteReviewButton)
  reviewLi.append(deleteReviewDiv)

  reviewList.append(reviewLi)
  // just remove from DOM -- fetch request might not work, eric can explain
  deleteReviewButton.addEventListener("click", (evt) => {
    reviewLi.remove()
  })
}