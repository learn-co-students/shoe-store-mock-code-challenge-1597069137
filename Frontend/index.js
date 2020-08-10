// Code your solution here

let shoeList = document.querySelector("#shoe-list")
// console.log(shoeList)

fetch(`http://localhost:3000/shoes`)
.then(resp => resp.json())
.then(shoeData => {
    // console.log('Success:', data);
    shoeData.forEach(shoe => {
        displayShoe(shoe)
    });
})

function displayShoe(shoe){
    // console.log(shoe)
    const shoeDisplay = document.createElement("div")
    displayShoe.className = "list-group"
    // console.log(displayShoe)
    const li = document.createElement("li")
    li.innerText = `${shoe.name}`
    displayShoe.append(li)
    
    shoeList.append(displayShoe)


}

let selected = document.querySelector("#container")

fetch(`http://localhost:3000/shoes/id`)
.then(resp => resp.json())
.then(selectShoeData => {
    // console.log('Success:', data);
    selectShoeData.forEach(shoe => {
        selectShoe(shoe)
    });
})

function selectShoe(shoe){
    // console.log(shoe)
    const chosenShoe = document.createElement("div")
    selectShoe.className = "list-group list-group-flush"
    
    const h5 = document.createElement("h5")
    h5.innerText = `${shoe.name}`
    const shoeCompany = `${shoe.company}`
    const price = `${shoe.price}`
    const img = document.createElement("img")
    img.className = ""
    img.src = `${img}`



    selectShoe.append(h5)
    
    shoeList.append(selectShoe)


}