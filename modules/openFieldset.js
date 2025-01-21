const openFieldset=(function(){
    const next_button = $(".next");
    const prev_button = $(".prev");
    const step = $("li");
    const fieldset = $("fieldset");
    let stepIndex = 1; //To get access of progressbar step

    function progressbar_click(){
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
        if(stepIndex>=3){
          stepIndex=1;
        }
      });
    }

    function next_button_click(){
        next_button.click(function (e) {
        e.preventDefault();
        if(stepIndex>=3){
          stepIndex=1;
        }
        console.log(stepIndex);
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
    }

    function prev_button_click(){
        prev_button.click(function (e) {
            e.preventDefault();
            if(stepIndex>=3){
              stepIndex=1;
            }
            const parent_fieldset = $(this).parents("fieldset");
            const prev_fieldset = parent_fieldset.prev();
            $("#progressbar li").eq(--stepIndex).removeClass("active");
            prev_fieldset.addClass("active-fieldset");
            parent_fieldset.hide("2000");
            prev_fieldset.show("3000");
        });
    }
    return {
        stepIndex:stepIndex,
        next_button_click:next_button_click,
        prev_button_click:prev_button_click,
        progressbar_click:progressbar_click
    }
})();
