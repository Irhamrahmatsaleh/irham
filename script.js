// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger')
const navMenu = document.getElementById('nav-menu')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active') // Toggle animasi hamburger
  navMenu.classList.toggle('active') // Toggle menu tampil/sembunyi
})

// Tutup menu jika klik link di mobile
document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      hamburger.classList.remove('active')
      navMenu.classList.remove('active')
    }
  })
})

// Navbar scroll effect
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar')
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  })
})

// Active navigation highlight
window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('section[id]')
  const navLinks = document.querySelectorAll('.nav-link')

  let current = ''
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id')
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove('active')
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active')
    }
  })
})

// Contact form handling
document
  .getElementById('contact-form')
  .addEventListener('submit', function (e) {
    e.preventDefault()

    // Get form data
    const formData = new FormData(this)
    const name = formData.get('name')
    const email = formData.get('email')
    const subject = formData.get('subject')
    const message = formData.get('message')

    // Create mailto link
    const mailtoLink = `mailto:irhamrahmatsaleh11@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    )}`

    // Open default email client
    window.location.href = mailtoLink

    // Show success message (optional)
    alert('Opening your default email client...')
  })

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
}

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in')
    }
  })
}, observerOptions)

// Observe all sections for animations
document.querySelectorAll('section').forEach((section) => {
  observer.observe(section)
})

// Type writer effect for hero roles
const roles = [
  'Software Engineer',
  'Full Stack Developer',
  'AI Trainer',
  'Mobile Developer',
]
let currentRole = 0
let currentChar = 0
let isDeleting = false

function typeWriter() {
  const roleElement = document.querySelector('.hero-roles .role-text')
  if (!roleElement) return

  const currentText = roles[currentRole]

  if (isDeleting) {
    roleElement.textContent = currentText.substring(0, currentChar - 1)
    currentChar--
  } else {
    roleElement.textContent = currentText.substring(0, currentChar + 1)
    currentChar++
  }

  let typeSpeed = isDeleting ? 100 : 150

  if (!isDeleting && currentChar === currentText.length) {
    typeSpeed = 2000
    isDeleting = true
  } else if (isDeleting && currentChar === 0) {
    isDeleting = false
    currentRole = (currentRole + 1) % roles.length
    typeSpeed = 500
  }

  setTimeout(typeWriter, typeSpeed)
}

// Start typewriter effect after page load
window.addEventListener('load', function () {
  setTimeout(typeWriter, 1000)
})

// Parallax effect for hero section
window.addEventListener('scroll', function () {
  const scrolled = window.pageYOffset
  const hero = document.querySelector('.hero')
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`
  }
})

// Skills animation on scroll
const skillItems = document.querySelectorAll('.skill-item')
const skillObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('animate-skill')
        }, index * 100)
      }
    })
  },
  { threshold: 0.3 },
)

skillItems.forEach((item) => {
  skillObserver.observe(item)
})

// Timeline animation
const timelineItems = document.querySelectorAll('.timeline-item')
const timelineObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-timeline')
      }
    })
  },
  { threshold: 0.2 },
)

timelineItems.forEach((item) => {
  timelineObserver.observe(item)
})
