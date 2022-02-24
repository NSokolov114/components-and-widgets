'use strict';

document.addEventListener('DOMContentLoaded', ready);

function ready() {
  const container = document.querySelector('.container');

  async function getPosts(num) {
    try {
      const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=${num}`;
      const api = await fetch(url);
      const posts = await api.json();

      return posts;
    } catch (err) {
      console.log(`Error fetching posts: ${err.message}`);
    }
  }

  function generatePostHtml(post) {
    const alt = post.url
      .split('/')
      .at(-1)
      .split('.')
      .at(0)
      .replaceAll('_', ' ');

    return `
      <article class="post">
        <h3 class="post__title sticky">${post.title}</h3>
        <div class="post__img-container">
          <a href="${post.hdurl}" target="_blank">
            <img
              src="${post.url}"
              alt="${alt}"
            />
          </a>
          <div class="post__img-info-container">
          <span>${post.date}</span>
          ${post.copyright ? `<span>© ${post.copyright}</span>` : ''}
          </div>
        </div>
        <p class="post__text">${post.explanation}</p>
      </article>
    `;
  }

  async function renderPosts(num) {
    const posts = await getPosts(num);
    const html = posts.reduce((acc, post) => acc + generatePostHtml(post), '');

    container.insertAdjacentHTML('afterbegin', html);
  }

  renderPosts(7);

  // tmp
  // const postEls = container.querySelectorAll('.post');
  // const titleEls = container.querySelectorAll('.post__title');

  // titleEls[0].classList.add('sticky');
  // const toggleStickyTitle = function (entries) {
  //   const [entry] = entries;
  //   if (entry.isIntersecting) {
  //     console.log(entry, 'in', entry.boundingClientRect.top);
  //   } else {
  //     console.log(entry, 'out', entry.boundingClientRect.top);
  //   }
  // };

  // const observer = new IntersectionObserver(toggleStickyTitle, {
  //   root: null,
  //   threshold: 0,
  // });
  // postEls.forEach(postEl => observer.observe(postEl));
  // observer.observe(...postEls);
}
