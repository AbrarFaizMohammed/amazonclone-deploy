import { faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export default function Navbar2() {

  const [ismousehovered, setismousehovered] = useState(false);
  
  return (
    <div className='narbar2'>
      <span className='btn1 border'>
        <FontAwesomeIcon className='barIcon' icon={faBars} />
        <p>All</p>
      </span>
      <span>
      <span className='btn2 border' onMouseOver={(e)=>{setismousehovered(true)}} onMouseOut={(e)=>{setismousehovered(false)}}>
        <p>Medical Care & Pharmacy</p>
        <FontAwesomeIcon className='btn2Icon' icon={faCaretDown} />
      </span>
      <div className={`${ismousehovered === false ? "hidden":""}`} onMouseOver={(e)=>{setismousehovered(true)}} onMouseOut={(e)=>{setismousehovered(false)}}>
      <div className='medicalCarepopup'>
        <p className='medicaretitle'>Explore Medical care & pharmacy</p>
        <div className='gridcontainer'>
          <div className='gc-1'>
            <a href=""><div>
            <img src="src\Images\One_Medical_logo1.png" alt="One Medical Logo" />
            <p>Get primary care in person or vvia video</p>
            </div></a>
          </div>
          <div className='gc-1'>
           <a href=""> <div>
            <img src="src\Images\Amazon_Pharmacy_logo2.png" alt="pharmacy logo" />
            <p>Your medications, delivered</p>
            </div></a>
          </div>
          <div className='gc-1'>
            <a href=""><div>
            <img src="src/Images/Clinic_logo3.png" alt="clinic logo" />
            <p>Quickly treat common conditiond via virtual care</p>
            </div></a>
          </div>
          <div className='gc-1'>
           <a href=""> <div>
            <img src="src\Images\Health_Products_unisize4.png" alt="Health Products logo" />
            <p>Easily find and buy healthy and wellness products</p>
            </div></a>
          </div>
        </div>
        <div className='line2'></div>
        <div className='medicalcare-link'><a  href="">See all health on Amazon</a></div>
      </div>
      <span className='pointerinfo'></span>
      </div>
      </span>
      <span className='btn3 border'>
        <p>Customer  Service</p>
      </span>
      <span className='btn4 border'>
        <p>Gift Cards</p>
      </span>
      <span className='btn5 border'>
        <p>Today's Deals</p>
      </span>
      <span className='btn6 border'>
        <p>Coupons</p>
      </span>
      <span className='btn7 border'>
        <p>Home Improvement</p>
      </span>
      <span className='btn8 border'>
        <p>Pet Supplies</p>
      </span>
      <span className='btn9 border'>
        <p>Handmade</p>
      </span>
      <span className='btn10 border'>
        <p>Beauty & Personal Care</p>
      </span>
    </div>
  )
}
