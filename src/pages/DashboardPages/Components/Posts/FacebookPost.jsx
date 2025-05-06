import { useEffect } from "react";

const FacebookPost = ({ link, week }) => {
  console.log(link)
  useEffect(() => {
    const loadFacebookSDK = () => {
      if (window.FB) {
        window.FB.XFBML.parse();
      } else {
        const script = document.createElement('script');
        script.src = "https://connect.facebook.net/ar_AR/sdk.js#xfbml=1&version=v22.0&appId=545139562026586";
        script.async = true;
        script.defer = true;
        script.crossOrigin = "anonymous";
        script.onload = () => {
          window.FB.XFBML.parse(); 
        };
        document.body.appendChild(script);
      }
    };

    loadFacebookSDK(); 

  }, [link]);

  return (
    <div className="flex flex-wrap rounded-lg h-72 justify-center">
      <div id="fb-root"></div>
      <div className="fb-post" data-href={link} data-width="350" data-show-text="true"></div>
    </div>
  );
};

export default FacebookPost;