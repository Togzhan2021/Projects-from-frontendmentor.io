const defaultButtons = document.querySelectorAll("[type=submit]");
console.log("hello" + defaultButtons);
//SoftRipple(defaultButtons);

let rippleOptions = {
  rippleColor: "#000",
  transitionDuration: 1, // minimum is 0.4 seconds and max is 2 seconds. Defaults to 0.8 seconds
  rippleWidth: 7, //  minimum is 2 and max is 8. Defaults to 4
  rippleMaxSize: 150, //  minimum is 50 and max is 200. Defaults to 100
  randomSize: true, // defaults to false
  randomColor: true, // defaults to false
  overrideDefaults: false, // set this to true and cutomize without any contrains
};
// you can pass in the options as the second argument
SoftRipple(defaultButtons, rippleOptions);
