// Code your solution here

// * When a user loads the page, they should be able to see a list of all the shoes in the sidebar and by default,
//  have the first shoe rendered in the main container (see deliverable 2).

// * When a user clicks on one of the shoes in the sidebar, they should be able to see more details about the shoe,
//  the reviews associated with it and a form in the main container. There should only be one shoe in the main container at one time.
let shoeContainer = document.querySelector('#shoe-list')

fetch("http://localhost:3000/shoes")
.then(res => res.json())
.then(shoeData => shoeData.forEach((shoe) => {
    renderShoes(shoe)
}))

function renderShoes(shoe){
    let newLi = document.createElement('li')
     newLi.innerText = shoe.name

     shoeContainer.append(newLi)


    let fillH4 = document.querySelector('#shoe-name')
    let fillpar = document.querySelector('#shoe-description')
    let fillpar2 = document.querySelector('#shoe-price')
    let fillImg = document.querySelector('#shoe-image')
    let shoeReviews = document.querySelector('#reviews-list')
     

     newLi.addEventListener("click", (evt) => {
        fillImg.src = shoe.image
        fillH4.innerText = shoe.name
        fillpar.innerText = shoe.description
        fillpar2.innerText = `$ ${shoe.price}`
        reviews()
     })



     function reviews() {
        shoe.reviews.forEach((review) => {
            console.log(review.content)
            let reviewLi = document.createElement('li')
            reviewLi.innerText = review.content
            shoeReviews.append(reviewLi)
        })
     }
 

     newForm.addEventListener('submit', (evt) => {
        evt.preventDefault()
        console.log(evt.target)
    })

    
}




// * When a user fills the form out and submits it, the review should get persisted in the backend and also be shown on the page, without refreshing. 
// When you create a review for a given shoe, if you click on another shoe and you go back to your initial shoe, you should see the new review persist without refreshing.


let formContainer = document.querySelector('#form-container')
let newForm = document.createElement('form')

    newForm.innerHTML = `<form id="new-review">
    <div class="form-group">
    <textarea class="form-control" id="review-content" rows="3"></textarea>
    <input type="submit" class="btn btn-primary"></input>
    </div>
    </form>`

formContainer.append(newForm)

// Did not finish form


