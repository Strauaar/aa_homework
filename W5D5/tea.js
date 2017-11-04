const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,

});

let first, second;
//
function secondQuestion() {
  reader.question('Would you like some biscuits?', (res) => {
    second = res;
    const secondRes = (second === 'yes') ? 'do' : 'don\'t';
    console.log(`You replied ${res}.`);
    console.log(`So you ${firstRes} want tea and you ${secondRes} want biscuits.`);
    reader.close();
  });
};

function teaAndBiscuits () {
  reader.question('Would you like some tea?', function (res){
    first = res;
    firstRes = (first === 'yes') ? 'do' : 'don\'t';
    console.log(`You replied ${res}.`);
    secondQuestion();
  });
};

// teaAndBiscuits();
