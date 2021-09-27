const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const dotenv = require('dotenv');
dotenv.config();

aws.config.update({
  accessKeyId: 'AKIAXLIV5ZOOAYXVGD35',
  secretAccessKey: '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'
});

const s3 = new aws.S3();

const fileFilter = (req, file, cb) => {
    cb(null, true);
};

const upload = multer({
  fileFilter: fileFilter,
  storage: multerS3({
    s3,
    bucket: 'aws-books-bucket',
    key: function(req, file, cb) {
      req.file = Date.now() + file.originalname;
      cb(null, Date.now() + file.originalname);
    }
  })
});
module.exports = upload;
