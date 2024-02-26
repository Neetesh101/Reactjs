import { CDN_URL } from "../utils/constant";


const ResturantCard = (props) =>{

  const{resData}=props
  const{ cloudinaryImageId,name,costForTwo,sla,cuisines,avgRating}=resData?.info
// const {resData} =props

// const {cloudinaryimageId,costForTwo,name, cuisines, avgRating,sla,deliveryTime} =resData?.info ||{}
  return (
    <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
      {/* <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.data.cloudinaryimageId} alt="" />

      <h3>{resData.data.name}</h3>
      <h2>{resData.data.cuisines.join(",")}</h2>
      <h3>{resData.data.costForTwoString}</h3>
      <h3>{resData.data.deliverTime}</h3> */}
 <img className="res-logo"
    alt="res-logo"
    src={CDN_URL+ cloudinaryImageId } />
     <h3>{name}</h3>
    <h4>{cuisines.join(" ")}</h4>
    <h4>{avgRating}</h4>
    <h4> {costForTwo}</h4>
    <h3>{sla?.deliveryTime} minute</h3>
   </div>
    
  )
}
export default ResturantCard;