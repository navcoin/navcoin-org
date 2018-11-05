var fs = require('fs');

if (process.argv.length <= 2) {
  console.log('Usage: ' + __filename + ' languagecode');
  process.exit(-1);
}

const languageCode = process.argv[2];
const path = './content/';

fs.readdir(path, function(err, items) {

  let dirs = items.filter((item) => {

    const stats = fs.statSync(`${path}/${item}`)
    if (stats.isDirectory())
      return true
    return false
  })

  for (var i = 0; i < dirs.length; i++) {
    duplicateEnglishMarkdown(`${path}${dirs[i]}/`, languageCode);
  }
});





function duplicateEnglishMarkdown(dirPath, languageCode) {
  fs.readdir(dirPath, function(err, items) {

    let englishFiles = items.filter((item) => {
      if (item.includes('.en.md'))
        return true
      return false
    })
    
    for (var i = 0; i < englishFiles.length; i++) {
      const translationFilename = englishFiles[i].substring(0,  englishFiles[i].length - 5) + languageCode + '.md'
      try {
        fs.statSync(dirPath + translationFilename)
        console.log(`**** \n${dirPath + translationFilename} exists \n****`)
        return
      } catch (e) {
        fs.copyFile(`${dirPath + englishFiles[i]}`, `${ dirPath + translationFilename}`, (err) => {
          if (err) throw err;
          console.log(`${dirPath + englishFiles[i]} was copied as ${translationFilename}`);
        })
      }
    }
  });
}