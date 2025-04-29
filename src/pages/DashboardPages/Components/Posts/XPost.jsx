import { useEffect } from 'react';

const XPost = ({ tweet, userName }) => {
  //Loop until it works  
  useEffect(() => {
    const loadTwitterScript = () => {
      if (!window.twttr) {
        const script = document.createElement('script');
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.charset = "utf-8";
        document.body.appendChild(script);
      } else {
        window.twttr.widgets.load();
      }
    };

    loadTwitterScript();
  }, [tweet]); 

  return (
    <div className="flex justify-center items-center overflow-y-auto">
      <blockquote className="twitter-tweet">
        <p lang="fr" dir="ltr">
          {tweet.tweetContent} <a href={`https://twitter.com/${userName}/status/${tweet.tweetId}`}>View Post</a>
        </p>
      </blockquote>
    </div>
  );
};

export default XPost;