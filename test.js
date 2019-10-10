//https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_Expressions

//https://codeburst.io/an-introduction-to-regular-expressions-regex-in-javascript-1d3559e7ac9a
var regexLiteral = /cat/;
var regexConstructor = new RegExp("cat");

const str1 = "the cat says meow";
const str2 = "the dog says bark";
const hasCat = /cat/;
hasCat.test(str1);
// true
hasCat.test(str2);
// false

'hello W222orld I111t Is Me'.replace(/([A-Z])(\d+)/g, (match, p1, p2, p3, offset, string) => console.log(match, p1, p2, p3, offset, string))


function removeCc(str){
  return str.replace(/([A-Z])/g, ' $1');
}
function lowerCase(str){
  return str.replace(/[A-Z]/g, u => u.toLowerCase());
}
function capitalize(str){
  return str.replace(/^[a-z]/, u => u.toUpperCase());
}
capitalize(lowerCase(removeCc('camelCaseIsFun')));
// "Camel case is fun"

//---------------------

// 0638819999 -> (063)881-99-99
function convertNumber(number) {
  let p = number.replace(/\D/g,'');
  p = p.substr(p.length - 10);
  return p.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/,'($1)$2-$3-$4')
}

convertNumber('0638819999');
convertNumber('+380638819999');


//https://stackoverflow.com/questions/1159343/convert-a-char-to-upper-case-using-regular-expressions-editpad-pro

/*
.page-container {
  overflow: scroll;
&::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
    height: 7px;
  }

&::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgba(0,0,0,.5);
    -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
  }
}
*/


// Fill in the regular expressions
/*
car and cat
pop and prop
ferret, ferry, and ferrari
Any word ending in ious
A whitespace character followed by a period, comma, colon, or semicolon
A word longer than six letters
A word without the letter e (or E)
*/
verify(/.../,
  ["my car", "bad cats"],
  ["camper", "high art"]);

verify(/.../,
  ["pop culture", "mad props"],
  ["plop", "prrrop"]);

verify(/.../,
  ["ferret", "ferry", "ferrari"],
  ["ferrum", "transfer A"]);

verify(/.../,
  ["how delicious", "spacious room"],
  ["ruinous", "consciousness"]);

verify(/.../,
  ["bad punctuation ."],
  ["escape the period"]);

verify(/.../,
  ["hottentottententen"],
  ["no", "hotten totten tenten"]);

verify(/.../,
  ["red platypus", "wobbling nest"],
  ["earth bed", "learning ape", "BEET"]);


function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  for (let str of yes) if (!regexp.test(str)) {
    console.log(`Failure to match '${str}'`);
  }
  for (let str of no) if (regexp.test(str)) {
    console.log(`Unexpected match for '${str}'`);
  }
}
