import { useEffect } from "react";

const FacebookPost = ({link}) =>{
    
    useEffect(() => {
        if (window.FB) {
          window.FB.XFBML.parse();
        }
      }, []);

    return(
                <div className="flex flex-wrap rounded-lg h-72 justify-center">
                    <div id="fb-root"></div>
                    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v22.0&appId=545139562026586"></script>

                    <div class="fb-post" data-href={link} data-width="350" data-show-text="true"></div>
                </div>
    )
}
export default FacebookPost;