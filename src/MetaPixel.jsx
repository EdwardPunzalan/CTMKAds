import React, { useEffect } from 'react';

const MetaPixel = () => {
  useEffect(() => {
    // Function to initialize the Meta Pixel
    (function(f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    // Initialize your Pixel ID
    fbq('init', '420075857165383');
    fbq('track', 'PageView');
  }, []);

  // No need to return anything for this component
  return null;
};

export default MetaPixel;
