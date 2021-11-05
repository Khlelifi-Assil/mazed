import React, { useState } from "react";
import Encherir from   '../Encherir/encherir';
import Navbar from '../Navigation/navbar';
import './home.css';
const Home = () => {
    return (
<div class='box'>
<div class='lef-side'>
   <Navbar/>
   
</div>
<div class='middle-side'>
    <Encherir/>

</div>

</div>


    );
}
export default Home;
