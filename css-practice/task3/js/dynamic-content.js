/* global fetch, document */

const blogSection = document.querySelector('.blog-section');

function RenderBlogItem(model) {
  function dateParser(dateString) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return {
      day: new Date(dateString).getDay() +1,
      month: months[new Date(dateString).getMonth() + 1],
      year: new Date(dateString).getFullYear(),
    };
  }

  const {previewImg, title, published} = model;
  const {day, month, year} = dateParser(published);

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

fetch('http://localhost:3000/api/blogs')
    .then((res) => res.json())
    .then(renderer);

function renderer(res) {
  const latestById = res.latest;

  const latestBlogs = res.blogs.filter((el) => latestById.includes(el.id));
  const footer = res.blogs.filter((el) => !latestById.includes(el.id));

  latestBlogs.forEach((model) => {
    const blogView = new RenderBlogItem(model);
    blogSection.appendChild(blogView);
  });

  footer.forEach((model) => {
    const blogView = new RenderBlogItem(model);
    blogSection.appendChild(blogView);
  });
}
