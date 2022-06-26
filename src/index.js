import './scss/index.scss'
import { Home } from './js/Home'
import { Menu } from './js/Menu'

/* IMAGE IMPORTS */

import logo from './assets/images/logo.png'

import story1 from './assets/images/storyIMG1.png'
import story2 from './assets/images/storyIMG2.png'

import map from './assets/images/map-img.png'

/* IMAGES LOADING */

document.querySelector('.logo').src = logo

document.querySelector('#storyImg1').src = story1
document.querySelector('#storyImg2').src = story2

document.querySelector('#map-img').src = map

const homeBtn = document.getElementById('home-link')
const menuBtn = document.getElementById('menu-link')
const aboutUsBtn = document.getElementById('about-link')
const content = document.getElementById('content')
content.appendChild(Menu.renderDOM())
