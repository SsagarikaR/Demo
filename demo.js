// const required=document.querySelectorAll('.require');
// const submit=document.querySelector(".submit");
// const Input=document.querySelectorAll("input");
// const update =document.querySelector(".update");
// const delete_modal=document.querySelector(".delete-modal");
// const delete_cancel=document.querySelector(".delete-cancel");
// const delete_confirm=document.querySelector(".delete-confirm");
// const full_name=document.getElementById("name");
// const email=document.querySelector(".email");
// const contact=document.getElementById("contact");
// const state=document.getElementById("State");
// const City=document.getElementById("City");
// const DOB=document.getElementById("DOB");
// const fathers_name=document.getElementById("fathers-name");
// const P_contact=document.getElementById("Pcontact");
// const A_contact=document.getElementById("Acontact");
// const college=document.getElementById("College");
// const course=document.getElementById("course");
// const start_date=document.getElementById("start-date");
// const end_date=document.getElementById("end-date");
// const submit_text=document.querySelector(".submit-text");
// const body_container=document.querySelector(".body-container");
// const delete_input=document.querySelector(".delete-input");
// const delete_error=document.querySelector(".delete-error");
// var editRow_id="";

// const city={
//     AndhraPradesh:["Vijaywada","Tirupati","Anantapur"],
//     ArunachalPradesh:["Namsal","Roing","Ziro"],
//     Assam:["Guwahati","Dibrugarh","Dhubri"],
//     Bihar:["Patna","Gaya","Bhagalpur"],
//     Odisha:["Bhubaneswar","Cuttack","Puri"]
// }

// let row_id=0;

// const form_Data={};

// state.addEventListener("input",(e)=>{
//     //   console.log(e.target.value);
//       City.innerHTML="<option disabled selected value>-----select your city-----</option>"
//       if(e.target.value==="AndhraPradesh"){
//         city.AndhraPradesh.forEach((option)=>{
//             const option1=document.createElement("option");
//             option1.innerHTML=option;
//             option1.value=option;
//             City.appendChild(option1);
//         })

//       }
//       else if(e.target.value==="ArunachalPradesh"){
//         city.ArunachalPradesh.forEach((option)=>{
//             const option1=document.createElement("option");
//             option1.innerHTML=option;
//             option1.value=option;
//             City.appendChild(option1);
//         })
//       }
//       else if(e.target.value==="Assam"){
//         city.Assam.forEach((option)=>{
//             const option1=document.createElement("option");
//             option1.innerHTML=option;
//             option1.value=option;
//             City.appendChild(option1);
//         })
//       }
//       else if(e.target.value==="Bihar"){
//         city.Assam.forEach((option)=>{
//             const option1=document.createElement("option");
//             option1.innerHTML=option;
//             option1.value=option;
//             City.appendChild(option1);
//         })
//       }
//       else if(e.target.value==="Odisha"){
//         city.Odisha.forEach((option)=>{
//             const option1=document.createElement("option");
//             option1.innerHTML=option;
//             option1.value=option;
//             City.appendChild(option1);
//         })
//       }
// })

// Input.forEach((input)=>{
//     input.addEventListener("focusin",()=>{
//     submit_text.innerHTML="";
// })
// })

// required.forEach((require)=>{
//     require.addEventListener('focusout',function(e){
//         e.preventDefault();
//         // console.log(e.target.value);
//         const paret_div=require.closest(".input-div");
//          if(paret_div.children[2]){paret_div.removeChild(paret_div.children[2]);}
//         if(e.target.value.trim()===""){
//             addErrorNode(paret_div,"this value can't be empty");
//         }
//         else if(require.classList.contains("email")){
//             const emailPattern=validEMail(e.target.value);
//             console.log(emailPattern,"patternpa")
//             if(!emailPattern){
//                 addErrorNode(paret_div,"email is not in valid format")
//             }
//         }
//         else if(require.classList.contains("contact")){
//             const contactPattern=validPhone(e.target.value);
//             if(!contactPattern){
//                 addErrorNode(paret_div,"contact is not in valid format")
//             }
//         }
//         else{
//             console.log("everything is fine")
//         }
//     })
// })

