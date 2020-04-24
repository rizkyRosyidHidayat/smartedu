import './component/navbar.js'
import './component/banner.js'
import './component/successStory.js'
import './component/about.js'

// navbar
const navbarNav = document.querySelector('.navbar-nav > .nav-link')
const btnLogin = document.querySelector('.navbar-nav > .nav-link > .btn')
const header = document.querySelector('header')

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    header.style.cssText = "background-color: #fff; box-shadow: 0 0 5px grey; padding: 10px 0;" 
    navbarNav.setAttribute('class', 'nav-link')  
    btnLogin.setAttribute('class', 'btn btn-outline')  
  } else {
    header.style.cssText = "background-color: transparent;padding: 30px 0;"  
    navbarNav.setAttribute('class', 'nav-link text-white')  
    btnLogin.setAttribute('class', 'btn btn-outline btn-white')  
  }
}

window.onscroll = function() {scrollFunction()};

