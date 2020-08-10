// Code your solution here
//stable elements
let myShoeUl = document.querySelector("#shoe-list")
let shoeDisplayName = document.querySelector("#shoe-name")
let shoeDisplayDescription = document.querySelector("#shoe-description")
let shoeDisplayPrice = document.querySelector("#shoe-price")
let shoeDisplayReviewsUl = document.querySelector("#reviews-list")
let shoeDisplayImage = document.querySelector("#shoe-image")
//Deliverable 1
fetch("http://localhost:3000/shoes")
  .then (resp => resp.json())
  .then (shoeArray =>{
    shoeArray.forEach((shoe) =>{
      turnShoeIntoLi(shoe)
      // debugger
    })
  })

function turnShoeIntoLi(shoe){
  let myShoeLi = document.createElement("li")
  myShoeLi.innerHTML = shoe.name
  myShoeUl.append(myShoeLi)
  myShoeLi.addEventListener("click", (evt) =>{
    shoeDisplayReviewsUl.innerHTML = "" //cheap and dirty i know. sorry ran out of time
    turnShoeIntoDisplay(shoe)
  })

}

//Deliverable 2
fetch('http://localhost:3000/shoes/1')
  .then (resp => resp.json())
  .then (shoe =>{
    turnShoeIntoDisplay(shoe)
    // debugger
  })

  function turnShoeIntoDisplay(shoe) {
    shoeDisplayName.innerHTML = shoe.name
    shoeDisplayDescription.innerHTML = shoe.description
    shoeDisplayPrice.innerHTML = `$${shoe.price}`
    shoeDisplayImage.src = `${shoe.image}`
      shoe.reviews.forEach((review) =>{
        let shoeDisplayReviewLi = document.createElement("li")
        shoeDisplayReviewLi.innerHTML = `${review.id}. ${review.content}`
        shoeDisplayReviewsUl.append(shoeDisplayReviewLi)
      })
  }

  //Deliverable 3
