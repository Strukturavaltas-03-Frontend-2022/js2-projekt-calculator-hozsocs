/* A számológép gombjainak azonosítása és változóba mentése */
const add=document.querySelector(".operators__flex-item--add");
const substaction= document.querySelector(".operators__flex-item--subtraction");
const multiplication= document.querySelector(".operators__flex-item--multiplication");
const division= document.querySelector(".operators__flex-item--division");
const seven = document.querySelector(".numericBottons__flex-item--seven");
const four = document.querySelector(".numericBottons__flex-item--four");
const one= document.querySelector(".numericBottons__flex-item--one");
const zero= document.querySelector(".numericBottons__flex-item--zero");
const eight= document.querySelector(".numericBottons__flex-item--eight");
const five= document.querySelector(".numericBottons__flex-item--five");
const two= document.querySelector(".numericBottons__flex-item--two");
const point= document.querySelector(".numericBottons__flex-item--point");
const nine= document.querySelector(".numericBottons__flex-item--nine");
const six= document.querySelector(".numericBottons__flex-item--six");
const three= document.querySelector(".numericBottons__flex-item--three");
const clear= document.querySelector(".numericBottons__flex-item_clear");
const equal= document.querySelector(".equal_flex-item");
const display=document.querySelector(".calculator__display");

// Globális változók deklarálása
let calculator="0";
let actualpressedbutton="";
let lastbuttonisoperator= false;
let pressedbuttonisoperator = false;
let egualsignpressed =false;

// Függvények definíciója
// Egyenlőségjel megnyomásakor kiszámolja az eredményt!
const firstoperatorposition=() =>{
goodindex=-1;
  for (let index = 0; index < calculator.length-1; index++) {
    if ((calculator.charAt(index))==="+") {goodindex=index; break};
    if ((calculator.charAt(index))==="-") {goodindex=index; break};
    if ((calculator.charAt(index))==="*") {goodindex=index; break};
    if ((calculator.charAt(index))==="/") {goodindex=index; break};
     
}
return goodindex;
} 

const egualfunction=() => {
 
  let actualoperator="";
  let lastoperator="";
  let actualnumber="";
  let actualnumbertonumber=0;
  let lastnumber=0;
  let sum=0;
  let firstoperator=0
  //Az első szám és operátor!!
  firstoperator=firstoperatorposition();
  (firstoperator===-1) ? sum=parseFloat(calculator): 
    sum=parseFloat(calculator.slice(0,firstoperator));
    lastoperator=calculator.slice(firstoperator,firstoperator+1);
  

  //többi szám, műveleti jelek, összesítés
  for (let index = firstoperator+1; index < calculator.length; index++) {
   
    if ((pressedbuttonisnumber(calculator.charAt(index))) || 
      (calculator.charAt(index))===".") {

       actualnumber = actualnumber + calculator.charAt(index)
       
      } 
    else {
      
      actualoperator=(calculator.charAt(index));
      actualnumbertonumber=parseFloat(actualnumber);
     
        switch (lastoperator) {
          case "+": sum=sum+actualnumbertonumber;
          break;

          case "-": sum=sum-actualnumbertonumber;
          break;
          
          case "*": sum=sum*actualnumbertonumber;
          break;

          case "/": sum=sum/actualnumbertonumber;
          break;            

          default: "";
            break;
        } 
         
       if ((actualoperator==="")) {} else {
       
        lastoperator=actualoperator;
        lastnumber=parseFloat(actualnumber);
        actualnumber="";
        actualoperator="";
        } 
        
    }
    
  }; /*a for ciklus vége, utolsó művelet elvégzése*/
  actualnumbertonumber=parseFloat(actualnumber);
   switch (lastoperator) {
        case "+": sum=sum+actualnumbertonumber;
        break;

        case "-": sum=sum-actualnumbertonumber;
        break;
        
        case "*": sum=sum*actualnumbertonumber;
        break;

        case "/": sum=sum/actualnumbertonumber;
        break;            

        default: "";
          break;
      }      
   // Eredmény kiíratása, számolás folytatásának biztosítása
   
   calculator=sum.toPrecision(10).toString(10);
   
    if (calculator==="NaN") {
    calculator="num error";
    displayfunction();
    calculator=""
    egualsignpressed=false;
  }
  else {  
    displayfunction()
    egualsignpressed=true;
   
    } 
  }  
  


