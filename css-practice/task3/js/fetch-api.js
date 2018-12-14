/* global fetch, document, window */

window.onload = () => {
  fetch('http://localhost:3000/api/blogs')
      .then((res) => res.json())
      .then(renderer);
};

function renderer(res) {
  const latestContainer = document.querySelector(
      '.stories-container .news-block');
  const footerContainer = document.querySelector('.blog-section');
  latestContainer.innerHTML = '';
  const latestBlogs = res.blogs.slice(0, res.latest.length);
  const footerBlogs = res.blogs.slice(res.latest.length);
  latestBlogs.forEach((blog) => latestContainer.append(renderLatestItem(blog)));
  footerBlogs.forEach((blog) => footerContainer.append(renderFooterItem(blog)));
}

function dateParser(dateString) {
  const date = new Date(dateString);
  return {
    day: date.getDate(),
    month: date.toLocaleString('en-us', {month: 'short'}),
    year: date.getFullYear(),
  };
}

function prepareBlogModel(blog) {
  const {previewImg, published, title, description, watched, comments} = blog;
  const date = dateParser(published);
  return {
    previewImg: previewImg,
    published: published,
    title: title,
    description: description,
    watched: watched,
    comments: comments,
    date: date,
  };
}

function renderLatestItem(model) {
  const blog = prepareBlogModel(model);
  const {previewImg, title, description, watched, comments} = blog;
  const {day, month} = blog.date;

  const element = document.createElement('div');
  element.classList.add('post-item');
  element.innerHTML = `
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
  `;
  return element;
}

function renderFooterItem(model) {
  const blog = prepareBlogModel(model);
  const {previewImg, title} = blog;
  const {day, month, year} = blog.date;
  const element = document.createElement('div');
  element.classList.add('blog-content');

  element.innerHTML = `
      <div class="blog-pic">
        <img src=${previewImg} alt="picture">
      </div>
      <div class="blog-info">
        <p class="blog-text">
          ${title}
        </p>
        <p class="date">${month} ${day}, ${year}</p>
      </div>
  `;
  return element;
}
