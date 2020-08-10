// Code your solution here
const shoeDisplay = document.querySelector("ul.list-group")
const shoeCardDiv = document.querySelector("div#main-shoe")
const shoeFromContainer = document.querySelector("#form-container")

fetch("http://localhost:3000/shoes/?_limit=1")
    .then(response => response.json())
    .then(shoeData => {
        shoeData.forEach(shoeObj => {
            shoeToHtml(shoeObj)
        });
    })

function shoeToHtml(obj){
    let objLi = document.createElement("li")
        objLi.classList.add("list-group-item")
         objLi.innerText = obj.name
    shoeDisplay.append(objLi)

    objLi.addEventListener("click", evt=>{
        shoeCardDiv.innerText = ""
        // create a card with more info on the obj +review(nested)
        shoeCardDiv.innerHTML = `<img class="card-img-top" id="shoe-image" alt="Shoe Image Goes Here" src= ${obj.image}>
        <div class="card-body">
          <h4 class="card-title" id="shoe-name">${obj.name}</h4>
          <p class="card-text" id="shoe-description">${obj.description}</p>
          <p class="card-text"><small class="text-muted" id="shoe-price">$ ${obj.price}</small></p>`

          
        //   <div class="container" id="form-container">
        //   </div> <h5 class="card-header">Reviews</h5>
        //   <ul class="list-group list-group-flush" id="reviews-list">
        //     <!-- REVIEWS GO HERE -->
        //   </ul>
        // </div>`
    })
  
}




