  $(document).ready(function () {
    openFieldset.progressbar_click();
    openFieldset.next_button_click();
    openFieldset.prev_button_click();
    allSubmitBtn.submit_button_click();
    allSubmitBtn.submit_cancel_click();
    allSubmitBtn.submit_confirm_click();
    allDeleteBtn.delete_cancel_click();
    allDeleteBtn.delete_confirm_click();
    allDeleteBtn.delete_icon_click();
    update.edit_btn_click();
    update.update_btn_click();
    setCity.onChangeState();
    initialDataLd.initialInsert();
    validateModule.onBlurInput();
    const require = $(".require");
    const input=$(".input-box");
    console.log(input);
    
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
