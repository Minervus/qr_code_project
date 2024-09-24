import qr from 'qr-image';
import inquirer from 'inquirer';
import fs from "fs";

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