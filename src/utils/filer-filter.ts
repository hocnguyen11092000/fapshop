
import { BadRequestException } from '@nestjs/common';
export const fileFilter = (req: any, file: any, callback: any) => {
    if (!file) {
        throw new BadRequestException();
        // return callback(null, false);
    }
    if (!file.originalname.match(/\.(txt|docs|docx|doc|csv|png)$/)) {
        req.fileValidationError = 'Wrong file format!';
        return callback(null, false);
    }
    callback(null, true);
};
