// Code your solution here
let reviewForm = document.querySelector("#new-review")
let reviewsListUl = document.querySelector("#reviews-list")
let shoeListUl = document.querySelector("#shoe-list")
let mainShoeContainer = document.querySelector("#main-shoe")



fetch("http://localhost:3000/shoes")
.then(r => r.json())
.then((shoeObjects) => {shoeObjects.forEach(singleShoe => {
        turnIntoHTML(singleShoe)
    })
})

let turnIntoHTML = (singleShoe) => {
    let blankLi = document.createElement("li")
    blankLi.innerHTML = `<li class="list-group-item">${singleShoe.name}</li>`
    shoeListUl.append(blankLi)
    let shoeSideBar = blankLi.querySelector("#list-group-Item")
    
    blankLi.addEventListener("click", (evt) => {
        // debugger
        mainShoeContainer.innerHTML = `<img class="card-img-top" id="shoe-image" src=${singleShoe.image}>
        <div class="card-body">
        <h4 class="card-title" id="shoe-name">${singleShoe.name}</h4>
        <p class="card-text" id="shoe-description">${singleShoe.description}</p>
        <p class="card-text"><small class="text-muted" id="shoe-price">${singleShoe.price}</small></p>
        <div class="container" id="form-container">
        <!-- FORM GOES HERE -->
        <form id="new-review">
        <div class="form-group">
        <textarea class="form-control" id="review-content" rows="3"></textarea>
        <input type="submit" class="btn btn-primary"></input>
        </div>
        </form>
        </div>
        
        </div>
        <h5 class="card-header">Reviews</h5>
        <ul class="list-group list-group-flush" id="reviews-list">
        <li class="list-group-item">${singleShoe.reviews[0].content}</li>
       
        </ul>`
        
        // let newLi = document.createElement("li")
        // let eachReview = singleShoe.reviews.forEach((rev) => {
            // newLi.innerText = rev.content;
            //     reviewsList.append(newLi)
        })
       let postReview = mainShoeContainer.querySelector("#review-list")
        // postReview.addEventListener("submit", (evt)=> { 
        //     debugger
        //     evt.preventDefault()
        //     let newReview = evt.target.textarea.value
        //     fetch(`http://localhost:3000/shoes/${singleShoe.id}/reviews`,{
        //             method: "POST",
        //             headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             content:  newReview
        //         })
        //         }).then(r => r.json())
        //         .then(updatedReview => {
        //         reviewsListUl.append(blankLi.innerHTML =`<li>${newReview}</li>`)
        //     })
        // })
   
}