// submit.addEventListener('click',(e)=>{
//     let addData=true;
//     e.preventDefault();
//     required.forEach((require)=>{
//         addData=checkRequire(require,addData);
//     })
//     const gender=document.querySelectorAll("input[type=radio]")
//     const paret_div=gender[0].closest(".input-div");
//     // console.log(gender);
//     // console.log(gender[0].checked);
//     // console.log(gender[1].checked);
//     if(paret_div.children[2]){paret_div.removeChild(paret_div.children[2]);}
//     if(!(gender[0].checked || gender[1].checked) ){
//         addErrorNode(paret_div,"this value can't be empty");
//         addData=false;
//     }
//     else{
//         addData=true;
//     }

//     console.log(addData,"addData");
//     if(addData){
//         submit_text.innerHTML="Your data is submitted";
//         const table=document.querySelector("table");
//         const newRow=table.insertRow();
//         newRow.setAttribute("id",row_id);
//         newRow.insertCell().innerHTML=full_name.value;
//         newRow.insertCell().innerHTML=email.value;
//         newRow.insertCell().innerHTML=contact.value;
//         newRow.insertCell().innerHTML=college.value;
//         newRow.insertCell().innerHTML=course.value;
//         const actionCell=newRow.insertCell()
//         actionCell.innerHTML="<i class='fa fa-pencil-square-o edit' aria-hidden='true'></i> <i class='fa fa-trash delete' aria-hidden='true'></i>";
//         actionCell.classList.add("action"+row_id);
//         form_Data[row_id]={
//             full_name:full_name.value,
//             email:email.value,
//             contact:contact.value,
//             state:state.value,
//             city:City.value,
//             DOB:DOB.value,
//             gender:gender[0].checked?"male":"female",
//             fathers_name:fathers_name.value,
//             P_contact:P_contact.value,
//             A_contact:A_contact.value,
//             college:college.value,
//             course:course.value,
//             start_date:start_date.value,
//             end_date:end_date.value
//         }
//         row_id++;
//         console.log(form_Data);
//         Input.forEach((input)=>{
//             input.value="";
//         })
//         state.value="";
//         City.value="";
//         course.value="";
//         gender.forEach((field)=>{
//             field.checked=false;
//         })

//     }
//     document.querySelector("html").scrollTop=0;

//     var deleteRow_id="";
//     const delete_button=document.querySelectorAll(".delete");
//     console.log(delete_button);
//     delete_button.forEach((Delete)=>{
//         Delete.addEventListener("click",(e)=>{
//             e.preventDefault();
//             console.log(form_Data);
//             const delete_row=Delete.closest("tr");
//             const delete_id=delete_row.id;
//             deleteRow_id=delete_id;
//             delete_modal.style.zIndex="1";
//             delete_modal.style.display="flex"
//             body_container.style.zIndex="-1";
//             body_container.style.opacity="50%";
//         })
//     })

//     delete_cancel.addEventListener("click",(e)=>{
//         e.preventDefault();
//         delete_modal.style.zIndex="-1";
//         body_container.style.zIndex="1";
//         delete_modal.style.display="none"
//         body_container.style.opacity="100%";
//     })
//     delete_confirm.addEventListener("click",(e)=>{
//         e.preventDefault();
//         if(delete_input.value=="Delete")
//         {
//              delete_error.style.display="none";
//             delete form_Data[deleteRow_id];
//             const delete_row=document.getElementById(deleteRow_id);
//             console.log(form_Data);
//             delete_row.remove();
//             delete_modal.style.zIndex="-1";
//             body_container.style.zIndex="1";
//             delete_modal.style.display="none"
//             body_container.style.opacity="100%";
//         }
//         else{
//            delete_error.style.display="block";
//         }

//     })
//     const edit_button=document.querySelectorAll(".edit");
//     edit_button.forEach((edit)=>{
//         edit.addEventListener("click",(e)=>{
//             e.preventDefault();
//             const edit_row=edit.closest("tr");
//             const edit_id=edit_row.id;
//             editRow_id=edit_id;
//             full_name.value=form_Data[edit_id].full_name;
//             email.value=form_Data[edit_id].email;
//             contact.value=form_Data[edit_id].contact;
//             state.value=form_Data[edit_id].state;
//             City.value=form_Data[edit_id].city;
//             DOB.value=form_Data[edit_id].DOB;
//             form_Data[edit_id].gender=="male"?gender[0].checked=true:gender[1].checked=true;
//             fathers_name.value=form_Data[edit_id].fathers_name;
//             P_contact.value=form_Data[edit_id].P_contact;
//             A_contact.value=form_Data[edit_id].A_contact;
//             college.value=form_Data[edit_id].college;
//             course.value=form_Data[edit_id].course;
//             start_date.value=form_Data[edit_id].start_date;
//             end_date.value=form_Data[edit_id].end_date;
//             submit.style.display="none";
//             update.style.display="inline"

