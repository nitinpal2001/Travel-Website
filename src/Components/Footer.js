import React from 'react'
import Button from './Button'
import '../Styles/footer.css'
import { Link } from 'react-router-dom'
import { FaTypo3, FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa'


function Footer() {
  return (
    <div className='footer'>
      <section className='footer__subscription'>
        <p className="footer__subscription__heading">
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer__subscription__text">
          You can unsubscribe at any time.
        </p>
        <div className="footer__subscription__inputfield">
          <form action="submit">
            <input type="email" name="email" placeholder='Your Email' className='footer__subscription__inputfield__input' />
            <Button buttonStyle='btn--outline' buttonSize='btn--medium'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer__links">
        <div className="footer__links__wrapper">
          <div className="footer__links__items">
            <h2>About Us</h2>
            <Link href='/singup'>How it works</Link>
            <Link href='/'>Testimonials</Link>
            <Link href='/'>Careers</Link>
            <Link href='/'>Investors</Link>
            <Link href='/'>Terms of Service</Link>
          </div>
          <div className="footer__links__items">
            <h2>Contact Us</h2>
            <Link href='/singup'>Contact</Link>
            <Link href='/'>Support</Link>
            <Link href='/'>Destinations</Link>
            <Link href='/'>Sponsorships</Link>
          </div>
        </div>
        <div className="footer__links__wrapper">
          <div className="footer__links__items">
            <h2>Videos</h2>
            <Link href='/singup'>Submit Video</Link>
            <Link href='/'>Ambassadors</Link>
            <Link href='/'>Agency</Link>
            <Link href='/'>Influencer</Link>
          </div>
          <div className="footer__links__items">
            <h2>Social Media</h2>
            <Link href='/singup'>Instagram</Link>
            <Link href='/'>Facebook</Link>
            <Link href='/'>Youtube</Link>
            <Link href='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media__wrap">
          <div className="footer-logo">
            <Link to="/" className='social-logo'>
              TRVL <FaTypo3 style={{ marginLeft: "0.5rem", fontSize: "1.8rem" }} />
            </Link>
          </div>
          <small className="website-rights">TRVL © 2021</small>
          <div className="social-icons">
            <Link to="/" className='social-icon__link facebook' target="_blank" aria-label='Facebook'>
              <FaFacebookF />
            </Link>
            <Link to="/" className='social-icon__link instagram' target="_blank" aria-label='Instagram'>
              <FaInstagram />
            </Link>
            <Link to="/" className='social-icon__link twitter' target="_blank" aria-label='Twitter'>
              <FaTwitter />
            </Link>
            <Link to="/" className='social-icon__link youtube' target="_blank" aria-label='Youtube'>
              <FaYoutube />
            </Link>
            <Link to="/" className='social-icon__link linkedin' target="_blank" aria-label='Linkedin'>
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>


  )
}

export default Footer;