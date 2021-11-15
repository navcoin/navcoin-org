function populateGrid(id, contentTemplateId, url) {
    fetch(url)
    .then((result) => result.json())
    .then((data) => {
        const markdownConverter = new showdown.Converter();
        markdownConverter.setOption('tables', 'true');
        markdownConverter.setOption('openLinksInNewWindow', 'true');
        const grid = document.getElementById(id);
        const contentTemplate = document.getElementById(contentTemplateId);

        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            const content = contentTemplate.cloneNode(true);
            const topBlock = content.querySelector('.accordion-top-block');
            const bottomBlock = content.querySelector('.accordion-bottom-block');
            const paragraph = content.querySelector('.accordion-paragraph');
            content.querySelector('.accordion-title').innerHTML = item.title;
            content.querySelector('.bounty-programs-button').href = item.bountiesURL;
            content.id = item.id;

            topBlock.onclick = () => {
                if (bottomBlock.style.maxHeight) {
                    bottomBlock.style.maxHeight = null;
                } else {
                    bottomBlock.style.maxHeight = bottomBlock.scrollHeight + 'px';
                }
            };

            fetch(item.descriptionURL).then(async (asyncResult) => {
                let text = await asyncResult.text();
                paragraph.innerHTML = markdownConverter.makeHtml(text);
            });

            content.style.opacity = '100%';
            grid.append(content);
        }

        contentTemplate.remove();
    })
}

populateGrid('bounty-programs-grid', 'bounty-programs-content', '/data/bounty-programs.json');
