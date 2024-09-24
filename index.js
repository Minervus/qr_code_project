/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

// 1. get user input
// import inquirer from 'inquirer';
import qr from 'qr-image';

// //var qr = require('qr-image'); 

// const questions = [ 
//     {
//         type: 'input',
//         url: 'url',
//         message: "What URL do you want to encode?"
//     }
// ]

// inquirer
//     .prompt(questions).then((answers) => {
//     // run qr-image package
//     var qr_png = qr.image(answers, {type: 'png'});
//     qr_pvg.pipe(require('fs').createWriteStream(answers));
//     var svg_string = qr.imageSync(answers, { type: 'png' });
//     })
//     .catch((error) => {
//         if (error.isTtyError){
//             console.log("Prompt couldn't be rendered");
//         } else {
//             console.log("Something else went wrong"); 
//         }

//     });


import inquirer from 'inquirer';
import fs from "fs";

const questions = [
  {
    type: 'input',
    name: 'url',
    message: "What's your URL?",
  },
];

// const inquirer = require('inquirer');
// const qr = require('qr-image');
// const fs = require('fs');

inquirer.prompt(questions).then((answers) => {
    const url = answers.URL;
    const qr_png = qr.image(url, { type: 'png' });
    qr_png.pipe(fs.createWriteStream('qr_code.png'));

    fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log("File saved");
    });
})
.catch((error) => {
    console.error("An error occurred:", error);
});