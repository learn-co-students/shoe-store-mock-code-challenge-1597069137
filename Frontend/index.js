// Code your solution here
const showUL = document.getElementById('shoe-list')

fetch('http://localhost:3000/shoes')
.then(res => res.json())
.then(shoeArray => {
    shoeArray.forEach(eachShoe) => {
        turnShoeToHtml(eachShoe)
        
    });
    
}

let turnShoeToHtml = (theShoe)




let reviewForm = document.querySelector("#reviews-list")

reviewForm.addEventListener("submit", (event) )
 event.defaultPrevented()






POST `http://localhost:3000/shoes/${shoe_id}/reviews`

  Required Headers:
  {
    'Content-Type': 'application/json'
  }

  Required Body:
  {
    content: 
  }

]
  }