// Code your solution here
//When a user clicks on one of the shoes in the sidebar, 
    //they should be able to see more details about the shoe
    //the reviews associated with it
    //and a form in the main container
    // When a user fills the form out and submits it
    // the review should get persisted in the backend 
    // and also be shown on the page, without refreshing
    // When you create a review for a given shoe, if you click on another shoe and
    // you go back to your initial shoe, 
    // you should see the new review persist without refreshing

    let formElement = document.createElement("form")
    let shoesInSideBar = document.getElementById("shoe-list")

newFormElement.addEventListener("submit", (evt) => {
    evt.preventDefault();

    // t.string "name"
    // t.string "company"
    // t.integer "price"
    // t.string "image"
    // t.string "description"

    let shoeName = evt.target.s_name.value
    let shoeComp = evt.target.s_company.value
    let shoePrice = evt.target.s_price.value
    let shoeImg = evt.target.s_img.value
    let shoeDx = evt.target.s_dx.value

    fetch()


        
    fetch("http://localhost:3000/shoes", {
        method: "GET",
        
        headers: {
         "content-type": "application/json"
        },
       
        body: JSON.stringify({
        name: shoeName,
        company: shoeComp,
        price: shoePrice,
        s_img: shoeImg,
        description: shoeDx 

    })
  })
    .then(r => r.json())
    .then(displaySideShoe) => {
      
      turnShoeObjToHTML(displaySideShoe)
    }
    

let turnShoeObjToHTML = (shoeObj) => {
    let shoeLi = document.createElement("li")
    let shoeImg = document.createElement("img")

    shoeImg.src = shoeObj.img_url
}


function renderSideShoes(){

}

function renderMainShoe(){

}

function getReviews(){

}