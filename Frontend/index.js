const shoeList = document.getElementById('shoe-list');

const shoeMain = document.getElementById('main-shoe');
const shoeImg = document.getElementById('shoe-image');
const shoeName = document.getElementById('shoe-name');
const shoeDesc = document.getElementById('shoe-description');
const shoePrice = document.getElementById('shoe-price');
const shoeFormDiv = document.getElementById('form-container');
const shoeReviews = document.getElementById('reviews-list');

showShoesInSidebar();

function postReview(e) {
  e.preventDefault();
  const shoeId = parseInt(shoeMain.dataset.shoeId);
  const reviewContent = e.target['shoe-form-text'].value;
  
  const postConfig = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      content: reviewContent
    })
  }

  fetch(`http://localhost:3000/shoes/${shoeId}/reviews`, postConfig)
    .then(res => res.json())
    .then(review => appendReview(review));
}

function appendReview(review) {
  const li = document.createElement('li');
  li.textContent = review.content;
  li.dataset.reviewId = review.id;
  li.classList.add('list-group-item');
  shoeReviews.append(li);
}

function showShoesInSidebar() {
  fetch('http://localhost:3000/shoes')
    .then(res => res.json())
    .then(shoes => {
      addShoeInMainContainer(shoes[0]);
      shoes.forEach(shoe => addShoeToShoeList(shoe));
    });
}

function addShoeToShoeList(shoe) {
  const li = document.createElement('li');
  li.textContent = shoe.name;
  li.style.cursor = "pointer";
  li.dataset.shoeId = shoe.id;
  li.classList.add('list-group-item');
  li.addEventListener('click', showShoe);
  shoeList.append(li);
}

function showShoe(e) {
  shoeId = e.target.dataset.shoeId;
  fetchShoe(shoeId);
}

function fetchShoe(shoeId) {
  fetch(`http://localhost:3000/shoes/${shoeId}`)
    .then(res => res.json())
    .then(shoe => addShoeInMainContainer(shoe));
}

function addShoeInMainContainer(shoe) {
  shoeMain.dataset.shoeId = shoe.id;
  shoeImg.src = shoe.image;
  shoeName.textContent = shoe.name;
  shoeDesc.textContent = shoe.description;
  shoePrice.textContent = shoe.price;
  updateShoeReviews(shoe.reviews);

  const reviewForm = createReviewForm();
  reviewForm.addEventListener('submit', postReview);
  shoeFormDiv.innerHTML = "";
  shoeFormDiv.append(reviewForm);
}

function updateShoeReviews(reviews) {
  shoeReviews.innerHTML = "";
  reviews.forEach(review => {
    const li = document.createElement('li');
    li.textContent = review.content;
    li.dataset.reviewId = review.id;
    li.classList.add('list-group-item');
    shoeReviews.append(li);
  })
}

function createReviewForm() {
  const form = document.createElement('form');
  form.id = 'shoe-form';

  const textarea = document.createElement('textarea');
  textarea.id = 'shoe-form-text'
  textarea.classList.add('form-control');

  const br = document.createElement('br');

  const input = document.createElement('input');
  input.classList.add('btn');
  input.classList.add('btn-primary');
  input.type = "submit";

  form.append(textarea, br, input);
  return form;
}