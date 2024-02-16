const allBtn = document.querySelector(".all-btn");
const carsBtn = document.querySelector(".cars-btn");
const artBtn = document.querySelector(".art-btn");
const natureBtn = document.querySelector(".nature-btn");
const sportsBtn = document.querySelector(".sports-btn");
const imagesContainer = document.querySelector(".images-container");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");

const images = [
  { image: "./images/m4.jpg", category: "cars" },
  {
    image: "./images/rs7.jpg",
    category: "cars",
  },
  {
    image: "./images/urus.jpg",
    category: "cars",
  },
  {
    image: "./images/art.jpg",
    category: "art",
  },
  {
    image: "./images/eye _art.jpg",
    category: "art",
  },
  {
    image: "./images/earth.jpg",
    category: "nature",
  },
  {
    image: "./images/nature.jpg",
    category: "nature",
  },
  {
    image: "./images/river.jpg",
    category: "nature",
  },
  {
    image: "./images/sports.jpg",
    category: "sports",
  },
  {
    image: "./images/run.jpg",
    category: "sports",
  },
];

let displayImages = () => {
  images.forEach((item) => {
    let img = document.createElement("img");
    img.src = item.image;
    img.alt = item.category;
    imagesContainer.appendChild(img);
    img.addEventListener("click", (e) => {
      let clickedImg = e.target;
      modal.style.display = "flex";
      const modalImg = document.querySelector(".modal img");
      modalImg.src = clickedImg.src;
    });
  });
};

window.addEventListener("load", displayImages());

allBtn.addEventListener("click", () => {
  const allImages = imagesContainer.querySelectorAll("img");
  allImages.forEach((img) => {
    img.style.display = "flex";
  });
});

carsBtn.addEventListener("click", () => {
  const allImages = imagesContainer.querySelectorAll("img");
  allImages.forEach((img) => {
    if (img.alt === "cars") {
      img.style.display = "flex";
    } else {
      img.style.display = "none";
    }
  });
});

artBtn.addEventListener("click", () => {
  const allImages = imagesContainer.querySelectorAll("img");
  allImages.forEach((img) => {
    if (img.alt === "art") {
      img.style.display = "flex";
    } else {
      img.style.display = "none";
    }
  });
});

natureBtn.addEventListener("click", () => {
  const allImages = imagesContainer.querySelectorAll("img");
  allImages.forEach((img) => {
    if (img.alt === "nature") {
      img.style.display = "flex";
    } else {
      img.style.display = "none";
    }
  });
});

sportsBtn.addEventListener("click", () => {
  const allImages = imagesContainer.querySelectorAll("img");
  allImages.forEach((img) => {
    if (img.alt === "sports") {
      img.style.display = "flex";
    } else {
      img.style.display = "none";
    }
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  const modalImg = document.querySelector(".modal img");
  if (e.target == modalImg) {
    modal.style.display = "flex";
  } else {
    modal.style.display = "none";
  }
});
