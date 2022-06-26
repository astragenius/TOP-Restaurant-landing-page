import story1 from '../assets/images/storyIMG1.png'
import story2 from '../assets/images/storyIMG2.png'

import map from '../assets/images/map-img.png'

const AboutUs = (function () {
    const main = document.createElement('main')
    main.classList.add('main-aboutUs-container', 'wrapper')

    const ourStorySection = document.createElement('section')
    ourStorySection.classList.add('ourStory', 'section--spacing')

    ourStorySection.innerHTML = `<div class="left-section">
                <div class="left-section-text">
                    <h2>Our Story</h2>
                    <p>We're an absolute leader in the Saudi cusine-themed restaurants.</p>
                </div>
                <div class="left-section-imgs">
                    <img src="${story1}" alt="">
                    <img src="${story2}" alt="">
                </div>
            </div>
            <div class="right-section">
                <h3>One of the best resturants in Saudi Arabia.</h3>
                <p>Your one direction to high-quality Saudi feasts, since 1998 we served in Saudi Arabia.
                </p>
                <p>Locals who are proud of the country and want to introduce it to visitors from around the world. </p>

                <p>We are perfectly positioned to provide our guests with an extraordinary health experience unlike any they’ve ever tasted. We can confidently claim that our menu is unlike anything else offered in the industry. </p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus mauris nec tincidunt varius. Ut sagittis, lorem at bibendum ornare, mauris neque venenatis justo, ut gravida mi neque eu lorem. Vestibulum auctor leo sit amet vulputate mollis. Curabitur ac lorem felis. Morbi ullamcorper maximus lorem.</p>
            </div>`

    const milestoneSection = document.createElement('section')
    milestoneSection.classList.add('milestone', 'section--spacing')

    const milestoneGrid = document.createElement('div')
    milestoneGrid.classList.add('milestone-grid')

    milestoneGrid.innerHTML = ` <article class="milestone-box">
                                    <div class="year">1998</div>
                                    <div class="titel">Milestone One</div>
                                    <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptate praesentium ex, voluptatibus quide.</div>
                                </article>
                                <article class="milestone-box">
                                    <div class="year">2005</div>
                                    <div class="titel">Milestone Two</div>
                                    <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptate praesentium ex, voluptatibus quide.</div>
                                </article>
                                <article class="milestone-box">
                                    <div class="year">2012</div>
                                    <div class="titel">Milestone Three</div>
                                    <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptate praesentium ex, voluptatibus quide.</div>
                                </article>
                                <article class="milestone-box">
                                    <div class="year">2021</div>
                                    <div class="titel">Milestone Four</div>
                                    <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptate praesentium ex, voluptatibus quide.</div>
                                </article>`

    milestoneSection.appendChild(milestoneGrid)

    const mapSection = document.createElement('section')
    mapSection.classList.add('map', 'section--spacing')

    mapSection.innerHTML = `<div class="map-container">

                                                
                            <address class="map-adress">
                                <h4>Working Hours</h4>
                                Sunday to Saturday <br> 
                                09:00 AM to 11:00 PM <br>
                                Friday <br>
                                02:00 PM to 1:00 AM <br>
                                <h4>Location:</h4>
                                Street - 127, Jeddah, <br> 
                                Saudi Arabia
                                546544
                                <h4>Contact Us</h4>
                                +123456789
                                service@maizresturant.com
                        </address>

                        <div>
                            <img id="map-img" src="${map}" alt="Location of the restaurant">
                        </div>
                        </div>`

    function renderDOM() {
        main.appendChild(ourStorySection)
        main.appendChild(milestoneSection)
        main.appendChild(mapSection)

        return main
    }

    return { renderDOM }
})()

export { AboutUs }
