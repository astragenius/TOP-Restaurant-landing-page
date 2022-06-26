import './scss/index.scss'
import { Home } from './js/Home'
import { Menu } from './js/Menu'
import { AboutUs } from './js/AboutUs'

/* IMAGE IMPORTS */

import logo from './assets/images/logo.png'

/* IMAGES LOADING */

document.querySelector('.logo').src = logo

const homeBtn = document.getElementById('home-link')
const menuBtn = document.getElementById('menu-link')
const aboutUsBtn = document.getElementById('about-link')
const content = document.getElementById('content')

window.onload = () => {
    if (content.lastElementChild == null) {
        console.log(content)
        content.appendChild(Home.renderDOM())
    } else {
        content.lastElementChild.remove()
    }
}

homeBtn.addEventListener('click', () => {
    content.lastChild.remove()
    content.appendChild(Home.renderDOM())
})

menuBtn.addEventListener('click', () => {
    content.lastElementChild.remove()
    content.appendChild(Menu.renderDOM())
})

aboutUsBtn.addEventListener('click', () => {
    content.lastElementChild.remove()
    content.appendChild(AboutUs.renderDOM())
})
