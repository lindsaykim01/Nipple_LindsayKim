
var Airtable = require("airtable");

var base = new Airtable({ apiKey: "keyEcb9lwZCbNBfCd" }).base(
  "appCHRkg9CCWFOyvR"
);

base("ALL Images").select({}).eachPage( getnips, shownip);

const nips = [];

var nipcounter = 0;

// callback function that receives our data
function getnips(records, fetchNextPage) {
  nips.push(...records);
  fetchNextPage();
}


function shownip() {
  const nipplelist = document.getElementById("nipplelist");

  const onepagenips = [];
  if(nipcounter > nips.length-6){
    nipcounter = 0;
  }
  var num = nipcounter;
  for(i=0; i<6 ; i++){
    console.log(nips[num+i].fields.Text);
    onepagenips.push(nips[num+i]);
  }
  nipcounter += 6;

  console.log(onepagenips);
  onepagenips.forEach((nip) => {
    // div.innerText = nip.fields.Text;
    var imgurl =  nip.fields.Images[0].url;
    const img = document.createElement("img");
    img.src= imgurl;
    img.id = "nipimg"
    img.style.borderRadius = "50%";
    img.style.height = `20vw`;
    img.style.width = '20vw';
    img.style.margintop = "-10%";
    img.style.marginLeft="2.5%";
    img.style.marginRight="2.5%";
    nipplelist.appendChild(img);
  });
}


const leftnips = document.getElementById("leftslide");

const rightnips = document.getElementById("rightslide");

rightnips.addEventListener("click", clearright);
leftnips.addEventListener("click", clearleft);



function clearright(){
  const nipplelist = document.querySelector('#nipplelist');

  while (nipplelist.firstChild) {
    nipplelist.removeChild(nipplelist.firstChild);
  }
  
  // for(i=0; i<6; i++){
  //   nipplelist.removeChild(nipplelist.childNodes[1]);
  // }
  rightnip();
}

function clearleft(){
  const nipplelist = document.querySelector('#nipplelist');

  while (nipplelist.firstChild) {
    nipplelist.removeChild(nipplelist.firstChild);
  }
  // for(i=0; i<6; i++){
  //   nipplelist.removeChild(nipplelist.childNodes[1]);
  // }
  leftnip();
}

function rightnip() {

  const nipplelist = document.getElementById("nipplelist");
  
  for(i=0; i<6; i++){
    nipplelist.removeChild(nipplelist.childNodes[1]);
  }

  const onepagenips = [];
  if(nipcounter > nips.length-6){
    nipcounter = 0;
  }
  var num = nipcounter;
  for(i=0; i<6 ; i++){
    console.log(nips[num+i].fields.Text);
    onepagenips.push(nips[num+i]);
  }
  nipcounter += 6;

  console.log(onepagenips);
  onepagenips.forEach((nip) => {
    // div.innerText = nip.fields.Text;
    var imgurl =  nip.fields.Images[0].url;
    const img = document.createElement("img");
    img.src= imgurl;
    img.id = "nipimg"
    img.style.borderRadius = "50%";
    img.style.height = `20vw`;
    img.style.width = '20vw';
    img.style.margintop = "-10%";
    img.style.marginLeft="2.5%";
    img.style.marginRight="2.5%";
    nipplelist.appendChild(img);
  });
}

function leftnip() {
  const nipplelist = document.getElementById("nipplelist");

  const onepagenips = [];
  if(nipcounter > nips.length-6){
    nipcounter = 0;
  }
  var num = nipcounter;
  for(i=6; i>0 ; i--){
    console.log(nips[num-i].fields.Text);
    onepagenips.push(nips[num-i]);
  }
  nipcounter -= 6;

  console.log(onepagenips);
  onepagenips.forEach((nip) => {
    // div.innerText = nip.fields.Text;
    var imgurl =  nip.fields.Images[0].url;
    const img = document.createElement("img");
    img.src= imgurl;
    img.id = "nipimg"
    img.style.borderRadius = "50%";
    img.style.height = `20vw`;
    img.style.width = '20vw';
    img.style.margintop = "-10%";
    img.style.marginLeft="2.5%";
    img.style.marginRight="2.5%";
    nipplelist.appendChild(img);
  });
}