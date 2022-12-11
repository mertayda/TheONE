import React from "react";
import "./FooterGot.css";
import { useState, useEffect } from "react";

const FooterGot = () => {
  return (
    <div className="footerGot-container">
      <section className="footerGot-quote">
        <div className="footerGot-quote">
          <p className="footerGot-quote-text">
            "Joffrey, when your enemies defy you, you must serve them steel and
            fire. When they go to their knees, however, you must help them back
            to their feet. Elsewise no man will ever bend the knee to you. And
            any man who must say 'I am the king' is no true king at all. Aerys
            never understood that, but you will. When I've won your war for you,
            we will restore the king's peace and the king's justice."
          </p>
          <p className="footerGot-quote-author">Tywin Lannister</p>
        </div>
      </section>
      <div className="footerGot-rights">
        <p>© 2022 TheOne. All rights reserved.</p>
      </div>
    </div>
  );
};

export default FooterGot;
