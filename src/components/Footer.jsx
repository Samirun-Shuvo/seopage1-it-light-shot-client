import React from 'react';

const Footer = () => {
  return (
    <div className="footer bg-gray-900 text-white py-6">
      <div className="page-constrain mx-auto max-w-screen-lg flex flex-col items-center sm:flex-row sm:justify-between">
        <a href="./">
          <img
            src="//st.prntscr.com/2023/07/24/0635/img/footer-logo.png"
            alt="Footer Logo"
            className="footer-logo w-24"
          />
        </a>
        <ul className="footer-nav flex space-x-4 mt-4 sm:mt-0">
          <li>
            <a href="//app.prntscr.com/download.html" className="hover:text-gray-400">Download</a>
          </li>
          <li>
            <a href="//app.prntscr.com/tutorials.html" className="hover:text-gray-400">Tutorials</a>
          </li>
          <li>
            <a href="//app.prntscr.com/privacy.html" className="hover:text-gray-400">Privacy</a>
          </li>
          <li>
            <a href="//app.prntscr.com/help.html" className="hover:text-gray-400">Help</a>
          </li>
          <li>
            <a href="//app.prntscr.com/advertise.html" className="hover:text-gray-400">Advertise</a>
          </li>
        </ul>
        <div className="footer-copy mt-4 sm:mt-0 text-center">
          <span>
            <a href="mailto:support@skillbrains.com" className="hover:text-gray-400">Skillbrains</a> © 2009-2022
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
