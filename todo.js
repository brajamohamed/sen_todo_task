// ******Form Elements******

// Title
let titleInput = document.getElementById("title_Input");
let title;
titleInput.addEventListener("change", (e) => (title = e.target.value));

// Description
let descriptionInput = document.getElementById("description_Input");
let description;
descriptionInput.addEventListener(
  "change",
  (e) => (description = e.target.value)
);

//Submit
let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => addTodo(e));

// *****Card Container*****
let cardSection = document.getElementById("card-container");

function addTodo(e) {
  e.preventDefault();
  let card = document.createElement("div");
  card.classList.add("card", "col-lg-4", "col-md-6", "my-2", "bg-success");

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "text-center");
  card.appendChild(cardBody);

  let cardTitle = document.createElement("div");
  cardTitle.className = "card-title";
  cardBody.appendChild(cardTitle);

  let titleText = document.createElement("h5");
  cardTitle.appendChild(titleText);
  titleText.innerHTML = title;

  let cardDescription = document.createElement("div");
  cardDescription.className = "card-text";
  cardBody.appendChild(cardDescription);
  cardDescription.innerHTML = description;
  cardSection.appendChild(card);

  titleInput.value = "";
  descriptionInput.value = "";
}
