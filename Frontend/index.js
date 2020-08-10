// Code your solution here
const shoeList = document.querySelector('#shoe-list')
const formContainer = document.querySelector('#form-container')
const reviewList = document.querySelector('#reviews-list')

console.log(shoeList)
console.log(formContainer)
console.log(reviewList)
// When a user loads the page, they should be able to see a list of all the shoes in the sidebar and by default, have the first shoe rendered in the main container (see deliverable 2).

//fetch shoes from json
fetch('http://127.0.0.1:3000/shoes') 
    .then(response => response.json())
    .then(data => console.log(data[0].company))
    


//iterate over shoes


//shoeList.append(shoes)



// When a user clicks on one of the shoes in the sidebar, they should be able to see more details about the shoe, the reviews associated with it and a form in the main container. There should only be one shoe in the main container at one time.

// click even displays shoe 


//display review associated with it


//form in main container 'formContainer'



// When a user fills the form out and submits it, the review should get persisted in the backend and also be shown on the page, without refreshing. When you create a review for a given shoe, if you click on another shoe and you go back to your initial shoe, you should see the new review persist without refreshing.

//event listener 'submit'


//
// event.preventDefault()