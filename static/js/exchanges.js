fetch('/data/exchanges.json')
.then((result) => result.json())
.then((data) => {
    const grid = document.getElementsByClassName('exchange-grid')[0];
    const template = document.getElementsByClassName('exchange-content')[0];

    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        const content = template.cloneNode(true);
        content.querySelector('.exchange-image').src = item.imageURL;
        content.querySelector('.exchange-title').innerHTML = item.name;
        content.querySelector('.exchange-paragraph').innerHTML = item.description;
        content.querySelector('.exchange-button').href = item.url;
        content.style.opacity = '100%';
        grid.append(content);
    }

    template.remove();
});
