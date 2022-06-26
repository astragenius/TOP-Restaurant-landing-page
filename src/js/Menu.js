import menu1 from '../assets/images/menu1.png'
import menu2 from '../assets/images/menu2.png'
import menu3 from '../assets/images/menu3.png'

import menu4 from '../assets/images/menu4.png'
import menu5 from '../assets/images/menu5.png'
import menu6 from '../assets/images/menu6.png'

import menu7 from '../assets/images/menu7.png'
import menu8 from '../assets/images/menu8.png'
import menu9 from '../assets/images/menu9.png'

const Menu = (function () {
    'use strict'
    const menuImgs = [
        menu1,
        menu2,
        menu3,
        menu4,
        menu5,
        menu6,
        menu7,
        menu8,
        menu9,
    ]
    const menuNames = [
        'Bukhari',
        'Saudi Makboos',
        'Zurbiam',
        'Kabsa',
        'Madfoon',
        'Math Lootha',
        'Margoug',
        'Sayadaya',
        'Saleeg',
    ]
    const main = document.createElement('main')
    main.classList.add('main-menu-container', 'wrapper')

    const titelSection = document.createElement('section')
    titelSection.classList.add('titel', 'section--spacing')
    titelSection.innerHTML = `
    <h2>Discover Our menu</h2>
    <p>There is a wide selection of choices served by top Saudi chefs, prepared using best quality local ingredients.</p>`

    const menuSection = document.createElement('section')
    menuSection.classList.add('menu', 'section--spacing')

    let menuGrid = document.createElement('div')
    menuGrid.classList.add('menu-grid')

    for (let i = 0; i < 9; i++) {
        menuGrid.innerHTML += `<figure class="menu-box">
                            <img id="menu1" src="${menuImgs[i]}" alt="Image of ${menuNames[i]}">
                            <figcaption>
                                ${menuNames[i]}
                            </figcaption>
                        </figure>`
    }
    menuSection.appendChild(menuGrid)

    const btnContainer = document.createElement('div')
    btnContainer.classList.add('menu-btn-container')
    btnContainer.innerHTML = `<button class="btn btn-menu">Show more</button>`

    function renderDOM() {
        main.appendChild(titelSection)
        main.appendChild(menuSection)
        menuSection.appendChild(btnContainer)

        return main
    }

    return { renderDOM }
})()

export { Menu }
