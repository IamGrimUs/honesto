import * as React from 'react';
import './footer.styles.css';

export const Footer = ({text}) => {
  return (
    <footer>
      <section className="container flex-row flex-row_between center">
      <div>
        <figure>
          <img src="/Theorem.png" alt="Theorem Logo" />
        </figure>
      </div>
      <div>
        <p className="text-align-right">{text}</p>
        </div>
      </section>
    </footer>
  )
}