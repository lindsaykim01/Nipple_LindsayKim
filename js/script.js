
var Airtable = require("airtable");

var base = new Airtable({ apiKey: "keyEcb9lwZCbNBfCd" }).base(
  "appCHRkg9CCWFOyvR"
);

const nips = [];
var nipcounter = 0;
var nipsrc;

base("ALL Images").select({}).eachPage( getnips);





// callback function that receives our data
function getnips(records) {
  nips.push(...records);
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
    nipsrc = imgurl;
    const img = document.createElement("img");
    img.src= imgurl;
    img.id = "nipimg"
    img.style.borderRadius = "50%";
    img.style.height = `20vw`;
    img.style.width = '20vw';
    img.style.margintop = "-10%";
    img.style.marginLeft="2.5%";
    img.style.marginRight="2.5%";
    img.addEventListener("click",comp(imgurl));
    nipplelist.appendChild(img);
  });  
}


function comp(imgurl){
  console.log(imgurl);
}


const leftnips = document.getElementById("leftslide");

const rightnips = document.getElementById("rightslide");

rightnips.addEventListener("click", clearright);
leftnips.addEventListener("click", clearleft);



function clearright(){
  const nipplelist = document.querySelector('#nipplelist');

  for(i=0; i<6; i++){
    nipplelist.removeChild(nipplelist.children[0]);
  }
  rightnip();
}

function clearleft(){
  const nipplelist = document.querySelector('#nipplelist');

  for(i=0; i<6; i++){
    nipplelist.removeChild(nipplelist.children[0]);
  }
  leftnip();
}

function rightnip() {

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

function leftnip() {
  const nipplelist = document.getElementById("nipplelist");

  const onepagenips = [];
  if(nipcounter < 6){
    nipcounter = 101;
  }
  var num = nipcounter;
  for(i=0; i<6 ; i++){
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






