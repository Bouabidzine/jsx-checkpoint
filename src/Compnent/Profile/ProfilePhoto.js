import React from "react";
import Img from './zine.jpg';
import Facebook from './facebook.png';
import Twiter from './twiter.jpg';
import Youtube from './youtube.jpg';
import Instagram from './instagram.png';



export const ProfilePhoto = () => {

<div>
<img src={Img} alt="images" id="img">MyPrifilePhoto</img>
<div class="entete-titre">
    <h1>MyPhotos</h1>
    Photo Of Project 26-02<strong>2023</strong>
    <div id="rs"> 
        <img src={Facebook} alt="" class="sociaux">Facebook</img>
        <img src={Twiter} alt="" class="sociaux">Twiter</img>
        <img src={Youtube} alt="" class="sociaux">Youtube</img>
        <img src={Instagram} alt="" class="sociaux">Instagram</img>
        <ProfilePhoto />
        
    </div>
</div>
</div>}
export default ProfilePhoto;
