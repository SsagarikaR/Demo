const tableCrud=(function(){
    const delete_error=$(".delete-error");
    const delete_input=$(".delete-input");
    const delete_modal=$(".delete-modal");
    const body_container=$(".body-container");
    const name = $("#full_name");
    const email = $("#email");
    const contact = $("#contact");
    const password=$('#password');
    const state = $("#state");
    const City = $("#city");
    const male = $("#male");
    const fathers_name = $("fathers_name");
    const DOB = $("#DOB");
    const Acontact = $("#Acontact");
    const College = $("#College");
    const course = $("#course");
    const start_date = $("#start_date");
    const end_date = $("#end_date");
    const table = $("table");

    delete_input.on('input',()=>{
      delete_error.css("display","none");
    })
     
    function readRow(key,value){
      table.append(`<tr id=${key}>
        <td>${value.full_name}</td>
        <td>${value.email}</td>
        <td>${value.contact}</td>
        <td>${value.College}</td>
        <td>${value.course}</td>
        <td><i class='fa fa-pencil-square-o edit' aria-hidden='true'></i> <i class='fa fa-trash delete' aria-hidden='true'></i></td>
      </tr>`);
    }

    function addRow(form_Data){
        let newRowId=Object.keys(form_Data).length+4;
        let newRowData= {
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
        form_Data[newRowId]=newRowData;
        localStorage.setItem("storedData",JSON.stringify(form_Data));
        // console.log(newRowId);
        table.append(`<tr id=${newRowId}>
                            <td>${newRowData.full_name}</td>
                            <td>${newRowData.email}</td>
                            <td>${newRowData.contact}</td>
                            <td>${newRowData.College}</td>
                            <td>${newRowData.course}</td>
                            <td><i class='fa fa-pencil-square-o edit' aria-hidden='true'></i> <i class='fa fa-trash delete' aria-hidden='true'></i></td>
                        </tr>`);
        return form_Data;
    }

    function updateRow(form_Data,updateRow_id){
        const update_row=$(`#${updateRow_id}`);
        console.log(form_Data,"form data on update")
        console.log(update_row);
        console.log( update_row.children(),"update row children")
        // console.log( update_row.children().eq(0),"current row")
        console.log(form_Data[updateRow_id].full_name,"form first name data")
        update_row.children().eq(0).text(form_Data[updateRow_id].full_name)
        update_row.children().eq(1).text(form_Data[updateRow_id].email)
        update_row.children().eq(2).text(form_Data[updateRow_id].contact)
        update_row.children().eq(3).text(form_Data[updateRow_id].College)
        update_row.children().eq(4).text(form_Data[updateRow_id].course)
    }

    function deleteRow(deleteRow_id,form_Data){
        if(delete_input.val()===form_Data[deleteRow_id].password){
            delete_input.val("");
            delete form_Data[deleteRow_id];
            localStorage.setItem("storedData",JSON.stringify(form_Data))
            const delete_row=$(`#${deleteRow_id}`);
            console.log(delete_row,form_Data,parseInt(deleteRow_id),"all data");
            delete_row.remove();
            delete_modal.css("z-index", "-1");
            delete_modal.css("display","none");
            body_container.css("z-ndex","1");
            body_container.css("opacity","100%");
            delete_input.val("");
          }
          else{
            delete_error.css("display","inline-block")
          }
    }

    return {
        readRow:readRow,
        addRow:addRow,
        deleteRow:deleteRow,
        updateRow:updateRow
    };
})();