/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import qr from 'qr-image';
import inquirer from 'inquirer';
import fs from "fs";


// const inquirer = require('inquirer');
// const qr = require('qr-image');
// const fs = require('fs');

inquirer.prompt([
    {
        message: "What's your URL?",
        name: "URL",
    },

    ]).then((answers) => {
    var url = answers.URL;
    var qr_png = qr.image(url, { type: 'png' });
    qr_png.pipe(fs.createWriteStream('qr_code.png'));

    fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log("File saved");
    });
})
.catch((error) => {
    console.error("An error occurred:", error);
});