const allSubmitBtn=(function(){
    const submit_button = $(".submit");
    const submit_confirm = $(".confirm_submit");
    const submit_cancel=$(".cancel_submit");
    const require = $(".require");
    const name = $("#full_name");
    const email = $("#email");
    const contact = $("#contact");
    const College = $("#College");
    const course = $("#course");
    const preview_name=$(".preview_name");
    const preview_email = $(".preview_email");
    const email_href=$(".email_href");
    const preview_contact = $(".preview_contact");
    const contact_href=$(".contact_href");
    const preview_college = $(".preview_college");
    const college_href=$(".college_href");
    const preview_course = $(".preview_course");
    const course_href=$(".course_href");
    const input=$(".input-box");
    let form_Data = JSON.parse(localStorage.getItem("storedData"));

    function submit_button_click(){
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
    }

    function submit_cancel_click(){
        submit_cancel.click((e)=>{
          e.preventDefault();
          togglePreview.togglePreview("1","100%","none")
        })
    }

    function submit_confirm_click(){
        submit_confirm.click(function (e) {
            e.preventDefault();
            // console.log("hello")
            console.log(form_Data);
            let addData = true;
            require.each(function () {
                // addData = errorMessage($(this), addData);
                addData=validateModule.checkError($(this),addData);
            });

            if (addData) {
                form_Data=tableCrud.addRow(form_Data);
                openFieldset.stepIndex=1;
                //empty all the input after submit
                $(this).find('input,select').each(function(){
                    console.log($(this),"input")
                    $(this).val('');
                })
                input.each((index, value) => {
                    $(value).val("");
                });
                showToast.showToast("Successfully submitted")
                // console.log(form_Data);
                togglePreview.togglePreview("1","100%","none")
                //going to the first step after submission
                openFirstStep.openFirstStep();
            }
        });
    }

    return{
        submit_button_click:submit_button_click,
        submit_cancel_click:submit_cancel_click,
        submit_confirm_click:submit_confirm_click
    }

})();