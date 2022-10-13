let day = document.querySelectorAll("input")[0];
let month = document.querySelectorAll("input")[1];
let year = document.querySelectorAll("input")[2];
let submit = document.querySelector("button");

let isday_valid =() =>{
   return (parseInt(day.value)<=31 && parseInt(day.value)>0)? true: false;
}
let ismonth_valid =() =>{
   return (parseInt(month.value)<=12 && parseInt(month.value)>0)? true: false;
}
let isyear_valid =() =>{
  if (year.value!=0) {
    return (year.value.length<=4 &&year.value.length>=1)? true: false;
  } 
}

day.value=1;
month.value=1;
year.value=1;

submit.addEventListener("click", function() { 
  if(isday_valid() && ismonth_valid() && isyear_valid()){
      document.querySelector("h6").innerHTML="" 
      inputday=parseInt(day.value);
      inputmonth=parseInt(month.value);
      inputyear=parseInt(year.value);
      doomsday_of_history()
    }else{
        document.querySelector("h6").innerHTML="enter valid date";
    } 
})
  


let inputday= parseInt(day.value);
let inputmonth= parseInt(month.value);
let inputyear = parseInt(year.value) ;
 
const stringdays=[
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
]

const doomsyear=['tuesday','sunday','friday','wednesday']
for(i=0;i<=92;i+=4){
    doomsyear[i+4]=doomsyear[0];
    doomsyear[i+1+4]=doomsyear[1];
    doomsyear[i+2+4]=doomsyear[2];
    doomsyear[i+3+4]=doomsyear[3];
}

function doomsday_of_history(){
  let string_year=convert_to_string(inputyear);
  let leapyear = singleyear(string_year) % 4 ==0?true:false;
  let leaphundredyear = hundredyear(string_year) % 4 ==0?true:false;

 
  function convert_to_string(number){
      let numbers=number.toString();
      return  numbers;
  }
  function hundredyear(number){
      let hundredyear= number.substring(0,2);
      return  hundredyear;
  }
  function singleyear(number){
    let singleyear= number.substring(number.length-2 );
    if ((Math.floor(singleyear/12) + singleyear % 12 + Math.floor((singleyear%12)/4)) >= 7) {
      return (Math.floor(singleyear/12) + singleyear % 12 +Math.floor((singleyear%12)/4)) -7
    }else{
      return (Math.floor(singleyear/12) + singleyear % 12 +Math.floor((singleyear%12)/4))
    }
  }
  function doomsday_of_month(){
    let doomsday_of_month;
    switch (inputmonth) {
      case 1: leapyear ? doomsday_of_month= 4:doomsday_of_month= 3;       
          break;
      case 2: leapyear ? doomsday_of_month= 29:doomsday_of_month= 29;       
          break;
      case 3:doomsday_of_month= 14;        
          break;
      case 4:doomsday_of_month= 4;        
          break;
      case 5:doomsday_of_month= 9;        
          break;
      case 6:doomsday_of_month= 6;   
          break;
      case 7:doomsday_of_month= 11;        
          break;
      case 8:doomsday_of_month= 8;        
          break;
      case 9:doomsday_of_month= 5;        
          break;
      case 10:doomsday_of_month= 10;        
          break;
      case 11:doomsday_of_month= 7;        
          break;
      case 12:doomsday_of_month= 12;        
          break;
    }

    if (doomsday_of_month>=7){  
      if( doomsday_of_month >=0 && doomsday_of_month <=6){
        return doomsday_of_month
      } else{
          while(doomsday_of_month>=7){
            doomsday_of_month-=7;
          }
          return doomsday_of_month
      }
    }else{
      return doomsday_of_month 
    }

  }
  function check_inputday(){
    if (inputday>=7){
      if( inputday >=0 && inputday <=6){
        return inputday
      } else{
          while(inputday>=7){
              inputday-=7;
          }
        return inputday;
        
      }
    }else{
      return inputday 
    }
  }
  function getdoomsday(){
    let doomsday;
    
  doomsyear.map((x,y)=>{
      hundredyear(string_year) == y ? doomsday=x : null;
  });
  let dayindex=stringdays.indexOf(doomsday);
  let totaldays=(singleyear(string_year)+dayindex);

      if(totaldays>=7){
          if(totaldays >=0 && totaldays <=6){
            return totaldays
          }else{
              while(totaldays>=7){
                totaldays-=7;
          }
          return totaldays;   
      }
    }else{
      return totaldays 
    }
  }
  function result(){
    return stringdays[
      (getdoomsday()+check_inputday() - doomsday_of_month()) >=7?
      (getdoomsday()+check_inputday() - doomsday_of_month()) - 7:
      (getdoomsday()+check_inputday() - doomsday_of_month()) < 0?
      (getdoomsday()+check_inputday() - doomsday_of_month()) + 7:
      (getdoomsday()+check_inputday() - doomsday_of_month())
    ]      
  }
  const app = document.querySelector('#app');
  app.innerHTML=result();
}
doomsday_of_history()