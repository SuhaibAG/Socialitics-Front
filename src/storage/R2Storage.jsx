import axios from 'axios'
import AWS from 'aws-sdk';

const accessKeyId = process.env.REACT_APP_R2_ACCESSKEY;
const secretAccessKey = process.env.REACT_APP_R2_SECRETKEY;
const region = 'auto';
const endpoint = process.env.REACT_APP_R2_URL;
const bucket = process.env.REACT_APP_R2_BUCKET;



AWS.config.update({
  accessKeyId,
  secretAccessKey,
  region,
  endpoint: new AWS.Endpoint(endpoint),
});

const s3 = new AWS.S3({
  signatureVersion: 'v4',
  s3ForcePathStyle: true, 
});

export default async function UploadToR2(file, time) {
  const filename = file.name + time;
    
  const params = {
    Bucket: bucket,
    Key: filename, 
    Expires: 3600,
    ContentType: file.type, 
  };
  
  try {

    const preSignedUrl = await s3.getSignedUrlPromise('putObject', params);
    console.log(preSignedUrl)
    // Upload the file using the pre-signed URL
    const res = await axios.put(preSignedUrl, file, {
      headers: {
        "Content-Type": file.type, // Set file type header
      },
    });

    if (res.status === 200) {
      alert("Upload successful!");
    } else {
      alert(`Upload failed: ${res.statusText}`);
    }
  } catch (err) {
    console.error("Upload error:", err);
    alert("Upload failed. Please try again.");
  }
}