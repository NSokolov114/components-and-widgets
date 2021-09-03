'use strict';

document.addEventListener('DOMContentLoaded', ready);
function ready() {
  const header = document.getElementById('header'),
    title = document.getElementById('title'),
    excerpt = document.getElementById('excerpt'),
    profile_img = document.getElementById('profile_img'),
    name = document.getElementById('name'),
    date = document.getElementById('date');

  const animated_bgs = document.querySelectorAll('.animated-bg');
  const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

  setTimeout(getData, 2500);

  function getData() {
    header.innerHTML = `<img src="https://images.unsplash.com/photo-1629907490830-2bcee3679981?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
     alt="blue spruce branches" />`;
    title.innerHTML = `Blue Spruce Branches`;
    excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
      voluptatibus?`;
    profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/22.jpg"
     alt="random user image" />`;
    name.innerHTML = 'Mike Smith';
    date.innerHTML = 'May 07, 2021';

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
  }
}
