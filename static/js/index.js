fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@navcoin')
.then((result) => result.json())
.then((data) => {
    for (let i = 0; i < Math.min(3, data.items.length); i++) {
        const entry = data.items[i];
        const format = /<img[^>]+src="([^">]+)/g
        const results = format.exec(entry.content);
    
        if (results.length >= 2 && results[1].substr(0,14) != 'https://medium') {
            document.getElementById('news-image-'+(i+1)).src = results[1];
            document.getElementById('news-date-'+(i+1)).innerHTML = moment(entry.pubDate).format('LL');
            document.getElementById('news-title-'+(i+1)).innerHTML = entry.title;
            document.getElementById('news-button-'+(i+1)).href = entry.link;
        }
    }
});
