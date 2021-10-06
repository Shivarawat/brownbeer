import React from 'react'

const Footer = () => {
    return (
    <footer class="block block--dark footer">
      <div class="container grid footer__sections">
        <section class="collapsible footer__section">
          <div class="collapsible__header">
            <h2 class="collapsible__heading footer__heading">Support</h2>
            <h2 class="collapsible__heading footer__heading">About us</h2>
            <h2 class="collapsible__heading footer__heading">Contact</h2>
          </div>
        </section>

        <div class="footer__brand">
          <img src="images/logo.svg" alt="" />
          <p class="footer__copyright">Copyright 2021 SHIVA</p>
        </div>
      </div>
    </footer>
    )
}

export default Footer