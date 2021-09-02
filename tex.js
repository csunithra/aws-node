const express = require('express'),
  path = require('path'),
  cors = require('cors'),
  multer = require('multer'),
  bodyParser = require('body-parser');

// const fs = require('fs');
// const AWS = require('aws-sdk');
  
// const s3 = new AWS.S3({
//   accessKeyId: 'AKIA5UU4MAH67RBU5YWW',
//   secretAccessKey: '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'
// });

// // File upload settings  
// const PATH = './uploads';

// let storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, PATH);
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + '-' + Date.now())
//   }
// });

// let upload = multer({
//   storage: storage
// });

// // Express settings
// const app = express();
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: false
// }));
const express = require('express'),
  path = require('path'),
  cors = require('cors'),
  multer = require('multer'),
  bodyParser = require('body-parser');
app.get('/api', function (req, res) {
  res.end('File catcher');
});

// POST File
app.post('/api/upload', upload.single("file"),(req, res) => {
  console.log('fileeeeeeee',req.file);
  // if (!req.file) {
  //   console.log("No file is available!");
  //   return res.send({
  //     success: false
  //   });

  // } else {
  //   fs.readFile(req.file, (err, data) => {
  //     if (err) throw err;
  //     const params = {
  //         Bucket: 'Books/', // pass your bucket name
  //         Key: req.file, // file will be saved as testBucket/contacts.csv
  //         Body: JSON.stringify(data, null, 2)
  //     };
  //     s3.upload(params, function(s3Err, data) {
  //         if (s3Err) throw s3Err
  //         console.log(`File uploaded successfully at ${data.Location}`)
  //     });
  //  });
  //   return res.send({
  //     success: true
  //   })
  // }
});

// // Create PORT
// const PORT = process.env.PORT || 8080;
// const server = app.listen(PORT, () => {
//   console.log('Connected to port ' + PORT)
// })

// // Find 404 and hand over to error handler
// app.use((req, res, next) => {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//   console.error(err.message);
//   if (!err.statusCode) err.statusCode = 500;
//   res.status(err.statusCode).send(err.message);
// });
// const fs = require('fs');
// const AWS = require('aws-sdk');
// var express = require('express');

// const  multipart  =  require('connect-multiparty');
// const  multipartMiddleware  =  multipart(uploadFile());

// const app = express();
// const s3 = new AWS.S3({
//   accessKeyId: 'AKIA5UU4MAH67RBU5YWW',
//   secretAccessKey: '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'
// });



//  const fileName = 'download.jpg';

//  const uploadFile = () => {
//    fs.readFile(fileName, (err, data) => {
//       if (err) throw err;
//       // const params = {
//       //     Bucket: 'jsa-book-bucket', // pass your bucket name
//       //     Key: 'download.jpg', // file will be saved as testBucket/contacts.csv
//       //     Body: JSON.stringify(data, null, 2)
//       // };
//       // s3.upload(params, function(s3Err, data) {
//       //     if (s3Err) throw s3Err
//       //     console.log(`File uploaded successfully at ${data.Location}`)
//       // });
//    });
//  };
 
 //uploadFile();
// app.use(fileUpload());


// var AWS = require('aws-sdk');

app.post('/imageUpload', (req, res) => {
  console.log(req.file)
  uploadFile();
});


//     const s3 = new AWS.S3();

//     // Binary data base64
//     const fileContent  = Buffer.from(req.files.uploadedFileName.data, 'binary');

//     // Setting up S3 upload parameters
//     const params = {
//         Bucket: 'BUKET-NAME',
//         Key: "download.jpg", // File name you want to save as in S3
//         Body: fileContent 
//     };

//     // Uploading files to the bucket
//     s3.upload(params, function(err, data) {
//         if (err) {
//             throw err;
//         }
//         res.send({
//             "response_code": 200,
//             "response_message": "Success",
//             "response_data": data
//         });
//     });

// })

app.listen(8080, function () {
    console.log('Example app listening on port 3000!');
});




app.get('/', (req, res) => { 
  res.send('Hello People'); 
});

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});

const storage = multer.memoryStorage({
destination: (req, file, callback) => {
    callback(null, "")
}
})

const upload = multer({storage}).single("file");

app.post("/upload", upload, (req, res) => {
let myFile = req.file.originalname
let path = req.params.directory

fs.readFile(myFile, (err, data) => {
        if (err) throw err;
        const params = {
            Bucket: 'jsa-book-bucket', // pass your bucket name
            Key: myFile, // file will be saved as testBucket/contacts.csv
            Body: JSON.stringify(data, null, 2)
        };
        s3.upload(params, function(s3Err, data) {
            if (s3Err) throw s3Err
            console.log(`File uploaded successfully at ${data.Location}`)
        });
     });
});




const storage = multer.memoryStorage({
  destination: (req, file, callback) => {
      callback(null, "")
  }
})
  
  const upload = multer({storage}).single("file_upload");
  
  app.post("/upload", upload, (req, res) => {
  let myFile = req.file.originalname
  let path = req.params.directory
  console.log(path)
  fs.readFile(myFile, (err, data) => {
          if (err) {
            throw err;
          }
          const params = {
              Bucket: 'jsa-book-bucket', // pass your bucket name
              Key: myFile, // file will be saved as testBucket/contacts.csv
              Body: JSON.stringify(data, null, 2)
          };
          s3.upload(params, function(s3Err, data) {
              if (s3Err) throw s3Err
              console.log(`File uploaded successfully at ${data.Location}`)
          });
       });
  });
