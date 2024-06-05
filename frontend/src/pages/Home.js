import React from 'react'
import CategoryList from '../components/categoryList';
import BannerProduct from '../components/BannerProduct';
import HorizontalCardProduct from '../components/HorizontalCardProduct';
import VerticalCardProduct from '../components/VerticalCardProduct';
const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"airpodes"} heading={"Top's airpodes"}/>
      <HorizontalCardProduct category={"watches"} heading={"Limited offer"}/>
      <HorizontalCardProduct category={"mobiles"} heading={"Trending Sales"}/>

      <VerticalCardProduct  category={"earphones"} heading={"Wired Earphones"}/>
      <VerticalCardProduct  category={"mouse"} heading={"Mouse"}/>
      <VerticalCardProduct  category={"televisions"} heading={"Televisions"}/>
      <VerticalCardProduct  category={"camera"} heading={"Camera & Photography"}/>
      
      <VerticalCardProduct  category={"speakers"} heading={"Bluetooth Speakers"}/>
      <VerticalCardProduct  category={"refrigerator"} heading={"Refrigerator"}/>
      <VerticalCardProduct  category={"trimmers"} heading={"Trimmers"}/>
    </div>
  )
}

export default Home;
