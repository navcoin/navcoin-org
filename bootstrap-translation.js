var fs = require('fs');

if (process.argv.length <= 2) {
  console.log('Usage: ' + __filename + ' languagecode');
  process.exit(-1);
}

const languageCode = process.argv[2];
const path = './content/';

fs.readdir(path, function (err, items) {

  let dirs = items.filter((item) => {

    const stats = fs.statSync(`${path}/${item}`)
    if (stats.isDirectory()) {
      return true
    }
    return false
  })

  for (var i = 0; i < dirs.length; i++) {
    duplicateEnglishMarkdown(`${path}${dirs[i]}/`, languageCode);
  }
  duplicateEnglishMarkdown(path, languageCode);
});



function duplicateEnglishMarkdown(dirPath, languageCode) {
  fs.readdir(dirPath, function (err, items) {

    let englishFiles = items.filter((item) => {
      if (item.includes('.en.md') || item.includes('.en.html'))
        return true
      return false
    })

    for (var i = 0; i < englishFiles.length; i++) {
      const splitFile = englishFiles[i].split('.');
      const fileName = splitFile[0];
      const fileExt = splitFile[splitFile.length - 1];

      const translationFilename = `${fileName}.${languageCode}.${fileExt}`;
      try {
        // Look for the file, if it exists we log. If we can't find it, we will error, and then generate the file.
        fs.statSync(dirPath + translationFilename)
        console.error(`**** ${dirPath + translationFilename} exists ****`)
        return
      } catch (e) {
        fs.copyFile(`${dirPath + englishFiles[i]}`, `${dirPath + translationFilename}`, (err) => {
          if (err) throw err;
          console.log(`${dirPath}${fileName}.en.${fileExt} was copied as ${translationFilename}`);
        })
      }
    }
  });
}