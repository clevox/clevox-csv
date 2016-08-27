var path = require('path');
var formidable = require('formidable');
var fs = require('fs');
var uploadDir = path.join(path.dirname(require.main.filename), '/uploads');

function setupForm(form) {
  form.type = 'multipart';
  form.multiples = true;
  form.maxFieldsSize = 52428800;
  form.uploadDir = uploadDir;
  form.keepExtensions = true;
}

var upload = function (req, res) {

  var form = new formidable.IncomingForm();
      
  setupForm(form);
  console.log(uploadDir);

  form.on('file', function(field, file) {
    fs.rename(file.path, path.join(form.uploadDir, file.name));
  });

  form.on('error', function(err) {
    console.log('An error has occured: \n' + err);
  });

  form.on('end', function() {
   return res.end('success');
  });

  form.parse(req);
};


module.exports = {
  upload: upload
}
