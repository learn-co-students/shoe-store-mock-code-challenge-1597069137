const shoeList = document.getElementById("shoe-list")
const shoeReviews = document.getElementById("reviews-list")
const showForm = document.getElementById("form-container")
// add defer to index.html script


// ! Deliverable 1
fetch('http://localhost:3000/shoes')
.then(response => response.json())
.then((shoesArray) => {
    shoesArray.forEach(singleShoe) => {
       turnShoeToHTML(singleShoe)
    }
})

// add shoes to DOM.
//create an li for each shoe
//shoe name, company, price, image, description, reviews-an array
let turnShoeToHTML = (singleShoe)=>
// blank sheet
    let shoeLi = document.createElement('li')
// razmataz
    shoeLi.classList.add("list-group-item")
    shoeLi.innerText = `${singleShoe.name}`

// add it to the dom  
    shoeList.append("shoeLi")

// ! Deliverable 2
let shoeForm = shoeLi.innerHTML = `<img class="card-img-top" id="shoe-image" src="https://media.journeys.com/images/products/1_547493_ZM.JPG">
<div class="card-body">
  <h4 class="card-title" id="shoe-name">`${singleShoe.name}</h4>
  <p class="card-text" id="shoe-description">`${singleShoe.description}`</p>
  <p class="card-text"><small class="text-muted" id="shoe-price">`${singleShoe.price}`</small></p>
  <div class="container" id="form-container">
    <!-- FORM GOES HERE -->
  </div>

</div>
<h5 class="card-header">`${singleShoe.reviews}</h5>
<ul class="list-group list-group-flush" id="reviews-list">
  <!-- REVIEWS GO HERE -->
</ul>''

shoeList.append("shoeMenu")

// Add form

// Add event listener for submit button


// ! Deliverable 3- Submitting the form

fetch(`http://localhost:3000/shoes/${shoe_id}/reviews`, {
    method: 'POST'
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
    
})
