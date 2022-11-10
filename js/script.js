const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// Question 1

const cat = {
  complain: function () {
    console.log("Meow");
  },
};

cat.complain();

// Question 2

const heading = document.querySelector("h3");
heading.innerHTML = "Updated Heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.classList = "subheading";

// Question 5

const paragraph = document.querySelectorAll("p");

for (let i = 0; i < paragraph.length; i++) {
  paragraph[i].style.color = "red";
}

// Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p>New paragraph</p> `;

// Question 7

function listOfCats(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

listOfCats(cats);

// Question 8

function createCats(cats) {
  let html = "";

  for (let i = 0; i < cats.length; i++) {
    if (!cats[i].age) {
      cats[i].age = "Age unknown";
    }

    html =
      html +
      "<div>" +
      "<h5>" +
      cats[i].name +
      "</h5>" +
      "<p>" +
      cats[i].age +
      "</p>" +
      "</div>";
  }

  return html;
}
const finalHtml = createCats(cats);

const catsContainer = document.querySelector(".cat-container");
catsContainer.innerHTML = finalHtml;
