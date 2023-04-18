import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer2.css';

function Footer2() {

  return (
    <div className="main-footer">
      <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
        <p className='text-footer'>Síguenos en:</p>
          <section className="mb-4">
            <ul>
            <li><a className="btn btn-outline-light btn-floating m-1" href="http://www.twitter.com" role="button">
              <i className="fab fa-twitter"></i>
            </a></li>
            
            <li><a className="btn btn-outline-light btn-floating m-1" href="http://www.instagram.com" role="button">
              <i className="fab fa-instagram"></i>
            </a></li>

            <li><a className="btn btn-outline-light btn-floating m-1" href="http://www.linkedin.com" role="button">
              <i className="fab fa-linkedin-in"></i>
            </a></li>

            <li><a className="btn btn-outline-light btn-floating m-1" href="http://www.twitter.com" role="button">
              <i className="fab fa-twitter"></i>
            </a></li>
            </ul>
          </section>
        </div>

        <div className="text-center p-3">
          © 2023 Copyright
        </div>

      </footer>
    </div>
  )
}

export default Footer2