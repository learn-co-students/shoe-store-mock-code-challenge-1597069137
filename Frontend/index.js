// Code your solution here
const shoeList = document.querySelector('#shoe-list');
const formContainer = document.querySelector('#form-container');
const reviewsList = document.querySelector('#reviews-list');

const image = document.querySelector('#shoe-image');
const name = document.querySelector('#shoe-name');
const description = document.querySelector('#shoe-description');
const price = document.querySelector('#shoe-price');

const BASE_URL = 'http://localhost:3000/shoes';

// GET Shoes from API
fetch(BASE_URL)
  .then((response) => response.json())
  .then((shoeArray) => {
    shoeArray.forEach((shoe) => {
      listShoe(shoe);
    });
  });

const listShoe = (shoe) => {
  const listShoeli = document.createElement('li');
  listShoeli.classList.add('shoe-ul-item');

  const listShoeH6 = document.createElement('h6');
  listShoeH6.innerText = `${shoe.name} | ${shoe.company}`;
  listShoeH6.classList.add('shoe-ul-item');

  const listShoeLink = document.createElement('a');
  listShoeLink.href = `${BASE_URL}/${shoe.id}`;
  listShoeLink.append(listShoeH6);
  shoeList.append(listShoeLink);

  listShoeLink.addEventListener('click', (event) => {
    event.preventDefault();

    fetch(`${BASE_URL}/${shoe.id}`)
      .then((response) => response.json())
      .then((shoe) => {
        shoeCardUpdate(shoe);
      });
  });
};

const shoeCardUpdate = (shoe) => {
  image.src = shoe.image;
  name.innerText = shoe.name;
  description.innerText = shoe.description;
  price.innerText = `$${parseInt(shoe.price)}`;
  displayReviews(shoe);
  displayForm(shoe);
};

const displayReviews = (shoe) => {
  reviewsList.innerHTML = '';
  shoe.reviews.forEach((review.content) => {
    const content = document.createElement('li');
    content.classList.add('list-group-item');
    content.innerText = `${review.content}`;
    reviewsList.append(content);
  });
};

const displayForm = (shoe) => {
  const form = document.createElement('form');
  form.setAttribute('method', 'post');
  form.setAttribute('action', 'submit');

  const review = document.createElement('input');
  review.type = 'text';
  review.name = 'review';
  review.id = 'review-content';

  const submitButton = document.createElement('input');
  submitButton.type = 'submit';
  submitButton.name = 'submit-btn';
  submitButton.value = 'Submit Review';

  form.append(review, submitButton);
  formContainer.append(form);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const newReview = event.target[0].value;

    fetch(`${BASE_URL}/${shoe.id}/reviews`, {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json',
      },
      body: JSON.stringify({ content: newReview }),
    })
      .then((response) => response.json())
      .then((updatedShoe) => displayReviews(updatedShoe));
  });
};
