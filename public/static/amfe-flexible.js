(function flexible() {
  if (typeof window === 'undefined') return;
  var docEl = document.documentElement;
  var dpr = window.devicePixelRatio || 1;

  // adjust body font size
  // set 1rem = viewWidth / 10
  document.write(
    `<style type="text/css">
      html {
        font-size: ${docEl.clientWidth / 10}px;
      }
        
      body {
        font-size: ${12 * dpr}px;
      }
    </style>`,
  );
  function setRemUnit() {
    var rem = docEl.clientWidth / 10;
    docEl.style.fontSize = rem + 'px';
  }
  // setRemUnit();
  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit);
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit();
    }
  });
})();
