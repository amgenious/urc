// const multer= require('multer');
// const aws = require("aws-sdk");
// // import * as AWS from 'aws-sdk';
// require('dotenv').config()

// // AWS SDK Configuration
// AWS.config.update({
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   region: process.env.AWS_S3_REGION_NAME,
//   signatureVersion : 'v4'  //API version
// });

// // Creating an S3 instance
// const s3 = new AWS.S3({signatureVersion: 'v4'});

// // Reading the file from local path and uploading to S3 Bucket

//   const aws_handle = fs.readFile(filePath, (err, fileBody) => {
//     console.log(fileBody)
//     console.log(filePath)
//     var name = filePath.split('/')
//     var filename = name[name.length -1 ]

//     if(err) {

//        console.log("Error", err);
//     } else {
//         let params = {
//             Bucket: process.env.AWS_STORAGE_BUCKET_NAME,
//             Key: filename,
//             Body: fileBody
//         };
//         s3.upload(params, (err, result) => {
//             if(err) {
//                console.log("Error", err);
//             } else {
//                console.log("S3 Response",result);
//             }
//         })
//     }
//   });

// export default aws_handle;





// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./uploads");
//   },
//   filename: (req, file, cb) => {
//     cb(null,file.fieldname + "_" + file.originalname);
//   },
// });

// const upload = multer({ storage: storage }).single("image");

// module.exports = upload;
