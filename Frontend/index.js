const shoeList = document.querySelector('ul#shoe-list');
const reviewsList = document.querySelector('ul#reviews-list');
const mainShoe = document.querySelector('div#main-shoe');
const shoeFormDiv = mainShoe.querySelector('div#form-container');

mainShoe.style.display = "none";
getShoes()

function getShoes() {
    fetch('http://localhost:3000/shoes')
    .then(response => response.json())
    .then(shoeObjsArray => {
        shoeObjsArray.forEach((shoeObj) => displayShoeOnList(shoeObj))
    })
};

function displayShoeOnList(shoeObj) {
    let shoeLi = document.createElement('li')
        shoeLi.classList.add('list-group-item')
        shoeLi.innerText = shoeObj.name

    shoeList.prepend(shoeLi)

    shoeLi.addEventListener('click', function(e) {
        reviewsList.innerText = ""
        displayShoeOnMain(shoeObj)
    });
};

function displayShoeOnMain(shoeObj) {
    shoeFormDiv.innerText = ""
    mainShoe.style.display = "block"
    let shoeImg = mainShoe.querySelector('img#shoe-image')
        shoeImg.src = shoeObj.image

    let shoeName = mainShoe.querySelector('h4#shoe-name')
        shoeName.innerText = shoeObj.name

    let shoeDescription = mainShoe.querySelector('p#shoe-description')
        shoeDescription.innerText = shoeObj.description

    let shoePrice = mainShoe.querySelector('small#shoe-price')
        shoePrice.innerText = `$${shoeObj.price}`
    
    shoeFormDiv.append(renderForm(shoeObj))

    shoeObj.reviews.forEach((reviewObj) => {
        renderReview(reviewObj)
    });
};

function renderForm(shoeObj) {
    let shoeForm = document.createElement('form')
        shoeForm.id = 'new-review'
    
    let shoeReview = document.createElement('textarea')
        shoeReview.classList.add('form-control')
        shoeReview.id = 'review-content'
        shoeReview.rows = '3'

    let shoeSubmit = document.createElement('input')
        shoeSubmit.type = 'submit'
        shoeSubmit.classList.add('btn')
        shoeSubmit.classList.add('btn-primary')

    shoeForm.append(shoeReview, shoeSubmit)

    shoeForm.addEventListener('submit', function(e) {
        e.preventDefault()
        let newReview = {
            shoe_id: shoeObj.id,
            content: this['review-content'].value
        };
        addNewReview(newReview)
        this.reset()
    });

    return shoeForm
};

function renderReview(reviewObj) {
    let reviewLi = document.createElement('li')
        reviewLi.classList.add('list-group-item')
        reviewLi.innerText = reviewObj.content

    reviewsList.append(reviewLi)
};

function addNewReview(newReview) {
    fetch(`http://localhost:3000/shoes/${newReview.shoe_id}/reviews`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newReview)
    })
    .then(response => response.json())
    .then(newReviewObj => {
        renderReview(newReviewObj)
    });
};