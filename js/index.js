import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// настройки плагина
import './i18n';

ReactDOM.render (
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
        <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

let mybutton = document.getElementById("btn-back-to-top");
if (jQuery('#btn-back-to-top').length) {
  var scrollTrigger = 100, // px
      backToTop = function () {
          var scrollTop = jQuery(window).scrollTop();
          if (scrollTop > scrollTrigger) {
              jQuery('#btn-back-to-top').addClass('show');
          } else {
              jQuery('#btn-back-to-top').removeClass('show');
          }
      };
  backToTop();
  jQuery(window).on('scroll', function () {
      backToTop();
  });
  jQuery('#btn-back-to-top').on('click', function (e) {
      e.preventDefault();
     jQuery('html,body').animate({
          scrollTop: 0
      }, 700);
  });
}


