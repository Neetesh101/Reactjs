import ResturantCard from "./ResturantCard";
import resList from "../utils/dummyData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () =>{
  const [listOfResturant,setListOfResturant] =useState([]);
  const [searchText,setSearchText]=useState("");
  const [filterResturant,setFilterResturant] =useState([]);

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async ()=>{
    const data =await fetch ("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING")
  
    const json =await data.json()
    console.log(json.data)

    setListOfResturant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterResturant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  function filterData() {
    const filterData = listOfResturant.filter((res) =>(res.info.avgRating) >4.5)
    return filterData;
}

  return  (listOfResturant.length===0) ? (<Shimmer />) 
  :
  (
    <div className="body">
  <div className="filter">
    <div className="search">
      <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} />
      <button onClick={()=>{
        const FilterByName = listOfResturant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
        setFilterResturant(FilterByName)
      }}>Search</button>
    </div>
    <button className="filter-btn"
    // onClick={()=>{
    //   filterRes =listOfResturant.filter((res)=>(res.data.totalRatingString)>4)
     //   setListOfResturant(filterRes)
    // }}
    onClick={()=>{
      const data = filterData();
      setListOfResturant(data);
    }}
    >Top Rated Resturant</button>
  </div>
<div className="res-container">

{
filterResturant.map((resturant)=>(<ResturantCard key={resturant.info.id}  resData={resturant}/>))

}
 
</div>
    </div>
  )
}

export default Body;