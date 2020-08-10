// Code your solution here
console.log("Hello")

const container = document.querySelector("#main-shoe")
fetch('http://localhost:3000/shoes') 
    .then(response => response.json()) 
    .then(shoeArray => 
    console.log(shoeArray));

    let shoeDiv = function(createShoeDiv) {
        return document.createElement('div');
        //put outer + inner body of HMTL
    }
    function append(#main-shoe, oneShoeObject) {
        <h4>name: "${oneShoeObject.name}"</h4>
        <p>price: "${oneShoeObject.price}"</p>
        <img>image: "${oneShoeObject.image}"</img>
        <p>description: "${oneShoeObject.description}"</p>
    }

    //shoeArray.forEach(oneShoeObject) {
// }

fetch('http://localhost:3000/shoes', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(container),
})
.then(response => response.json())
.then(container => {
  console.log(container);
})
.catch((error) => {
  console.error(error);
});

