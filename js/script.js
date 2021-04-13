
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
    img.addEventListener("click",event=> comp(imgurl));
    nipplelist.appendChild(img);
  });  
}


function comp(imgurl){

  var colorpallete = [];

  colorpallete = ["#FF00A8","#AD00FF","#FF3D00","#0047FF","#129F53","#FFE500"]

  var backcolor =  Math.floor(Math.random()*6);

  console.log(String(colorpallete[backcolor]));
  var body = document.body;


  body.style.backgroundColor = String(colorpallete[backcolor]);


  var randomcompnumber = [];

  randomcompnumber = [2 ,6];

  var rcn1 = Math.floor(Math.random() * 2);

  var rcn2 = randomcompnumber[rcn1];

  const maintext = document.querySelector('#maintext');
  if(maintext !=null){
    maintext.parentNode.removeChild(maintext);
  }
  const leftslide = document.querySelector("#leftslide");
  const rightslide = document.querySelector("#rightslide");

  leftslide.style.display = "none";
  rightslide.style.display = "none";

  const nipplelist = document.querySelector('#nipplelist');

  for(i=0; i<6; i++){
    nipplelist.removeChild(nipplelist.children[0]);
  }
  
  for(i=0;i<rcn2; i++){
    var composition = document.createElement("img");
    composition.src = imgurl;
    composition.style.borderRadius = "50%";
    composition.style.width ="20vw";
    composition.style.height="20vw";
    composition.style.margintop = "-10%";
    composition.style.marginLeft="2.5%";
    composition.style.marginRight="2.5%";
    nipplelist.appendChild(composition);
  }


  var back = document.getElementById("backbutton");
  back.style.display = "inline-block";


  back.addEventListener("click", event =>backclear(rcn2) );
  
}

function backclear(rcn2){
  nipcounter = 0;
  const nipplelist = document.querySelector('#nipplelist');
  var back = document.getElementById("backbutton");
  back.style.display = "none";


  const leftslide = document.querySelector("#leftslide");
  const rightslide = document.querySelector("#rightslide");

  leftslide.style.display = "inline-block";
  rightslide.style.display = "inline-block";
  for(i=0; i<rcn2 ; i++){
    console.log(nipplelist.children[0]);
    nipplelist.removeChild(nipplelist.children[0]);
  }

  base("ALL Images").select({}).eachPage( getnips);

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
    img.addEventListener("click",event=> comp(imgurl));
    nipplelist.appendChild(img);
  });
}

function leftnip() {
  const nipplelist = document.getElementById("nipplelist");

  const onepagenips = [];
  if(nipcounter < 6){
    nipcounter = 99;
  }
  var num = nipcounter;
  for(i=0; i<6 ; i++){
    console.log(num-i);
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
    img.addEventListener("click",event=> comp(imgurl));
    nipplelist.appendChild(img);
  });
}






