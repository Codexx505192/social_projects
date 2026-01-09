
console.log("Home работает");

// const modal = document.getElementById("modal")

// if(!localStorage.getItem("surveyDone")){
//   setTimeout(() => {
//    modal.style.display = "flex"
//   }, 5000)
// }





// slider--
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let index = 0;

// создаем точки
slides.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.className = "dot";
  if (i === 0) dot.classList.add("active");

  dot.addEventListener("click", () => {
    index = i;
    updateSlider();
  });

  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function updateSlider() {
  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

next.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  updateSlider();
});

prev.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlider();
});


document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      index = (index + 1) % slides.length;
      updateSlider();
    }
  
    if (e.key === "ArrowLeft") {
      index = (index - 1 + slides.length) % slides.length;
      updateSlider();
    }
  });
  
// slider--


// btn
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
});

// btn