/* annak vizsgálata, hogy egy számon belül hányszor 
nyomták meg a tizedes vesszőt */
const pointinvestigation=(string) => {
  let operatorindex=0
  let pointindex=0
  for (let index = 0; index < string.length-1; index++) {
    string.slice(index, index+1)==="." ? pointindex=index : "";
    ((string.slice(index,index+1)==="+") || (string.slice(index,index+1)==="-") || 
    (string.slice(index,index+1)==="/") || (string.slice(index,index+1)==="*"))  ? 
    operatorindex=index : "";  
  }
  
  return ((pointindex>operatorindex) ? "" : ".");
}

// Kiírja a műveletsort a kijelzőre! 
const displayfunction = () => {
let strtodisplay="";
if (calculator.length>12)  {
  strtodisplay=calculator.slice((calculator.length-12), (calculator.length))} else
  {strtodisplay=calculator};
  display.innerHTML=strtodisplay;
 }


// A lenyomott gomb szám-e?
const pressedbuttonisnumber = (sign) => {
let signboolean=false;
   signboolean=((sign==="1") || (sign==="2") || (sign==="3") 
  || (sign==="4") || (sign==="5") || (sign==="6") || (sign==="7") 
  || (sign==="8") || (sign==="9") || (sign==="0")); 
return signboolean;
};


 
// Az előző lenyomott billentyű vizsgálata
var lastpressedbutton = (string) => {
 
  switch (string) {
    case "undefined": 
    lastbuttonisoperator=true;
    break;
    
    case "+":
    lastbuttonisoperator=true;
    break;
  
    case "-":
    lastbuttonisoperator=true;
    break;

    case "*":
    lastbuttonisoperator=true;
    break;

    case "/":
    lastbuttonisoperator=true;
    break;

    case ".":
    lastbuttonisoperator=true;
    break;

  default: ""
    break;
}
}  

// A lenyomott gomb vizsgálata
var pressedbutton = (sign) => {
  
  switch (sign) {
    case "c": 
    sign=""  
    calculator="0" 
      break;
  
    case "+":
      pressedbuttonisoperator=true;
      egualsignpressed=false;
      break;
    
      case "-":
      pressedbuttonisoperator=true;
      egualsignpressed=false;
      break;
  
      case "*":
      pressedbuttonisoperator=true;
      egualsignpressed=false;
      break;
  
      case "/":
      pressedbuttonisoperator=true;
      egualsignpressed=false;
      break;
  
    default: 
      break;
  }
    return sign;
  } 

// szabálytalanságok kiszűrése, lenyomott karakter hozzáadása a stringhez, kiíratás
const itempusher = (sign) => {
pressedbuttonisoperator=false;
lastbuttonisoperator=false;
lastpressedbutton(calculator.slice(-1));  
sign = pressedbutton(sign);


  if (lastbuttonisoperator && pressedbuttonisoperator) {sign=""} 
  else if ((calculator==="0") && (sign==="0")) {
    calculator="0";
    }
  else if ((calculator==="0") && (pressedbuttonisnumber(sign)===true)) 
    {calculator=sign;
     }
  else if ((sign===".") && 
    (pressedbuttonisnumber(calculator.slice(-1))===false))
    {sign=""; 
    }
  else if (((pressedbuttonisnumber(sign)===true) || (sign===".")) && 
    (egualsignpressed===true))
    {
      sign=""; 
    }
  
  else if ((sign===".") && calculator.includes(".")) 
  { 
    sign=pointinvestigation(calculator);
    calculator=calculator+sign;
   } 

  else   {
  calculator=calculator+sign;
  }
    displayfunction();
    
}

// kattintások figyelése
add.addEventListener("click", () => {itempusher("+")});
substaction. addEventListener("click", () => {itempusher("-")});
multiplication. addEventListener("click", () => {itempusher("*")});
division. addEventListener("click", () => {itempusher("/")});
seven . addEventListener("click", () => {itempusher("7")});
four . addEventListener("click", () => {itempusher("4")});
one. addEventListener("click", () => {itempusher("1")} );
zero. addEventListener("click", () => {itempusher("0")} );
eight. addEventListener("click", () => {itempusher("8")} );
five. addEventListener("click", () => {itempusher("5")} );
two. addEventListener("click", () => {itempusher("2")} );
point. addEventListener("click", () => {itempusher(".")} );
nine. addEventListener("click", () => {itempusher("9")} );
six. addEventListener("click", () => {itempusher("6")} );
three. addEventListener("click", () => {itempusher("3")} );
clear. addEventListener("click", () => {itempusher("c")} );
equal. addEventListener("click", () => {egualfunction(calculator)} );

