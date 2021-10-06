import React from 'react'

const Hero = () => {
    return (
    <section class="block block--dark block--skewed-left hero">
      <div class="container grid grid--1x2">
        <header class="block__header hero__content">
          <h1 /*data-aos="fade-right"*/ class="block__heading">
            Look for your favorite food recipe
          </h1>
          <p class="hero__tagline">
            Your favourite dish is just a search away..
          </p>
          <a
            href="https://brownbeer.netlify.app"
            target=""
            class="btn btn--accent btn--stretched"
            >Get Started</a
          >
        </header>
        
        <picture /*data-aos="zoom-in"*/>
          <img class="hero__image" src="images/svgs/Street Food.svg" alt="" />
        </picture>
      </div>
    </section>
    );
}

export default Hero