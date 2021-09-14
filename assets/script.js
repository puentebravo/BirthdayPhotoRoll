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
    source: "./assets/images/FloydAndDoloresyoung.jpg",
    alt: "Floyd and Dolores",
  },
  {
    source: "./assets/images/floydOnADate.jpg",
    alt: "Floyd out on the town with Dolores.",
  },
  {
    source: "./assets/images/matosSiblings.jpg",
    alt: "The Siblings matos",
  },
  {
    source: "./assets/images/manofthesea.jpg",
    alt: "The old man of the sea",
  },
  {
    source: "./assets/images/chilton.jpg",
    alt: "The USS Chilton",
  },
  {
    source: "./assets/images/basicCrew.jpg",
    alt: "The crew of D Co., 1st Reg, Recruit Training Command, Bainbrige, MD",
  },
  {
    source: "./assets/images/goodShot.jpg",
    alt: "Weapons qualification and training",
  },
  {
    source: "./assets/images/chaplainsOffice.jpg",
    alt: "A letter sent home to the parents of fresh recruits",
  },
  {
    source: "./assets/images/chiltonOrders.jpg",
    alt: "A page from a briefing on the operations and purpose of the USS Chilton",
  },
  {
    source: "./assets/images/chiltonOrders2.jpg",
    alt: "A second page from a briefing on the operations and purpose of the USS Chilton",
  },
  {
    source: "./assets/images/travelsOfTheChilton.jpg",
    alt: "A hand-drawn map chronicling the journeys of the USS Chilton.",
  },
  {
    source: "./assets/images/theGunner.jpg",
    alt: "Gunnery practice aboard the USS Chilton. Floyd assists the gunner.",
  },
  {
    source: "./assets/images/AlpineSailor.jpg",
    alt: "Floyd enjoys some time in the Snow",
  },
  {
    source: "./assets/images/Radioman.jpg",
    alt: "Floyd in his element.",
  },
  {
    source: "./assets/images/floydAndDolores.jpg",
    alt: "Mr. And Mrs. Matos",
  },
  {
    source: "./assets/images/Floydandbaby.jpg",
    alt: "Floyd with... Peggy?",
  },
  {
    source: "./assets/images/Floydandratpack.jpg",
    alt: "Frank Sinatra wasn't the only one with an entourage.",
  },
  {
    source: "./assets/images/floydDoloresAndFamily.jpg",
    alt: "Floyd at a family gathering",
  },
  {
    source: "./assets/images/manOfTheSeaRedux.jpg",
    alt: "The man of the sea returns",
  },
  {
    source: "./assets/images/theWholeFamily.jpg",
    alt: "Family from both sides.",
  },
  {
    source: "./assets/images/sailorSailing.jpg",
    alt: "Floyd returns to the Sea.",
  },
  {
    source: "./assets/images/conversation.jpg",
    alt: "Floyd speaks passionately on a subject unknown.",
  },
  {
    source: "./assets/images/floydAndPeggy.jpg",
    alt: "Floyd speaks to peggy.",
  },
  {
    source: "./assets/images/generations.jpg",
    alt: "Three generations in one photo.",
  },
  {
    source: "./assets/images/popopAtTheBeach.jpg",
    alt: "Floyd sports the most stylish shades this side of the atlantic.",
  },
  {
    source: "./assets/images/seriousConversation.jpg",
    alt: "Floyd has a somber conversation.",
  },
  {
    source: "./assets/images/floydGoesToHiroshima.jpg",
    alt: "Floyd goes to a somber place.",
  },
  {
    source: "./assets/images/floydAndSusan.jpg",
    alt: "Floyd with Susan",
  },
  {
    source: "./assets/images/sailorSailing.jpg",
    alt: "The sailor returns to the waves",
  },
  {
    source: "./assets/images/thanksGiving.jpg",
    alt: "The whole family celebrates",
  },
  {
    source: "./assets/images/reachingout.jpg",
    alt: "Floyd and sofi during the pandemic",
  },
  {
    source: "./assets/images/floydwithsofi.jpg",
    alt: "The sailor and the child",
  },
  {
    source: "./assets/images/theSelfie.jpg",
    alt: "PopPop takes a selfie",
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
