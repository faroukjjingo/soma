import { s3 } from '../config/aws.js';
import { v4 as uuidv4 } from 'uuid';

export const uploadFile = async (file, folder) => {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET,
    Key: `${folder}/${uuidv4()}-${file.originalname}`,
    Body: file.buffer,
    ContentType: file.mimetype,
  };
  const result = await s3.upload(params).promise();
  return result.Location;
};
