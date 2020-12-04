var fs = require('fs');
const fields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'] //do not care about cid
const byrRegex = /byr:((19[2-9]{1}[0-9]{1})|(200[0-2]))( |$)/
const iyrRegex = /iyr:((201[0-9]{1}|2020))( |$)/
const eyrRegex = /eyr:((202[0-9]{1}|2030))( |$)/
const hgtRegex = /hgt:(((1[5-8][0-9]cm)|19[0-3]cm)|((59|6[0-9]|7[0-6])in))( |$)/
const hclRegex = /hcl:\#[0-9a-f]{6}( |$)/
const eclRegex = /ecl:(amb|blu|brn|gry|grn|hzl|oth)( |$)/
const pidRegex = /pid:[0-9]{9}( |$)/
const regexArr = [byrRegex, iyrRegex, eyrRegex, hgtRegex, hclRegex, eclRegex, pidRegex]
var validCount=0

//add validation on each entry if valid

function validate(instr){
  var validRegex=0
  //validate
    for (reg in regexArr){
      //if fail then invalid
      if (! instr.match(regexArr[reg])){
        //console.log(`${instr} : Failed on ${regexArr[reg]}`)
        return false
      } else {
        //console.log(instr.match(regexArr[reg]))
      }
    }
  console.log(`${instr} looks ok.`)
  return true
}

try{
  var data = fs.readFileSync('input', 'utf8')
  var lines = data.split('\n');
  let newStr=""
  //for (i =0; i < 10; i++) {
  for (i =0; i < lines.length; i++) {
    //care if line is not zero, then next passport
    if (lines[i].length > 0){
      newStr = newStr + " " + lines[i]
    } else {
      //passport has ended, check
      var valid=true
      //console.log(`Checking ${newStr}`)
      for (j=0; j< fields.length; j++) {
        if (! newStr.includes(fields[j])) {
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
