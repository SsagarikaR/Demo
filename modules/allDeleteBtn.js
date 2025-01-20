const allDeleteBtn=(function(){
    const body_container=$(".body-container");
    const delete_modal=$(".delete-modal");
    const delete_cancel=$(".delete-cancel");
    const delete_confirm=$(".delete-confirm");
    const delete_input=$(".delete-input");
    let deleteRow_id;
    let form_Data = JSON.parse(localStorage.getItem("storedData"));

    function delete_icon_click(){
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
    }
    
    function delete_cancel_click(){
        delete_cancel.click((e)=>{
            e.preventDefault();
            delete_input.val("");
            delete_modal.css("z-index", "-1");
            delete_modal.css("display","none");
            body_container.css("z-ndex","1");
            body_container.css("opacity","100%");
        })
    }

    function delete_confirm_click(){
        delete_confirm.click((e)=>{
            e.preventDefault();
            tableCrud.deleteRow(deleteRow_id,form_Data);
        })
    }
    
    return {
        delete_icon_click:delete_icon_click,
        delete_cancel_click:delete_cancel_click,
        delete_confirm_click:delete_confirm_click
    }
})();