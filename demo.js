(function () {
  $(document).ready(function () {
    const require = $(".require");
    const next_button = $(".next");
    const prev_button = $(".prev");
    const submit_button = $(".submit");
    const name = $("#full_name");
    const email = $("#email");
    const contact = $("#contact");
    const password=$('#password');
    const state = $("#state");
    const City = $("#city");
    const male = $("#male");
    const female = $("#female");
    const fathers_name = $("fathers_name");
    const DOB = $("#DOB");
    const Acontact = $("#Acontact");
    const College = $("#College");
    const course = $("#course");
    const start_date = $("#start_date");
    const end_date = $("#end_date");
    const table = $("table");
    const step = $("li");
    const fieldset = $("fieldset");
    const submit_confirm = $(".confirm_submit");
    const submit_cancel=$(".cancel_submit");
    const form_container = $(".form-container");
    const preview_modal = $(".preview_modal");
    const table_container = $(".table-container");
    const body_container=$(".body-container");
    const preview_field = $(".value_span");
    const delete_modal=$(".delete-modal");
    const delete_cancel=$(".delete-cancel");
    const delete_confirm=$(".delete-confirm");
    const delete_error=$(".delete-error")
    const delete_input=$(".delete-input");
    const update_button=$(".update")
    const input=$(".input-box");
    console.log(input);
    let dataIndex = 0; //to conncet the row and form key
    let stepIndex = 1;
    let updateRow_id;
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
          message: "Name can't be empty",
        },
        short: {
          logic: (val) => {
            return val.length >= 3;
          },
          message: "Name is too short",
        },
      },
      email: {
        require: {
          logic: (val) => {
            return val.trim() === "";
          },
          message: "Email can't be empty",
        },
        wrong_format: {
          logic: (val) => {
            const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return email_regex.test(val);
          },
          message: "Email format is invalid",
        },
      },
    };

    step.click((e) => {
      let step_id = e.target.id;
      if (stepIndex >= step_id) {
        const open_fieldset = fieldset.eq(step_id - 1);
        // console.log(open_fieldset);
        const close_fieldset = fieldset.eq(stepIndex - 1);
        for (let i = stepIndex; i > step_id; i--) {
          // console.log(step.eq(i - 1), "remove class");
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
          // console.log(option);
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
      const current_requireField = parent_fieldset.children(".require-div");
      // console.log(current_requireField, "current_requireField");
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
      let temp_data=[];
      input.each((index,value)=>{
        temp_data.push($(value).val());
    })

      //putting the data inside preview 
      for(let i=0;i<input.length;i++){
        preview_field.eq(i).text(temp_data[i]);
      }
      console.log(temp_data);
      e.preventDefault();
      form_container.css("z-index", "-1");
      form_container.css("opacity", "50%");
      table_container.css("z-index", "-1");
      table_container.css("opacity", "50%");
      preview_modal.css("display", "flex");
    });

    submit_cancel.click((e)=>{
      e.preventDefault();
      form_container.css("z-index", "1");
      form_container.css("opacity", "100%");
      table_container.css("z-index", "1");
      table_container.css("opacity", "100%");
      preview_modal.css("display", "none");
    })

    submit_confirm.click(function (e) {
      e.preventDefault();
      let addData = true;
      require.each(function () {
        addData = errorMessage($(this), addData);
      });
      if (addData) {
        $(".submit-text").html("your data is submitted");
        form_Data[dataIndex] = {
          full_name: name.val(),
          email: email.val(),
          contact: contact.val(),
          password:password.val(),
          state: state.val(),
          City: City.val(),
          gender: male.is(":checked") ? "male" : "female",
          fathers_name: fathers_name.val(),
          Acontact: Acontact.val(),
          College: College.val(),
          course: course.val(),
          DOB:DOB.val(),
          start_date: start_date.val(),
          end_date: end_date.val(),
        };
        table.append(`<tr id=${dataIndex}>
                            <td>${form_Data[dataIndex].full_name}</td>
                            <td>${form_Data[dataIndex].email}</td>
                            <td>${form_Data[dataIndex].contact}</td>
                            <td>${form_Data[dataIndex].College}</td>
                            <td>${form_Data[dataIndex].course}</td>
                            <td><i class='fa fa-pencil-square-o edit' aria-hidden='true'></i> <i class='fa fa-trash delete' aria-hidden='true'></i></td>
                          </tr>`);
        dataIndex++;

        //empty all the input after submit
        $(this).find('input,select').each(function(){
          console.log($(this),"input")
          $(this).val('');
        })
        input.each((index, value) => {
          $(value).val("");
        });
        console.log(form_Data);
        form_container.css("z-index", "1");
        form_container.css("opacity", "100%");
        table_container.css("z-index", "1");
        table_container.css("opacity", "100%");
        preview_modal.css("display", "none");

        let deleteRow_id;
        const delete_button=$(".delete");
        delete_button.click((e)=>{
          e.preventDefault();
          const current_delete_button=e.target;
          const delete_row=current_delete_button.closest("tr");
          console.log(delete_row,"delete row")
          deleteRow_id=delete_row.id;
          delete_modal.css("z-index", "1");
          delete_modal.css("display","flex");
          body_container.css("z-ndex","-1");
          body_container.css("opacity","50%");
        })
        delete_cancel.click((e)=>{
          e.preventDefault();
          delete_modal.css("z-index", "-1");
          delete_modal.css("display","none");
          body_container.css("z-ndex","1");
          body_container.css("opacity","100%");
        })
        delete_confirm.click((e)=>{
          e.preventDefault();
          if(delete_input.val()===form_Data[deleteRow_id].password){
            delete form_Data[deleteRow_id];
            const delete_row=$(`#${deleteRow_id}`);
            console.log(delete_row,form_Data,parseInt(deleteRow_id),"all data");
            delete_row.remove();
            delete_modal.css("z-index", "-1");
            delete_modal.css("display","none");
            body_container.css("z-ndex","1");
            body_container.css("opacity","100%");
          }
        })
    
        //going to the first step after submission
        step.eq(1).removeClass("active");
        step.eq(2).removeClass("active");
        fieldset.eq(2).hide("2000");
        fieldset.eq(0).show("3000");

        let editRow_id;
        const edit_button=$(".edit");
        edit_button.click((e)=>{
          e.preventDefault();
          const current_edit_button=e.target;
          const edit_row=current_edit_button.closest("tr");
          editRow_id=edit_row.id;
          updateRow_id=editRow_id;
          input.each((index,value)=>{
            const current_id=$(value).attr('id');
            $(value).val(form_Data[editRow_id][current_id]);
          })
          update_button.css("display","inline-block");
          submit_button.css("display","none");
        })
      } else {
        $(".submit-text").html(" ");
      }

      if ($(".submit-text").text() !== "") {
        setTimeout(function () {
          return $(".submit-text").text("");
        }, 5000);
      }
    });

    update_button.click((e)=>{
      e.preventDefault();
      let updateData=true;
      require.each((index,val)=>{
        updateData=errorMessage($(val),updateData);
      })
      if(updateData){
        input.each((index,value)=>{
          const current_id=$(value).attr('id');
          // console.log(form_Data[updateRow_id][current_id],"current form")
          form_Data[updateRow_id][current_id]=$(value).val();
        })
        console.log(form_Data,"after update data");
        const update_row=$(`#${updateRow_id}`);
        // console.log(update_row);
        // console.log( update_row.children())
        // console.log( update_row.children().eq(0),"current row")
        // console.log(form_Data[updateRow_id].full_name,"form first name data")
        update_row.children().eq(0).text(form_Data[updateRow_id].full_name)
        update_row.children().eq(1).text(form_Data[updateRow_id].email)
        update_row.children().eq(2).text(form_Data[updateRow_id].contact)
        update_row.children().eq(3).text(form_Data[updateRow_id].College)
        update_row.children().eq(4).text(form_Data[updateRow_id].course)

        //going to the first step after submission
        step.eq(1).removeClass("active");
        step.eq(2).removeClass("active");
        fieldset.eq(2).hide("2000");
        fieldset.eq(0).show("3000");

        //empty all the input after submit
        $(this).find('input,select').each(function(){
          console.log($(this),"input")
          $(this).val('');
        })
      }
    })

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
      id = id.charAt(0).toUpperCase()+id.slice(1);
      // console.log(id);
      if (current_input.val() == "" || current_input.val() == null) {
        parents.append(`<div class='error '>${id} can't be empty</div>`);
        addData = false;
      } 
      else if (current_input.hasClass("email")) {
        const emailPattern = validEMail(current_input.val());
        if (!emailPattern) {
          parents.append("<div class='error'>Email is invalid</div>");
          addData = false;
        }
      } 
      else if (current_input.hasClass("contact")) {
        const phonePattern = validPhone(current_input.val());
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
        // console.log("everything is fine");
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
