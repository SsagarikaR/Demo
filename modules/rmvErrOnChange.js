const remvErrOnChange=(function(){
    const require = $(".require");
    const input=$(".input-box");
    console.log(input);
    
    function remvErrOnChange(){
        require.on("input", function () {
            // console.log($(this),"input chnage")
            const parents = $(this).parents(".input-div");
      
            if (parents.children().eq(2)) {
              if (parents.children().eq(2).hasClass("error")) {
                parents.children().eq(2).remove();
              }
            }
        });
    }
   
    return {
        remvErrOnChange:remvErrOnChange
    }
})();