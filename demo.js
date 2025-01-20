import validateModule from "./modules/validate.js";
import setCity from "./modules/setCity.js";
import showToast from "./modules/showToast.js";
import tableCrud from "./modules/tableCrud.js";
import openFirstStep from "./modules/openFirstStep.js";
import togglePreview from "./modules/togglePreview.js";

(function () {
  $(document).ready(function () {
    const require = $(".require");
    const next_button = $(".next");
    const prev_button = $(".prev");
    const submit_button = $(".submit");
    const name = $("#full_name");
    const email = $("#email");
    const contact = $("#contact");
    const state = $("#state");
    const City = $("#city");
    const College = $("#College");
    const course = $("#course");
    const step = $("li");
    const fieldset = $("fieldset");
    const submit_confirm = $(".confirm_submit");
    const submit_cancel=$(".cancel_submit");
    const body_container=$(".body-container");
    const preview_name=$(".preview_name");
    const preview_email = $(".preview_email");
    const email_href=$(".email_href");
    const preview_contact = $(".preview_contact");
    const contact_href=$(".contact_href");
    const preview_college = $(".preview_college");
    const college_href=$(".college_href");
    const preview_course = $(".preview_course");
    const course_href=$(".course_href");
    const delete_modal=$(".delete-modal");
    const delete_cancel=$(".delete-cancel");
    const delete_confirm=$(".delete-confirm");
    const delete_input=$(".delete-input");
    const update_button=$(".update")
    const input=$(".input-box");
    console.log(input);
    let stepIndex = 1; //To get access of progressbar step
    let form_Data = JSON.parse(localStorage.getItem("storedData"));

    //On load reload existing data
    $.each(form_Data,function(key,value){
      // console.log(value);
      tableCrud.readRow(key,value);
    })

    step.click((e) => {
      let step_id = e.target.id;
      if (stepIndex >= step_id) {
        const open_fieldset = fieldset.eq(step_id - 1);
        // console.log(open_fieldset);
        const close_fieldset = fieldset.eq(stepIndex - 1);
        for (let i = stepIndex; i > step_id; i--) {
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
      setCity.setCity(state.val());
    });

    require.blur(function () {
      // console.log(this);
      validateModule.checkError($(this));
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
        next_step=validateModule.checkError($(this).children(".require"),next_step);
        // console.log(next_step);
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
      preview_name.text(name.val());
      preview_email.text(email.val());
      email_href.attr("href",`mailto:${email.val()}`)
      preview_contact.text(contact.val());
      contact_href.attr("href",`callto:${contact.val()}`)
      preview_college.text(College.val());
      college_href.attr("href",` http://google.com/search?q=${College.val()}`)
      preview_course.text(course.val());
      course_href.attr("href",` http://google.com/search?q=${course.val()}`);
      togglePreview.togglePreview("-1","50%","flex")
    });

    submit_cancel.click((e)=>{
      e.preventDefault();
      togglePreview.togglePreview("1","100%","none")
    })

    submit_confirm.click(function (e) {
      e.preventDefault();
      // console.log("hello")
      let addData = true;
      require.each(function () {
        // addData = errorMessage($(this), addData);
        addData=validateModule.checkError($(this),addData);
      });
      if (addData) {
        form_Data=tableCrud.addRow(form_Data);
        stepIndex=1;
        showToast.showToast("Successfully submitted")

        //empty all the input after submit
        $(this).find('input,select').each(function(){
          console.log($(this),"input")
          $(this).val('');
        })
        input.each((index, value) => {
          $(value).val("");
        });
        // console.log(form_Data);
        togglePreview.togglePreview("1","100%","none")
    
        //going to the first step after submission
        openFirstStep.openFirstStep();
      }
    });

    let deleteRow_id;
    $("table").on('click','.delete',((e)=>{
      // console.log(delete_button)
      e.preventDefault();
      const current_delete_button=e.target;
      const delete_row=current_delete_button.closest("tr");
      // console.log(delete_row,"delete row")
      deleteRow_id=delete_row.id;
      // console.log(deleteRow_id);
      delete_modal.css("z-index", "1");
      delete_modal.css("display","flex");
      body_container.css("z-ndex","-1");
      body_container.css("opacity","50%");
    }))

    delete_cancel.click((e)=>{
      e.preventDefault();
      delete_input.val("");
      delete_modal.css("z-index", "-1");
      delete_modal.css("display","none");
      body_container.css("z-ndex","1");
      body_container.css("opacity","100%");
    })
    
    delete_confirm.click((e)=>{
      e.preventDefault();
      tableCrud.deleteRow(deleteRow_id,form_Data);
    })

    let updateRow_id;
    let editRow_id;
    const edit_button=$(".edit");
    $("table ").on('click','.edit',((e)=>{
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
    }))

    update_button.click((e)=>{
      e.preventDefault();
      let updateData=true;
      require.each((index,val)=>{
        updateData=validateModule.checkError($(val),updateData);
      })

      if(updateData){
        input.each((index,value)=>{
          const current_id=$(value).attr('id');
          console.log(form_Data[updateRow_id][current_id],"current form")
          form_Data[updateRow_id][current_id]=$(value).val();
        })
        tableCrud.updateRow(form_Data,updateRow_id);
        localStorage.setItem("storedData",JSON.stringify(form_Data));
        update_button.css("display","none");
        submit_button.css("display","inline-block");
        openFirstStep.openFirstStep();
        showToast.showToast("Successfully updated");
        stepIndex=1;

        //empty all the input after update
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

  });
})();
