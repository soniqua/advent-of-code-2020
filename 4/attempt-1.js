var fs = require('fs');
const fields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'] //do not care about cid
var validCount=0

try{
  var data = fs.readFileSync('input', 'utf8')
  var lines = data.split('\n');
  let newStr=""
  for (line in lines) {
    //care if line is not zero, then next passport
    if (lines[line].length > 0){
      newStr = newStr + " " + lines[line]
    } else {
      //passport has ended, check
      var valid=true
      for (field in fields) {
        if (! newStr.includes(fields[field])) {
          valid=false
        }
      }
      if (valid){
        validCount = validCount + 1
      }
      newStr=""
    }
  }
} catch(e){
  console.log(e)
}

console.log(validCount)
