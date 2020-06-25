// validation script here
//var reg = /[a-z]/gi;
//var reg2 = new RegExp(/[a-z]/, "ig");

const inputs = document.querySelectorAll("input");
const patterns = {
  username: /^[a-z\d]{5,12}$/i, //i -> uppercase and lowercase
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  password: /^[\w@-]{8,20}$/,
  telephone: /^[6-9]{1}\d{8}$/,
  slug: /^[a-z\d-]{8,20}$/,
};

//validation function
function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
}

// target is the element is the event occurred on
inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    //console.log(e.target.attributes.name.value);
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});
