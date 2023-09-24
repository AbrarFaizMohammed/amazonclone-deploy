import React, { useState } from "react";
import { faCaretDown, faCartShopping, faChevronRight, faL, faLocationDot, faMagnifyingGlass, fas } from "@fortawesome/free-solid-svg-icons";
import { faBars, faChevronDown, faLocation, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LocationDetailspopup from "./LocationDetailspopup";
import SearchCategoryList from "./SearchCategoryList";
import YourLists from "./YourLists";
import YourAccountLists from "./YourAccountLists";
import Navbar2 from "./Navbar2";

export default function NavigationBar({ Addressinfo, locationbtnclick, cartVal, cartCountUpdate,setlocationbtnclick, mobiledeliveryaddressdisplay }) {

  const [isclicked,setisclicked] = useState(false);
  const [searchCatText, setsearchCatText]= useState("All")
  const [issearchCatClicked, setissearchCatClicked] = useState(false);
  const [islocationIconhovered, setlocationIcon] = useState(false);
  const [isAccountliisthovered, setAccountlisthovered] = useState(false);
  const [countrylanguadeCode, setcountrylanguadeCode] = useState("EN");
      

  const updateClickValue=()=>{
    setisclicked(true)
  }

  const updateSearchCatText = (val)=>{
    setsearchCatText(val);
    setissearchCatClicked(true);
  }

  const resetSearchCatClickedValue = ()=>{    
    setisclicked(false);
    setissearchCatClicked(false);
    console.log("isclicked", isclicked, "issearchCatClicked", issearchCatClicked  )
  }

  return (
    <div>
    <div className="laptopScreen-navbar">
      <div className="navbarpart1">
        <div className="logo-style border">
          <a href="https://www.google.com/" target="_blank">
            <img src="assets/Images/Amazon-Logo.png" alt="Amazon-Logo" />
          </a>
        </div>
        <a href="" onClick={(e)=>locationbtnclick(e)}>
          <div className="location-style">
            <FontAwesomeIcon className="locationIcon" icon={faLocationDot} />
            <div>
              <p className="location-p1">Deliver to Abrar</p>
              <p className="location-p2"> {Addressinfo}</p>
            </div>
          </div>
        </a>
        <div className={`${isclicked===false?'navbarpart2':'navbarpart2 navbarpart2-border'}`}>
          <div className="divwrapper">  
            <div>
            <div onClick={updateClickValue} className="AllDropdownContainer">
               <div className="para"><p>{searchCatText}</p></div>
               <div className="downarrow"><FontAwesomeIcon className="downarrowIcon" icon={faCaretDown}/></div>               
            </div>
              <div className={`${isclicked === true ? 'searchIteams-displayon':'searchIteams'}`} onMouseUp={()=>{resetSearchCatClickedValue()}}>
                <SearchCategoryList updateSearchCatText={updateSearchCatText}/>
              </div>
            </div>
            <div >
              <input className="inputText" type="text" placeholder="Search Amazon" />
            </div>
            </div>
            <div className="searchIncon">
              <FontAwesomeIcon className="searchicon" icon={faMagnifyingGlass}/>
            </div>
        </div>

        <div className="langdiv border" onMouseOver={()=>{setlocationIcon(true)}} onMouseOut={()=>{setlocationIcon(false)}}>
        <div className="countryoption">
           <img src="assets/Images/Flag.jpg" alt="Us-Flag" />
           <p>{countrylanguadeCode}</p>
           <FontAwesomeIcon className="locationIcon2" icon={faCaretDown} />
        </div>
        <div className={`${islocationIconhovered === false?"hiddendiv":""}`}>
        <div className="countryDetails">
            <div className="option1">
            <input type="radio" name="countryLanguageoptions" id="english" className="custom-radio" value="EN" onClick={(e)=>{setcountrylanguadeCode(e.target.value)}} defaultChecked/>
            <label htmlFor="english"><a href="" className="labelATag">English - EN</a></label>
            </div>
            <div className="border1"></div>
            <div className="option2">
            <input type="radio" name="countryLanguageoptions" id="spanish" value="ES" onClick={(e)=>{setcountrylanguadeCode(e.target.value)}} className="custom-radio"/>
            <label htmlFor="spanish"><a href="" className="labelATag">español - ES</a></label><br />
             <div className="learnMoreLink">
             <a href="" >Learn more</a>
             </div>
            </div>
            <div className="border2"></div>
            <div className="additionalInfo">
             <p><img className="paraImage" src="assets/Images/Flag.jpg" alt="Us-Flag" /> You are now shopping on Amazon.com</p>
            </div>
            <div className="additionalcountriesatag"><a  href="">Change country/region</a></div>
            
        </div>
        <span className="pointer"></span>
        </div>
        </div>

        <div onMouseOver={()=>{setAccountlisthovered(true)}} onMouseOut={()=>{setAccountlisthovered(false)}}>
        <div className="accountList border" >
          <div>
          <p className="accountlist-p1">Hello, Abrar</p>
          <p className="accountlist-p2">Account & Lists</p>
          </div>
          <FontAwesomeIcon className="locationIcon2 locationIcon2-position" icon={faCaretDown} />
        </div>
        <div className={`${isAccountliisthovered === false?"hiddendiv":""}`}>
        <div className="acountListAdditionalInfo" >
              <div className="manageprofilediv">
                <p>Who's shopping? select a profile.</p>
                <a href="">Manage Profiles</a>
                <FontAwesomeIcon className="rightarrowIcon" icon={faChevronRight} />
              </div>
              <div className="linksList">
                <div className="linkslist-1">
                  <p>Your Lists</p>
                  <YourLists />
                </div>
                <div className="line"></div>
                <div className="linkslist-2">
                <p>Your Account</p>
                <YourAccountLists />
                </div>
              </div>
        </div>
        <span className="pointer2"></span>
        </div>
        </div>
        <div className="retunsOrders border">
          <p className="retunsOrders-p1">Returns</p>
          <p className="retunsOrders-p2">& Orders</p>
        </div>
        
        <div className="cartShoppingdiv border" onClick={()=>{cartCountUpdate(-1)}}>
        <FontAwesomeIcon className="shoppingcart"  icon={faCartShopping} />
        <p className="cartcount">{cartVal}</p>
        <p className="cartText">Cart</p>
        </div>
      </div>
      <Navbar2 />
    </div>
    <div className="phoneScreen-navbar">
    <div>
    <div className='navbarpart1-subdiv'>  
     <div className='sub1 flexdisplay'>
        <a href=""><FontAwesomeIcon className='barsIcon' icon={faBars}/></a>
        <a href=""><img className='amazonlogoimage' src="assets/Images/Amazon-Logo.png" alt="Amazon-Logo" /></a>
     </div>
     <div className='sub2 flexdisplay'>
     <a href=""><p className='accountName'>Abrar</p></a>
     <a href=""><FontAwesomeIcon className='arrowrightIcon' icon={faChevronRight}/> </a>
     <a href=""><FontAwesomeIcon className='userloginIcon' icon={faUser} /></a>
        <FontAwesomeIcon className='shoppingCartIcon' icon={faCartShopping} />
     </div>
    </div>    
    <div className='sub3 flexdisplay'>
        <input className='inputTextforMobile' type="text" name="" id="" placeholder='Search Amazon'/>
        <div className='searchInconforMobile'>
            <FontAwesomeIcon className='searchIconSymbolforMobile' icon={faMagnifyingGlass}/>
        </div>
     </div>
    <div className='navbarpart1 additional-links'>
        <a href=""><p className='sublinks' >Medical Care & Pharmacy</p></a> 
        <a href=""><p className='sublinks' >Video</p></a> 
        <a href=""><p className='sublinks' >Buy Again</p></a> 
        <a href=""><p className='sublinks' >Amazon Basics</p></a> 
        <a href=""><p className='sublinks' >Whole Foods</p></a> 
        <a href=""><p className='sublinks' >Deals</p></a> 
        <a href=""><p className='sublinks' >Subscribe & Save</p></a> 
        <a href=""><p className='sublinks' >Prime</p></a> 
        <a href=""><p className='sublinks' >Best Sellers</p></a> 
        <a href=""><p className='sublinks' >Books</p></a> 
        <a href=""><p className='sublinks' >Livestreams</p></a> 
        <a href=""><p className='sublinks' >Music</p></a> 
        <a href=""><p className='sublinks' >Luxury Stores</p></a> 
        <a href=""><p className='sublinks' >Home</p></a> 
        <a href=""><p className='sublinks' >New Releases</p></a> 
    </div>
   <div className='locationInfobar' onClick={()=>{setlocationbtnclick(true)}}>
        <FontAwesomeIcon className='locationInfobarIcon' icon={faLocationDot}/>
        <p className='locationInfoText'>Deliver to {mobiledeliveryaddressdisplay}</p>
        <FontAwesomeIcon className='locationInfodownarrowIcon' icon={faChevronDown} />
    </div>
    </div>
    </div>
    </div>
  );
}
