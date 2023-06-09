const footer = document.createElement('footer');
const description = 'Watch future updates on:'
const gitRepo = 'https://github.com/bumbaruandrei07/movie-tracker';

footer.innerHTML = `
  <h3 class="footer-heading">
     ${description}
     <a href=${gitRepo}>GitHub</a>
  </h3>
`;

footer.style.position = 'fixed';
footer.style.bottom = '0%';
footer.style.right = '0%';
root.appendChild(footer);