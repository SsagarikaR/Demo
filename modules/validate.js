const validateModule=(function(){
    const validation = {
        full_name: {
          require: {
            logic: (val) => {
              return val.trim() !== "";
            },
            message: "Name can't be empty",
          },
          short: {
            logic: (val) => {
              return val.length >= 3;
            },
            message: "Name is too short",
          },
        },
        email: {
          require: {
            logic: (val) => {
              return val.trim() !== "";
            },
            message: "Email can't be empty",
          },
          wrong_format: {
            logic: (val) => {
              const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              return email_regex.test(val);
            },
            message: "Email format is invalid",
          },
        },
        contact: {
          require: {
            logic: (val) => {
              return val.trim() !== "";
            },
            message: "Contact can't be empty",
          },
          wrong_format: {
            logic: (val) => {
              const phone_regex = /^\d{10}$/;
              return phone_regex.test(val);
            },
            message: "Contact format is invalid",
          },
        },
        password: {
          require: {
            logic: (val) => {
              return val.trim() !== "";
            },
            message: "Password can't be empty",
          },
          wrong_format: {
            logic: (val) => {
              const password_regexx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
              return password_regexx.test(val);
            },
            message: "Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters",
          },
        },
        College: {
          require: {
            logic: (val) => {
              return val !== null;
            },
            message: "College can't be empty",
          }
        },
        course: {
          require: {
            logic: (val) => {
              return val !== null;
            },
            message: "Course can't be empty",
          }
        }
           
      };

    function checkError(current_input, addData = true){
        const parents = current_input.parents(".input-div");
        if (parents.children().eq(2)) {
          parents.children().eq(2).remove();
        }
        let id = current_input.attr("id");
        $.each(validation[id],(key,val)=>{
          if(!(val.logic(current_input.val()))){
            parents.append(`<div class='error '>${val.message}</div>`);
            addData = false;
            return addData;
          }
        })
        return addData;
    };

    return {
        checkError 
    };
})();

export default validateModule;