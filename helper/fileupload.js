const multer= require('multer');


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null,file.fieldname + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage }).single("image");

module.exports = upload;