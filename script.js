const nav = document.querySelector('.nav');

const openBtn = document.getElementById("open-sidebar-button")
const closeBtn = document.getElementById("close-sidebar-button")
const myOverlay = document.querySelector('#overlay')


const navLinks = document.querySelectorAll('nav a')
navLinks.forEach(link => {
   link.addEventListener('click', () => {
    closeSidebar()
   })
})

openBtn.addEventListener('click', openSidebar)
closeBtn.addEventListener('click', closeSidebar)
myOverlay.addEventListener('click', closeSidebar)

const media = window.matchMedia("(width < 700px)")
media.addEventListener('change', (e) => updateNav(e))


function updateNav(e)  {
const isMobile = e.matches
if (isMobile) {
    nav.setAttribute('inert', "")
} else {
    nav.removeAttribute("inert", "")
}
}

function openSidebar() {
nav.classList.add('show')
openBtn.setAttribute('aria-expanded', 'true')
nav.removeAttribute('inert', "")

}

function closeSidebar() {
nav.classList.remove('show')
openBtn.setAttribute('aria-expanded', 'false')
if (media.matches) {
    navbar.setAttribute('inert', '');
  }

}

updateNav(media)


// Email
const user = "blsignings";
  const domain = "gmail.com";
  const displayText = `${user}@${domain}`;

  const emailSpan = document.querySelectorAll(".email-span");
  if (emailSpan.length) {
      emailSpan.forEach(item => {
        const link = document.createElement("a");
        link.href = `mailto:${user}@${domain}`;
        link.textContent = displayText;
        
        item.appendChild(link)
    })
  }