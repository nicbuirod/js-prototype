String.prototype.palindrome = function () {
  let origin = this.toString().split(" ").join("");
  let invested = this.toString()
    .split("")
    .filter((c) => {
      return c !== " ";
    })
    .reverse()
    .join("");

  if (invested === origin) {
    return true;
  } else {
    return false;
  }
};

console.log("anita lava la tina".palindrome());
console.log("prueba".palindrome());