//         })
//     })

// })

// update.addEventListener("click",(e)=>{
//     e.preventDefault();
//     let updateData=true;
//     required.forEach((require)=>{
//         console.log(require.value);
//         updateData=checkRequire(require,updateData)
//     })
//     const gender=document.querySelectorAll("input[type=radio]")
//     const paret_div=gender[0].closest(".input-div");
//     // console.log(gender);
//     // console.log(gender[0].checked);
//     // console.log(gender[1].checked);
//     if(paret_div.children[2]){paret_div.removeChild(paret_div.children[2]);}
//     if(!(gender[0].checked || gender[1].checked) ){
//         addErrorNode(paret_div,"this value can't be empty");
//         updateData=false;
//     }
//     else{
//         updateData=true;
//     }
//     console.log(updateData,"update");
//     if(updateData){
//         const update_row=document.getElementById(editRow_id);
//         submit_text.innerHTML="Your data is updated";
//         update_row.children[0].innerHTML=full_name.value;
//         update_row.children[1].innerHTML=email.value;
//         update_row.children[2].innerHTML=contact.value;
//         update_row.children[3].innerHTML=college.value;
//         update_row.children[4].innerHTML=course.value;
//         form_Data[editRow_id]={
//             full_name:full_name.value,
//             email:email.value,
//             contact:contact.value,
//             state:state.value,
//             city:City.value,
//             DOB:DOB.value,
//             gender:gender[0].checked?"male":"female",
//             fathers_name:fathers_name.value,
//             P_contact:P_contact.value,
//             A_contact:A_contact.value,
//             college:college.value,
//             course:course.value,
//             start_date:start_date.value,
//             end_date:end_date.value
//         }
//         console.log(form_Data);
//         Input.forEach((input)=>{
//             input.value="";
//         })
//         state.value="";
//         City.value="";
//         course.value="";
//         gender.forEach((field)=>{
//             field.checked=false;
//         })
//         submit.style.display="inline";
//         update.style.display="none"
//     }
//     document.querySelector("html").scrollTop=0;
// })

// function checkRequire(require,addData){
//     const paret_div=require.closest(".input-div");
//         if(paret_div.children[2]){paret_div.removeChild(paret_div.children[2]);}
//         if(require.value.trim()===""){
//             addErrorNode(paret_div,"this value can't be empty");
//             addData=false;
//         }
//         else if(require.classList.contains("email")){
//             const emailPattern=validEMail(email.value);
//             console.log(emailPattern,"pattern")
//             if(!emailPattern){
//                 addErrorNode(paret_div,"email is not in valid format")
//                 addData=false;
//             }
//         }
//         else if(require.classList.contains("contact")){
//             const contactPattern=validPhone(contact.value);
//             if(!contactPattern){
//                 addErrorNode(paret_div,"contact is not in valid format")
//                 addData=false;
//             }
//         }
//         else{
//            addData=true;
//         }
//         return addData;
// }
// function addErrorNode(paret_div,message){
//     const node=document.createElement("div");
//     node.classList.add("error");
//     node.innerHTML=message;
//     paret_div.appendChild(node);
// }

// function validEMail(value){
//     const email_regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return  email_regex.test(value);
// }

