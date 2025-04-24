const XPost = ({tweet, userName}) =>{
    return(
    <div className="flex justify-center items-center overflow-y-auto ">
        <blockquote class="twitter-tweet items-center">
        <p lang="fr" dir="ltr">${tweet.tweetContent} <a href="https://t.co/MzZcmAaAxU"></a>
        </p>&mdash; @{userName} <a href={`https://twitter.com/${userName}/status/${tweet.tweetId}?ref_src=twsrc%5Etfw`}></a>
        </blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
    </div>
                
    )
}
export default XPost;