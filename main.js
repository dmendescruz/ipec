// abre e fecha menu na versão mobile
const nav = document.querySelector("#header nav")
const toggle = document.querySelectorAll("nav .toggle")

for (const element of toggle) {
  element.addEventListener("click", () => {
    nav.classList.toggle("show")
  })
}

// fechar menu ao clicar em uma opção
const links = document.querySelectorAll("nav ul li a")

for (const link of links) {
  link.addEventListener("click", () => {
    nav.classList.remove("show")
  })
}

// adicionar sombra no header com scroll
const header = document.querySelector("#header")
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add("scroll")
  } else {
    header.classList.remove("scroll")
  }
}

//back to top button
const backToTopButton = document.querySelector(".back-to-top")
function showBackToTopButton() {
  if (window.scrollY >= 600) {
    backToTopButton.classList.add("show")
  } else {
    backToTopButton.classList.remove("show")
  }
}

// carrosel
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
})

//scroll reveal
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text, #about .video,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

// active menu
const sections = document.querySelectorAll("section[id]")
function activeMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + window.innerHeight / 2
  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute("id")

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.add("active")
    } else {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.remove("active")
    }
  }
}

// Quando rola o mouse
window.addEventListener("scroll", function () {
  changeHeaderWhenScroll()
  showBackToTopButton()
  activeMenuAtCurrentSection()
})
