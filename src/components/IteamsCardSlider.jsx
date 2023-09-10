import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export default function IteamsCardSlider() {
  return (

    <div className='repurchasedIteamsContainer'>
    <div className='subIteams-div'>
     <p className='g3-Title'>Deals on frequently repurchased items</p>
     
     <div className='maincontentdiv'>
        
        <div id='iteamsdetailscontainerdivid'  className='iteamsdetailscontainerdiv'>
                                  {/* Iteam 1  */}
             <div className='subdiviteam'>
              <a href=""> <img src="src/Images/ProductsPic/it1.jpg" alt="" />
               <p className='infoiteam'>CAROTE 12.5 Inch Nonstick Deep Frying Pan Skillet Lid, 6...</p>
               <span className='flexdisplay'>
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStarHalf} />
               <p className='reviewCount'>4,917</p>
               </span></a>
              <p className='imagetextmix'><img className='amazonchoicelogo' src="src/Images/amazonchoicelogo.png" alt="" /> in Sate Pans</p>         
              <span className="flexSpan onlytopmargin"><p className="offerAmt">10% off</p><p className="offerText">Deal</p></span> 
              <a className='linkdecor' href=""><span className='flexdisplay'>
                <p className='dollersign'>$</p>
                <p className='amount'>34.99</p>
              </span></a>
              <p className='pricelisting'>List:<s>$57.99</s></p> 
              <span className='flexdisplay'>
              <img className="primelogoImage2" src="src/Images/ProductsPic/primelogo.png&amp;quot" alt=""/> 
              <p className='deliverystatusInfo'>FREE Delivery</p> 
              </span>            
             </div>
                                {/* Iteam 2 */}
             <div className='subdiviteam'>
              <a href=""> <img src="src/Images/ProductsPic/it2.jpg" alt="" />
               <p className='infoiteam'>Amazon Basics Vacuum Compression Storage Bags with Hand Pump, Medium, 5-pack...</p>
               <span className='flexdisplay'>
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStarHalf} />
               <p className='reviewCount'>37,175</p>
               </span></a>     
              <span className="flexSpan onlytopmargin"><p className="offerAmt">27% off</p><p className="offerText">Deal</p></span> 
              <a className='linkdecor' href=""><span className='flexdisplay'>
                <p className='dollersign'>$</p>
                <p className='amount'>18.74</p>
              </span></a>
              <p className='pricelisting'>List:<s>$25.52</s></p> 
              <span className='flexdisplay'>
              <img className="primelogoImage2" src="src/Images/ProductsPic/primelogo.png&amp;quot" alt=""/> 
              <p className='deliverystatusInfo'>FREE Delivery</p> 
              </span>            
             </div>
 
                    {/* Iteam 3  */}
            <div className='subdiviteam'>
              <a href=""> <img src="src/Images/ProductsPic/it3.jpg" alt="" />
               <p className='infoiteam'>Anozer Tablet Stand Foldable & Adjustable, Portable Monitor...</p>
               <span className='flexdisplay'>
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStarHalf} />
               <p className='reviewCount'>9,015</p>
               </span></a>
              <p className='imagetextmix'><img className='amazonchoicelogo' src="src/Images/amazonchoicelogo.png" alt="" /> in Table Stands</p>         
              <span className="flexSpan onlytopmargin"><p className="offerAmt">35% off</p><p className="offerText">Deal</p></span> 
              <a className='linkdecor' href=""><span className='flexdisplay'>
                <p className='dollersign'>$</p>
                <p className='amount'>12.90</p>
              </span></a>
              <p className='pricelisting'>List:<s>$19.99</s></p> 
              <span className='flexdisplay'>
              <img className="primelogoImage2" src="src/Images/ProductsPic/primelogo.png&amp;quot" alt=""/> 
              <p className='deliverystatusInfo'>FREE Delivery</p> 
              </span>            
            </div>

                            {/* Iteam 4  */}
            <div className='subdiviteam'>
              <a href=""> <img src="src/Images/ProductsPic/it4.jpg" alt="" />
               <p className='infoiteam'>USB C Docking Station Dual Monitors 13 in 1 Triple Display USB C Hub for Windows with...</p>
               <span className='flexdisplay'>
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStarHalf} />
               <p className='reviewCount'>2,521</p>
               </span></a>       
              <span className="flexSpan onlytopmargin"><p className="offerAmt">38% off</p><p className="offerText">Deal</p></span> 
              <a className='linkdecor' href=""><span className='flexdisplay'>
                <p className='dollersign'>$</p>
                <p className='amount'>49.99</p>
              </span></a>
              <p className='pricelisting'>List:<s>$79.99</s></p> 
              <span className='flexdisplay'>
              <img className="primelogoImage2" src="src/Images/ProductsPic/primelogo.png&amp;quot" alt=""/> 
              <p className='deliverystatusInfo'>FREE Delivery</p> 
              </span>            
            </div>      

                                              {/* Iteam 5  */}
            <div className='subdiviteam'>
              <a href=""> <img src="src/Images/ProductsPic/it5.jpg" alt="" />
               <p className='infoiteam'>WOSOVO Set of 2 Kitchen Cabinet Organizer and Storage...</p>
               <span className='flexdisplay'>
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStarHalf} />
               <p className='reviewCount'>2,780</p>
               </span></a> 
               <p className='imagetextmix'><img className='amazonchoicelogo' src="src/Images/amazonchoicelogo.png" alt="" /> in Spice Racks</p>         
              <span className="flexSpan onlytopmargin"><p className="offerAmt">10% off</p><p className="offerText">Deal</p></span> 
              <a className='linkdecor' href=""><span className='flexdisplay'>
                <p className='dollersign'>$</p>
                <p className='amount'>26.99</p>
              </span></a>
              <p className='pricelisting'>List:<s>$29.99</s></p> 
              <span className='flexdisplay'>
              <img className="primelogoImage2" src="src/Images/ProductsPic/primelogo.png&amp;quot" alt=""/> 
              <p className='deliverystatusInfo'>FREE Delivery</p> 
              </span>            
            </div>   


                                                {/* Iteam 6  */}
            <div className='subdiviteam'>
              <a href=""> <img src="src/Images/ProductsPic/it6.jpg" alt="" />
               <p className='infoiteam'>LED Floor Lamp, 2400LM Super Bright Standing Lamp 250w...</p>
               <span className='flexdisplay'>
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStarHalf} />
               <p className='reviewCount'>1,233</p>
               </span></a> 
               <p className='imagetextmix'><img className='amazonchoicelogo' src="src/Images/amazonchoicelogo.png" alt="" /> in Floor Lamps</p>         
              <span className="flexSpan onlytopmargin"><p className="offerAmt">43% off</p><p className="offerText">Deal</p></span> 
              <a className='linkdecor' href=""><span className='flexdisplay'>
                <p className='dollersign'>$</p>
                <p className='amount'>39.99</p>
              </span></a>
              <p className='pricelisting'>List:<s>$69.99</s></p> 
              <span className='flexdisplay'>
              <img className="primelogoImage2" src="src/Images/ProductsPic/primelogo.png&amp;quot" alt=""/> 
              <p className='deliverystatusInfo'>FREE Delivery</p> 
              </span>            
            </div>         

                                {/* Iteam 7  */}
            <div className='subdiviteam'>
              <a href=""> <img src="src/Images/ProductsPic/it7.jpg" alt="" />
               <p className='infoiteam'>Duramont Ergonomic Office Chair - Adjustable Desk Chair with Lumbar Support and Rollerbla...</p>
               <span className='flexdisplay'>
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStarHalf} />
               <p className='reviewCount'>6,370</p>
               </span></a>        
              <span className="flexSpan onlytopmargin"><p className="offerAmt">10% off</p><p className="offerText">Deal</p></span> 
              <a className='linkdecor' href=""><span className='flexdisplay'>
                <p className='dollersign'>$</p>
                <p className='amount'>269.99</p>
              </span></a>
              <p className='pricelisting'>List:<s>$299.99</s></p> 
              <span className='flexdisplay'>
              <img className="primelogoImage2" src="src/Images/ProductsPic/primelogo.png&amp;quot" alt=""/> 
              <p className='deliverystatusInfo'>FREE Delivery</p> 
              </span>            
            </div>         


                                 {/* Iteam 8  */}
            <div className='subdiviteam'>
              <a href=""> <img src="src/Images/ProductsPic/it8.jpg" alt="" />
               <p className='infoiteam'>Ksunun Double Head LED Desk Lamp Modern Architect Desk Lamp for Monitor Studio Readin...</p>
               <span className='flexdisplay'>
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStarHalf} />
               <p className='reviewCount'>1,037</p>
               </span></a>        
              <span className="flexSpan onlytopmargin"><p className="offerAmt">11% off</p><p className="offerText">Deal</p></span> 
              <a className='linkdecor' href=""><span className='flexdisplay'>
                <p className='dollersign'>$</p>
                <p className='amount'>44.48</p>
              </span></a>
              <p className='pricelisting'>List:<s>$49.98</s></p> 
              <span className='flexdisplay'>
              <img className="primelogoImage2" src="src/Images/ProductsPic/primelogo.png&amp;quot" alt=""/> 
              <p className='deliverystatusInfo'>FREE Delivery</p> 
              </span>            
            </div>       

                            {/* Iteam 9  */}
            <div className='subdiviteam'>
              <a href=""> <img src="src/Images/ProductsPic/it9.jpg" alt="" />
               <p className='infoiteam'>Displaylink Triple Display Docking Station for MacBook M1/M2/Windows,...</p>
               <span className='flexdisplay'>
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStarHalf} />
               <p className='reviewCount'>249</p>
               </span></a>        
              <span className="flexSpan onlytopmargin"><p className="offerAmt">20% off</p><p className="offerText">Deal</p></span> 
              <a className='linkdecor' href=""><span className='flexdisplay'>
                <p className='dollersign'>$</p>
                <p className='amount'>151.91</p>
              </span></a>
              <p className='pricelisting'>List:<s>$189.89</s></p> 
              <span className='flexdisplay'>
              <img className="primelogoImage2" src="src/Images/ProductsPic/primelogo.png&amp;quot" alt=""/> 
              <p className='deliverystatusInfo'>FREE Delivery</p> 
              </span>            
            </div>     

                                                        {/* Iteam 10  */}
            <div className='subdiviteam'>
              <a href=""> <img src="src/Images/ProductsPic/it10.jpg" alt="" />
               <p className='infoiteam'>DECOMOMO Strorage Bins | Fabric Storage Basket for Shelves for Organizing Closet Shel...</p>
               <span className='flexdisplay'>
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStarHalf} />
               <p className='reviewCount'>22,362</p>
               </span></a>        
              <span className="flexSpan onlytopmargin"><p className="offerAmt">37% off</p><p className="offerText">Deal</p></span> 
              <a className='linkdecor' href=""><span className='flexdisplay'>
                <p className='dollersign'>$</p>
                <p className='amount'>20.24</p>
              </span></a>
              <p className='pricelisting'>List:<s>$31.99</s></p> 
              <span className='flexdisplay'>
              <img className="primelogoImage2" src="src/Images/ProductsPic/primelogo.png&amp;quot" alt=""/> 
              <p className='deliverystatusInfo'>FREE Delivery</p> 
              </span>            
            </div>     



                                      {/* Iteam 11  */}
                                      <div className='subdiviteam'>
              <a href=""> <img src="src/Images/ProductsPic/it1.jpg" alt="" />
               <p className='infoiteam'>CAROTE 12.5 Inch Nonstick Deep Frying Pan Skillet Lid, 6...</p>
               <span className='flexdisplay'>
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStarHalf} />
               <p className='reviewCount'>4,917</p>
               </span></a>
              <p className='imagetextmix'><img className='amazonchoicelogo' src="src/Images/amazonchoicelogo.png" alt="" /> in Sate Pans</p>         
              <span className="flexSpan onlytopmargin"><p className="offerAmt">10% off</p><p className="offerText">Deal</p></span> 
              <a className='linkdecor' href=""><span className='flexdisplay'>
                <p className='dollersign'>$</p>
                <p className='amount'>34.99</p>
              </span></a>
              <p className='pricelisting'>List:<s>$57.99</s></p> 
              <span className='flexdisplay'>
              <img className="primelogoImage2" src="src/Images/ProductsPic/primelogo.png&amp;quot" alt=""/> 
              <p className='deliverystatusInfo'>FREE Delivery</p> 
              </span>            
             </div>
                                {/* Iteam 12 */}
             <div className='subdiviteam'>
              <a href=""> <img src="src/Images/ProductsPic/it2.jpg" alt="" />
               <p className='infoiteam'>Amazon Basics Vacuum Compression Storage Bags with Hand Pump, Medium, 5-pack...</p>
               <span className='flexdisplay'>
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStarHalf} />
               <p className='reviewCount'>37,175</p>
               </span></a>     
              <span className="flexSpan onlytopmargin"><p className="offerAmt">27% off</p><p className="offerText">Deal</p></span> 
              <a className='linkdecor' href=""><span className='flexdisplay'>
                <p className='dollersign'>$</p>
                <p className='amount'>18.74</p>
              </span></a>
              <p className='pricelisting'>List:<s>$25.52</s></p> 
              <span className='flexdisplay'>
              <img className="primelogoImage2" src="src/Images/ProductsPic/primelogo.png&amp;quot" alt=""/> 
              <p className='deliverystatusInfo'>FREE Delivery</p> 
              </span>            
             </div>
 
                    {/* Iteam 13  */}
            <div className='subdiviteam'>
              <a href=""> <img src="src/Images/ProductsPic/it3.jpg" alt="" />
               <p className='infoiteam'>Anozer Tablet Stand Foldable & Adjustable, Portable Monitor...</p>
               <span className='flexdisplay'>
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStarHalf} />
               <p className='reviewCount'>9,015</p>
               </span></a>
              <p className='imagetextmix'><img className='amazonchoicelogo' src="src/Images/amazonchoicelogo.png" alt="" /> in Table Stands</p>         
              <span className="flexSpan onlytopmargin"><p className="offerAmt">35% off</p><p className="offerText">Deal</p></span> 
              <a className='linkdecor' href=""><span className='flexdisplay'>
                <p className='dollersign'>$</p>
                <p className='amount'>12.90</p>
              </span></a>
              <p className='pricelisting'>List:<s>$19.99</s></p> 
              <span className='flexdisplay'>
              <img className="primelogoImage2" src="src/Images/ProductsPic/primelogo.png&amp;quot" alt=""/> 
              <p className='deliverystatusInfo'>FREE Delivery</p> 
              </span>            
            </div>

                            {/* Iteam 14  */}
            <div className='subdiviteam'>
              <a href=""> <img src="src/Images/ProductsPic/it4.jpg" alt="" />
               <p className='infoiteam'>USB C Docking Station Dual Monitors 13 in 1 Triple Display USB C Hub for Windows with...</p>
               <span className='flexdisplay'>
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStarHalf} />
               <p className='reviewCount'>2,521</p>
               </span></a>       
              <span className="flexSpan onlytopmargin"><p className="offerAmt">38% off</p><p className="offerText">Deal</p></span> 
              <a className='linkdecor' href=""><span className='flexdisplay'>
                <p className='dollersign'>$</p>
                <p className='amount'>49.99</p>
              </span></a>
              <p className='pricelisting'>List:<s>$79.99</s></p> 
              <span className='flexdisplay'>
              <img className="primelogoImage2" src="src/Images/ProductsPic/primelogo.png&amp;quot" alt=""/> 
              <p className='deliverystatusInfo'>FREE Delivery</p> 
              </span>            
            </div>      

                                              {/* Iteam 15  */}
            <div className='subdiviteam'>
              <a href=""> <img src="src/Images/ProductsPic/it5.jpg" alt="" />
               <p className='infoiteam'>WOSOVO Set of 2 Kitchen Cabinet Organizer and Storage...</p>
               <span className='flexdisplay'>
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStarHalf} />
               <p className='reviewCount'>2,780</p>
               </span></a> 
               <p className='imagetextmix'><img className='amazonchoicelogo' src="src/Images/amazonchoicelogo.png" alt="" /> in Spice Racks</p>         
              <span className="flexSpan onlytopmargin"><p className="offerAmt">10% off</p><p className="offerText">Deal</p></span> 
              <a className='linkdecor' href=""><span className='flexdisplay'>
                <p className='dollersign'>$</p>
                <p className='amount'>26.99</p>
              </span></a>
              <p className='pricelisting'>List:<s>$29.99</s></p> 
              <span className='flexdisplay'>
              <img className="primelogoImage2" src="src/Images/ProductsPic/primelogo.png&amp;quot" alt=""/> 
              <p className='deliverystatusInfo'>FREE Delivery</p> 
              </span>            
            </div>   


                                                {/* Iteam 16  */}
            <div className='subdiviteam'>
              <a href=""> <img src="src/Images/ProductsPic/it6.jpg" alt="" />
               <p className='infoiteam'>LED Floor Lamp, 2400LM Super Bright Standing Lamp 250w...</p>
               <span className='flexdisplay'>
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStarHalf} />
               <p className='reviewCount'>1,233</p>
               </span></a> 
               <p className='imagetextmix'><img className='amazonchoicelogo' src="src/Images/amazonchoicelogo.png" alt="" /> in Floor Lamps</p>         
              <span className="flexSpan onlytopmargin"><p className="offerAmt">43% off</p><p className="offerText">Deal</p></span> 
              <a className='linkdecor' href=""><span className='flexdisplay'>
                <p className='dollersign'>$</p>
                <p className='amount'>39.99</p>
              </span></a>
              <p className='pricelisting'>List:<s>$69.99</s></p> 
              <span className='flexdisplay'>
              <img className="primelogoImage2" src="src/Images/ProductsPic/primelogo.png&amp;quot" alt=""/> 
              <p className='deliverystatusInfo'>FREE Delivery</p> 
              </span>            
            </div>         

                                {/* Iteam 17  */}
            <div className='subdiviteam'>
              <a href=""> <img src="src/Images/ProductsPic/it7.jpg" alt="" />
               <p className='infoiteam'>Duramont Ergonomic Office Chair - Adjustable Desk Chair with Lumbar Support and Rollerbla...</p>
               <span className='flexdisplay'>
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStarHalf} />
               <p className='reviewCount'>6,370</p>
               </span></a>        
              <span className="flexSpan onlytopmargin"><p className="offerAmt">10% off</p><p className="offerText">Deal</p></span> 
              <a className='linkdecor' href=""><span className='flexdisplay'>
                <p className='dollersign'>$</p>
                <p className='amount'>269.99</p>
              </span></a>
              <p className='pricelisting'>List:<s>$299.99</s></p> 
              <span className='flexdisplay'>
              <img className="primelogoImage2" src="src/Images/ProductsPic/primelogo.png&amp;quot" alt=""/> 
              <p className='deliverystatusInfo'>FREE Delivery</p> 
              </span>            
            </div>         


                                 {/* Iteam 18  */}
            <div className='subdiviteam'>
              <a href=""> <img src="src/Images/ProductsPic/it8.jpg" alt="" />
               <p className='infoiteam'>Ksunun Double Head LED Desk Lamp Modern Architect Desk Lamp for Monitor Studio Readin...</p>
               <span className='flexdisplay'>
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStarHalf} />
               <p className='reviewCount'>1,037</p>
               </span></a>        
              <span className="flexSpan onlytopmargin"><p className="offerAmt">11% off</p><p className="offerText">Deal</p></span> 
              <a className='linkdecor' href=""><span className='flexdisplay'>
                <p className='dollersign'>$</p>
                <p className='amount'>44.48</p>
              </span></a>
              <p className='pricelisting'>List:<s>$49.98</s></p> 
              <span className='flexdisplay'>
              <img className="primelogoImage2" src="src/Images/ProductsPic/primelogo.png&amp;quot" alt=""/> 
              <p className='deliverystatusInfo'>FREE Delivery</p> 
              </span>            
            </div>       

                            {/* Iteam 19  */}
            <div className='subdiviteam'>
              <a href=""> <img src="src/Images/ProductsPic/it9.jpg" alt="" />
               <p className='infoiteam'>Displaylink Triple Display Docking Station for MacBook M1/M2/Windows,...</p>
               <span className='flexdisplay'>
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStarHalf} />
               <p className='reviewCount'>249</p>
               </span></a>        
              <span className="flexSpan onlytopmargin"><p className="offerAmt">20% off</p><p className="offerText">Deal</p></span> 
              <a className='linkdecor' href=""><span className='flexdisplay'>
                <p className='dollersign'>$</p>
                <p className='amount'>151.91</p>
              </span></a>
              <p className='pricelisting'>List:<s>$189.89</s></p> 
              <span className='flexdisplay'>
              <img className="primelogoImage2" src="src/Images/ProductsPic/primelogo.png&amp;quot" alt=""/> 
              <p className='deliverystatusInfo'>FREE Delivery</p> 
              </span>            
            </div>     

                                                        {/* Iteam 20  */}
            <div className='subdiviteam'>
              <a href=""> <img src="src/Images/ProductsPic/it10.jpg" alt="" />
               <p className='infoiteam'>DECOMOMO Strorage Bins | Fabric Storage Basket for Shelves for Organizing Closet Shel...</p>
               <span className='flexdisplay'>
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStar} />
               <FontAwesomeIcon className='iconColor' icon={faStarHalf} />
               <p className='reviewCount'>22,362</p>
               </span></a>        
              <span className="flexSpan onlytopmargin"><p className="offerAmt">37% off</p><p className="offerText">Deal</p></span> 
              <a className='linkdecor' href=""><span className='flexdisplay'>
                <p className='dollersign'>$</p>
                <p className='amount'>20.24</p>
              </span></a>
              <p className='pricelisting'>List:<s>$31.99</s></p> 
              <span className='flexdisplay'>
              <img className="primelogoImage2" src="src/Images/ProductsPic/primelogo.png&amp;quot" alt=""/> 
              <p className='deliverystatusInfo'>FREE Delivery</p> 
              </span>            
            </div>  

        </div>
     </div>
     </div>
    </div>
  )
}
