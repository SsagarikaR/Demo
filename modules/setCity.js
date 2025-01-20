import { city } from "./cityObj.js"
const setCity=(function(){
    const City = $("#city");
    
    function setCity(value){
        city[value].forEach((option)=> {
            City.append(
                `<option value=${option}>${option}</option>`
              );
        });
    }
    return {setCity}
})();
export default setCity;