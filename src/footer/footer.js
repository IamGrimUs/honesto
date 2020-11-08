import * as React from 'react';
import './footer.styles.css';

export const Footer = () => {
  return (
    <footer>
      <section className="container flex-row flex-row_between center">
        <div>
          <figure>
            <img src="/Theorem.png" alt="Theorem Logo" />
          </figure>
        </div>
        <div>
          <p className="text-align-right">
            Copyright © 2018 <span className="text-bold">Theorem</span>, LLC. All Rrights Reserved.
          </p>
        </div>
      </section>
    </footer>
  );
};