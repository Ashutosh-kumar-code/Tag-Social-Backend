//deleteFromSpace
const { deleteFromSpace } = require("../../util/deleteFromSpace");

//uploadContent
// exports.uploadContent = async (req, res) => {
//   try {
//     if (!req.body?.folderStructure || !req.body?.keyName) {
//       return res.status(200).json({ status: false, message: "Oops ! Invalid details." });
//     }

//     if (!req?.file) {
//       return res.status(200).json({ status: false, message: "Please upload a valid files." });
//     }

//     console.log("Upload started...");

//     const url = `${process?.env?.endpoint}/${req.body.folderStructure}/${req.body.keyName}`;

//     return res.status(200).json({ status: true, message: "File uploaded Successfully.", url });
//   } catch (error) {
//     console.log("catch error", error);
//     return res.status(500).json({ status: false, message: error.message || "Internal Server Error" });
//   }
// };
exports.uploadContent = async (req, res) => {
  try {
    if (!req.body?.folderStructure || !req.body?.keyName) {
      return res.status(200).json({ status: false, message: "Oops ! Invalid details." });
    }

    if (!req?.file) {
      return res.status(200).json({ status: false, message: "Please upload a valid file." });
    }

    console.log("Upload started...");

    // Use req.file.key to get the exact path used in S3
    const bucketName = process.env.bucketName;
    const region = process.env.region;

    const fileUrl = `https://${bucketName}.s3.${region}.amazonaws.com/${req.file.key}`;

    return res.status(200).json({
      status: true,
      message: "File uploaded Successfully.",
      url: fileUrl,
    });
  } catch (error) {
    console.log("catch error", error);
    return res.status(500).json({
      status: false,
      message: error.message || "Internal Server Error",
    });
  }
};


//delete uploadContent
exports.deleteUploadContent = async (req, res) => {
  try {
    if (!req.body?.folderStructure || !req.body?.keyName) {
      return res.status(200).json({ status: false, message: "Oops ! Invalid details." });
    }

    await deleteFromSpace({ folderStructure: req.body?.folderStructure, keyName: req.body?.keyName });

    return res.status(200).json({ status: true, message: "File deleted Successfully." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: false, message: error.message || "Internal Server Error" });
  }
};