// function validPhone(value){
//     const phone_regex=/[0|91]?[6-9][0-9]{9}/
//     return phone_regex.test(value)
// }
(function () {
  $(document).ready(function () {
    const require = $(".require");
    const next_button = $(".next");
    const prev_button = $(".prev");
    const submit_button = $(".submit");
    const name = $("#full_name");
    const email = $("#email");
    const contact = $("#contact");
    const state = $("#State");
    const City = $("#City");
    const male = $("#male");
    const female = $("#female");
    const fathers_name = $("fathers_name");
    const Pcontact = $("#Pcontact");
    const Acontact = $("#Acontact");
    const College = $("#College");
    const course = $("#course");
    const start_date = $("#start_date");
    const end_date = $("#end_date");
    const table = $("table");
    const step = $("li");
    const fieldset = $("fieldset");
    const submit_confirm = $(".confirm_submit");
    const form_container = $(".form-container");
    const preview_modal = $(".preview_modal");
    const table_container = $(".table-container");
    const preview_field = $(".value_span");
    let dataIndex = 0; //to conncet the row and form key
    let stepIndex = 1;
    const form_Data = {};
    const city = {
      AndhraPradesh: ["Vijaywada", "Tirupati", "Anantapur"],
      ArunachalPradesh: ["Namsal", "Roing", "Ziro"],
      Assam: ["Guwahati", "Dibrugarh", "Dhubri"],
      Bihar: ["Patna", "Gaya", "Bhagalpur"],
      Odisha: ["Bhubaneswar", "Cuttack", "Puri"],
    };

    const validation = {
      full_name: {
        require: {
          logic: (val) => {
            return val.trim() === "";
          },
          message: "name can't be empty",
        },
        short: {
          logic: (val) => {
            return val.length >= 3;
          },
          message: "name is too short",
        },
      },
      email: {
        require: {
          logic: (val) => {
            return val.trim() === "";
          },
          message: "name can't be empty",
        },
        wrong_format: {
          logic: (val) => {
            const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return email_regex.test(val);
          },
          message: "",
        },
      },
    };

    step.click((e) => {
      let step_id = e.target.id;
      // console.log(e.target);
      const isActive = e.target;
      console.log(step_id);
      if (stepIndex >= step_id) {
        const open_fieldset = fieldset.eq(step_id - 1);
        // console.log(open_fieldset);
        const close_fieldset = fieldset.eq(stepIndex - 1);
        // console.log(stepIndex)
        for (let i = stepIndex; i > step_id; i--) {
          console.log(step.eq(i - 1), "remove class");
          step.eq(i - 1).removeClass("active");
        }
        stepIndex = step_id;
        // console.log(close_fieldset,"close");
        close_fieldset.hide("3000");
        open_fieldset.show("3000");
      }
    });

    state.change((e) => {
      //   console.log(e.target.value);
      City.html(
        "<option disabled selected value>-----select your city-----</option>"
      );
      if (state.val() === "AndhraPradesh") {
        city.AndhraPradesh.forEach((option) => {
          console.log(option);
          const option1 = City.append(
            `<option value=${option}>${option}</option>`
          );
        });
      } else if (state.val() === "ArunachalPradesh") {
        city.ArunachalPradesh.forEach((option) => {
          const option1 = City.append(
            `<option value=${option}>${option}</option>`
          );
        });
      } else if (state.val() === "Assam") {
        city.Assam.forEach((option) => {
          const option1 = City.append(
            `<option value=${option}>${option}</option>`
          );
        });
      } else if (state.val() === "Bihar") {
        city.Assam.forEach((option) => {
          const option1 = City.append(
            `<option value=${option}>${option}</option>`
          );
        });
      } else if (state.val() === "Odisha") {
        city.Odisha.forEach((option) => {
          const option1 = City.append(
            `<option value=${option}>${option}</option>`
          );
        });
      }
    });

    require.blur(function () {
      // console.log(this);
      errorMessage($(this));
    });

    next_button.click(function (e) {
      e.preventDefault();
      const parent_fieldset = $(this).parents("fieldset");
      const next_fieldset = parent_fieldset.next();
      // console.log(parent_fieldset);
      // console.log(next_fieldset,"next-fieldset");
      const current_requireField = parent_fieldset.children(".require-div");
      console.log(current_requireField, "current_requireField");
      let next_step = true;
      current_requireField.each(function (index, val) {
        // console.log($(this).children(".require"));
        next_step = errorMessage($(this).children(".require"), next_step);
      });
      if (next_step) {
        $("#progressbar li").eq(stepIndex++).addClass("active");
        next_fieldset.addClass("active-fieldset");
        parent_fieldset.hide("2000");
        next_fieldset.show("3000");
      }
    });

    prev_button.click(function (e) {
      e.preventDefault();
      const parent_fieldset = $(this).parents("fieldset");
      const prev_fieldset = parent_fieldset.prev();
      $("#progressbar li").eq(--stepIndex).removeClass("active");
      prev_fieldset.addClass("active-fieldset");
      parent_fieldset.hide("2000");
      prev_fieldset.show("3000");
    });

    submit_button.click((e) => {
      e.preventDefault();
      form_container.css("z-index", "-1");
      form_container.css("opacity", "50%");
      table_container.css("z-index", "-1");
      table_container.css("opacity", "50%");
      preview_modal.css("display", "flex");
    });

    submit_confirm.click(function (e) {
      e.preventDefault();
      let addData = true;
      require.each(function () {
        addData = errorMessage($(this), addData);
      });
      if (addData) {
        $(".submit-text").html("your data is submitted");
        form_Data[dataIndex] = {
          name: name.val(),
          email: email.val(),
          contact: contact.val(),
          state: state.val(),
          City: City.val(),
          gender: male.is(":checked") ? "male" : "female",
          fathers_name: fathers_name.val(),
          Pcontact: Pcontact.val(),
          Acontact: Acontact.val(),
          College: College.val(),
          course: course.val(),
          start_date: start_date.val(),
          end_date: end_date.val(),
        };
        table.append(`<tr id=${dataIndex}>
                            <td>${form_Data[dataIndex].name}</td>
                            <td>${form_Data[dataIndex].email}</td>
                            <td>${form_Data[dataIndex].contact}</td>
                            <td>${form_Data[dataIndex].College}</td>
                            <td>${form_Data[dataIndex].course}</td>
                            <td><i class='fa fa-pencil-square-o edit' aria-hidden='true'></i> <i class='fa fa-trash delete' aria-hidden='true'></i></td>
                          </tr>`);
        dataIndex++;
        $("input").each((index, val) => {
          $(this).val("");
        });
        // console.log(form_Data);
        form_container.css("z-index", "1");
        form_container.css("opacity", "100%");
        table_container.css("z-index", "1");
        table_container.css("opacity", "100%");
        preview_modal.css("display", "none");
      } else {
        $(".submit-text").html(" ");
      }

      if ($(".submit-text").text() != "") {
        setTimeout(function () {
          return $(".submit-text").text("");
        }, 3000);
      }
    });

    require.on("input", function () {
      // console.log($(this),"input chnage")
      const parents = $(this).parents(".input-div");
      if (parents.children().eq(2)) {
        if (parents.children().eq(2).hasClass("error")) {
          parents.children().eq(2).remove();
        }
      }
    });

    function errorMessage(current_input, addData = true) {
      const parents = current_input.parents(".input-div");
      if (parents.children().eq(2)) {
        parents.children().eq(2).remove();
      }
      let id = current_input.attr("id");
      id = id.replace("_", " ");
      console.log(id);
      if (current_input.val() == "" || current_input.val() == null) {
        parents.append(`<div class='error '>${id} can't be empty</div>`);
        addData = false;
      } 
      else if (current_input.hasClass("email")) {
        const emailPattern = validEMail(current_input.val());
        // console.log(emailPattern,"email pattern");
        if (!emailPattern) {
          parents.append("<div class='error'>Email is invalid</div>");
          addData = false;
        }
      } 
      else if (current_input.hasClass("contact")) {
        const phonePattern = validPhone(current_input.val());
        // console.log(phonePattern,"phone pattern");
        if (!phonePattern) {
          parents.append("<div class='error'>Contact no.  is invalid</div>");
          addData = false;
        }
      } 
      else if (current_input.hasClass("password")) {
        const passwordPattern = validPassword(current_input.val());
        if (!passwordPattern) {
          parents.append("<div class='error'>Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters</div>");
          addData = false;
        }
      }
      else if(current_input.hasClass("name")){
        if(current_input.val().length<3){
            parents.append("<div class='error'>Full name is too short</div>");
            addData=false;
        }
      } 
      else {
        console.log("everything is fine");
      }
      return addData;
    }

    function validEMail(value) {
      const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return email_regex.test(value);
    }

    function validPhone(value) {
      const phone_regex = /^\d{10}$/;
      return phone_regex.test(value);
    }

    function validPassword(value) {
      const password_regexx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
      return password_regexx.test(value);
    }
  });
})();
