const nameInverter = function(name) {
  // Empty string case
  if (name === "") {
    return name;
  }

  // undefined case
  if (name === undefined) {
    throw new Error("Error! Name is undefined!");
  }

  // First and last-name case
  if (name.trim().split(" ").length === 2 && !name.includes(".")) {
    let firstLastNameArray = name.trim().split(" ");
    return `${firstLastNameArray[1]}, ${firstLastNameArray[0]}`;
  }

  // Single honorific case
  if (name.trim().split(".").length === 2 && !name.trim().split(".")[1]) {
    return "";
  }

  // Honorific first-name
  if (name.trim().split(".").length === 2 && name.trim().split(" ") < 3) {
    return name.trim();
  }

  // First and last-name case honorific
  if (name.trim().split(" ").length === 3 && name.includes(".")) {
    let firstLastNameArray = name.trim().split(" ");
    return `${firstLastNameArray[0]} ${firstLastNameArray[2]}, ${firstLastNameArray[1]}`;
  }

  // Single name case (not all whitespace)
  // if (name.length > 0 && name.trim().length > 0){
  //  return name;
  // }
  return name.trim();
};

module.exports = nameInverter;