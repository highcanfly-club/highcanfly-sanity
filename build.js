var fs = require('fs')
var UglifyJS = require('uglify-js');

function md(dir) {
  fs.mkdirSync(dir, { recursive: true }, (err) => {
    if (err) throw err;
  });
}

function minify(fin, fout) {
  fs.readFile(fin, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    var result = UglifyJS.minify(data);
    fs.writeFile(fout, result.code, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("File " + fout + " was successfully saved.");
      }
    });
  });
}

function callbackErr(err) {
  if (err) throw err;
  console.log('File copied');
}

md('./dist');
fs.copyFile('./public/index.html','./dist/index.html',callbackErr);
