const express = require('express');
const AWS = require('aws-sdk');
const cors = require('cors');
const upload = require('./middleware/file-upload');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log('Connected to port ' + PORT)
});

app.get('/', (req, res) => { 
    res.send('Hello People'); 
});

app.post('/upload', cors(), upload.array('file_upload', 1), (req, res) => {
  res.send({
      "response_code": 200,
      "response_message": "Success"
  });
});