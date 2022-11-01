let inpue = document.querySelectorAll("input");

const parttens = {
  telephone: /^[0-9]{11}$/,
  username:/^[a-z\d]{8,10}$/,
  // password:/^([/w@]{8,20}$/,
  password:/^[\w@\d]{8,20}$/,
  email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,

  

};
let validate = function (field, regX) {
 if (regX.test(field.value)) {
  field.className="valid"
  
 }else{
  field.className="invalid"
  
 }
};

inpue.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    // console.log(e.target.attributes.name.value);
    validate(e.target, parttens[e.target.attributes.name.value]);
  });
});
