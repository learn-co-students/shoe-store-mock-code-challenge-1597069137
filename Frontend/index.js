// Code your solution here
console.log("hello")
const shoeUl = document.getElementById("shoe-list")
const mainShoe = document.getElementById("main-shoe")



fetch('http://localhost:3000/shoes')
    .then(response => response.json())
    .then((shoes) => {
        shoes.forEach((singleshoeObj) => {
            turnShoesToHTML(singleshoeObj)
        })
    })
let turnShoesToHTML = (shoeObj) => {
    //create child list 
    let shoesli = document.createElement("li")
    shoesli.className = "list-group-item"
    shoesli.innerText = shoeObj.name
    shoeUl.append(shoesli)
}

shoeUl.addEventListener("click", (evt) => {
    if (evt.target.name === "list-group-item") {
        let shoe = evt.target.id
        mainShoe.innerHTML = `<img src="${shoeObj.img}" class="card-img-top" id="shoe-image" alt="Shoe Image Goes Here">
        <div class="card-body">
            <h4 class="card-title" id="shoe-name"> ${shoeObj.name} </h4>
            <p class="card-text" id="shoe-description"> ${shoeObj.description} </p>
            <p class="card-text"><small class="text-muted" id="shoe-price">${shoeObj.price}</small></p>
            <div class="container" id="form-container">`
    }

}
})
//when I select single shoe, it will render shoeObj.img, shoeObj.name, shoeObj.description,shoeObj.price, shoeObj.reviews
//singleshoe detail:
//addEventListener-  shoeObj.id
//mainShoe:
// fetch('http://localhost:3000/shoes/${shoeObj.id}', {
//             method: "PATCH",
//             headers: {
//                 "Accept": "application/json",
//                 "Content-Type": 'application/json',
//             },
// body: JSON.stringify()