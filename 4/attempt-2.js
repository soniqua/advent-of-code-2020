var fs = require('fs');
const fields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'] //do not care about cid
//adding the last capture group as these strings will either terminate with a space (mid-string) or end-of-string
const byrRegex = /byr:((19[2-9]{1}[0-9]{1})|(200[0-2]))( |$)/
const iyrRegex = /iyr:((201[0-9]{1}|2020))( |$)/
const eyrRegex = /eyr:((202[0-9]{1}|2030))( |$)/
const hgtRegex = /hgt:(((1[5-8][0-9]cm)|19[0-3]cm)|((59|6[0-9]|7[0-6])in))( |$)/
const hclRegex = /hcl:\#[0-9a-f]{6}( |$)/
const eclRegex = /ecl:(amb|blu|brn|gry|grn|hzl|oth)( |$)/
const pidRegex = /pid:[0-9]{9}( |$)/
const regexArr = [byrRegex, iyrRegex, eyrRegex, hgtRegex, hclRegex, eclRegex, pidRegex]
var validCount=0

function validate(instr){
  var validRegex=0
  //validate
    for (reg in regexArr){
      //if fail any then invalid
      if (! instr.match(regexArr[reg])){
        return false
      }
    }
  return true
}

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
        if(validate(newStr)){
          validCount = validCount + 1
        }
      }
      newStr=""
    }
  }
} catch(e){
  console.log(e)
}

console.log(validCount)
