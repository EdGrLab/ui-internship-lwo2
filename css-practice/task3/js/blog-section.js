/* global fetch, document */
const latestBlogs = document.querySelector('.stories-container');

function RenderStoriesItem(model) {
  function dateParser(dateString) {
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return {
      day: new Date(dateString).getDate() - 1,
      month: month[new Date(dateString).getMonth() + 1],
    };
  }

  const {previewImg, published, title, description, watched, comments} = model;
  const {day, month} = dateParser(published);

  const elem = document.createElement('div');
  elem.classList.add('news-block');
  elem.innerHTML = `
    <div class="post-item">
    <img src=${previewImg} alt="post" />
    <div class="post-day"><span>${day}</span> <span>${month}</span></div>
    <h5>${title}</h5>
    <p>
      ${description}
    </p>
    <hr />
    <div class="stats">
      <img src="img/view-icon.png" alt="stats" /> <i>${watched}</i>
      <img src="img/comment-icon.png" alt="stats" /> <i>${comments}</i>
    </div>
  </div>
  `;
  return elem;
}

fetch('http://localhost:3000/api/blogs')
    .then((res) => res.json())
    .then(renderer);

function renderer(res) {
  const latestById = res.latest;

  const latest = res.blogs.filter((el) => latestById.includes(el.id));

  latest.forEach((model) => {
    const blogView = new RenderStoriesItem(model);
    latestBlogs.appendChild(blogView);
  });
}
