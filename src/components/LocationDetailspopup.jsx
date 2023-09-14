import { faArrowLeft, faGlobe, faL, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Countries from './countries';


export default function LocationDetailspopup({addValue, isContainerMustDisplay, setlocatinvalueAsFalse,islocationbtnclick, setlocationbtnclick,setmobiledeliveryaddressdisplay}) {
    const [clickedbutton, setclickedbutton] = useState(0);
    const [mouseupStatus, setmouseupStatus] = useState(false);
    const [mousedownStatus, setmousedownStatus] = useState(false);

    const [address,  setaddress] = useState("");

    const [countryaddress,  setcountryaddress] = useState("");
    const [musthidden,setmusthidden]=useState(false);

    const updateaddress = (e)=>{
        e.preventDefault();
        addValue(address);
        setaddress ("");
    }   
    const updateclickedbuttonValue = (e,val) =>{
        e.preventDefault();
        setclickedbutton(val);
    }    

   const handleMouseDown = ()=>
    {
        setmousedownStatus(true);
        setmouseupStatus(false);
    }

   const handleMouseUp=()=>
    {
        setmouseupStatus(true);
        setmousedownStatus(false);
    }

const addAddressValue = (val)=>{
    addValue(val);
}
const updatecountryaddress = (e)=>{
    e.preventDefault();
    addValue(countryaddress);
    setmusthidden(true);
} 

/*for mobile */
const[zipcodeoptionclicked, setzipcodeoptionclicked] =useState(false);
  const[countrycodeoptionclicked, setcountrycodeoptionclicked] = useState(false);
  const[mobileaddress, setmobileaddress] = useState("")

  const updatemobileaddress = (e)=>{
    e.preventDefault();
    setmobiledeliveryaddressdisplay(mobileaddress);
    setmobileaddress("");
  }

  return (
    <div>
    <div className="laptopScreen-navbar">
    <div className={`${isContainerMustDisplay === true?'popupdivdisplay':'popupdivdisplayhide'}`}>
    <div className={`${isContainerMustDisplay === true?'locationDetailsdivDisplay':'locationDetailsdiv'}`}>
     <div className='locationDetailsPopUp-heading-container'>
        <p>Choose your location</p>
     </div>
      <form className='locationpopupform' action="">
        <p className='locationpopupform-instructions'>Delivery options and delivery speeds may vary for different locations</p>
        <button onClick={(e)=>updateclickedbuttonValue(e,1)} onMouseDown={()=>handleMouseDown()} onMouseUp={()=>handleMouseUp()} className={`${clickedbutton === 1?mousedownStatus === true ?'locationpopupform-address-container-onclick-b1':'locationpopupform-address-container-onclick-b1, locationpopupform-address-container-onclick':'locationpopupform-address-container'}`}><div ><p className='locationpopupform-address'><b>Abrar Faiz Mohammed</b>155 ANDERSON HWY TILLMAN PLACE APT 113, CLEMSON SC 29631</p></div></button>
        <button onClick={(e)=>updateclickedbuttonValue(e,2)} onMouseDown={()=>handleMouseDown()} onMouseUp={()=>handleMouseUp()} className={`${clickedbutton === 2?mousedownStatus === true ?'locationpopupform-address-container-onclick-b1':'locationpopupform-address-container-onclick-b1, locationpopupform-address-container-onclick':'locationpopupform-address-container'}`}><div ><p className='locationpopupform-address'><b>Abrar Faiz Mohammed</b>155 ANDERSON HWY TILLMAN PLACE APT 112, CLEMSON SC 29631</p></div></button>
        <a href="">Manage address book</a>
        <div className='locationpopupform-div1'>
            <hr />
            <p className='title1'>or enter a US zip code</p>
            <input className="locationpopupform-textinput" value={address} type="text" onChange={(e)=>{setaddress(e.target.value)}} />
            <input className='locationpopupform-buttoninput' type="submit" value="Apply" onClick={(e)=>{updateaddress(e)}}/>
            <hr />
            <p className='title2'>or</p>
            <Countries addaddressValue={addAddressValue} />
            <button className='done-button' onClick={setlocatinvalueAsFalse}>Done</button>
        </div>
        </form>
    </div>
    </div>
    </div>
    <div className="phoneScreen-navbar">
    <div className={`${islocationbtnclick===false?"popupdivdisplayhide":"popupdivdisplay"}`}>
    <div className={`${islocationbtnclick===false?"mobiledivpopuphidden":zipcodeoptionclicked===true?"mobiledivpopupforzipcode":countrycodeoptionclicked===true?"mobiledivpopupforcountrycode":"mobiledivpopup"}`}>
        <span onClick={()=>{setlocationbtnclick(true)}} className='donebtn'>DONE</span>
        <div className={`${zipcodeoptionclicked===true?"mobilepopupsubdivhidden":"mobilepopupsubdiv"}`}>
          <p className='mobilepopupsubdiv-title'>Choose your location</p>
          <p className='mobilepopupsubdiv-titledescription'>Delivery option and delivery speed may vary for different locations</p>
          <div className='mobileMoreaddressdetails'>
            <div className='mobileaddressoption1' onClick={()=>{setmobiledeliveryaddressdisplay("Abrar - Clemson 29631")}}>
              <p className='mobileaddressoption1-title'>Abrar Faiz Mohammed CLEMSON</p>
              <p className='mobileaddressoption1-titledescription'>29631</p>
              <p className='mobileDefaultAddress'>Default Address</p>
            </div>
             <div className='mobileaddressoption1' onClick={()=>{setmobiledeliveryaddressdisplay("Abrar - Clemson 29632")}}>
              <p className='mobileaddressoption1-title'>Abrar Faiz Mohammed CLEMSON</p>
              <p className='mobileaddressoption1-titledescription'>29632</p>
            </div>
            <div className='mobileaddressoption1' onClick={()=>{setmobiledeliveryaddressdisplay("Abrar - Clemson 29633")}}>
              <p className='mobileaddressoption1-title'>Abrar Faiz Mohammed CLEMSON</p>
              <p className='mobileaddressoption1-titledescription'>29633</p>
            </div>
            <div className='mobileaddressoption1'>
              <a href=""><p className='additionaladdresslink'>Manage address book</p></a> 
            </div>
          </div>
          <div className='mobileaddresspopupline'></div>
          <div className='MobileZipcode'>
            <FontAwesomeIcon className='mobilelocationdot' icon={faLocationDot} />
            <p className='mobilelocationdottext' onClick={()=>{setzipcodeoptionclicked(true)}}>Enter a US zip code</p>
          </div>
          <div className='MobileCountrySelection'>
            <FontAwesomeIcon className='mobilecountrygloab' icon={faGlobe} />
            <p className='mobilecountrygloabtext' onClick={()=>{setcountrycodeoptionclicked(true)}} >Ship outside the US</p>
          </div>
        </div>  
        
    <div className={`${zipcodeoptionclicked===true?"mobilepopupforzipcode":"mobilepopupforzipcodehidden"}`}>
      <span className='mobilezipcodecontainertitle'>
        <FontAwesomeIcon className='mobilezipcodeleftarrow' icon={faArrowLeft} onClick={()=>{setzipcodeoptionclicked(false)}} />
        <p className='mobilezipcodetextdescription'>Enter a US zip code</p>
      </span>
      <div className='mobilezipcodeline'></div>
      <input type="text"  className='mobilezipcodetextbox' value={mobileaddress} defaultValue={""} onChange={(e)=>{setmobileaddress(e.target.value) }} required/>
      <input type="Submit" value={"Apply"} className='mobilezipcodeapplybtn' onClick={(e)=>{updatemobileaddress(e), setzipcodeoptionclicked(false),setlocationbtnclick(false) }} />  
    </div> 

      <div className={`${countrycodeoptionclicked===true?'mobilepopupforcountryselection':'mobilepopupforcountryselectionhidden'}`}>
        <FontAwesomeIcon className='mobilecountrycodeleftarrow' icon={faArrowLeft} onClick={()=>{setcountrycodeoptionclicked(false)}} />
        <div className='mobilecountrycodeline'></div>
        <Countries mobilesetaddressvalue={setmobiledeliveryaddressdisplay} setcountrycodeoptionclicked={setcountrycodeoptionclicked} setlocationbtnclick={setlocationbtnclick}/>
      </div>     
    </div>
    </div>
    </div>
    </div>
  )
}
