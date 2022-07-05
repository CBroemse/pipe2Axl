// Import stylesheets
import './style.css';
import './index.html';
//import {obJ0} from './outThere01Com.js';
//import "https://cdn.jsdelivr.net/npm/handsontable@10.0/dist/handsontable.full.min.js";
//import "https://cdn.jsdelivr.net/npm/handsontable@10.0/dist/handsontable.full.min.css";

var a = document.createElement('a');
var linkText = document.createTextNode("my title text");
a.appendChild(linkText);
a.title = "my title text";
a.href = "https://github.com/CBroemse/JSdbSTREAMall/files/7272490/outThere01Com.txt";
var fg = document.body.appendChild(a);

const obJ0 = {"flist1" : "40.1496259351621,47.93926247288503,50.81967213114754,62.0253164556962","flist2":"64.97816593886463,59.73799126637555,57.37991266375546,44.80349344978166","flist3":"30.139372822299652,19.686411149825783,14.982578397212542,9.177215189873417","flist4":"29.649122807017545,19.12280701754386,14.385964912280702,9.81012658227848","flist5":"39.15211970074813,47.07158351409978,50.0,61.392405063291136","flist6":"23.18007662835249,11.685823754789272,6.513409961685824,17.40506329113924"};

const daObJ0 = new Object(obJ0);
var dBLitoSolu = [[["fl1","40.59405940594059"],["fl2","64.71615720524018"],["fl3","29.616724738675956"],["fl4","29.12280701754386"],["fl5","39.603960396039604"],["fl6","22.60536398467433"]]];

// Write Javascript code!
const appDiv = document.getElementById('app');
const dbb = 'https://github.com/CBroemse/JSdbSTREAMall/files/7272490/outThere01Com.txt';
const dbb2 =  document.getElementById('dbb');
const dataStr0 = daObJ0.flist2;
const dataStr1 = daObJ0.flist3;
const dataStr2 = daObJ0.flist4;
const dataStr3 = daObJ0.flist5;
const dataStr4 = daObJ0.flist6;
//const mak0 = (""+dataStr0+"").split(",");

appDiv.innerHTML = '<h1>JS Star1ter</h1><body>'
     + daObJ0.flist1 +'<br>'+
     dataStr0+'<br>'+dataStr1+'<br>'+dataStr2+'<br>'+dataStr3+'<br>'+dataStr4+'<br>'+
     
     '</body>';



     




