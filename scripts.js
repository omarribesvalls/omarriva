window.onload = function() {
  const container = document.getElementById('post-list');
  posts.forEach(post => {
    const postDiv = document.createElement('article');
    postDiv.className = 'post';
    postDiv.innerHTML = `
      <a href="post.html?id=${post.id}">
        <img src="${post.image}" alt="${post.title}">
        <h2>${post.title}</h2>
      </a>
    `;
    container.appendChild(postDiv);
  });
};