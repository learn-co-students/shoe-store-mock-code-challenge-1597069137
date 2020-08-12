const ulShoeList = document.querySelector('#shoe-list')
const shoeImg = document.querySelector("#shoe-image")
const shoeH4Name = document.querySelector("#shoe-name")
const shoePDescription = document.querySelector('#shoe-description')
const shoePrice = document.querySelector("#shoe-price")
const shoeReview = document.querySelector("#reviews-list")
const form = document.querySelector("#form-container")

fetch('http://localhost:3000/shoes')
    .then(res => res.json())
    .then(shoes => {
        shoes.forEach((singleShoe) => {
            turnShoeToSideBar(singleShoe)
        })
        renderShoe(shoes[0])
    })
    
    let turnShoeToSideBar = (shoeObj) => {
        const sideBarShoeLi = document.createElement('li')
        sideBarShoeLi.innerText = shoeObj.name
    sideBarShoeLi.className = "list-group-item"
    ulShoeList.append(sideBarShoeLi)

    sideBarShoeLi.addEventListener('click', (evt) => {
    renderShoe(shoeObj)
    })

}

let renderShoe = (shoe) => {
    shoeImg.src = shoe.image
    shoeH4Name.innerText = shoe.name
    shoePDescription.innerText = shoe.description
    shoePrice.innerText = shoe.price
    
    shoeReview.innerText = ""
    //reviews
    shoe.reviews.forEach((review) =>{
        const reviewLi = document.createElement('li')
        reviewLi.className = "list-group-item"
        reviewLi.innerText = review.content
        shoeReview.append(reviewLi)

    })
    form.innerHTML = ""

    const createForm = document.createElement('form')
    createForm.id = "new-review"
    const createDiv = document.createElement('div')
    createDiv.className = "form-group"
    const textArea = document.createElement('textarea')
    textArea.className = "form-control"
    textArea.id = "review-content"
    textArea.rows = "3"
    const input = document.createElement('input')
    input.type = "submit"
    input.className = "btn btn-primary"

    
    
    createDiv.append(textArea, input)
    createForm.append(createDiv)
    form.append(createForm)

    createForm.addEventListener('submit', (evt) => {
        evt.preventDefault()
        const userInput = (evt.target["review-content"].value)
    
        fetch(`http://localhost:3000/shoes/${shoe.id}/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: userInput
            })
            
        })
        .then(response => response.json())
        .then(newRevieObj => {
            const newReviewLi = document.createElement('li')
            newReviewLi.className = "list-group-item"
            newReviewLi.innerText = newRevieObj.content
            shoeReview.append(newReviewLi)

            shoe.reviews.push(newRevieObj)
        })   
     })

}