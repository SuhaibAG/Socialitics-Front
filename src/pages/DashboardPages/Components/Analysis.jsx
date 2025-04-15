import TikTokAnalysis from "./Analysis Components/TikTokAnalysis";
import XAnalysis from "./Analysis Components/XAnalysis";

const Analysis = ({filteredAccount}) =>{

    console.log(filteredAccount)
    return(
           <div className="bg-slate-50">
                {
                filteredAccount ==="X"?
                <XAnalysis />
                :
                filteredAccount ==="Instagram"?
                <div>Insta</div>
                :
                filteredAccount ==="Facebook"?
                <div>Facebook</div>
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