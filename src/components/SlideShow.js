import React from 'react'

const SlideShow = () => {
    return (
    <section class="block" /*data-aos="zoom-in"*/>
      <header class="block__header">
        <h2>What our users are saying?</h2>
        <p>People had an amazing experience</p>
      </header>
      {/* <!-- Slideshow container --> */}
          <div class="container">
            <div class="card testimonial">
              <div class="grid grid--1x2">
                <div class="testimonial__image">
                  <img
                    src="images/testimonials/danav.jpg"
                    alt="A happy, smiling customer"
                  />
                  <span class="icon-container icon-container--accent">
                    <svg class="icon icon--white icon--small">
                      <use href="images/svgs/sprite.svg#quotes"></use>
                    </svg>
                  </span>
                </div>
                <blockquote class="quote">
                  <p class="quote__text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt optio officiis dolore earum error eaque perferendis
                    laudantium sed praesentium dolorum.
                  </p>
                  <footer>
                    <div class="media">
                      <div class="media__image">
                        <svg class="icon icon--primary quote__line">
                          <use href="images/svgs/sprite.svg#line"></use>
                        </svg>
                      </div>
                      <div class="media__body">
                        <h3 class="media__title quote__author">Shiv</h3>
                        <p class="quote__organization">ABC Company</p>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
            </div>
    </section>
    )
}

export default SlideShow