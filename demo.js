const required=document.querySelectorAll('.require');
const submit=document.querySelector(".submit");
const input=document.querySelectorAll("input");
const state=document.getElementById("State");
const City=document.getElementById("City");

const email=document.querySelector(".email");
const contact=document.getElementById("contact");
const full_name=document.getElementById("name");
const college=document.getElementById("college");
const course=document.getElementById("course");

const city={
    AndhraPradesh:["Vijaywada","Tirupati","Anantapur"],
    ArunachalPradesh:["Namsal","Roing","Ziro"],
    Assam:["Guwahati","Dibrugarh","Dhubri"],
    Bihar:["Patna","Gaya","Bhagalpur"],
    Odisha:["Bhubaneswar","Cuttack","Puri"]
}

state.addEventListener("input",(e)=>{
      console.log(e.target.value);
      City.innerHTML="<option disabled selected value>-----select your city-----</option>"
      if(e.target.value==="AndhraPradesh"){
        city.AndhraPradesh.forEach((option)=>{
            console.log(option);
            const option1=document.createElement("option");
            option1.innerHTML=option;
            option1.value=option;
            City.appendChild(option1);
        })
        
      }
      else if(e.target.value==="ArunachalPradesh"){
        city.ArunachalPradesh.forEach((option)=>{
            console.log(option);
            const option1=document.createElement("option");
            option1.innerHTML=option;
            option1.value=option;
            City.appendChild(option1);
        })
      }
      else if(e.target.value==="Assam"){
        city.Assam.forEach((option)=>{
            console.log(option);
            const option1=document.createElement("option");
            option1.innerHTML=option;
            option1.value=option;
            City.appendChild(option1);
        })
      }
      else if(e.target.value==="Bihar"){
        city.Assam.forEach((option)=>{
            console.log(option);
            const option1=document.createElement("option");
            option1.innerHTML=option;
            option1.value=option;
            City.appendChild(option1);
        })
      }
})


required.forEach((require)=>{
    require.addEventListener('focusout',function(e){
        e.preventDefault();
        console.log(e.target.value);
        const paret_div=require.closest(".input-div");
         if(paret_div.children[2]){paret_div.removeChild(paret_div.children[2]);}
        if(e.target.value.trim()===""){
            addErrorNode(paret_div,"this value can't be empty");
        }
        else if(require.classList.contains("email")){
            const emailPattern=validEMail(e.target.value);
            console.log(emailPattern,"patternpa")
            if(!emailPattern){
                addErrorNode(paret_div,"email is not in valid format")
            }
        }
        else if(require.classList.contains("contact")){
            const contactPattern=validPhone(e.target.value);
            if(!contactPattern){
                addErrorNode(paret_div,"contact is not in valid format")
            }
        }
        else{
            console.log("everything is fine")
        }
    })
})


let addData=true;
submit.addEventListener('click',(e)=>{

    e.preventDefault();
    required.forEach((require,index)=>{
        // console.log(require.value);
        console.log(index);
        e.preventDefault();
        // console.log(e.target.value);
        const paret_div=require.closest(".input-div");
         if(paret_div.children[2]){paret_div.removeChild(paret_div.children[2]);}
        if(require.value.trim()===""){
            addErrorNode(paret_div,"this value can't be empty");
            addData=false;
        }
        else if(require.classList.contains("email")){
            const emailPattern=validEMail(email.value);
            console.log(emailPattern,"pattern")
            if(!emailPattern){
                addErrorNode(paret_div,"email is not in valid format")
                addData=false;
            }
        }
        else if(require.classList.contains("contact")){
            const contactPattern=validPhone(contact.value);
            if(!contactPattern){
                addErrorNode(paret_div,"contact is not in valid format")
                addData=false;
            }
        }
        else{
           console.log("");
        }
    })
    if(addData){
        const table=document.querySelector("table");
        const newRow=table.insertRow();
        newRow.insertCell().innerHTML=full_name.value;
        newRow.insertCell().innerHTML=email.value;
        newRow.insertCell().innerHTML=contact.value;
        newRow.insertCell().innerHTML=college.value;
        newRow.insertCell().innerHTML=course.value;
        newRow.insertCell().innerHTML="Edit delete"
        console.log(full_name.value);
    }
    // const male=document.getElementById("male");
    // const female=document.getElementById("feamle");
    const gender=document.querySelector("input[type=checkbox]")
    const paret_div=male.closest(".input-div")
    if(paret_div.children[2]){paret_div.removeChild(paret_div.children[2]);}
    console.log(male.checked ,"value")
    console.log(male.checked ,"value")
    if(!male.checked || !female.checked){
        addErrorNode(paret_div,"this value can't be empty");
        addData=false;
    }
     document.querySelector("html").scrollTop=0;
   
})


function addErrorNode(paret_div,message){
    const node=document.createElement("div");
    node.classList.add("error");
    node.innerHTML=message;
    paret_div.appendChild(node);
}

function validEMail(value){
    const email_regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return  email_regex.test(value);
}
function validPhone(value){
    const phone_regex=/[0|91]?[6-9][0-9]{9}/
    return phone_regex.test(value)
}