fetch('https://api.github.com/repos/navcoin/navcoin-core/contributors?anon=true')
	.then((result) => result.json())
 	.then((data) => {
	const grid = document.getElementsByClassName('protocol-contributors-grid')[0];
  const template = document.getElementsByClassName('protocol-contributor-content')[0];
  for (let i = 0; i < data.length; i++) {
  	const item = data[i];
    if (item.type == 'User') {
    	const content = template.cloneNode(true);
      content.querySelector('.protocol-contributor-image').src = item.avatar_url;
      content.querySelector('.protocol-contributor-title').innerHTML = item.login;
      content.querySelector('.protocol-contributor-button').href = item.html_url;
      content.style.opacity = '100%';
      grid.append(content);
    }
  }
  template.remove();
});
