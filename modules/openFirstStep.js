const openFirstStep=(function(){
    const step = $("li");
    const fieldset = $("fieldset");

    function openFirstStep(){
        step.eq(1).removeClass("active");
        step.eq(2).removeClass("active");
        fieldset.eq(1).removeClass("active-fieldset");
        fieldset.eq(2).removeClass("active-fieldset");
        fieldset.eq(2).hide("2000");
        fieldset.eq(0).show("3000");
    }
    return {
        openFirstStep:openFirstStep
    }
})();
