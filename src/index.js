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
content.appendChild(AboutUs.renderDOM())
