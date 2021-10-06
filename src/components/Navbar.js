import React from 'react'

const Navbar = () => {
    return (
      <header>
      <nav class="nav collapsible">
        <a class="nav__brand" href="/"> Brown Beer</a>
        <svg class="icon icon--white nav__toggler">
          <use href="images/svgs/sprite.svg#menu"></use>
        </svg>
        <ul class="list nav__list collapsible__content">
          <li class="nav__item">
            <a href="https://brownbeerlogin.netlify.app">Login</a>
            <a href="https://brownbeerregister.netlify.app">Register</a>
          </li>
        </ul>
      </nav>
    </header>
    );
}

export default Navbar
