import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import IteamsCardSlider from './IteamsCardSlider';
import Footer from './footer'

let imgNum=1;

function imageSwitch(val){
    let urlvar = 'url("assets/Images/backgroundImag'+val+'.jpg")';
    console.log(urlvar);
    document.documentElement.style.setProperty('--imageNum',urlvar);
}
const nextVal=()=>{
    
    imgNum=imgNum >= 5 ? 1 : imgNum+1
    imageSwitch(imgNum);
}
const previousVal=()=>{
    imgNum=imgNum <= 1 ? 5 : imgNum-1
    
    imageSwitch(imgNum);
}

export default function Mainbody({cartCountUpdate}) {

    const[imgSrc,setimgSrc]=useState("assets/Images/ProductsPic/s1.png");

    const setimgsrcValue = (val)=>{
        setimgSrc(val);
    }

  return (
    <div>
    <div className='mainbackgrounddiv'>
    <div className='next' onClick={previousVal} >
     <img src="assets/Images/next.gif" alt="next" />
     </div>
     <a href="https://www.google.com/" target='_blank'><div className='backgroundImgContainer'></div></a>
     <div className='pervious' onClick={nextVal} >
     <img src="assets/Images/next.gif" alt="next" />
     </div>
     <div className='iteamsInfo'>
        <div className='iteam grid-1'>
            <p className='g1-Title'>Pick up where you left off</p> 
            <div className='subgrid-1'>
            <a href="https://www.google.com/" target='-blank'><div className='mouse'><img src="assets/Images/ProductsPic/mouse1.jpg" alt="" /><p className='subgrid-1-IteamInfo'>Logitech Pebble Wirele...</p></div></a>
           <a href="https://www.google.com/" target='-blank'> <div className='mouse'><img src="assets/Images/ProductsPic/mouse2.jpg" alt="" /><p className='subgrid-1-IteamInfo'>Logitech M350 SILENT...</p></div></a>
           <a href="https://www.google.com/" target='-blank'> <div className='keyboard'><img src="assets/Images/ProductsPic/keyboard1.jpg" alt="" /><p className='subgrid-1-IteamInfo'>Logitech K380 Multi-D...</p></div></a>
           <a href="https://www.google.com/" target='-blank'> <div className='keyboard'><img src="assets/Images/ProductsPic/keyboard2.jpg" alt="" /><p className='subgrid-1-IteamInfo'>Logitech k380 Multi-D...</p></div></a>
            </div>
        </div>
        <div className='iteam grid-2'>
        <p className='g2-Title'>Keep Shopping for</p> 
        <div className='subgrid-1'>
            <a href="https://www.google.com/" target='-blank'> <div className='img'><img src="assets/Images/ProductsPic/switch.jpg" alt="" /><p className='subgrid-1-IteamInfo'>Speaker mounts</p></div></a>
            <a href="https://www.google.com/" target='-blank'> <div className='img'><img src="assets/Images/ProductsPic/usb.jpg" alt="" /><p className='subgrid-1-IteamInfo'>Computer cable ad...</p></div></a>
            <a href="https://www.google.com/" target='-blank'> <div className='img'><img src="assets/Images/ProductsPic/monitor.jpg" alt="" /><p className='subgrid-1-IteamInfo'>Computer monitors</p></div></a>
            <a href="https://www.google.com/" target='-blank'> <div className='img'><img src="assets/Images/ProductsPic/phonecase.jpg" alt="" /><p className='subgrid-1-IteamInfo'>Cell phone cases & c...</p></div></a>
        </div>
        </div>
        <div className='iteam grid-3'>
        <p className='g3-Title'>Exclusive perks for students</p>
        <div className='subgrid-1'>
            <a href="https://www.google.com/" target='-blank'><div className='studentPerkImg'><img src="assets/Images/ProductsPic/schoolbag.jpg" alt="" /><p className='subgrid-1-Iteamdetail'>StudentUniverse</p></div></a>
            <a href="https://www.google.com/" target='-blank'><div className='studentPerkImg'><img src="assets/Images/ProductsPic/donets.jpg" alt="" /><p className='subgrid-1-Iteamdetail'>Grubhub+</p></div></a>
            <a href="https://www.google.com/" target='-blank'><div className='studentPerkImg'><img src="assets/Images/ProductsPic/delivergirl.jpg" alt="" /><p className='subgrid-1-Iteamdetail'>Stock up and save</p></div></a>
            <a href="https://www.google.com/" target='-blank'><div className='studentPerkImg'><img src="assets/Images/ProductsPic/clam.jpg" alt="" /><p className='subgrid-1-Iteamdetail'>Calm</p></div></a>
        </div>
        <a className='grid-3MoreInfoLink' href="https://www.google.com/" target='-blank'>Explore prime</a>
        </div>
        <div className='iteam grid-4'>
            
            <div className='grid-4Container1'>
                <p className='g3-Title'>Teen Vogue's school favorites <br/><a className='grid-3MoreInfoLink' href="https://www.google.com/">shop now</a></p>
               <a href="https://www.google.com/" target='-blank'><img src="assets/Images/ProductsPic/bag.jpg" alt="" /></a>                
            </div>           
            
            <div className='grid-4Container2'>
              <a  href="https://www.google.com/" target='-blank'> <div className='proteinImage'><img  src="assets/Images/ProductsPic/proteinpowder.jpg" alt="" /></div>
                <p className='para'>Vital Proteins Collagen Peptides Powder, Promot...</p>
                <span className='flexSpan'>
                <p className='offerAmt'>10% off</p><p className='offerText'>Deal</p>
                </span>
                <span className='pricedetails'>
                    <p className='pricedetailspara'><sup>$</sup>24.30 <s className='striketext'>$27.00</s></p>
                    <img className='primelogoImage' src="assets/Images/ProductsPic/primelogo.png&quot" alt="" />
                </span></a>
            </div>
        </div>
        <div className='iteam grid-5'>
            <video  height="320px" controls> <source src="assets/Videos/JohnWick_Chapter4(2023Movie)OfficialTrailer.mp4" type="video/mp4"/></video>
        </div>
        <div className='iteam grid-6'>
            <div className='displayImagediv boxhover'>
            <div className='flip-box-inner'>
            <div className='displayImagediv flip-box-front'><img className='Imagedisplaying' src={imgSrc} alt="" /></div>
            <div className='displayImagediv flip-box-back'>
            <p><b>Nike</b></p>
            <p>Tatum 1 "Old School"<br/>Basketball Shoes</p>
              <div className='stardisplay'>
                      <p>4.6</p>
                    <FontAwesomeIcon className='star' icon={faStar} />
                    <FontAwesomeIcon className='star' icon={faStar} />
                    <FontAwesomeIcon className='star' icon={faStar} />
                    <FontAwesomeIcon className='star' icon={faStar} />
                    <FontAwesomeIcon className='star' icon={faStarHalf} />
              </div>
              <p className='scost'><sup>$</sup>120<sup>00</sup></p>
              <button className='sbutton' onClick={()=>{cartCountUpdate(1)}}>Add to Cart</button>
            </div>
            
            </div>
            </div>
            <div className='additionaldisplay'>
                <span className='addimg'><img src="assets/Images/ProductsPic/s1.png" alt="" onMouseOver={()=>{setimgsrcValue("assets/Images/ProductsPic/s1.png")}} /></span>
                <span className='addimg'><img src="assets/Images/ProductsPic/s2.png" alt="" onMouseOver={()=>{setimgsrcValue("assets/Images/ProductsPic/s2.png")}} /></span>
                <span className='addimg'><img src="assets/Images/ProductsPic/s3.png" alt="" onMouseOver={()=>{setimgsrcValue("assets/Images/ProductsPic/s3.png")}} /></span>
                <span className='addimg'><img src="assets/Images/ProductsPic/s4.png" alt="" onMouseOver={()=>{setimgsrcValue("assets/Images/ProductsPic/s4.png")}} /></span>
                <span className='addimg'><img src="assets/Images/ProductsPic/s5.png" alt="" onMouseOver={()=>{setimgsrcValue("assets/Images/ProductsPic/s5.png")}} /></span>
                <span className='addimg'><img src="assets/Images/ProductsPic/s6.png" alt="" onMouseOver={()=>{setimgsrcValue("assets/Images/ProductsPic/s6.png")}} /></span>
                <span className='addimg'><img src="assets/Images/ProductsPic/s7.png" alt="" onMouseOver={()=>{setimgsrcValue("assets/Images/ProductsPic/s7.png")}} /></span>
                <span className='addimg'><img src="assets/Images/ProductsPic/s8.png" alt="" onMouseOver={()=>{setimgsrcValue("assets/Images/ProductsPic/s8.png")}} /></span>
                <span className='addimg'><img src="assets/Images/ProductsPic/s9.png" alt="" onMouseOver={()=>{setimgsrcValue("assets/Images/ProductsPic/s9.png")}} /></span>
            </div>
        </div>
        <div className='iteam grid-7'>
        <p className='g3-Title'>Kitchenware form Sur La Table</p>
         <a href="https://www.google.com/" target='-blank'><img className='food1Image' src="assets/Images/ProductsPic/food1.jpg" alt="" />
         <p className='foodIteamdetail'>Premium-quality essentials</p></a>
        <a  href="https://www.google.com/" target='-blank'>
             <div className='additionalfoodImages'>
                <div className='subdiv'>
                <img src="assets/Images/ProductsPic/food2.jpg" alt="" />
                <p className='foodIteamdetail fdmargin'>Kitchen</p>
                </div>
                <div className='subdiv'>
                <img src="assets/Images/ProductsPic/food3.jpg" alt="" />
                <p className='foodIteamdetail fdmargin'>Appliances</p>
                </div>
                <div className='subdiv'>
                <img src="assets/Images/ProductsPic/food4.jpg" alt="" />
                <p className='foodIteamdetail fdmargin'>Gourmet</p>
                </div>
         </div>
         </a>
        </div>
     </div>
    
      <IteamsCardSlider />
      <Footer />
    </div>
    </div>
  )
}
