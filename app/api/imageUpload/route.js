import { S3 } from '@aws-sdk/client-s3'; // AWS SDK v3
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'; // Helper to generate signed URLs
import { PutObjectCommand } from '@aws-sdk/client-s3';


export async function POST(req) {
  try {
 
    const { fileName, fileType } = await req.json();

 
    const s3 = new S3({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });


    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `${fileName}`,
      ContentType: fileType,
    };

    const command = new PutObjectCommand(params);

    const uploadUrl = await getSignedUrl(s3, command, { expiresIn: 3600 });

    return new Response(JSON.stringify({ uploadUrl }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error generating upload URL:', error);

    return new Response(JSON.stringify({ error: 'Failed to generate image URL' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
