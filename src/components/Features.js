import React from 'react'

const Features = () => {
    return (
        <div>
            <section /*data-aos="fade-up"*/ class="block container block-domain">
      <header class="block__header">
        <h2>Search popular street food nearby..</h2>
        <p>Enter city name and vote for your fav dish..</p>
      </header>
      <div class="input-group">
        <input
          type="text"
          class="input"
          placeholder="Enter city name here..."
        />
        <button class="btn btn--accent">
          <svg class="icon icon--white">
            <use href="images/svgs/sprite.svg#search"></use></svg
          >Search
        </button>
      </div>
    </section>
    <section class="block container">
      <header class="block__header">
        <h2>No more confusion...</h2>
        <p>Explore a whole new world around you</p>
      </header>
      <article class="grid grid--1x2 feature">
        <div class="feature__content" /*data-aos="fade-right"*/>
          <span class="icon-container">
            <svg class="icon icon--primary">
              <use href="images/svgs/sprite.svg#easy"></use>
            </svg>
          </span>
          <h3 class="feature__heading">Super Easy to Use</h3>
          <p>
            We care about our users. Everything you need is right in front of
            your eyes.
          </p>
          <a href="#" class="link-arrow">Learn More</a>
        </div>
        <picture /*data-aos="zoom-in-left"*/>
          <source
            type="image/webp"
            srcset="images/gen/easy.webp 1x, images/gen/easy@2x.webp 2x"
          />
          <source
            type="image/jpg"
            srcset="images/gen/easy.jpg 1x, images/gen/easy@2x.jpg 2x"
          />
          <img class="feature__image" src="images/gen/easy@2x.jpg" alt="" />
        </picture>
      </article>
      <article class="grid grid--1x2 feature">
        <div class="feature__content">
          <span class="icon-container">
            <svg class="icon icon--primary">
              <use href="images/svgs/sprite.svg#computer"></use>
            </svg>
          </span>
          <h3 class="feature__heading">Blazingly Fast</h3>
          <p>
            No one likes to wait for several seconds just to get a bit of info.
          </p>
          <a href="#" class="link-arrow">Learn More</a>
        </div>
        <picture>
          <source
            type="image/gen/webp"
            srcset="images/gen/fast.webp 1x, images/gen/fast@2x.webp 2x"
          />
          <source
            type="image/jpg"
            srcset="images/gen/fast.jpg 1x, images/gen/fast@2x.jpg 2x"
          />
          <img class="feature__image" src="images/gen/fast@2x.jpg" alt="" />
        </picture>
      </article>
    </section> 
    </div>
    );
}

export default Features