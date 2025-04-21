import axios from "axios";
import * as aws4 from "aws4";


const R2_EndPoint = process.env.REACT_APP_R2_URL;
const R2_AccessKey = process.env.REACT_APP_R2_AccessKey;
const R2_SecretKey = process.env.REACT_APP_R2_SecretKey;
const bucket = "socialitics"
const region = "auto";

export async function uploadToR2(file, time) {
    const fileName = `${file.name}${time}`
    const url= `${R2_EndPoint}/${bucket}/${fileName}`


    const opts = {
        host: new URL(url).host,
        method: "PUT",
        path: `/${bucket}/${file.name}${time}`,
        headers: {
          "Content-Type": file.type
        },
        body: file,
        service: "s3",
        region,
    };

    aws4.sign(opts, { R2_AccessKey, R2_SecretKey});

    try {
        const res = await axios.put(url, file, {
          headers: opts.headers,
        });
    
        if (res.status >= 200 && res.status < 300) {
          console.log("upload Successful");
          return `https://pub-818396e115b04010a25c6986301df2bc.r2.dev/${fileName}`;
        } else {
          console.error(res.statusText);
        }
      } catch (err) {
        console.error(err);
      }
    }