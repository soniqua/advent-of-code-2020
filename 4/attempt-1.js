var fs = require('fs');
const fields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'] //do not care about cid
var validCount=0

try{
  var data = fs.readFileSync('input', 'utf8')
  var lines = data.split('\n');
  let newStr=""
  for (i =0; i < lines.length; i++) {
    //care if line is not zero, then next passport
    if (lines[i].length > 0){
      newStr = newStr + " " + lines[i]
    } else {
      //passport has ended, check
      var valid=true
      var fieldCount=8
      console.log(`Checking ${newStr}`)
      for (j=0; j< fields.length; j++) {
        if (! newStr.includes(fields[j])) {
          console.log(`Missing ${fields[j]}`)
          var fieldCount=fieldCount-1
          valid=false
        }
      }
      if (valid){
        validCount = validCount + 1
      }
      console.log(fieldCount)
      newStr=""
    }
  }
} catch(e){
  console.log(e)
}

console.log(validCount)
