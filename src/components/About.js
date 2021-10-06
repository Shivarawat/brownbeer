import React from 'react'

const About = () => {
    return (
    <section class="block block--dark block--skewed-right block-showcase">
      <header class="block__header">
        <h2>Aesthetic Exprience</h2>
      </header>
      <div class="container grid grid--1x2">
        <picture /*data-aos="fade-right"*/ class="block-showcase__image">
          <img src="./images/testimonials/Screenshot (135).png" alt="" />
        </picture>
        <ul class="list" /*data-aos="fade-up"*/>
          <li>
            <div class="media">
              <div class="media__image">
                <svg class="icon icon--primary">
                  <use href="images/svgs/sprite.svg#snap"></use>
                </svg>
              </div>
              <div class="media__body">
                <h3 class="media__title">Beautiful and aesthetic UI</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam quisquam, ex nostrum vero voluptates dicta excepturi
                  vel perspiciatis consequuntur ab.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="media">
              <div class="media__image">
                <svg class="icon icon--primary">
                  <use href="images/svgs/sprite.svg#growth"></use>
                </svg>
              </div>
              <div class="media__body">
                <h3 class="media__title">Seamless Experience</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam quisquam, ex nostrum vero voluptates dicta excepturi
                  vel perspiciatis consequuntur ab.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    )
}

export default About