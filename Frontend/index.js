const shoeListUl = document.querySelector("#shoe-list"),
      shoeMainContainer = document.querySelector("#main-shoe");
let shoesHasBeenFetchedBefore = false;

// Function to fetch shoes from server, and display their names on the showListUl
function getShoes() {
  fetch('http://localhost:3000/shoes')
    .then(response => response.json())
    .then(shoes => {
      shoeListUl.innerHTML = '';
      shoes.forEach(shoe => {
        shoeListUl.append(createShoeNameLi(shoe));
      });

      // If this is the first time fetching the shoes (on page load), then render the first shoe, otherwise don't do anything
      if (!shoesHasBeenFetchedBefore) {
        renderShoeInMainContainer(shoes[0]);
        shoesHasBeenFetchedBefore = true;
      }
    });
}

// Function that takes in a shoe object, creates and returns an Li out of the name
function createShoeNameLi(shoe) {
  const shoeLi = document.createElement("li");
        shoeLi.className = "list-group-item";
        shoeLi.innerHTML = `<a href="#">${shoe.name}</a>` // Making this a link to be more user-friendly

  // When a user clicks on one of the shoes in the sidebar, the shoe's info and reviews are rendered in the main container 
  shoeLi.addEventListener("click", (evt) => {
    renderShoeInMainContainer(shoe);
  })

  return shoeLi;
}

// Function to take in a shoe object, and create needed elements, and append them to main-shoe div
function renderShoeInMainContainer(shoe) {
  shoeMainContainer.innerHTML = 
  `
    <img class="card-img-top" id="shoe-image" alt="Shoe Image Goes Here" src="${shoe.image}">
    <div class="card-body">
      <h4 class="card-title" id="shoe-name">${shoe.name}</h4>
      <p class="card-text" id="shoe-description">${shoe.description}</p>
      <p class="card-text"><small class="text-muted" id="shoe-price">$${shoe.price}</small></p>
      <div class="container" id="form-container">
        Write a Review: <br>
        <form id="new-review">
          <div class="form-group">
            <textarea class="form-control" id="review-content" rows="3"></textarea>
            <input type="submit" class="btn btn-primary"></input>
          </div>
        </form>
      </div>
    </div>

    <h5 class="card-header">Reviews</h5>
    <ul class="list-group list-group-flush" id="reviews-list">
    </ul>
  `;

  displayShoeReviews(shoe);

  const newReviewForm = shoeMainContainer.querySelector("#new-review");
  newReviewForm.addEventListener("submit", (evt) => {
    addNewReview(evt, shoe);
  })
}

// Function that takes in a shoe review object and create an li
function createShoeReviewLi(review) {
  const reviewLi = document.createElement("li");
        reviewLi.className = "list-group-item";
        reviewLi.innerText = review.content;
  return reviewLi;
}

// Function that takes in a shoe, and displays the reviews
function displayShoeReviews(shoe) {
  const reviewsListUl = document.querySelector("#reviews-list");
  reviewsListUl.innerHTML = '';
  shoe.reviews.forEach(review => reviewsListUl.append(createShoeReviewLi(review)))
}

// Function that takes the even on form submission, persist the review in the backend, and show the review on page, without refreshing. When you create a review for a given shoe, if you click on another shoe and you go back to your initial shoe, you should see the new review persist without refreshing.
function addNewReview(evt, shoe) {
  evt.preventDefault();

  const newReviewContent = evt.target["review-content"].value,
        newReview = { content: newReviewContent };
  
  fetch(`http://localhost:3000/shoes/${shoe.id}/reviews`, {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(newReview)
  })
    .then(response => response.json())
    .then(newReview => {
      document.querySelector("#reviews-list").append(createShoeReviewLi(newReview));
      alert(`Review added! Thank you for reviewing ${shoe.name}!`);

      // Refetch all the shoes so that when user clicks on another shoeLi, any new reviews will show up
      getShoes();
    });

  evt.target.reset();
}

getShoes();