// Code your solution here
// * When a user loads the page, they should be able to see a list of all the shoes in the sidebar and by default
//      have the first shoe rendered in the main container 


// let list = document.querySelector(".col-8")

// //append each starting from the bottom up...shoeReviews last
// // create blank tags

// document.addEventListener('DOMContentLoaded', ()=>{
//     let makeTags = () => {
//         let shoe = document.createElement("div")
//             let shoeImage = document.createElement("img")
//             let shoeCardBody = document.createElement("div")
//                 let shoeName = document.createElement("h4")
//                 let description = document.createElement("p")
//                 let shoePrice = document.createElement("p")
//                     //write price in shoePriceFont
//                     let shoePriceFont = document.createElement("small")
//             //outside of card body
//             let shoeReviews = document.createElement("h5")
                
//         //append tags
//         shoe.append(shoeImage)
//         shoe.append(shoeCardBody)
//         shoeCardBody.append(shoeName)
//         shoeCardBody.append(description)
//         shoePrice.append(shoePriceFont)
//         shoe.append(shoeReviews)
//         list.append(shoe)

//     }

//     function fetchData(){
//         fetch("http://localhost:3000/shoes")
//         .then(res => res.json())
//         .then(data => renderShoe(data))
//     }

//     function renderShoe(data){
//         // for each
//         for (const q of data){
//             makeTags
//         }
//     }
//     fetchData()
// })

document.addEventListener('DOMContentLoaded', ()=>{
    function fetchData() {
        fetch('http://localhost:3000/shoes')
        .then(resp => resp.json())
        .then(data => renderShoe(data))
      }
      function renderShoe(data) {
          for (const q of data) {
    //Find the container where we attach everything to
        let list = document.querySelector(".col-8");

    //Create all necessary elements
        let shoe = document.createElement("div")
        let shoeImage = document.createElement("img")
        let shoeCardBody = document.createElement("div")
            let shoeName = document.createElement("h4")
            let description = document.createElement("p")
            let shoePrice = document.createElement("p")
                //write price in shoePriceFont
                let shoePriceFont = document.createElement("small")
        //outside of card body
        let shoeReviews = document.createElement("h5")
    //Add appropriate classes and ids. Grab data and insert if needed.
          list.dataset.id = q.id
    //Grab data and insert it into created elements
          shoeImage.alt = q.image;
          shoeName.innerHTML = q.name;
          description.innerText = q.description;
          shoePriceFont.innerText = q.price;
        //   shoeReviews = q.shoeReviews[0];
          
    //Append everything to main container
            shoe.append(shoeImage)
            shoe.append(shoeCardBody)
            shoeCardBody.append(shoeName)
            shoeCardBody.append(description)
            shoePrice.append(shoePriceFont)
            shoe.append(shoeReviews)
            list.append(shoe)

          }
       }
    //Call the function that will automatically run renderQuote() also 
       fetchData();
    })