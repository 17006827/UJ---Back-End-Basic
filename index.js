import chalk from 'chalk';
import {greet, yo} from './greet.js';
import cowsay from 'chalk';
import figlet from 'figlet';

figlet('hellow, BAsil!', function(err,data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});


// const cowsay = require("cowsay");

// console.log(cowsay.say({
//     text : "I'm a moooodule",
//     e : "oO",
//     T : "U "
// }));

// console.log(greet("Basil"));
// console.log(yo("Prince"));
// const styledMessage = chalk.bgGreen.black(greet('Basil'));
// console.log(styledMessage)

// const stylesMessage = chalk.bgBlue.black(greet('Prince'));
// console.log(stylesMessage)

// const styldMessage = chalk.bgWhite.black(greet('Khanyisani'));
// console.log(styldMessage)