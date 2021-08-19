'use strict';

document.addEventListener('DOMContentLoaded', ready);
function ready() {
  const toggles = document.querySelectorAll('.toggle'),
    good = document.querySelector('#good'),
    fast = document.querySelector('#fast'),
    cheap = document.querySelector('#cheap');

  toggles.forEach(toggle =>
    toggle.addEventListener('change', e => doTheTrick(e.target))
  );

  function doTheTrick(theClickedOne) {
    if (good.checked && fast.checked && cheap.checked) {
      if (good === theClickedOne) {
        fast.checked = false;
      } else if (cheap === theClickedOne) {
        good.checked = false;
      } else if (fast === theClickedOne) {
        cheap.checked = false;
      }
    }
  }
}
