import FacebookAnalysis from "./Analysis Components/FacebookAnalysis";
import InstagramAnalysis from "./Analysis Components/InstagramAnalysis";
import TikTokAnalysis from "./Analysis Components/TikTokAnalysis";
import XAnalysis from "./Analysis Components/XAnalysis";


//chooses which area of the analysis will be loaded
const Analysis = ({filteredAccount}) =>{

    return(
           <div className="bg-slate-50">
                {
                filteredAccount ==="X"?
                <XAnalysis />
                :
                filteredAccount ==="Instagram"?
                <InstagramAnalysis />
                :
                filteredAccount ==="Facebook"?
                <FacebookAnalysis />
                :
                filteredAccount ==="Tiktok"?
                <TikTokAnalysis />
                :
                <div>all filters</div>
                }
           </div>
           

           
    )
}
export default Analysis;