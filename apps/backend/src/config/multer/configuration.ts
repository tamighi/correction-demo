import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";
import { diskStorage } from "multer";

export const multerConfig: MulterOptions = {
  storage: diskStorage({
    destination: "./uploads",
    filename: (_, file, callback) => {
      const originalName = file.originalname;
      const fileExtension = originalName.split(".").pop();
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const filename = `file-${uniqueSuffix}.${fileExtension}`;
      callback(null, filename);
    },
  }),
  fileFilter: (_, file, cb) => {
    const allowedMimeTypes = ["application/pdf", "text/plain"];
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only PDF and TXT documents are allowed."), false);
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
};
