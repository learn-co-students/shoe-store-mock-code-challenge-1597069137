const mainShoe = document.querySelector("#main-shoe")
const mainShoeCardBodyDiv = document.querySelector(".card-body")
const mainShoeImage = document.querySelector("#shoe-image")
const mainShoeName = document.querySelector("#shoe-name")
const mainShoeDescription = document.querySelector("#shoe-description")
const mainShoePrice = document.querySelector("#shoe-price")

const mainShoeFormContainer = document.querySelector("#form-container")
const mainShoeReviewForm = document.createElement("form")

const shoeListUl = document.querySelector("#shoe-list")
const reviewsUl = document.querySelector("#reviews-list")

mainShoeReviewForm.id = "new-review"
mainShoeReviewForm.addEventListener("submit", (evt) => {

  evt.preventDefault()

  console.log(evt.target["review-content"].value)
  console.log(currentShoeJson)


  const options = {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: evt.target["review-content"].value })
  }

  fetch(`http://localhost:3000/shoes/${currentShoeJson.id}/reviews`, options)
    .then(res => res.json())
    .then(reviewJson => {
      console.log(reviewJson)
      currentShoeJson.reviews.push(reviewJson)
      const reviewLi = document.createElement("li")
      reviewLi.id = reviewJson.id
      reviewLi.className = "list-group-item"
      reviewLi.innerText = reviewJson.content
      reviewsUl.append(reviewLi)
      mainShoeFormTextArea.value = ""
    })
})

const mainShoeFormDiv = document.createElement("div")
mainShoeFormDiv.className = "form-group"

const mainShoeFormTextArea = document.createElement("textarea")
mainShoeFormTextArea.id = "review-content"
mainShoeFormTextArea.rows = 3
mainShoeReviewForm.append(mainShoeFormTextArea)

const mainShoeFormButton = document.createElement("input")
mainShoeFormButton.type = "submit"
mainShoeReviewForm.append(mainShoeFormButton)

mainShoeCardBodyDiv.append(mainShoeReviewForm)


let currentShoeJson = {}

const addShoeToSidebar = (shoeJson) => {

  const shoeLi = document.createElement("li")
  shoeLi.id = shoeJson.id
  shoeLi.className = "list-group-item"
  shoeLi.innerText = shoeJson.name
  shoeListUl.append(shoeLi)

  shoeLi.addEventListener("click", (evt) => {

    currentShoeJson = shoeJson
    reviewsUl.innerHTML = ""

    mainShoeName.innerText = shoeJson.name
    mainShoeDescription.innerText = shoeJson.description
    mainShoePrice.innerText = shoeJson.price
    mainShoeImage.src = shoeJson.image

    shoeJson.reviews.forEach((review) => {
      const reviewLi = document.createElement("li")
      reviewLi.id = review.id
      reviewLi.className = "list-group-item"
      reviewLi.innerText = review.content
      reviewsUl.append(reviewLi)
    })

  })
}

fetch("http://localhost:3000/shoes")
  .then(res => res.json())
  .then(shoes => {

    shoes.forEach(shoe => {
      addShoeToSidebar(shoe)
    });

    currentShoeJson = shoes[0]
    reviewsUl.innerHTML = ""

    mainShoeName.innerText = currentShoeJson.name
    mainShoeDescription.innerText = currentShoeJson.description
    mainShoePrice.innerText = currentShoeJson.price
    mainShoeImage.src = currentShoeJson.image

    currentShoeJson.reviews.forEach((review) => {
      const reviewLi = document.createElement("li")
      reviewLi.id = review.id
      reviewLi.className = "list-group-item"
      reviewLi.innerText = review.content
      reviewsUl.append(reviewLi)
    })

  })