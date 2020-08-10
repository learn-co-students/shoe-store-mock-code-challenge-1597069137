// Code your solution here

//Stable elements 
let shoeList = document.querySelector("#shoe-list")
let formContainer = document.querySelector("#form-container")
let mainShoe = document.querySelector("#main-shoe")
let cardBody = document.querySelector("card-body")
let reviewsList = document.querySelector("#reviews-list")


fetch("http://localhost:3000/shoes")
.then(res => res.json())
.then((shoeArray) => {
    shoeArray.forEach((singleShoe) => {
        turnShoeToHTML(singleShoe)
    })
})

let turnShoeToHTML = (singleShoe) => {
    let shoeName = document.createElement("li")
    shoeName.classList.add = "list-group-item"

    shoeName.innerHTML = `<li class="list-group-item">${singleShoe.name}</li>`
    shoeList.append(shoeName)

        
    mainShoe.innerHTML = `<img class="card-img-top" id="shoe-image" src="${singleShoe.image}">
    <h4 class="card-title" id="shoe-name">${singleShoe.name}</h4>
    <p class="card-text" id="shoe-description">${singleShoe.description}</p>
    <p class="card-text"><small class="text-muted" id="shoe-price">${singleShoe.price}</small></p>
    `
    //Add a form to id="form-container"

    let newReview = document.createElement("FORM")
    newReview.classListAdd = "form-group"
//     newReview.innerHTML = <form id="new-review">
//     <div class="form-group">
//       <textarea class="form-control" id="review-content" rows="3"></textarea>
//       <input type="submit" class="btn btn-primary"></input>
//     </div>
//   </form>
 


    ///creating a li to print out the comments if there are multiple to the reviews section
    let reviewLi = document.createElement("li")
    reviewLi.classListAdd = "list-group-item"
    //would i need to loop through multiple comments and then print them to HTML?
    reviewLi.innerText = `<li class="list-group-item">${singleShoe.reviews}</li>`
    reviewsList.append(reviewLi)
//    console.log(reviewLi)

    
    //click on specific shoe which displays specific info about that shoe.
    shoeName.addEventListener("click", (evt) => {
        mainShoe.innerHTML = `<img class="card-img-top" id="shoe-image" src=${singleShoe.image}>
        <h4 class="card-title" id="shoe-name">${singleShoe.name}</h4>
        <p class="card-text" id="shoe-description">${singleShoe.description}</p>
        <p class="card-text"><small class="text-muted" id="shoe-price">${singleShoe.price}</small></p>
        <h5 class="card-header">${singleShoe.reviews}</h5>
<ul class="list-group list-group-flush" id="reviews-list">`
   })

   //send back review to DB with form

.addEvenListener("Submit", (evt) => {

    fetch( `http://localhost:3000/shoes/${shoe_id}/reviews`), {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
    },
        body:  JSON.stringify()
}
.then(res => res.json())

})



}//end of turnshoetohtml
