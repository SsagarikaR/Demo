const update =(function(){
    const update_button=$(".update")
    const input=$(".input-box");
    const select_field=$(".select_field");
    const submit_button = $(".submit");
    const require = $(".require");
    let form_Data = JSON.parse(localStorage.getItem("storedData"));
    let updateRow_id;
    let editRow_id;

    function edit_btn_click(){
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
      
    }
    function update_btn_click(){
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
              // stepIndex=1;
      
              //empty all the input after update
              input.each((index, value) => {
                $(value).val("");
              });
              select_field.each((index,value)=>{
                $(value).val("");
              })
            }
        })
    }

    return {
        edit_btn_click:edit_btn_click,
        update_btn_click:update_btn_click
    }
    
})();