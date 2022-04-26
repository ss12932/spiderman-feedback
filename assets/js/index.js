"strict mode";
console.log("this is index.js");
// target start button
const startButton = document.getElementById("start-btn");

// target main element
const mainElement = document.getElementById("main");

// target banner section
const bannerSection = document.getElementById("banner");

// function to render question to page
const renderQuestion = () => {
  console.log("render question");

  //Create section
  const section = document.createElement("section");
  section.setAttribute("class", "content-section question-container");

  //create h2
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "content-section question-container");
  h2.textContent =
    "1. Do you like the spiderman movies from the Marvel franchise?";

  //create ul and append 3 li
  const ul = document.createElement("ul");
  ul.setAttribute("class", "feedback-list");
};

const li1 = document.createElement("li");
li1.setAttribute("class", "list-item");
li1.textContent = "Yes";

const li2 = document.createElement("li");
li2.setAttribute("class", "list-item");
li2.textContent = "No";

const li3 = document.createElement("li");
li3.setAttribute("class", "list-item");
li3.textContent = "Maybe";

ul.append(li1, li2, li3);

// append h2 and ul to section
section.append(h2, ul);

// append question section to main element
mainElement.append(section);

// function to remove banner from page
const removeBanner = () => {
  console.log("remove banner");
  bannerSection.remove();
};

// declare the event handler function for start button click
const handleStartButtonClick = () => {
  console.log("start button clicked");

  // remove banner section
  removeBanner();

  // render question
  renderQuestion();
};

// add event listener to start button
startButton.addEventListener("click", handleStartButtonClick);

//export callback fn outside. removebanner and renderquestion then exported functionality outside into its own fns. much cleaner and readable
