const XPost = ({tweet, userName}) =>{


    return(

        <div className="items-center overflow-y-auto ">
        <div
        className="flex flex-wrap rounded-lg   justify-center">
            <blockquote class="twitter-tweet"><p lang="en" dir="ltr">{tweet.text}
                                 <a href="https://t.co/Q5iT3jA9as">https://t.co/Q5iT3jA9as</a></p>&mdash; {userName}
                                 <a href={`https://twitter.com/${userName}/status/1909722853223940609?ref_src=twsrc%5Etfw`}></a></blockquote> 
                                 <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
        </div>
    </div>
                
    )
}
export default XPost;