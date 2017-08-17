var fs = require('fs');
module.exports = function (path, ext, callback) {
  fs.readdir(path, (err, list) => {
    if(err) return callback(err);
    ext = '.' + ext;
    data = list.filter((file) => {
      if(file.includes(ext)) return file;
    })
    callback(null, data);
  });
}
