const nameInverter = function(name) {
  // Empty string case
  if (name === ""){
    return name;
  }

  // First and last-name case
  if (name.trim().split(" ").length === 2){
    let firstLastNameArray = name.trim().split(" ");
    return `${firstLastNameArray[1]}, ${firstLastNameArray[0]}`;
  }

  // Single name case (not all whitespace)
  // if (name.length > 0 && name.trim().length > 0){
  //  return name;
  // }
  return name.trimEnd();
  }

module.exports = nameInverter;