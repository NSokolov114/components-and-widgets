'use strict';

const left = document.querySelector('.left'),
  right = document.querySelector('.right'),
  container = document.querySelector('.container');

left.addEventListener('mouseenter', () =>
  container.classList.add('hover-left')
);

left.addEventListener('mouseleave', () =>
  container.classList.remove('hover-left')
);

right.addEventListener('mouseenter', () =>
  container.classList.add('hover-right')
);

right.addEventListener('mouseleave', () =>
  container.classList.remove('hover-right')
);
