const removeFromArray = function (arrayName, ...removeMe) {

  const args = [...removeMe];

  arrayName = arrayName.filter(function (val) {
    return args.indexOf(val) == -1;
  });

  return arrayName;
}
//for item in array
//if item is also in args
//remove item

// Do not edit below this line
module.exports = removeFromArray;