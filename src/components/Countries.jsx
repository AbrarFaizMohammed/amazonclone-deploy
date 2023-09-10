import React, { useState } from 'react'


export default function Countries({addaddressValue,mobilesetaddressvalue, setcountrycodeoptionclicked, setlocationbtnclick}) {


  return (
    <div>
    <div className="laptopScreen-navbar">
      <select  id="countrydropdown" name="countrydropdown" className='countries-dropdown' onClick={(e)=>{addaddressValue(e.target.value)}}>
                <option value="" className='hidden'>Ship outside the US</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Åland Islands">Åland Islands</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">Central African Republic</option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cote D'ivoire">Cote D'ivoire</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Territories">French Southern Territories</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guernsey">Guernsey</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-bissau">Guinea-bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Isle of Man">Isle of Man</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jersey">Jersey</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                <option value="Korea, Republic of">Korea, Republic of</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
                <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                <option value="Moldova, Republic of">Moldova, Republic of</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Netherlands Antilles">Netherlands Antilles</option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn">Pitcairn</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russian Federation">Russian Federation</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Helena">Saint Helena</option>
                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                <option value="Taiwan">Taiwan</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                <option value="Thailand">Thailand</option>
                <option value="Timor-leste">Timor-leste</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Viet Nam">Viet Nam</option>
                <option value="Virgin Islands, British">Virgin Islands, British</option>
                <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                <option value="Wallis and Futuna">Wallis and Futuna</option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
            </select>
    </div>
    <div className="phoneScreen-navbar">
    <div className='countryoptionsformobile'>
              <ul>
                <h4>Common Countries</h4>
                <li className='liststart' ><input id='cc' className='custom-radioformobile' name="countryinfo" type="radio" value="Australia" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}}/>Australia</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" value="Canada" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}}/>Canada</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" value="China" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}}/>China</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" value="Japan" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}}/>Japan</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" value="Mexico" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}}/>Mexico</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" value="Singapore" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}}/>Singapore</li>
                <li className='listend' ><input  className='custom-radioformobile'  name="countryinfo" type="radio" value="United Kingdom" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}}/>United Kingdom</li>
                
                <h4>All Countries and regions</h4>
                <li className='liststart' ><input  className='custom-radioformobile' name="countryinfo" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} type="radio" value="Afghanistan"/>Afghanistan</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Åland Islands"/>Åland Islands</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Albania"/>Albania</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Algeria"/>Algeria</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="American Samoa"/>American Samoa</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Andorra"/>Andorra</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Angola"/>Angola</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Anguilla"/>Anguilla</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Antarctica"/>Antarctica</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Antigua and Barbuda"/>Antigua and Barbuda</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Argentina"/>Argentina</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Armenia"/>Armenia</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Aruba"/>Aruba</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Australia"/>Australia</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Austria"/>Austria</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Azerbaijan"/>Azerbaijan</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Bahamas"/>Bahamas</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Bahrain"/>Bahrain</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Bangladesh"/>Bangladesh</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Barbados"/>Barbados</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Belarus"/>Belarus</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Belgium"/>Belgium</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Belize"/>Belize</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Benin"/>Benin</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Bermuda"/>Bermuda</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Bhutan"/>Bhutan</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Bolivia"/>Bolivia</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Bosnia and Herzegovina"/>Bosnia and Herzegovina</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Botswana"/>Botswana</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Bouvet Island"/>Bouvet Island</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Brazil"/>Brazil</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="British Indian Ocean Territory"/>British Indian Ocean Territory</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Brunei Darussalam"/>Brunei Darussalam</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Bulgaria"/>Bulgaria</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Burkina Faso"/>Burkina Faso</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Burundi"/>Burundi</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Cambodia"/>Cambodia</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Cameroon"/>Cameroon</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Canada"/>Canada</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Cape Verde"/>Cape Verde</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Cayman Islands"/>Cayman Islands</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Central African Republic"/>Central African Republic</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Chad"/>Chad</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Chile"/>Chile</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="China"/>China</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Christmas Island"/>Christmas Island</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Cocos (Keeling) Islands"/>Cocos (Keeling) Islands</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Colombia"/>Colombia</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Comoros"/>Comoros</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Congo"/>Congo</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Congo, The Democratic Republic of The"/>Congo, The Democratic Republic of The</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Cook Islands"/>Cook Islands</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Costa Rica"/>Costa Rica</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Cote D'ivoire"/>Cote D'ivoire</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Croatia"/>Croatia</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Cuba"/>Cuba</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Cyprus"/>Cyprus</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Czech Republic"/>Czech Republic</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Denmark"/>Denmark</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Djibouti"/>Djibouti</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Dominica"/>Dominica</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Dominican Republic"/>Dominican Republic</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Ecuador"/>Ecuador</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Egypt"/>Egypt</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="El Salvador"/>El Salvador</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Equatorial Guinea"/>Equatorial Guinea</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Eritrea"/>Eritrea</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Estonia"/>Estonia</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Ethiopia"/>Ethiopia</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Falkland Islands (Malvinas)"/>Falkland Islands (Malvinas)</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Faroe Islands"/>Faroe Islands</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Fiji"/>Fiji</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Finland"/>Finland</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="France"/>France</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="French Guiana"/>French Guiana</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="French Polynesia"/>French Polynesia</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="French Southern Territories"/>French Southern Territories</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Gabon"/>Gabon</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Gambia"/>Gambia</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Georgia"/>Georgia</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Germany"/>Germany</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Ghana"/>Ghana</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Gibraltar"/>Gibraltar</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Greece"/>Greece</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Greenland"/>Greenland</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Grenada"/>Grenada</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Guadeloupe"/>Guadeloupe</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Guam"/>Guam</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Guatemala"/>Guatemala</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Guernsey"/>Guernsey</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Guinea"/>Guinea</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Guinea-bissau"/>Guinea-bissau</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Guyana"/>Guyana</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Haiti"/>Haiti</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Heard Island and Mcdonald Islands"/>Heard Island and Mcdonald Islands</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Holy See (Vatican City State)"/>Holy See (Vatican City State)</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Honduras"/>Honduras</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Hong Kong"/>Hong Kong</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Hungary"/>Hungary</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Iceland"/>Iceland</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="India"/>India</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Indonesia"/>Indonesia</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Iran, Islamic Republic of"/>Iran, Islamic Republic of</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Iraq"/>Iraq</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Ireland"/>Ireland</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Isle of Man"/>Isle of Man</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Israel"/>Israel</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Italy"/>Italy</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Jamaica"/>Jamaica</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Japan"/>Japan</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Jersey"/>Jersey</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Jordan"/>Jordan</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Kazakhstan"/>Kazakhstan</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Kenya"/>Kenya</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Kiribati"/>Kiribati</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Korea, Democratic People's Republic of"/>Korea, Democratic People's Republic of</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Korea, Republic of"/>Korea, Republic of</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Kuwait"/>Kuwait</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Kyrgyzstan"/>Kyrgyzstan</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Lao People's Democratic Republic"/>Lao People's Democratic Republic</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Latvia"/>Latvia</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Lebanon"/>Lebanon</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Lesotho"/>Lesotho</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Liberia"/>Liberia</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Libyan Arab Jamahiriya"/>Libyan Arab Jamahiriya</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Liechtenstein"/>Liechtenstein</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Lithuania"/>Lithuania</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Luxembourg"/>Luxembourg</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Macao"/>Macao</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Macedonia, The Former Yugoslav Republic of"/>Macedonia, The Former Yugoslav Republic of</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Madagascar"/>Madagascar</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Malawi"/>Malawi</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Malaysia"/>Malaysia</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Maldives"/>Maldives</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Mali"/>Mali</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Malta"/>Malta</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Marshall Islands"/>Marshall Islands</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Martinique"/>Martinique</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Mauritania"/>Mauritania</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Mauritius"/>Mauritius</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Mayotte"/>Mayotte</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Mexico"/>Mexico</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Micronesia, Federated States of"/>Micronesia, Federated States of</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Moldova, Republic of"/>Moldova, Republic of</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Monaco"/>Monaco</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Mongolia"/>Mongolia</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Montenegro"/>Montenegro</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Montserrat"/>Montserrat</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Morocco"/>Morocco</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Mozambique"/>Mozambique</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Myanmar"/>Myanmar</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Namibia"/>Namibia</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Nauru"/>Nauru</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Nepal"/>Nepal</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Netherlands"/>Netherlands</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Netherlands Antilles"/>Netherlands Antilles</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="New Caledonia"/>New Caledonia</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="New Zealand"/>New Zealand</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Nicaragua"/>Nicaragua</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Niger"/>Niger</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Nigeria"/>Nigeria</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Niue"/>Niue</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Norfolk Island"/>Norfolk Island</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Northern Mariana Islands"/>Northern Mariana Islands</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Norway"/>Norway</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Oman"/>Oman</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Pakistan"/>Pakistan</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Palau"/>Palau</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Palestinian Territory, Occupied"/>Palestinian Territory, Occupied</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Panama"/>Panama</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Papua New Guinea"/>Papua New Guinea</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Paraguay"/>Paraguay</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Peru"/>Peru</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Philippines"/>Philippines</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Pitcairn"/>Pitcairn</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Poland"/>Poland</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Portugal"/>Portugal</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Puerto Rico"/>Puerto Rico</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Qatar"/>Qatar</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Reunion"/>Reunion</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Romania"/>Romania</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Russian Federation"/>Russian Federation</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Rwanda"/>Rwanda</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Saint Helena"/>Saint Helena</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Saint Kitts and Nevis"/>Saint Kitts and Nevis</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Saint Lucia"/>Saint Lucia</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Saint Pierre and Miquelon"/>Saint Pierre and Miquelon</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Saint Vincent and The Grenadines"/>Saint Vincent and The Grenadines</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Samoa"/>Samoa</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="San Marino"/>San Marino</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Sao Tome and Principe"/>Sao Tome and Principe</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Saudi Arabia"/>Saudi Arabia</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Senegal"/>Senegal</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Serbia"/>Serbia</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Seychelles"/>Seychelles</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Sierra Leone"/>Sierra Leone</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Singapore"/>Singapore</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Slovakia"/>Slovakia</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Slovenia"/>Slovenia</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Solomon Islands"/>Solomon Islands</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Somalia"/>Somalia</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="South Africa"/>South Africa</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Spain"/>Spain</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Sri Lanka"/>Sri Lanka</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Sudan"/>Sudan</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Suriname"/>Suriname</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Svalbard and Jan Mayen"/>Svalbard and Jan Mayen</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Swaziland"/>Swaziland</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Sweden"/>Sweden</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Switzerland"/>Switzerland</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Syrian Arab Republic"/>Syrian Arab Republic</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Taiwan"/>Taiwan</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Tajikistan"/>Tajikistan</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Tanzania, United Republic of"/>Tanzania, United Republic of</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Thailand"/>Thailand</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Timor-leste"/>Timor-leste</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Togo"/>Togo</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Tokelau"/>Tokelau</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Tonga"/>Tonga</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Trinidad and Tobago"/>Trinidad and Tobago</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Tunisia"/>Tunisia</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Turkey"/>Turkey</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Turkmenistan"/>Turkmenistan</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Turks and Caicos Islands"/>Turks and Caicos Islands</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Tuvalu"/>Tuvalu</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Uganda"/>Uganda</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Ukraine"/>Ukraine</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="United Arab Emirates"/>United Arab Emirates</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="United Kingdom"/>United Kingdom</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="United States"/>United States</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="United States Minor Outlying Islands"/>United States Minor Outlying Islands</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Uruguay"/>Uruguay</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Uzbekistan"/>Uzbekistan</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Vanuatu"/>Vanuatu</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Venezuela"/>Venezuela</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Viet Nam"/>Viet Nam</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Virgin Islands, British"/>Virgin Islands, British</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Virgin Islands, U.S."/>Virgin Islands, U.S.</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Wallis and Futuna"/>Wallis and Futuna</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Western Sahara"/>Western Sahara</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Yemen"/>Yemen</li>
                <li ><input  className='custom-radioformobile'  name="countryinfo" type="radio" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} value="Zambia"/>Zambia</li>
                <li className='listend' ><input  className='custom-radioformobile'  name="countryinfo" onClick={(e)=>{mobilesetaddressvalue(e.target.value),setlocationbtnclick(false),setcountrycodeoptionclicked(false)}} type="radio" value="Zimbabwe"/>Zimbabwe</li>
                </ul>
    </div>
    </div>
    </div>
  )
}
