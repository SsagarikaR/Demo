const togglePreview=(function(){
    const body_container=$(".body-container");
    const preview_modal = $(".preview_modal");

    function togglePreview(z_index,opacity,display){
        body_container.css("z-index",z_index);
        body_container.css("opacity",opacity);
        preview_modal.css("display", display);
    }

    return {
        togglePreview
    }
})()
export default togglePreview;