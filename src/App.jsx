import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import style from  './style.css'
import NavigationBar from './components/NavigationBar'
import LocationDetailspopup from './components/LocationDetailspopup'
import Mainbody from './components/Mainbody'
import { faL } from '@fortawesome/free-solid-svg-icons'

function App() {

  const [addressdetails, setaddressdetails] = useState("Clemson 29631");
  const [locationBtnClicked,  setlocationBtnClicked]=useState(false);
  const [cartCount, setcartCount] = useState(0);

  const updatecartCount=(val)=>{
      
      let qty ;
      if(cartCount>=0)
      {
        qty= cartCount+val;
        if(qty<0)
        {
          qty=0;
        }
      }
      else{
        qty=0;
      }
    setcartCount(qty);
  }

  const addVal = (valueAddress)=>{
    setaddressdetails(valueAddress);
  }

  const setlocatinvalue = (e)=>{
    e.preventDefault();
    setlocationBtnClicked(true);
    document.body.style.overflow="hidden";
  }

  const setlocatinvalueAsFalse = (e)=>{
    e.preventDefault();
    setlocationBtnClicked(false);
    document.body.style.removeProperty('overflow');
  }

  /*for mobile */
  const [locationbtnclick, setlocationbtnclick] = useState(false);
  const [mobiledeliveryaddressdisplay, setmobiledeliveryaddressdisplay] = useState("Abrar - Clemson 29631");

   function updatelocationbtnclickValue(val){
    setlocationbtnclick(val);
    if(val===true)
    {
      document.body.style.overflow="hidden";
    }
    else
    {
      document.body.style.removeProperty('overflow');
    }

   }

  return (
    <>
      <NavigationBar  Addressinfo={addressdetails} locationbtnclick={setlocatinvalue} cartVal = {cartCount} cartCountUpdate={updatecartCount} setlocationbtnclick={updatelocationbtnclickValue} mobiledeliveryaddressdisplay={mobiledeliveryaddressdisplay}/>
      <LocationDetailspopup addValue={addVal} isContainerMustDisplay={locationBtnClicked} setlocatinvalueAsFalse={setlocatinvalueAsFalse} islocationbtnclick={locationbtnclick} setlocationbtnclick={setlocationbtnclick} setmobiledeliveryaddressdisplay={setmobiledeliveryaddressdisplay}/>
      <Mainbody style="filter:blur(4px)" cartCountUpdate={updatecartCount} />  
    </>
  )
}

export default App
