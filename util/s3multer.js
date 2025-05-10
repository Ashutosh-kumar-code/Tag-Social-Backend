// const aws = require("aws-sdk");
// const multer = require("multer");
// const multerS3 = require("multer-s3");

// const s3 = new aws.S3({
//   accessKeyId: process?.env?.aws_access_key_id,
//   secretAccessKey: process?.env?.aws_secret_access_key,
//   endpoint: new aws.Endpoint(process?.env?.hostname),
// });

// const upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: process?.env?.bucketName,
//     acl: "public-read",
//     key: function (request, file, cb) {
//       console.log("file in s3multer:     " + file);
//       console.log("request in s3multer:  ", request.body);

//       const folderStructure = request.body.folderStructure;
//       const keyName = request.body.keyName;

//       const Key = `${folderStructure}/${keyName}`;
//       cb(null, Key);
//     },
//   }),
// }).single("content");
  
// module.exports = upload;

// =========================================================================================
// const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
// const multer = require("multer");
// const multerS3 = require("multer-s3");

// const s3 = new S3Client({
//   region: process?.env?.region,  // Set the region for S3
//   credentials: {
//     accessKeyId: process?.env?.aws_access_key_id,
//     secretAccessKey: process?.env?.aws_secret_access_key,
//   },
//   endpoint: process?.env?.hostname, // Custom endpoint if required
// });

// const upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: process?.env?.bucketName,
//     acl: "public-read",
//     key: function (request, file, cb) {
//       console.log("file in s3multer:     " + file);
//       console.log("request in s3multer:  ", request.body);

//       const folderStructure = request.body.folderStructure;
//       const keyName = request.body.keyName;

//       const Key = `${folderStructure}/${keyName}`;
//       cb(null, Key);
//     },
//   }),
// }).single("content");

// module.exports = upload;



// ==================================================================================

require("dotenv").config(); // Ensure this is at the top if not already loaded globally

const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

// Correct AWS SDK v2 usage (for multer-s3 compatibility)
aws.config.update({
  accessKeyId: process.env.aws_access_key_id,
  secretAccessKey: process.env.aws_secret_access_key,
  region: process.env.region,
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.bucketName,
    // acl: "public-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      console.log("File received:", file.originalname);
      console.log("Request body:", req.body);

      const folderStructure = req.body.folderStructure || "uploads";
      const keyName = req.body.keyName || Date.now() + "_" + file.originalname;

      const Key = `${folderStructure}/${keyName}`;
      cb(null, Key);
    },
  }),
}).single("content"); // 'content' should match your frontend field name

module.exports = upload;
