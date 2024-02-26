import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { swiggy_menu_api_URL } from "../utils/constant";



const ResturantMenu = () => {
const {resId} =useParams()
  const [resInfo,setResInfo]=useState(null)
useEffect(()=>{
  fetchMenu()
},[])

const fetchMenu = async () =>{
  const data =await fetch(swiggy_menu_api_URL + resId)
  const json = await data.json()
console.log(json,"abbb")
setResInfo(json.data)
}

  return (
    <div className='menu'>
<h1>{name}</h1>
<ul>
  <li>Biryani</li>
  <li>Burger</li>
</ul>
    </div>
  )
}


export default ResturantMenu;