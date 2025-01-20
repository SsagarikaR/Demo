const initialDataLd=(function(){
    let form_Data = JSON.parse(localStorage.getItem("storedData"));

    //On load reload existing data
    function initialInsert(){
        $.each(form_Data,function(key,value){
            // console.log(value);
            tableCrud.readRow(key,value);
        })
    }

    return {
        initialInsert:initialInsert
    }

})();