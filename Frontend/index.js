// Code your solution here
const shoeListOl = document.querySelector("#shoe-list")

fetch("http://localhost:3000/shoes")
    .then(res => res.json())
    .then((shoesArray) => {
        
        shoesArray.forEach((singleShoeObj) => {
            turnShoeToHTML(singleShoeObj)
            // console.log(singleShoeObj)
        })
    }) 

let turnShoeToHTML = (shoeObj) => {
   // 1. Create outer box 
   let shoeLi = document.querySelector("ul#shoe-list.list-group")
    // let shoeLi = document.createElement("li")
       shoeLi.classList.add("list-group-item")
    // 2. Fill the contents of the box
    shoeLi.innerHTML = `<li class="list-group-item">${shoeObj.name}</li>`
    // 3. Slap it on the DOM
    shoeListOl.append(shoeLi)
    // 4. Find specific elements from contents of the box
    // 5. Add event listeners

    //rinse and repeat steps 4 and 5 as needed
    
}

// shoe-list.list-group
