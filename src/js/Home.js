import hero from '../assets/images/hero-img.png'
import venue from '../assets/images/venue-img.png'
import prev1 from '../assets/images/venue-preview-1.png'
import prev2 from '../assets/images/venue-preview-2.png'
import prev3 from '../assets/images/venue-preview-3.png'

const Home = (function () {
    'use strict'

    const main = document.createElement('main')
    main.classList.add('main-home-container', 'wrapper')

    const heroSection = document.createElement('section')
    heroSection.classList.add('hero', 'section--spacing')
    heroSection.innerHTML = `


            <div class="hero-text">
                <h2>Taste the authentic Saudi cuisine</h2>
                <p>Among the best Saudi chefs in the world, serving you something beyond flavor.</p>
                <a href="" class="btn btn-cta">Our Menu</a>
            </div>
            <div>
                <img class="hero-img" src="${hero}" alt="">
            </div>
            `

    const venueSection = document.createElement('section')
    venueSection.classList.add('venue', 'section--spacing')
    venueSection.innerHTML = `
    <div>
        <img class="venue-img" src="${venue}" alt="">
    </div>
        <div class="venue-content">
        
            <div class="venue-text">
                <h3>A distinctive dining destination inspired by the culture</h3>
                <p>Experience Al Balad old town of Jedda vibes.</p>
            </div>

        <a class="btn btn-dislodged" href="">Our Venue</a>

        <div class="venue-preview-imgs">

            <img class="preview-img1" src="${prev1}" alt="">
            <img class="preview-img2" src="${prev2}" alt="">
            <img class="preview-img3" src="${prev3}" alt="">

        </div>

    </div>`

    function renderDOM() {
        main.appendChild(heroSection)
        main.appendChild(venueSection)

        return main
    }

    return { renderDOM }
})()

export { Home }