// import photoArray from "./photolist";

const photoArray = [
  {
    source: "./assets/images/youngFloyd.jpg",
    alt: "Floyd in his Youth",
  },
  {
    source: "./assets/images/johnMatos.jpg",
    alt: "John Matos",
  },
  {
    source: "./assets/images/Dolores.jpg",
    alt: "The future Mrs. Matos",
  },
  {
    source: "./assets/images/manofthesea.jpg",
    alt: "The old man of the sea",
  },
  {
    source: "./assets/images/matosSiblings.jpg",
    alt: "The Siblings matos",
  },
  {
    source: "./assets/images/FloydAndDoloresyoung.jpg",
    alt: "Floyd and Dolores",
  },
  {
    source: "./assets/images/chilton.jpg",
    alt: "The USS Chilton",
  },
  {
    source: "./assets/images/basicCrew.jpg",
    alt: "The crew of D Co., 1st Reg, Recruit Training Command, Bainbrige, MD",
  },
];

const photoAnchorEl = document.querySelector("#photoAnchor");
// const indicatorAnchorEl = document.querySelector("#indicatorAnchor");

for (let i = 0; i < photoArray.length; i++) {
  let carDiv = document.createElement("div");
  let imgDiv = document.createElement("img");
  // let buttonEl = document.createElement("button");

  photoAnchorEl.appendChild(carDiv);
  carDiv.setAttribute("class", "carousel-item");
  carDiv.appendChild(imgDiv);
  imgDiv.setAttribute("src", photoArray[i].source);
  imgDiv.setAttribute("class", "d-block w-100");
  imgDiv.setAttribute("alt", photoArray[i].alt);
  // indicatorAnchorEl.appendChild(buttonEl);
  // buttonEl.setAttribute("type", "button");
  // buttonEl.setAttribute("data-bs-target", "#birthdayPhotoCarousel");
  // buttonEl.setAttribute("data-bs-slide-to", [i]);
  // buttonEl.setAttribute("aria-label", photoArray[i].ariaLabel);
}
