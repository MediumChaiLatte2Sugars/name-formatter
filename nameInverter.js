const nameInverter = function(name) {
  // Empty string case
  if (name === ""){
    return name;
  }

  // Single name case (not all whitespace)
  // if (name.length > 0 && name.trim().length > 0){
  //  return name;
  // }
  return name;
  }

module.exports = nameInverter;