import './scss/index.scss'
import { Home } from './js/Home'

/* IMAGE IMPORTS */
import logo from './assets/images/logo.png'
//import hero from './assets/images/hero-img.png'
import venue from './assets/images/venue-img.png'
import prev1 from './assets/images/venue-preview-1.png'
import prev2 from './assets/images/venue-preview-2.png'
import prev3 from './assets/images/venue-preview-3.png'
import testemonialImg from './assets/images/testemonial-img.png'
import testemonialImg2 from './assets/images/testemonial-img2.png'
import menu1 from './assets/images/menu1.png'
import menu2 from './assets/images/menu2.png'
import menu3 from './assets/images/menu3.png'

import menu4 from './assets/images/menu4.png'
import menu5 from './assets/images/menu5.png'
import menu6 from './assets/images/menu6.png'

import menu7 from './assets/images/menu7.png'
import menu8 from './assets/images/menu8.png'
import menu9 from './assets/images/menu9.png'

import story1 from './assets/images/storyIMG1.png'
import story2 from './assets/images/storyIMG2.png'

import map from './assets/images/map-img.png'

/* IMAGES LOADING */

document.querySelector('.logo').src = logo

/* document.querySelector('.venue-img').src = venue
document.querySelector('.preview-img1').src = prev1
document.querySelector('.preview-img2').src = prev2
document.querySelector('.preview-img3').src = prev3
document.getElementById('testemonial-img').src = testemonialImg
document.querySelector('.testemonial-img').src = testemonialImg2 */

document.querySelector('#menu1').src = menu1
document.querySelector('#menu2').src = menu2
document.querySelector('#menu3').src = menu3

document.querySelector('#menu4').src = menu4
document.querySelector('#menu5').src = menu5
document.querySelector('#menu6').src = menu6

document.querySelector('#menu7').src = menu7
document.querySelector('#menu8').src = menu8
document.querySelector('#menu9').src = menu9

document.querySelector('#storyImg1').src = story1
document.querySelector('#storyImg2').src = story2

document.querySelector('#map-img').src = map

const homeBtn = document.getElementById('home-link')
const menuBtn = document.getElementById('menu-link')
const aboutUsBtn = document.getElementById('about-link')
const content = document.getElementById('content')

content.appendChild(Home.renderDOM())
