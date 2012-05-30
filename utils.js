

function printObjectStruct(obj) {
  var result = '';
  for(var key in obj) {
    if(key == null)
      continue;
    result += "\n" + key.toString() + " - " +( (obj[key] == null)? 'null' : obj[key].toString());
  };
  return result;
}

exports.printObjectStruct = printObjectStruct;
