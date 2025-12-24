import dotenv from "dotenv";
import fs from "fs";
import path from "path";

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

dotenv.config();

async function uploadReportToS3(region, bucket, key, filePath) {
    const s3 = new S3Client({
        region,
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        },
    });

    const fileContent = fs.readFileSync(filePath);

    const cmd = new PutObjectCommand({
        Key: key,
        Bucket: bucket,
        Body: fileContent,
        ContentType: "application/json",
    });

    try {
        const result = await s3.send(cmd);
        console.log("Successfully uploaded to S3:", result);
    } catch (error) {
        console.error("Error uploading to S3:", error);
    }
}

async function main() {
    const reportPath = path.resolve("temp");

    fs.readdirSync(reportPath).forEach(async (file) => {
        const filePath = path.join(reportPath, file);
        await uploadReportToS3("ap-northeast-2", process.env.REPORT_BUCKET, file, filePath);
    });
}

main();
