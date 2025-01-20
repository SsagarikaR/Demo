const setCity=(function(){
    const state = $("#state");
    const City = $("#city");
    const city = {
        AndhraPradesh: ["Vijaywada", "Tirupati", "Anantapur"],
        ArunachalPradesh: ["Namsal", "Roing", "Ziro"],
        Assam: ["Guwahati", "Dibrugarh", "Dhubri"],
        Bihar: ["Patna", "Gaya", "Bhagalpur"],
        Odisha: ["Bhubaneswar", "Cuttack", "Puri"],
      };
    
    function onChangeState(){
        state.change((e) => {
        //   console.log(e.target.value);
        City.html(
          "<option disabled selected value>-----select your city-----</option>"
        );
        setCity(state.val());
        });
    }

    function setCity(value){
        city[value].forEach((option)=> {
            City.append(
                `<option value=${option}>${option}</option>`
              );
        });
    }
    
    return {onChangeState:onChangeState}

})();