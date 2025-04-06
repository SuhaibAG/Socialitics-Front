import XAnalysis from "./Analysis Components/XAnalysis";

const Analysis = ({filteredAccount}) =>{


    return(
           <div>
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
                <div>Tiktok</div>
                :
                <div>all filters</div>
                }
           </div>
           

           
    )
}
export default Analysis;