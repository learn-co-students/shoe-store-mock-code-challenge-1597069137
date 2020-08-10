// Code your solution here
const shoeList = document.querySelector("#shoe-list"),
  reviewsList = document.querySelector("#reviews-list"),
  mainShowCard = document.querySelector(".card-body");

fetch("http://localhost:3000/shoes")
  .then((response) => response.json())
  .then((shoesArray) => {
    shoesArray.forEach((shoe) => {
      addShoeToTheDom(shoe);
    });
    shoeToTheMainContainer(shoesArray[0]);
  });

const addShoeToTheDom = (shoe) => {
  const shoeLi = document.createElement("li");
  shoeLi.className = "list-group-item";
  shoeLi.innerText = shoe["name"];
  shoeList.append(shoeLi);

  shoeLi.addEventListener("click", (evt) => {
    shoeToTheMainContainer(shoe, evt);
  });
};

const shoeToTheMainContainer = (shoeMain, evt) => {

  formContainer = document.querySelector("#form-container");
  formContainer.innerText="";
  shoeImage = document.querySelector("img");
  shoeImage.src = shoeMain["image"];

  mainShowCard.firstElementChild.innerText = shoeMain["name"];
  mainShowCard.children[1].innerText = shoeMain["description"];
  mainShowCard.children[2].querySelector("small").innerText = shoeMain["price"];
    const newForm = document.createElement("form");
    newForm.id = "new-review";
    const formDiv = document.createElement("div");
    formDiv.className = "form-group";
    const formTextArea = document.createElement("textarea");
    formTextArea.className = "form-control";
    formTextArea.id = "review-content";
    formTextArea.setAttribute("row", "3");
    const formSubmit = document.createElement("input");
    formSubmit.setAttribute("type", "submit");
    formSubmit.className = "btn btn-primary";
    formDiv.append(formTextArea, formSubmit);
    newForm.append(formDiv);
    formContainer.append(newForm);

  //almost finished with this
  newForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    createNewShoeFromForm(evt, shoeMain);
  });
  reviewsList.innerText="";
  shoeMain["reviews"].forEach((review) => {
    reviewShoeToDom(review);
  });
};

const reviewShoeToDom = (review) => {
  const reviewLis = document.createElement("li");
  reviewLis.className = "list-group-item";
  reviewLis.innerText = review["content"];
  reviewsList.append(reviewLis);
};

const createNewShoeFromForm = (evt, shoeMain) => {
  const newReview = evt.target["review-content"].value;
    
  fetch(`http://localhost:3000/shoes/${shoeMain["id"]}/reviews`, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({ content: newReview }),
  })
    .then((response) => response.json())
    .then((addedReview) => {
      reviewShoeToDom(addedReview);
    });
};
