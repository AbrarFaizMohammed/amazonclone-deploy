import React from 'react'

export default function SearchCategoryList({updateSearchCatText}) {
  return (
    <div>
      <select name="searchcategorydropdown" id="searchcategorydropdown" className='searchcategorydropdown' onClick={(e)=>{updateSearchCatText(e.target.value)}} size="15">
        <option value="All Departments" >All Departments</option>
        <option value="Arts & Crafts" >Arts & Crafts</option>
        <option value="Automotive" >Automotive</option>
        <option value="Baby" >Baby</option>
        <option value="Beauty & Personal Care" >Beauty & Personal Care</option>
        <option value="Books" >Books</option>
        <option value="Boys' Fashion" >Boys' Fashion</option>
        <option value="Computers" >Computers</option>
        <option value="Deals" >Deals</option>
        <option value="Digital Music" >Digital Music</option>
        <option value="Electronics" >Electronics</option>
        <option value="Girls' Fashion" >Girls' Fashion</option>
        <option value="Health & Household">Health & Household</option>
        <option value="Home & Kitchen">Home & Kitchen</option>
        <option value="Industrial & Scientific">Industrial & Scientific</option>
        <option value="Kindle Store">Kindle Store</option>
        <option value="Luggage">Luggage</option>
        <option value="Men's Fashion">Men's Fashion</option>
        <option value="Movies & TV">Movies & TV</option>
        <option value="Music, CDs & Vinyl">Music, CDs & Vinyl</option>
        <option value="Pet Supplies">Pet Supplies</option>
        <option value="Prime Videos">Prime Videos</option>
        <option value="Software">Software</option>
        <option value="Sports & Outdoors">Sports & Outdoors</option>
        <option value="Tools & Home Improvement">Tools & Home Improvement</option>
        <option value="Toys & Games">Toys & Games</option>
        <option value="Video Games">Video Games</option>
        <option value="Women's Fashion">Women's Fashion</option>
      </select>
    </div>
  )
}
