const showToast=(function(){
    const body_container=$(".body-container")
    const toastBox=$("#toastBox");

    function showToast(message){
        console.log("toast");
        body_container.addClass("small_body-container")
        toastBox.append(`<div class="toast"> <i class="fa fa-check-circle" aria-hidden="true"></i> ${message}</div>`)
        setTimeout(()=>{
          $(".toast").remove();
          body_container.removeClass("small_body-container")
        },5000)
      }

    return {showToast};
})();
export default showToast;