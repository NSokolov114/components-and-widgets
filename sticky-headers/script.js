'use strict';

document.addEventListener('DOMContentLoaded', ready);

function ready() {
  console.log('hey');
  const container = document.querySelector('.container');

  // fetching posts
  async function getPosts(num) {
    try {
      const api = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=${num}`
      );
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
        <h3 class="post__title">${post.title}</h3>
        <div class="post__img-container">
          <a href="${post.hdurl}">
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

  // getPosts();

  async function renderPosts(num) {
    const posts = await getPosts(num);
    // let html = '';
    // posts.forEach(post => {
    //   html += generatePostHtml(post);
    // });
    const html = posts.reduce((acc, post) => acc + generatePostHtml(post));

    container.insertAdjacentHTML('afterbegin', html);
    console.log('test2');
  }

  console.log('test1');
  // renderPosts(3);
  console.log('test3');

  const postEls = container.querySelectorAll('.post');
  const titleEls = container.querySelectorAll('.post__title');

  titleEls[0].classList.add('sticky');
}
