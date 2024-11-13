let display=document.getElementById("display");
let btn=document.querySelectorAll("button");

let str="";

btn.forEach(button=>{
    button.addEventListener("click",(e)=>{
        
        if(e.target.innerText == "="){
            try{
                str= eval(str);
            }
            catch{
                str="Error"
            }
        }
        else if(e.target.innerText.toUpperCase() == 'AC'.toUpperCase()){
            str='';
        }
        else if(e.target.innerText.toUpperCase()=='del'.toUpperCase()){
            str =str.slice(0,str.length-1);
        }
        else{
            str += e.target.innerText;
        }
        display.value=str;
    })
})