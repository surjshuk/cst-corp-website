import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const AWS_S3_BUCKET_NAME = process.env.AWS_S3_BUCKET_NAME;

const client = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  }
});

export const getObject = async (Key: string) => {
//   const command = new GetObjectCommand({
//       Bucket: AWS_S3_BUCKET_NAME,
//       Key
//   })

  // const url = await getSignedUrl(client, command);
  const url = `https://${AWS_S3_BUCKET_NAME}.s3.amazonaws.com/${Key}`;
  return url;
}

export const putObject = async (Key: string, contentType: string, p0: { expiresIn: number; }) => {
  const command = new PutObjectCommand({
      Bucket: AWS_S3_BUCKET_NAME,
      Key,
      ContentType: contentType
  })

  const url = await getSignedUrl(client, command, p0)
  return url;
}