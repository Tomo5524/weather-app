(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{12:function(e,a,n){e.exports=n(27)},24:function(e,a,n){},25:function(e,a,n){},27:function(e,a,n){"use strict";n.r(a);var t=n(0),i=n.n(t),r=n(10),c=n.n(r),l=n(3),o=n.n(l),s=n(6),u=n(2),m={AF:"Afghanistan",AX:"Aland Islands",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AQ:"Antarctica",AG:"Antigua And Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia",BA:"Bosnia And Herzegovina",BW:"Botswana",BV:"Bouvet Island",BR:"Brazil",IO:"British Indian Ocean Territory",BN:"Brunei Darussalam",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cape Verde",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CX:"Christmas Island",CC:"Cocos (Keeling) Islands",CO:"Colombia",KM:"Comoros",CG:"Congo",CD:"Congo, Democratic Republic",CK:"Cook Islands",CR:"Costa Rica",CI:"Cote D'Ivoire",HR:"Croatia",CU:"Cuba",CY:"Cyprus",CZ:"Czech Republic",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",ET:"Ethiopia",FK:"Falkland Islands (Malvinas)",FO:"Faroe Islands",FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern Territories",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GG:"Guernsey",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",HM:"Heard Island & Mcdonald Islands",VA:"Holy See (Vatican City State)",HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran, Islamic Republic Of",IQ:"Iraq",IE:"Ireland",IM:"Isle Of Man",IL:"Israel",IT:"Italy",JM:"Jamaica",JP:"Japan",JE:"Jersey",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",KR:"Korea",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Lao People's Democratic Republic",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libyan Arab Jamahiriya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macao",MK:"Macedonia",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:"Micronesia, Federated States Of",MD:"Moldova",MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",AN:"Netherlands Antilles",NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestinian Territory, Occupied",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PN:"Pitcairn",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",RE:"Reunion",RO:"Romania",RU:"Russian Federation",RW:"Rwanda",BL:"Saint Barthelemy",SH:"Saint Helena",KN:"Saint Kitts And Nevis",LC:"Saint Lucia",MF:"Saint Martin",PM:"Saint Pierre And Miquelon",VC:"Saint Vincent And Grenadines",WS:"Samoa",SM:"San Marino",ST:"Sao Tome And Principe",SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:"South Georgia And Sandwich Isl.",ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",SJ:"Svalbard And Jan Mayen",SZ:"Swaziland",SE:"Sweden",CH:"Switzerland",SY:"Syrian Arab Republic",TW:"Taiwan",TJ:"Tajikistan",TZ:"Tanzania",TH:"Thailand",TL:"Timor-Leste",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad And Tobago",TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:"Turks And Caicos Islands",TV:"Tuvalu",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates",GB:"United Kingdom",US:"United States",UM:"United States Outlying Islands",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VE:"Venezuela",VN:"Viet Nam",VG:"Virgin Islands, British",VI:"Virgin Islands, U.S.",WF:"Wallis And Futuna",EH:"Western Sahara",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"};var d=function(e){return m.hasOwnProperty(e)?m[e]:e};function p(e){return e<10?"0"+e:e}var h=function(e){var a,n=new Date,t=n.getTime(),i=6e4*n.getTimezoneOffset(),r=new Date(t+i+1e3*e),c=p(r.getHours()),l=p(r.getMinutes());return c>12?(a="PM",c-=12):c<12?(a="AM",0==c&&(c=12)):a="PM",(c=2===(c=c.toString()).length&&"0"===c[0]?c.slice(1):c)+":"+l+" "+a};var f=function(e){var a=Object(t.useState)(""),n=Object(u.a)(a,2),r=n[0],c=n[1],l=new Date(1e3*e.value.dt);console.log(l,"date");var m=l.getDate(),d=l.getMonth()+1,p=e.value.temp.max,h=Math.round(p),f=e.value.temp.min,S=Math.round(f);function M(){return(M=Object(s.a)(o.a.mark((function e(a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=5;break}return e.next=3,fetch("http://openweathermap.org/img/w/".concat(a,".png"));case 3:n=e.sent,c(n.url);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(e){M.apply(this,arguments)}(e.value.weather[0].icon),i.a.createElement("div",{className:"m-2 text-center flex-grow-1 "+(4!==e.id?"border-right":"")},i.a.createElement("h4",null,d,"/",m),i.a.createElement("h3",null,h,e.unit),i.a.createElement("h5",null,S,e.unit),i.a.createElement("img",{id:"wicon",style:{width:70,height:70},src:r,alt:"Weather icon"}),i.a.createElement("h5",null,"Humidity: ",e.value.humidity,"%"))};var S=function(e){var a=Object(t.useState)(""),n=Object(u.a)(a,2),r=n[0],c=n[1],l=d(e.country.toUpperCase()),m=h(e.value.timezone),p=l?"metric"===e.unit?"\xb0C":"\xb0F":"";function S(){return(S=Object(s.a)(o.a.mark((function e(a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=5;break}return e.next=3,fetch("http://openweathermap.org/img/w/"+a+".png");case 3:n=e.sent,c(n.url);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){S.apply(this,arguments)}(e.value.icon);var M=e.forecast.map((function(e,a){return i.a.createElement(f,{key:a,id:a,value:e,unit:p})}));return i.a.createElement("div",null,i.a.createElement("div",{className:"d-flex justify-content-around align-items-center text-light mt-3"},i.a.createElement("div",null,i.a.createElement("h2",null,e.value.cityName,l?", ":"",l),i.a.createElement("p",null,l?"as of "+m:""),i.a.createElement("h1",{className:"mb-0"},e.value.temp,p),i.a.createElement("h3",null,e.value.description),i.a.createElement("h4",null,"Feels like: ",e.value.feels_like,p)),i.a.createElement("div",null,i.a.createElement("img",{id:"wicon",style:{width:120,height:120},src:r,alt:"Weather icon"}),i.a.createElement("div",{className:"d-flex"},i.a.createElement("h4",null,e.value.temp_max,p),i.a.createElement("h4",{className:"px-3"},"/"),i.a.createElement("h4",null,e.value.temp_min,p)))),i.a.createElement("div",{className:"bg-light my-3 p-3 radius opacity"},i.a.createElement("h2",null,"Daily Forecast"),i.a.createElement("div",{className:"d-flex"},M)))},M=n(11),b=n.n(M),g=n(29),E=n(30);function v(){var e=Object(t.useState)("metric"),a=Object(u.a)(e,2),n=a[0],r=a[1];console.log(n,"unit/////////////////////////////");var c=Object(t.useState)(""),l=Object(u.a)(c,2),m=l[0],d=l[1],p=Object(t.useState)(""),h=Object(u.a)(p,2),f=h[0],M=h[1],v=Object(t.useState)([]),y=Object(u.a)(v,2),A=y[0],N=y[1],C=Object(t.useState)(""),I=Object(u.a)(C,2),G=I[0],T=I[1],B=Object(t.useState)({temp:"",feels_like:"",temp_min:"",temp_max:"",description:"",humidity:"",cityName:"",dt:0,timezone:0}),w=Object(u.a)(B,2),O=w[0],L=w[1];function P(e){e.current.classList.remove("no-display")}function R(e){console.log(e),e.current.classList.add("no-display")}Object(t.useEffect)((function(){function e(){return(e=Object(s.a)(o.a.mark((function e(){var a,t,i,r,c,l,s,u,d,p,h,f,S;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="edffd1bf975a74d5d10e58c5ac8be2d3",t="",e.next=5,fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(m,"&appid=").concat(a));case 5:return i=e.sent,e.next=8,i.json();case 8:return r=e.sent,c=r.coord.lat,l=r.coord.lon,M(r.sys.country),t=r.name,e.next=15,fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(c,"&lon=").concat(l,"&exclude=minutely,hourly,alerts&appid=").concat(a,"&units=").concat(n));case 15:return s=e.sent,e.next=18,s.json();case 18:u=e.sent,d=u.current,p=d.temp,h=d.feels_like,f=d.humidity,S=d.weather,L({temp:Math.round(p),feels_like:Math.round(h),temp_min:Math.round(u.daily[0].temp.min),temp_max:Math.round(u.daily[0].temp.max),description:S[0].description,humidity:f,cityName:t,dt:u.dt,timezone:u.timezone_offset,icon:S[0].icon}),N(u.daily.slice(1,6)),R(x),P(F),e.next=32;break;case 26:e.prev=26,e.t0=e.catch(0),k.current.classList.add("display"),setTimeout((function(){k.current.classList.remove("display")}),2e3),R(F),setTimeout((function(){P(x)}),2e3);case 32:case"end":return e.stop()}}),e,null,[[0,26]])})))).apply(this,arguments)}m&&function(){e.apply(this,arguments)}()}),[n,m]);var k=Object(t.useRef)(),x=Object(t.useRef)(),F=Object(t.useRef)();return i.a.createElement("div",null,i.a.createElement("nav",{className:"nav bg-custom radius justify-content-between p-4 align-items-center"},i.a.createElement("h2",{className:"pb-3"},"Weather App"),i.a.createElement("div",null,i.a.createElement("div",{className:"d-flex align-items-center"},i.a.createElement(g.a,{type:"text",placeholder:"Search",className:"mr-sm-2",onChange:function(e){T(e.target.value)}}),i.a.createElement(E.a,{variant:"outline-success",onClick:function(){d(G)}},"Search")),i.a.createElement("div",{ref:k,className:"error-container d-block pb-3"},i.a.createElement("p",{className:"m-0"},"Location Not Found"))),i.a.createElement(b.a,{className:"switch pb-3",boxShadow:"3px 3px 5px #c8c8c8",offColor:"#f2f2f2",onColor:"#f2f2f2",uncheckedIcon:i.a.createElement("span",{className:"switch-icon"},"\xb0F"),checkedIcon:i.a.createElement("span",{className:"switch-icon"},"\xb0C"),onChange:function(){x.current.classList.contains("no-display")&&r("metric"===n?"imperial":"metric")},checked:"metric"===n})),i.a.createElement("div",{ref:x,className:"text-center pt-5"},i.a.createElement("h1",null,"No Location found...\ud83d\ude2d")),i.a.createElement("div",{ref:F,className:"no-display"},i.a.createElement(S,{value:O,unit:n,country:f,forecast:A})))}var y=function(){return i.a.createElement("div",{className:"container"},i.a.createElement(v,null))};n(24),n(25),n(26);c.a.render(i.a.createElement(y,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.90c13062.chunk.js.map